const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    show(req, res, next) {

        Course.findOne({
            slug: req.params.slug
        })
            .then(course => {
                res.render('courses/course', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const courseData = req.body;
        courseData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;

        Course.create(courseData);

        res.redirect('/');
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        const courseData = req.body;
        courseData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;

        Course.updateOne({_id: req.params.id}, courseData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CourseController;
