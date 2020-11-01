const mongoose = require('mongoose');
const mongooseSlug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(mongooseSlug);

const Course = new Schema({
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    videoID: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('Course', Course);
