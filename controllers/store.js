var async = require('async');
var Product = require('../models/Product');
/**
 * GET /
 * Store page.
 */
exports.getStore = function(req, res, next) {
  async.parallel({
    products: function(callback) {
      Product.find({}).limit(50).exec(function(err, products) {
        callback(err, products);
      });
    }
  }, function(err, result) {
    if (err) return next(err);

    console.log(result);

    res.render('store', {
      title: 'Store',
      products: result.products
    });
  });
};
