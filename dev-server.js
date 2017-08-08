const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '/public')));

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/static/',
  serverSideRender: true
}));
app.use(webpackHotMiddleware(compiler.compilers.find((compiler) => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(app.get('port'));


