import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        excerpt: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true, default: 'Thesisflow Team' },
        category: { type: String, required: true, default: 'Product Updates' },
        readTime: { type: String, default: '5 min' },
        image: { type: String, default: '' },
        date: { type: String, required: true },
        status: { type: String, enum: ['Published', 'Draft'], default: 'Published' },
        featured: { type: Boolean, default: false },
        lastModified: { type: String }
    },
    { 
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const Blog = mongoose.model("Blog", blogSchema);
