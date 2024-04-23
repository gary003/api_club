import express from "express"
import profileRoute from "./v1/application/routes/profile/index"

import swaggerUi from "swagger-ui-express"
import swaggerJson from "./v1/helpers/swagger/config"

import helmet from "helmet"
import cors from "cors"

const app = express()

app.use("/apiDoc", swaggerUi.serve, swaggerUi.setup(swaggerJson))

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use("/api/v1/profile", profileRoute)

// Not found handler
app.use(handleNotFound)

// Error handler middleware
app.use(handleError)

function handleNotFound(req: express.Request, res: express.Response, next: express.NextFunction) {
  // Check if any route handler has already handled the request
  if (res.headersSent) {
    return next() // Let other error handlers handle it if already responded to
  }

  res.status(404).json({ message: "Not Found" })
}

function handleError(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.error(err.stack) // Log the error for debugging

  // Set default status code to 500 (Internal Server Error)
  let statusCode = 500

  // Map specific error types to appropriate status codes
  if (err.name === "ValidationError") {
    statusCode = 400 // Bad request for validation errors
  } else if (err.name === "UnauthorizedError") {
    statusCode = 401 // Unauthorized for authentication errors
  } else if (err.name === "ForbiddenError") {
    statusCode = 403 // Forbidden for authorization errors
  }

  // Craft a generic error response with optional details based on environment
  const errorResponse = {
    message: "Internal Server Error", // Default message
    error: "",
  }

  if (process.env.NODE_ENV === "development") {
    errorResponse.error = err.message // Include more details in development
  }

  res.status(statusCode).json(errorResponse)
}

export default app
