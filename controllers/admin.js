var User = require('../models/User');
var Product = require('../models/Product');
var Project = require('../models/Project');
/**
 * GET /
 * Admin page.
 */
exports.getAdmin = function(req, res) {

    if(typeof req.user === 'undefined' || req.user.isAdmin != true) res.redirect('/login');
    res.render('admin', {
      title: 'Admin'
    });
  };

/**
 * POST /Admin
 * Create a new product.
 */
exports.createProduct = function(req, res, next) {
  req.assert('name', 'Product name is required.').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/admin');
  }

  var product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image
  });

  product.save(function(err, post) {
    if (err) return next(err);
    res.redirect('/admin');
  });
};


/**
 * POST /Admin
 * Create a new project.
 */

exports.createProject = function(req, res, next) {
  req.assert('project_name', 'Project name is required.').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/admin');
  }

  var project = new Project({
    name: req.body.project_name,
    description: req.body.project_description,
    picture: req.body.project_picture
  });

  project.save(function(err, post) {
    if (err) return next(err);
    res.redirect('/admin');
  });
};
