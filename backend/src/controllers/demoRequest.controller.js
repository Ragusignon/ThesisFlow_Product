import { DemoRequest } from "../models/demoRequest.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import sendEmail from "../utils/sendEmail.js";

const createDemoRequest = asyncHandler(async (req, res) => {
    const {
        date,
        time,
        institutionName,
        fullName,
        email,
        phone,
        role,
        timezone,
        country,
        attendees,
        additionalInfo
    } = req.body;

    if (
        [date, time, institutionName, fullName, email, phone, role, timezone, country].some(
            (field) => typeof field === "string" ? field?.trim() === "" : !field
        )
    ) {
        throw new ApiError(400, "All required fields must be provided");
    }

    const demoRequest = await DemoRequest.create({
        date,
        time,
        institutionName,
        fullName,
        email,
        phone,
        role,
        timezone,
        country,
        attendees,
        additionalInfo
    });

    // Send confirmation email
    const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Demo Request Received</h2>
            <p>Hi ${fullName},</p>
            <p>Thank you for your interest! We have successfully received your demo request for <strong>${new Date(date).toDateString()}</strong> at <strong>${time}</strong>.</p>
            <p><strong>Institution:</strong> ${institutionName}</p>
            <p>Our team will contact you shortly to confirm the setup.</p>
            <br>
            <p>Best regards,<br>The Thesisflow Team</p>
        </div>
    `;

    // Send confirmation email (fire-and-forget background task)
    sendEmail({
        email: email,
        subject: "Demo Request Confirmation - Thesisflow",
        html: emailHtml
    });

    // Send admin notification email
    const adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Demo Request Received!</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Institution:</strong> ${institutionName}</p>
            <p><strong>Role:</strong> ${role || "N/A"}</p>
            <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Timezone:</strong> ${timezone || "N/A"}</p>
            <p><strong>Country:</strong> ${country || "N/A"}</p>
            <p><strong>Attendees:</strong> ${attendees || "1-5"}</p>
            <p><strong>Additional Info:</strong> ${additionalInfo || "N/A"}</p>
        </div>
    `;

    // Send admin notification email (fire-and-forget background task)
    sendEmail({
        email: process.env.SMTP_ADMIN, // Sends the notification to the admin/sender's address
        subject: `New Demo Request: ${institutionName}`,
        html: adminEmailHtml
    });

    return res
        .status(201)
        .json(new ApiResponse(201, "Demo request submitted successfully", demoRequest));
});

const getDemoRequests = asyncHandler(async (req, res) => {
    const demoRequests = await DemoRequest.find().sort({ createdAt: -1 });

    return res
        .status(200)
        .json(new ApiResponse(200, "Demo requests fetched successfully", demoRequests));
});

const updateDemoRequest = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const demoRequest = await DemoRequest.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!demoRequest) {
        throw new ApiError(404, "Demo request not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Demo request updated successfully", demoRequest));
});

const deleteDemoRequest = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const demoRequest = await DemoRequest.findByIdAndDelete(id);

    if (!demoRequest) {
        throw new ApiError(404, "Demo request not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Demo request deleted successfully", {}));
});

export { createDemoRequest, getDemoRequests, updateDemoRequest, deleteDemoRequest };
