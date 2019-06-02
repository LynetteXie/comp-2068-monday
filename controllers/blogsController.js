const Blog = require('../models/blog');

exports.new = (req, res) => {
    res.render('blogs/new', {
        title: 'New Blog Post'
    });
};

exports.index = (req, res) => {

};

exports.show = (req, res) => {

};

exports.create = (req, res) => {
    Blog.create(req.body.blog)
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.drafts = (req, res) => {

};

exports.published = (req, res) => {

};