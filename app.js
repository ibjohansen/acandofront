const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));

console.log('NODE_ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Atari 2600' }))
  const webpack = require('webpack');
  let config = require('./webpack.config.dev');
  let bundler = webpack(config);
  
  app.use(webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath,
    hot: true
  }));
  /*app.use(webpackHotMiddleware(bundler, {
    log: console.log, // eslint-disable-line no-console
  }));*/
} else {
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Atari 2600' }));
  app.use(compression());
  

}
app.use(express.static(__dirname + '/static'));
app.get('/super-secret', (req, res, next) => {
  res.status(200).json({ coded_message: 'jjj.cnfgrova.pbz/2Zl0afpP' });
});
app.get(['/*ad*', '/'], (req, res, next) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Magic dreams is running on port', app.get('port'));
});
