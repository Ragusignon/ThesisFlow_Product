import { Blog } from "../models/blog.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createBlog = asyncHandler(async (req, res) => {
    const { title, slug, excerpt, content, author, category, readTime, image, date, status } = req.body;

    if ([title, slug, excerpt, content, author, category].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "Required fields are missing");
    }

    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
        throw new ApiError(400, "Blog with this slug already exists");
    }

    const lastModified = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const blog = await Blog.create({
        title, slug, excerpt, content, author, category, readTime, image, date, status, lastModified
    });

    return res.status(201).json(new ApiResponse(201, "Blog created successfully", blog));
});

const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    // Ensure frontend gets data in expected format
    const formattedBlogs = blogs.map(b => {
        const doc = b.toJSON();
        doc.id = doc._id;
        return doc;
    });

    // We can respond with an ApiResponse or just directly the array since the frontend 
    // expects `Array.isArray(resData) ? resData : (resData.data || [])`
    return res.status(200).json(new ApiResponse(200, "Blogs fetched successfully", formattedBlogs));
});

const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) throw new ApiError(404, "Blog not found");
    const doc = blog.toJSON();
    doc.id = doc._id;
    return res.status(200).json(new ApiResponse(200, "Blog fetched successfully", doc));
});

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const updateData = { ...req.body };
    updateData.lastModified = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const blog = await Blog.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
    );

    if (!blog) throw new ApiError(404, "Blog not found");
    
    const doc = blog.toJSON();
    doc.id = doc._id;

    return res.status(200).json(new ApiResponse(200, "Blog updated successfully", doc));
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) throw new ApiError(404, "Blog not found");
    return res.status(200).json(new ApiResponse(200, "Blog deleted successfully", {}));
});

export { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
