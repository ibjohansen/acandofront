import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import LandingPage1 from 'components/landing-page/landing-page-1';
import LandingPageVideo from 'components/landing-page/landing-page-video';
import VideoAd from 'components/video-ad/video-ad';
import GifAd from 'components/gif-ad/gif-ad';
import video1 from 'videos/tunnel.mp4';
import video2 from 'videos/auroraborealis.mp4';
import video3 from 'videos/dreamer.mp4';
import video4 from 'videos/divers.mp4';

import gif1 from 'images/tunnel.gif';
import gif2 from 'images/auroraborealis.gif';
import gif3 from 'images/dreamer.gif';
import gif4 from 'images/divers.gif';
import poster1 from 'images/tunnel_poster.jpg';
import poster2 from 'images/auroraborealis_poster.jpg';
import poster3 from 'images/dreamer_poster.jpg';
import poster4 from 'images/divers_poster.jpg';

const Gif1 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif1}
  slogan={<Link to="/landingpage">
    <div className="slogan-text-container">
      <h1 className="some-custom-classname">Finn veien med oss!</h1>
    </div>
  </Link>}
  sloganStyling={{bottom: '10%'}}
  // 50% is default
  backgroundPositionX="50%"
  backgroundPositionY="50%"
  ogTitle="Finn veien med oss!"
  ogDescription=""
  ogSiteName="Acando"
  ogUrl={gif1}
  ogImage={gif1}
  ogImageType="image/gif"
  ogImageWidth="800"
  ogImageHeight="450"
/>));

const Gif2 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif2}
  slogan={<Link to="/landingpage"><h1 className="some-custom-classname">Få en lysende fremtid med oss!</h1></Link>}
  sloganStyling={{top: '10%', right: '2%', maxWidth: '300px'}}
  // 50% is default
  backgroundPositionX="10%"
  backgroundPositionY="20%"
  ogSiteName="Acando"
  ogUrl={gif2}
  ogImage={gif2}
  ogImageType="image/gif"
  ogType={gif2}
  ogTitle="Få en lysende fremtid med oss!"
  ogDescription=""
  ogImageWidth="1280"
  ogImageHeight="720"
/>));

const Gif3 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif3}
  slogan={<Link to="/landingpage">
    <div className="slogan-text-container">
      <h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>
    </div>
  </Link>}
  sloganStyling={{bottom: '10%'}}
  // 50% is default
  backgroundPositionX="80%"
  backgroundPositionY="50%"
  ogSiteName="Acando"
  ogUrl={gif3}
  ogImage={gif3}
  ogImageType="image/gif"
  ogType={gif3}
  ogTitle="Hva drømmer du om å bli?"
  ogDescription=""
  ogImageWidth="600"
  ogImageHeight="338"
/>));

const Gif4 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif4}
  slogan={<Link to="/landingpage">
    <div className="slogan-text-container">
      <h1 className="some-custom-classname">Har du dybden som kreves?</h1>
    </div>
  </Link>}
  sloganStyling={{bottom: '10%'}}
  // 50% is default
  backgroundPositionX="50%"
  backgroundPositionY="50%"
  ogSiteName="Acando"
  ogUrl={gif4}
  ogImage={gif4}
  ogImageType="image/gif"
  ogType={gif4}
  ogTitle="Har du dybden som kreves?"
  ogDescription=""
  ogImageWidth="800"
  ogImageHeight="450"
/>));

// VideoSlogan can contain a Link to proper landing page.
const Video1 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video1}
  imageUrl={poster1}
  slogan={<div>
    <Link to="/landingpage">
      <div className="slogan-text-container">
        <h1 className="slogan-video-1">Finn veien med oss!</h1>
      </div>
    </Link>
    <h4>www.acando.no/ledigestillinger</h4>
  </div>
  }
  sloganStyling={{bottom: '10%', left: '2%'}}
  ogSiteName="Acando"
  ogUrl={video1}
  ogVideoType="video/mp4"
  ogTitle="Finn veien med oss!"
  ogDescription=""
  ogVideoWidth="1280"
  ogVideoHeight="720"
  ogImage={gif1}
  ogImageType="image/gif"
  ogImageWidth="800"
  ogImageHeight="450"
  videoFallback={gif1}
/>));

// VideoSlogan can contain a Link to proper landing page.
const Video2 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video2}
  imageUrl={poster2}
  slogan={<div>
    <Link to="/landingpage">
      <div className="slogan-text-container">
        <h1 className="slogan-video-2">Få en lysende fremtid med oss!</h1>
      </div>
    </Link>
    <h4>www.acando.no/ledigestillinger</h4>
  </div>
  }
  sloganStyling={{bottom: '10%'}}
  ogSiteName="Acando"
  ogUrl={video2}
  ogVideoType="video/mp4"
  ogTitle="Få en lysende fremtid med oss!"
  ogDescription=""
  ogVideoWidth="1280"
  ogVideoHeight="720"
  ogImage={gif2}
  ogImageType="image/gif"
  ogImageWidth="1280"
  ogImageHeight="720"
  videoFallback={gif2}
/>));

const Video3 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video3}
  imageUrl={poster3}
  slogan={<div>
    <Link to="/landingpage">
      <div className="slogan-text-container">
        <h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>
      </div>
    </Link>
    <h4>www.acando.no/ledigestillinger</h4>
  </div>
  }
  sloganStyling={{bottom: '10%'}}
  ogSiteName="Hva drømmer du om å bli?"
  ogUrl={video3}
  ogVideoType="video/mp4"
  ogTitle="Hva drømmer du om å bli?"
  ogDescription=""
  ogVideoWidth="1280"
  ogVideoHeight="720"
  ogImage={gif3}
  ogImageType="image/gif"
  ogImageWidth="600"
  ogImageHeight="338"
  videoFallback={gif3}
  focusX={80}
  focusY={50}
/>));

const Video4 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video4}
  imageUrl={poster4}
  slogan={<div>
    <Link to="/landingpage">
      <div className="slogan-text-container">
        <h1 className="some-custom-classname">Har du dybden som kreves?</h1>
      </div>
    </Link>
    <h4>www.acando.no/ledigestillinger</h4>
  </div>
  }
  sloganStyling={{bottom: '10%'}}
  ogSiteName="Har du dybden som kreves?"
  ogUrl={video3}
  ogVideoType="video/mp4"
  ogTitle="Har du dybden som kreves?"
  ogDescription=""
  ogVideoWidth="1280"
  ogVideoHeight="720"
  ogImage={gif4}
  ogImageType="image/gif"
  ogImageWidth="800"
  ogImageHeight="450"
  ogType={gif4}
  videoFallback={gif4}
  focusX={55}
  focusY={50}
/>));

const adTexts = {
  title: 'Har du dybden, eller sikter du mot stjernene? Liker du fart, og har du energien som trengs?',
  subTitle: 'Vi vokser og søker konsulenter som vil være med på å utgjøre en forskjell!',
  text: (<div className="text-container">
    <p>Acando er et brukerfokusert og teknologidrevet konsulentselskap. Teknologi driver forandring, men det er brukerens evne og ønske til å ta teknologien i bruk som skaper verdi. Vi forstår morgendagens drivkrefter og tilpasser dem dagens forhold. Vi skaper resultater der dagens virkelighet og fremtidens muligheter er i balanse.</p>
    <p>Med teknisk spisskompetanse og inngående innsikt i brukeratferd, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Ved å kombinere innovasjon og erfaring, utgjør vi en forskjell!</p>
    <p>Vi vokser og søker flere konsulenter som drømmer stort og ønsker å gå i dybden sammen med oss.</p>
    <div className="btn-container btn-container__centered">
      <a className="btn btn-link" href="https://www.acando.no/acandonorge/ledige-stillinger/54842/ledige-stillinger">Sjekk ut våre ledige stillinger</a>
    </div>
  </div>)
};


const LandingPageDreamer = withRouter((props) => (
  <LandingPageVideo
    {...props}
    {...adTexts}
    styling={{
      objectPosition: '90% 60%'
    }}
    mp4Url={video3}
    metadata={
      {
        ogSiteName: 'Hva drømmer du om å bli?',
        ogUrl: {video3},
        ogVideoType: 'video/mp4',
        ogTitle: 'Hva drømmer du om å bli?',
        ogDescription: '',
        ogVideoWidth: '1280',
        ogVideoHeight: '720',
        ogImage: {gif3},
        ogImageType: 'image/gif',
        ogImageWidth: '600',
        ogImageHeight: '338',
        ogType: {gif3}
      }
    }
    videoSlogan="Hva drømmer du om å bli?"
    videoSloganType="video-slogan-dreamer"
  />
));

const LandingPageAurora = withRouter((props) => (
  <LandingPageVideo
    {...props}
    {...adTexts}
    styling={{
      objectPosition: '50% 60%'
    }}
    mp4Url={video2}
    metadata={
      {
        ogSiteName: 'Få en lysende fremtid med oss!',
        ogUrl: {video2},
        ogVideoType: 'video/mp4',
        ogTitle: 'Få en lysende fremtid med oss!',
        ogDescription: '',
        ogVideoWidth: '1280',
        ogVideoHeight: '720',
        ogImage: {gif2},
        ogImageType: 'image/gif',
        ogImageWidth: '1280',
        ogImageHeight: '720',
        ogType: {gif2}
      }
    }
    videoSlogan="Få en lysende fremtid med oss!"
    videoSloganType="video-slogan-aurora"
  />
));


const LandingPageDivers = withRouter((props) => (
  <LandingPageVideo
    {...props}
    {...adTexts}
    mp4Url={video4}
    metadata={
      {
        ogSiteName: 'Har du dybden som kreves?',
        ogUrl: {video4},
        ogVideoType: 'video/mp4',
        ogTitle: 'Har du dybden som kreves?',
        ogDescription: '',
        ogVideoWidth: '1280',
        ogVideoHeight: '720',
        ogImage: {gif4},
        ogImageType: 'image/gif',
        ogImageWidth: '800',
        ogImageHeight: '450',
        ogType: {gif4}
      }
    }
    videoSlogan="Har du dybden som kreves?"
    videoSloganType="video-slogan-divers"
  />
));

const LandingPageTunnel = withRouter((props) => (
  <LandingPageVideo
    {...props}
    {...adTexts}
    mp4Url={video1}
    metadata={
      {
        ogSiteName: 'Finn veien med oss!',
        ogUrl: {video1},
        ogVideoType: 'video/mp4',
        ogTitle: 'Finn veien med oss!',
        ogDescription: '',
        ogVideoWidth: '1280',
        ogVideoHeight: '720',
        ogImage: {gif1},
        ogImageType: 'image/gif',
        ogImageWidth: '800',
        ogImageHeight: '450',
        ogType: {gif1}
      }
    }
    videoSlogan="Finn veien med oss!"
    videoSloganType="video-slogan-tunnel"
  />
));



const routes = (
  <div>
    <Route exact path="/" component={LandingPageDreamer} />
    <Route exact path="/gif1" component={Gif1} />
    <Route exact path="/gif2" component={Gif2} />
    <Route exact path="/gif3" component={Gif3} />
    <Route exact path="/gif4" component={Gif4} />
    <Route exact path="/video1" component={Video1} />
    <Route exact path="/video2" component={Video2} />
    <Route exact path="/video3" component={Video3} />
    <Route exact path="/video4" component={Video4} />
    <Route exact path="/tmpvideo3" component={Video3} />
    <Route exact path="/tmpvideo4" component={Video4} />
    <Route exact path="/landingpage" component={LandingPage1} />
    <Route exact path="/landingpagetunnel" component={LandingPageTunnel} />
    <Route exact path="/landingpagedreamer" component={LandingPageDreamer} />
    <Route exact path="/landingpageaurora" component={LandingPageAurora} />
    <Route exact path="/landingpagedivers" component={LandingPageDivers} />
  </div>
);

export default routes;
