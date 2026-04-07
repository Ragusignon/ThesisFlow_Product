import mongoose from "mongoose";

const demoRequestSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        institutionName: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        timezone: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        attendees: {
            type: String,
            default: "1-5"
        },
        additionalInfo: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

export const DemoRequest = mongoose.model("DemoRequest", demoRequestSchema);
