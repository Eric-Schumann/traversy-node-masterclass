// @desc Get all courses
// @route GET /api/v1/courses
// @access Public
exports.getCourses = (req, res, next) => {
    res.status(200).json({ success: true, msg :'Show all courses.' });
};

// @desc Get single course
// @route GET /api/v1/courses/:id
// @access Public
exports.getCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg :`Get course ${req.params.id}.` });
};

// @desc Create course
// @route POST /api/v1/courses
// @access Private
exports.createCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg :'Create new course.' });
};

// @desc Update course
// @route PUT /api/v1/courses/:id
// @access Private
exports.updateCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg :`Update course ${req.params.id}.` });
};

// @desc Delete course
// @route DELETE /api/v1/courses
// @access Private
exports.deleteCourse = (req, res, next) => {
    res.status(200).json({ success: true, msg :`Delete course ${req.params.id}.` });
};