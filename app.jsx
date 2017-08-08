require('babel-register');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
//import ReactHelmet from 'react-helmet';
//import VideoAd from './src/ads/video-ad';
const fs = require('fs');

app.set('port', (process.env.PORT || 3000));

console.log('NODE_ENV: ', process.env.NODE_ENV);
/*
if (process.env.NODE_ENV !== 'production') {
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Atari 2600' }));
  const webpack = require('webpack');
  let config = require('./webpack.config.dev');
  let bundler = webpack(config);
  
  app.use(webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath,
    hot: true
  }));
  /*app.use(webpackHotMiddleware(bundler, {
    log: console.log, // eslint-disable-line no-console
  }));* /
} else {
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Atari 2600' }));
  app.use(compression());
  

}
*/
/*
function handleRender(req, res) {
  const html = ReactDOMServer.renderToString(<VideoAd />);
  ReactHelmet.renderStatic();
  // Load contents of index.html
  fs.readFile('./static/index.html', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);


    // Sends the response back to the client
    res.send(document);
  });
}*/

const config = require('./webpack.config.dev');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/static/",
}));
app.use(webpackHotMiddleware(compiler.compilers.find((compiler) => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

//app.use(express.static(__dirname + '/static'));
app.get('/super-secret', (req, res, next) => {
  res.status(200).json({ coded_message: 'jjj.cnfgrova.pbz/2Zl0afpP' });
});
/*app.get(['/*ad*', '/'], (req, res, next) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});*/
//app.get('*', handleRender);

app.listen(app.get('port'), () => {
  console.log('Magic dreams is running on port', app.get('port'));
});
