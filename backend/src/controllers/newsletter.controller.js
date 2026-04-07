import { Newsletter } from "../models/newsletter.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const subscribeToNewsletter = asyncHandler(async (req, res) => {
    const { name, email, source } = req.body;

    if (!email || email.trim() === "") {
        throw new ApiError(400, "Email is required");
    }

    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
        // Just return success if already subscribed, or re-activate
        if (!existingSubscriber.active) {
            existingSubscriber.active = true;
            await existingSubscriber.save();
        }
        return res.status(200).json(new ApiResponse(200, "Successfully subscribed to newsletter", existingSubscriber));
    }

    const doc = await Newsletter.create({
        name: name || "Anonymous",
        email,
        source: source || "Website Footer"
    });

    return res.status(201).json(new ApiResponse(201, "Successfully subscribed to newsletter", doc));
});

const getSubscribers = asyncHandler(async (req, res) => {
    const subs = await Newsletter.find().sort({ createdAt: -1 });

    const formattedSubs = subs.map(d => {
        const item = d.toJSON();
        item.id = item._id;
        return item;
    });

    return res.status(200).json(new ApiResponse(200, "Subscribers fetched successfully", formattedSubs));
});

const unsubscribe = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    // Hard delete since frontend mentions "move to trash" and has a delete function.
    const doc = await Newsletter.findByIdAndDelete(id);
    if (!doc) throw new ApiError(404, "Subscriber not found");
    
    return res.status(200).json(new ApiResponse(200, "Unsubscribed successfully", {}));
});

export { subscribeToNewsletter, getSubscribers, unsubscribe };
