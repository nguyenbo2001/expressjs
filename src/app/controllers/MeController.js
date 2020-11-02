const Course = require('../models/Course');
const { multipeMongooseToObject } = require('../../utils/mongoose');

class MeController {
    courses(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('me/courses', {
                    courses: multipeMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}

module.exports = new MeController;
