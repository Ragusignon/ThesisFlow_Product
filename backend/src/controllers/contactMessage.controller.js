import { ContactMessage } from "../models/contactMessage.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import sendEmail from "../utils/sendEmail.js";

const createContactMessage = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, organization, subject, message } = req.body;

    if (!email || !message) {
        throw new ApiError(400, "Email and message are required");
    }

    const fullName = `${firstName || ''} ${lastName || ''}`.trim() || 'Anonymous';

    const contact = await ContactMessage.create({
        fullName,
        firstName,
        lastName,
        email,
        organization,
        subject: subject || 'No subject',
        message
    });

    // Confirmation email to user (fire-and-forget background task)
    sendEmail({
        email,
        subject: "We received your message - Thesisflow",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Thanks for reaching out, ${fullName}!</h2>
            <p>We've received your message and will get back to you as soon as possible.</p>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
            <p><strong>Your message:</strong> ${message}</p>
            <br>
            <p>Best regards,<br>The Thesisflow Team</p>
        </div>
        `
    });

    // Admin notification email (fire-and-forget background task)
    sendEmail({
        email: process.env.SMTP_ADMIN,
        subject: `ThesisFlow - New Contact Message: ${subject || 'No subject'}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
        `
    });

    return res
        .status(201)
        .json(new ApiResponse(201, "Message sent successfully", contact));
});

const getContactMessages = asyncHandler(async (req, res) => {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });

    return res
        .status(200)
        .json(new ApiResponse(200, "Messages fetched successfully", messages));
});

const updateContactMessage = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const message = await ContactMessage.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!message) {
        throw new ApiError(404, "Contact message not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Contact message updated successfully", message));
});

const deleteContactMessage = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const message = await ContactMessage.findByIdAndDelete(id);

    if (!message) {
        throw new ApiError(404, "Contact message not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Contact message deleted successfully", {}));
});

export { createContactMessage, getContactMessages, updateContactMessage, deleteContactMessage };
