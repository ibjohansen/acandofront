import React from 'react';
import Helmet from 'react-helmet';


const LandingPage1 = () => {
  return (
    <div className="landing-page">
      <Helmet>
        <body className="is-landing-page" />
      </Helmet>
      <h1>Jobb i Acando</h1>
      <p>Her skal det stå noe spennende tekst som lokker deg videre til en side på Acando.no?</p>
    </div>
  );
};

export default LandingPage1;
