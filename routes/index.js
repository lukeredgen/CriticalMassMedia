const routes = require('express').Router();
const artists = require('./artists');
const albums = require('./albums');

/* GET home page. */
routes.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

routes.use('/artists', artists);
routes.use('/albums', albums);

module.exports = routes;