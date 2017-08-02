const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compression = require('compression');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));

console.log('NODE_ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  let config = require('./webpack.config.dev');
  let bundler = webpack(config);
  
  app.use(webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath,
    hot: true
  }));
  /*app.use(webpackHotMiddleware(bundler, {
    log: console.log, // eslint-disable-line no-console
  }));*/
  app.get("*", (req, res, next) => {
      res.sendFile(path.join(__dirname, 'static/index.html'));
  });
} else {
  app.use(compression());
  app.use(express.static(__dirname + '/static'));
}

app.listen(app.get('port'), () => {
  console.log('Magic dreams is running on port', app.get('port'));
});