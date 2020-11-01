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

    create(req, res, next) {
        res.render('create');
    }

    store(req, res, next) {
        const courseData = req.body;
        courseData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;

        Course.create(courseData);

        res.redirect('/');
    }
}

module.exports = new CourseController;
