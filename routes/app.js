module.exports = function(app) {
  var routing = this;

  app.get('/app', function (req, res) {
    return res.render('app/temple', {title: 'Epimanger'});
  })

  app.get('/app/directives/navigation', function (req, res) {
    return res.render("app/directives/navigation");
  });

  app.all('/app/*', function(req, res, next) {
    var angular = (req.headers['x-requested-with'] === 'XMLHttpRequest') ? true : false;
    if (angular) {
      next();
    }
    else {
      return res.redirect('/app');
    }
  });
      
  app.get('/app/:directory/:view', function(req, res) {
    res.render("app/"+req.params.directory+"/"+req.params.view);
  });
  
  return routing;
};