const TryCatch = (handler) => {
    return async (req, res, next) => {
      try {
        await handler(req, res, next);
      } catch (error) {
        console.error("Error in TryCatch middleware:", error);
  
        // Send a structured error response
        res.status(error.statusCode || 500).json({
          success: false,
          message: error.message || "Internal Server Error",
        });
  
        // Call next to let Express's error handler work if needed
        next(error);
      }
    };
  };
  
  export default TryCatch;
  