import React from 'react';
import ReactDOM from 'react-dom';
import AdContainer from './ads/ad-container';
import ConsoleAd1 from './console-ads/ad1';
import CityNightAd from './ads/city-night-ad';
import AnimationAd from './ads/animation-ad';
import AnimationAd2 from './ads/animation-ad2';
import AnimationText from './ads/animation-text';
import LandingPage1 from './landing-page/landing-page-1';
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
        <Route path="/animation-ad2" component={AnimationAd2}/>
        <Route path="/animation-text" component={AnimationText}/>
        <Route path="/landing-page" component={LandingPage1}/>
      </div>
    </Router>
  );
}

ReactDOM.render(<Main/>, document.getElementById('app'));