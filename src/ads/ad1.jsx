import React from 'react';
import {Link} from 'react-router-dom';

export default class Ad1 extends React.Component {
  render() {
    return (
      <section className="ad1">
        <h1>
          
          <Link to="/landing-page">
              Hva drømmer du om å bli?
          </Link>
        </h1>
      </section>
    );
  }
}



