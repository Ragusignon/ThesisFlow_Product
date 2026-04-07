import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const seedAdmin = async () => {
    try {
        // Dynamic imports to ensure dotenv.config() has run before these files are parsed
        const { DB_NAME, DB_URL } = await import("../src/constant.js");
        const { User } = await import("../src/models/user.model.js");

        if (!DB_URL) {
            throw new Error("DB_URL is not defined. Check your .env file.");
        }

        await mongoose.connect(DB_URL, { dbName: DB_NAME });
        console.log("Connected to database");

        // Check if admin already exists
        const adminExists = await User.findOne({ role: "ADMIN" });
        if (adminExists) {
            console.log("An admin user already exists in the database.");
            process.exit(0);
        }

        await User.create({
            username: "admin",
            email: "admin@migritech.com",
            password: "thesisbase", // This automatically gets hashed by the pre-save hook
            role: "ADMIN"
        });

        console.log("Admin user created successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding admin:", error);
        process.exit(1);
    }
};

seedAdmin();
