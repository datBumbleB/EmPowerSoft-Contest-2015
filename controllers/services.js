/**
 * GET /
 * Services page.
 */
exports.getServices = function(req, res) {
  res.render('services', {
    title: 'Services'
  });
};
