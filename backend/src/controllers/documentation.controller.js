import { Documentation } from "../models/documentation.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createDocumentation = asyncHandler(async (req, res) => {
    const { title, slug, category, order, published, excerpt, content } = req.body;

    if ([title, slug, category].some((field) => !field || (typeof field === 'string' && field.trim() === ""))) {
        throw new ApiError(400, "Required fields are missing");
    }

    const existingDoc = await Documentation.findOne({ slug });
    if (existingDoc) {
        throw new ApiError(400, "Documentation with this slug already exists");
    }

    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const doc = await Documentation.create({
        title, slug, category, order, published, excerpt, content, lastUpdated
    });

    return res.status(201).json(new ApiResponse(201, "Documentation created successfully", doc));
});

const getDocumentation = asyncHandler(async (req, res) => {
    const docs = await Documentation.find().sort({ order: 1, createdAt: -1 });

    const formattedDocs = docs.map(d => {
        const item = d.toJSON();
        item.id = item._id;
        return item;
    });

    return res.status(200).json(new ApiResponse(200, "Documentation fetched successfully", formattedDocs));
});

const getDocumentationById = asyncHandler(async (req, res) => {
    const doc = await Documentation.findById(req.params.id);
    if (!doc) throw new ApiError(404, "Documentation not found");
    const item = doc.toJSON();
    item.id = item._id;
    return res.status(200).json(new ApiResponse(200, "Documentation fetched successfully", item));
});

const updateDocumentation = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const updateData = { ...req.body };
    updateData.lastUpdated = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const doc = await Documentation.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
    );

    if (!doc) throw new ApiError(404, "Documentation not found");
    
    const item = doc.toJSON();
    item.id = item._id;

    return res.status(200).json(new ApiResponse(200, "Documentation updated successfully", item));
});

const deleteDocumentation = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const doc = await Documentation.findByIdAndDelete(id);
    if (!doc) throw new ApiError(404, "Documentation not found");
    return res.status(200).json(new ApiResponse(200, "Documentation deleted successfully", {}));
});

export { createDocumentation, getDocumentation, getDocumentationById, updateDocumentation, deleteDocumentation };
