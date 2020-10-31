const Course = require('../models/Course');
const { multipeMongooseToObject } = require('../../utils/mongoose');

class SitesController {
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipeMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController;
