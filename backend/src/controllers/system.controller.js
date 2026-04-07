import asyncHandler from "../utils/asyncHandler.js";

export const getSystemInfo = asyncHandler(async (req, res) => {
    const systemInfo = {
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
        platform: process.platform,
        nodeVersion: process.version,
    };
    res.status(200).json(systemInfo);
});

export const getHealthStatus = asyncHandler(async (req, res) => {
    res.status(200).json({ status: "OK" });
});


export default{
    getSystemInfo,
    getHealthStatus
};