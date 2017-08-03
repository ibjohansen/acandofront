import React from 'react';
import ReactDOM from 'react-dom';
import AdContainer from './ads/ad-container';
import ConsoleAd1 from './console-ads/ad1';
import CityNightAd from './ads/city-night-ad';
import AnimationAd from './ads/animation-ad';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './css/main.scss';

ConsoleAd1();

const Main = () => {
  return (
    <Router>
      <div className="main-body">
        <Route exact path="/" component={AdContainer}/>
        <Route path="/ad1" component={AdContainer}/>
        <Route path="/city-night-ad" component={CityNightAd}/>
        <Route path="/animation-ad" component={AnimationAd}/>
      </div>
    </Router>
  );
}

ReactDOM.render(<Main/>, document.getElementById('app'));