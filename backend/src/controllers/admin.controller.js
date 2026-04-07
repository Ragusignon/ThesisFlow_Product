import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "email and password are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    if (user.role !== "ADMIN") {
        throw new ApiError(403, "Access denied. Admin only.");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials");
    }

    const accessToken = user.generateAccessToken();

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(
                200,
                "Admin logged in successfully",
                { user: loggedInUser, accessToken }
            )
        );
});

const verifyAdmin = asyncHandler(async (req, res) => {
    // The user is already verified by the middleware by the time this runs
    return res.status(200).json(
        new ApiResponse(200, "Admin verified successfully", req.user)
    );
});

export { loginAdmin, verifyAdmin };
