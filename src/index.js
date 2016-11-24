import React from 'react';
import ReactDOM from 'react-dom';
import Ad1 from './ads/ad1';
import './css/main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Ad1/>
        <span className="stars">XXXXXX</span>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'));

