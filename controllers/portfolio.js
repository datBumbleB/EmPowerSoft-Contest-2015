/**
 * GET /
 * Portfolio Page.
 */
var async = require('async');
var Project = require('../models/Project');

exports.getPortfolio = function(req, res, next) {
  async.parallel({
    projects: function(callback) {
      Project.find({}).limit(50).exec(function(err, projects) {
        callback(err, projects);
      });
    }
  }, function(err, result) {
    if (err) return next(err);

    console.log(result);

    res.render('portfolio', {
      title: 'Portfolio',
      projects: result.projects
    });
  });
};
