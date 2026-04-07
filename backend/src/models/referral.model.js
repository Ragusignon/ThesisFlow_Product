import mongoose from "mongoose";

const referralSchema = new mongoose.Schema(
    {
        referrerName: { type: String, required: true },
        referrerEmail: { type: String, required: true },
        referrerRole: { type: String },
        institutionName: { type: String, required: true },
        institutionType: { type: String, default: 'university' },
        country: { type: String, required: true },
        websiteUrl: { type: String },
        contactPersonName: { type: String },
        contactPersonRole: { type: String },
        contactPersonEmail: { type: String },
        contactPersonLinkedIn: { type: String },
        notes: { type: String },
        status: { type: String, enum: ['Pending', 'Contacted', 'Converted', 'Declined'], default: 'Pending' }
    },
    { 
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const Referral = mongoose.model("Referral", referralSchema);
