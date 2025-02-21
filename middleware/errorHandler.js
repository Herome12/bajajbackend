const errorHandler = (err, req, res, next) => {
    res.status(400).json({ is_success: false, error: err.message });
};

module.exports = errorHandler;