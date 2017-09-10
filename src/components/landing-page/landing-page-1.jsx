import React from 'react';
import Helmet from 'react-helmet';


const LandingPage1 = () => {
  return (
    <div className="landing-page">
      <Helmet>
        <body className="is-landing-page" />
      </Helmet>
      <div className="container">
        <h1>Har du dybden, eller sikter du mot stjernene? Liker du fart, og har du energien som trengs?</h1>
        <h2>Vi vokser og søker konsulenter som vil være med på å utgjøre en forskjell!</h2>
        <div className="text-container">
          <p>Acando er et brukerfokusert og teknologidrevet konsulentselskap. Teknologi driver forandring, men det er brukerens evne og ønske til å ta teknologien i bruk som skaper verdi. Vi forstår morgendagens drivkrefter og tilpasser dem dagens forhold. Vi skaper resultater der dagens virkelighet og fremtidens muligheter er i balanse.</p>
          <p>Med teknisk spisskompetanse og inngående innsikt i brukeratferd, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Ved å kombinere innovasjon og erfaring, utgjør vi en forskjell!</p>
          <p>Vi vokser og søker flere konsulenter som drømmer stort og ønsker å gå i dybden sammen med oss.</p>
          <p>Sjekk ut våre ledige stillinger <a href="https://www.acando.no/acandonorge/ledige-stillinger/54842/ledige-stillinger">her</a></p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
