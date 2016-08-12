/**
 * GET /
 * Scroll page.
 */
var async = require('async');
var Project = require('../models/Project');

exports.getScrolling = function(req, res, next) {
 async.parallel({
   projects: function(callback) {
     Project.find({}).limit(50).exec(function(err, projects) {
       callback(err, projects);
     });
   }
 }, function(err, result) {
   if (err) return next(err);

   console.log(result);

     res.render('scrolling', {
       title: 'Scrolling',
       projects: result.projects
     });
 });

};
