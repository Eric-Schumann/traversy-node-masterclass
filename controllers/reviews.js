// @desc Get all reviews
// @route GET /api/v1/reviews
// @access Public
exports.getReviews = (req, res, next) => {
    res.status(200).json({ success: true, msg :'Show all reviews.' });
};

// @desc Get single review
// @route GET /api/v1/reviews/:id
// @access Public
exports.getReview = (req, res, next) => {
    res.status(200).json({ success: true, msg :`Get review ${req.params.id}.` });
};

// @desc Create review
// @route POST /api/v1/reviews
// @access Private
exports.createReview = (req, res, next) => {
    res.status(200).json({ success: true, msg :'Create new review.' });
};

// @desc Update review
// @route PUT /api/v1/reviews/:id
// @access Private
exports.updateReview = (req, res, next) => {
    res.status(200).json({ success: true, msg :`Update review ${req.params.id}.` });
};

// @desc Delete review
// @route DELETE /api/v1/reviews
// @access Private
exports.deleteReview = (req, res, next) => {
    res.status(200).json({ success: true, msg :`Delete review ${req.params.id}.` });
};