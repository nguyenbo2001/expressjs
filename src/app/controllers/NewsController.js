class NewsController {
    constructor() {
    }
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Detail page');
    }
}

module.exports = new NewsController;
