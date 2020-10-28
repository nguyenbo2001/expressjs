class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Detail page');
    }
}

module.export = new NewsController;
