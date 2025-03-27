const TryCatch = (handler) => {
    return async (req, res, next) => {
      try {
        await handler(req, res, next);
      } catch (error) {
        console.error("Error in TryCatch middleware:", error);
        res.status(error.statusCode || 500).json({
          success: false,
          message: error.message || "Internal Server Error",
        });
  
        next(error);
      }
    };
  };
  
  export default TryCatch;
  