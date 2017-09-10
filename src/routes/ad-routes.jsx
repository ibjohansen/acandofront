import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import LandingPage1 from 'components/landing-page/landing-page-1';
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
      <h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>
    </div>
  </Link>}
  sloganStyling={{bottom: '10%'}}
  // 50% is default
  backgroundPositionX="50%"
  backgroundPositionY="50%"
  ogTitle="Hva drømmer du om å bli?"
  ogDescription="Hva drømmer du om å bli?"
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
  slogan={<Link to="/landingpage"><h1 className="some-custom-classname">Hva drømmer du om å bli?</h1></Link>}
  sloganStyling={{top: '10%', right: '2%', maxWidth: '300px'}}
  // 50% is default
  backgroundPositionX="10%"
  backgroundPositionY="20%"
  ogSiteName="Acando"
  ogUrl={gif2}
  ogImage={gif2}
  ogImageType="image/gif"
  ogType={gif2}
  ogTitle="this is number 2"
  ogDescription="This is a gif of an ocean"
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
  ogImageWidth="1280"
  ogImageHeight="720"
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
  ogImageWidth="1280"
  ogImageHeight="720"
/>));

// VideoSlogan can contain a Link to proper landing page.
const Video1 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video1}
  imageUrl={poster1}
  slogan={<Link to="/landingpage"><h1 className="some-custom-classname">Dette er tekst som vekker følelser</h1></Link>}
  sloganStyling={{bottom: '10%', left: '2%'}}
  ogSiteName="Acando"
  ogUrl={video1}
  ogVideoType="video/mp4"
  ogTitle="This is a video, yay"
  ogDescription="This is a longer description of the video."
  ogVideoWidth="1280"
  ogVideoHeight="720"
  videoFallback={gif1}
/>));

// VideoSlogan can contain a Link to proper landing page.
const Video2 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video2}
  imageUrl={poster2}
  slogan={<Link to="/landingpage">
    <div className="slogan-text-container">
      <h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>
    </div>
  </Link>}
  sloganStyling={{bottom: '10%'}}
  ogSiteName="Acando"
  ogUrl={video2}
  ogVideoType="video/mp4"
  ogTitle="This is a video, yay"
  ogDescription="This is a longer description of the video."
  ogVideoWidth="1280"
  ogVideoHeight="720"
  videoFallback={gif2}
/>));

const Video3 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video3}
  imageUrl={poster3}
  slogan={<Link to="/landingpage">
    <div className="slogan-text-container">
      <h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>
    </div>
  </Link>}
  sloganStyling={{bottom: '10%'}}
  ogSiteName="Hva drømmer du om å bli?"
  ogUrl={video3}
  ogVideoType="video/mp4"
  ogTitle="Hva drømmer du om å bli?"
  ogDescription=""
  ogVideoWidth="1280"
  ogVideoHeight="720"
  videoFallback={gif3}
  focusX={80}
  focusY={50}
/>));

const Video4 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={video4}
  imageUrl={poster4}
  slogan={<Link to="/landingpage">
    <div className="slogan-text-container">
      <h1 className="some-custom-classname">Har du dybden som kreves?</h1>
    </div>
  </Link>}
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
  ogType={gif4}
  videoFallback={gif4}
  focusX={55}
  focusY={50}
/>));


const routes = (
  <div>
    <Route exact path="/" component={Video1} />
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
  </div>
);

export default routes;
