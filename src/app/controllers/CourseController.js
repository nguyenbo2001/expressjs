const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    show(req, res, next) {

        Course.findOne({
            slug: req.params.slug
        })
            .then(course => {
                res.render('course', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController;
