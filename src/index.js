import React from 'react';
import { Switch } from 'react-router-dom';
import AdRoutes from 'routes/ad-routes';
import './css/main.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          {AdRoutes}
        </Switch>
      </div>
    );
  }
}
