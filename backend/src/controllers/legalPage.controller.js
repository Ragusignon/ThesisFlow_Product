import { LegalPage } from "../models/legalPage.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createLegalPage = asyncHandler(async (req, res) => {
    const { title, slug, content, published } = req.body;

    if ([title, slug, content].some((field) => !field || (typeof field === 'string' && field.trim() === ""))) {
        throw new ApiError(400, "Required fields are missing");
    }

    const existingPage = await LegalPage.findOne({ slug });
    if (existingPage) {
        throw new ApiError(400, "Legal page with this slug already exists");
    }

    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const page = await LegalPage.create({
        title, slug, content, published, lastUpdated
    });

    return res.status(201).json(new ApiResponse(201, "Legal page created successfully", page));
});

const getLegalPages = asyncHandler(async (req, res) => {
    const pages = await LegalPage.find().sort({ createdAt: -1 });

    const formattedPages = pages.map(p => {
        const item = p.toJSON();
        item.id = item._id;
        return item;
    });

    return res.status(200).json(new ApiResponse(200, "Legal pages fetched successfully", formattedPages));
});

const getLegalPageById = asyncHandler(async (req, res) => {
    const page = await LegalPage.findById(req.params.id);
    if (!page) throw new ApiError(404, "Legal page not found");
    const item = page.toJSON();
    item.id = item._id;
    return res.status(200).json(new ApiResponse(200, "Legal page fetched successfully", item));
});

const updateLegalPage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const updateData = { ...req.body };
    updateData.lastUpdated = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const page = await LegalPage.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
    );

    if (!page) throw new ApiError(404, "Legal page not found");
    
    const item = page.toJSON();
    item.id = item._id;

    return res.status(200).json(new ApiResponse(200, "Legal page updated successfully", item));
});

const deleteLegalPage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const page = await LegalPage.findByIdAndDelete(id);
    if (!page) throw new ApiError(404, "Legal page not found");
    return res.status(200).json(new ApiResponse(200, "Legal page deleted successfully", {}));
});

export { createLegalPage, getLegalPages, getLegalPageById, updateLegalPage, deleteLegalPage };
