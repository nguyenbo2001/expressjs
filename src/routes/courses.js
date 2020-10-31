const express = require('express');
const router = express.Router({ mergeParams: true });

const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);

module.exports = router;
