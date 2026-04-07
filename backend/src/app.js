import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.set('etag', false);
// Middleware to parse JSON request bodies
app.use(express.json({limit: "16kb"})); 
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Middleware to parse URL-encoded request bodies
app.use(express.static("public")); // Middleware to serve static files from the "public" directory
app.use(cookieParser()); // Middleware to parse cookies
app.use(morgan("dev")); // Middleware for logging HTTP requests in development mode

//routes
import systemRoutes from "./routes/system.routes.js";
import demoRequestRoutes from "./routes/demoRequest.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import contactMessageRoutes from "./routes/contactMessage.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import documentationRoutes from "./routes/documentation.routes.js";
import newsletterRoutes from "./routes/newsletter.routes.js";
import legalPageRoutes from "./routes/legalPage.routes.js";
import referralRoutes from "./routes/referral.routes.js";

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/system", systemRoutes);
app.use("/api/v1/demo-requests", demoRequestRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/contact", contactMessageRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/documentation", documentationRoutes);
app.use("/api/v1/newsletter", newsletterRoutes);
app.use("/api/v1/legal", legalPageRoutes);
app.use("/api/v1/referrals", referralRoutes);

export default app;