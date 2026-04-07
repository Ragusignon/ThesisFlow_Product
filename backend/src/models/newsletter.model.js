import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
    {
        name: { type: String, required: false },
        email: { type: String, required: true, unique: true, lowercase: true },
        source: { type: String, default: 'Website' },
        date: { 
            type: String, 
            default: () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        },
        active: { type: Boolean, default: true }
    },
    { 
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const Newsletter = mongoose.model("Newsletter", newsletterSchema);
