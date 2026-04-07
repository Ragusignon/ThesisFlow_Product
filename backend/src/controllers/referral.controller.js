import { Referral } from "../models/referral.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import sendEmail from "../utils/sendEmail.js";

const createReferral = asyncHandler(async (req, res) => {
    const { 
        referrerName, referrerEmail, referrerRole, institutionName, 
        institutionType, country, websiteUrl, contactPersonName, 
        contactPersonRole, contactPersonEmail, contactPersonLinkedIn, notes 
    } = req.body;

    if (!referrerName || !referrerEmail || !institutionName || !country) {
        throw new ApiError(400, "Required fields are missing");
    }

    const referral = await Referral.create({
        referrerName, referrerEmail, referrerRole, institutionName, 
        institutionType, country, websiteUrl, contactPersonName, 
        contactPersonRole, contactPersonEmail, contactPersonLinkedIn, notes
    });

    // Send confirmation email to referrer (fire-and-forget)
    sendEmail({
        email: referrerEmail,
        subject: "Thank you for your referral - Thesisflow",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Thanks for referring ${institutionName}!</h2>
            <p>Hi ${referrerName},</p>
            <p>We've successfully received your referral. Our team will review the information and reach out accordingly.</p>
            <br>
            <p>Best regards,<br>The Thesisflow Team</p>
        </div>
        `
    }).catch(err => console.error("Email failed to send", err));

    // Send admin notification
    sendEmail({
        email: process.env.SMTP_ADMIN,
        subject: `New Institutional Referral: ${institutionName}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Referral Received</h2>
            <p><strong>Referrer:</strong> ${referrerName} (${referrerEmail})</p>
            <p><strong>Institution:</strong> ${institutionName} (${country})</p>
            <p><strong>Contact Person:</strong> ${contactPersonName || 'N/A'} (${contactPersonEmail || 'N/A'})</p>
            <p><strong>Notes:</strong> ${notes || 'N/A'}</p>
        </div>
        `
    }).catch(err => console.error("Admin Email failed to send", err));

    return res.status(201).json(new ApiResponse(201, "Referral submitted successfully", referral));
});

const getReferrals = asyncHandler(async (req, res) => {
    const referrals = await Referral.find().sort({ createdAt: -1 });

    const formattedReferrals = referrals.map(r => {
        const item = r.toJSON();
        item.id = item._id;
        return item;
    });

    return res.status(200).json(new ApiResponse(200, "Referrals fetched successfully", formattedReferrals));
});

const updateReferral = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const referral = await Referral.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!referral) throw new ApiError(404, "Referral not found");
    
    const item = referral.toJSON();
    item.id = item._id;

    return res.status(200).json(new ApiResponse(200, "Referral updated successfully", item));
});

const deleteReferral = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const referral = await Referral.findByIdAndDelete(id);
    if (!referral) throw new ApiError(404, "Referral not found");
    return res.status(200).json(new ApiResponse(200, "Referral deleted successfully", {}));
});

export { createReferral, getReferrals, updateReferral, deleteReferral };
