const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    
    // Handle JWT errors
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            message: 'Invalid token',
            status: 401
        });
    }

    // Handle token expiration
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
            message: 'Token expired',
            status: 401
        });
    }

    // Handle mongoose validation errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: Object.values(err.errors).map(e => e.message),
            status: 400
        });
    }

    // Handle mongoose cast errors (invalid ID format)
    if (err.name === 'CastError') {
        return res.status(400).json({
            message: 'Invalid ID format',
            status: 400
        });
    }

    // Default error
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        status: err.status || 500
    });
}

module.exports = errorHandler;