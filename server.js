const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

// var publicDir = path.join(__dirname, '..', 'client');

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// app.use(express.static(__dirname + '/../client'));
// app.set('views', __dirname + '/../client');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client//dist/index.html'));
});

app.listen(3000, function () {
  console.log(' 🌎  listening on port 3000');
});
