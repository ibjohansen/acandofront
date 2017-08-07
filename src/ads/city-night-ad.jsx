//http://cdn.pcwallart.com/images/new-york-city-street-scene-wallpaper-1.jpg
import React from 'react';
//import GyroNorm from 'gyronorm';

//const gn = new GyroNorm();
/*function throttle(func, wait, options) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  if (!options) {
    options = {};
  }
  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function() {
    const now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}*/

export default class CityNightAd extends React.Component {

  constructor (props) {
    super(props);
    this.state = { alpha: 50, beta: 50, gamma: 50 };
  }

  componentDidMount () {
    /*gn.init({
            frequency: 50
        }).then(() => {
            gn.start(data => {
                console.log(data);
                this.setState({alpha: data.do.alpha});
            });
        }).catch(e => {
            console.log('Does not support device orientation: ', e);
        });*/
    if (window.DeviceOrientationEvent) {
      //const throttled = throttle(this.handleOrientation.bind(this), 10);
      window.addEventListener('deviceorientation', this.handleOrientation.bind(this), true);
    }
  }

  handleOrientation (e) {
    this.setState({alpha: e.alpha, beta: e.beta, gamma: e.gamma});
  }

  render() {
    const gammaRangeAdjustment = 60; // [-60, 60]
    let movement = this.state.gamma + gammaRangeAdjustment;
    if (movement < 0) {
      movement = 0;
    } else if (movement > 100) {
      movement = 100;
    }
    movement = movement * -1;
    movement = movement / 100 * 50;
    const imageStyling = {
      transform: `translate3d(${movement}%, 0, 0)`
    };
    return (
      <section className="city-night-ad main-container">
        <h1>Hva gir deg inspirasjon?</h1>
        {/* <h3>{this.state.alpha}</h3>
                <h3>{this.state.beta}</h3>
                <h3>{this.state.gamma}</h3>
                <h3>{window.DeviceOrientationEvent ? 'support' : 'not'}</h3> */}
        <div className="city-night-image" style={imageStyling} />
      </section>
    );
  }
}
