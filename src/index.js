import React from 'react';
import ReactDOM from 'react-dom';
import Ad1 from './ads/ad1';
import Ad2 from './ads/ad2';
import ConsoleAd1 from './console-ads/ad1';
import CityNightAd from './ads/city-night-ad';
import AnimationAd from './ads/animation-ad';
import './css/main.scss';

ConsoleAd1();

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        {/* <div className="background-sky"></div>
        <div className="background-stars"></div>
        <div className="background-man"></div>
        <Ad1/> 
        <CityNightAd />*/}
        <AnimationAd />
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'));