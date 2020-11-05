const mongoose = require('mongoose');
const mongooseSlug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


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

mongoose.plugin(mongooseSlug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
