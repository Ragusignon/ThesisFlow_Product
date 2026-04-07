import mongoose from "mongoose";

const legalPageSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        content: { type: String, required: true },
        published: { type: Boolean, default: false },
        lastUpdated: { 
            type: String,
            default: () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        },
        versions: [{
            versionId: String,
            content: String,
            savedAt: String,
            savedBy: String
        }]
    },
    { 
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const LegalPage = mongoose.model("LegalPage", legalPageSchema);
