// Our router module
const router = require('express').Router();

// Our controller
const BlogsController = require('../controllers/blogsController');

// Our routes
router.get('/new', BlogsController.new);
router.get('/draft', BlogsController.drafts);
router.get('/published', BlogsController.published);
router.get('/', BlogsController.index);
router.get('/:id', BlogsController.show);
router.get('/', BlogsController.create);

// We have to export our routes
module.exports = router;