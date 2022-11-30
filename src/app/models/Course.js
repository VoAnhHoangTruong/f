const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const CourseSchema = new Schema(
  {
    _id:{ type: Number },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    lever: { type: String, required: true },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    _id: false,
    timestamps: true,
  },
);
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidtype = ['asc', 'desc'].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidtype ? req.query.type : 'desc',
    });
  }
  return this;
};
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});
module.exports = mongoose.model('Course', CourseSchema);
