import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        organization: {
            type: String,
            trim: true,
            default: ""
        },
        subject: {
            type: String,
            default: "No subject"
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);
