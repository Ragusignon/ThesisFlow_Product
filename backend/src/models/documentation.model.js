import mongoose from "mongoose";

const documentationSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        order: { type: Number, default: 1 },
        published: { type: Boolean, default: false },
        excerpt: { type: String, default: "" },
        content: { type: String, default: "" },
        lastUpdated: { type: String }
    },
    { 
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const Documentation = mongoose.model("Documentation", documentationSchema);
