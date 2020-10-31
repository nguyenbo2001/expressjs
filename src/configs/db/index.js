const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/express', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('MongoDB connect successfully!!');
    } catch (error) {
        console.log('MongoDB connect fails: ', error);
    }
}

module.exports = { connect };
