"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./v1/application/routes/profile/index"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const config_1 = __importDefault(require("./v1/helpers/swagger/config"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use("/apiDoc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(config_1.default));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/profile", index_1.default);
// Not found handler
app.use(handleNotFound);
// Error handler middleware
app.use(handleError);
function handleNotFound(req, res, next) {
    // Check if any route handler has already handled the request
    if (res.headersSent) {
        return next(); // Let other error handlers handle it if already responded to
    }
    res.status(404).json({ message: "Not Found" });
}
function handleError(err, req, res, next) {
    console.error(err.stack); // Log the error for debugging
    // Set default status code to 500 (Internal Server Error)
    let statusCode = 500;
    // Map specific error types to appropriate status codes
    if (err.name === "ValidationError") {
        statusCode = 400; // Bad request for validation errors
    }
    else if (err.name === "UnauthorizedError") {
        statusCode = 401; // Unauthorized for authentication errors
    }
    else if (err.name === "ForbiddenError") {
        statusCode = 403; // Forbidden for authorization errors
    }
    // Craft a generic error response with optional details based on environment
    const errorResponse = {
        message: "Internal Server Error", // Default message
        error: "",
    };
    if (process.env.NODE_ENV === "development") {
        errorResponse.error = err.message; // Include more details in development
    }
    res.status(statusCode).json(errorResponse);
}
exports.default = app;
