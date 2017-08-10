import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Helmet from 'react-helmet';
import template from 'views/basic-template';
import App from './index';
import './css/main.scss';
import './components/media-ad/_media-ad.scss';

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    );
    const helmet = Helmet.renderStatic();

    res.status(200).send(template({ markup, helmet }));
  };
}
