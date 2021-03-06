const express = require('express');
const router = express.Router({ mergeParams: true });

const newsController = require('../app/controllers/NewsController');

router.get('/', newsController.index);

module.exports = router;
