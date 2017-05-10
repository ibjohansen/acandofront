import React from 'react';
import ReactDOM from 'react-dom';
import Ad1 from './ads/ad1';
import './css/main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="background-sky"></div>
        <div className="background-stars"></div>
        <div className="background-man"></div>
        <Ad1/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'));

