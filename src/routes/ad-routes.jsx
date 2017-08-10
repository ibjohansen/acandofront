import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import VideoAd from 'components/video-ad/video-ad';
import GifAd from 'components/gif-ad/gif-ad';
import sampleVideo from 'videos/tunnel.mp4';
import sampleVideo2 from 'videos/auroraborealis.mp4';
import gif1 from 'images/ocean.gif';
import gif2 from 'images/ocean2.gif';
import poster1 from 'images/poster1.jpg';

const Gif1 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif1}
  slogan={<h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>}
  sloganStyling={{bottom: '10%', left: '2%', maxWidth: '300px'}}
  // 50% is default
  backgroundPositionX="50%"
  backgroundPositionY="50%"
  ogSiteName="first gif test"
  ogUrl={gif1}
  ogImage={gif1}
  ogType="video.webm"
  ogTitle="OceanGif yay"
  ogDescription="This is a gif of an ocean"
  ogImageWidth="497"
  ogImageHeight="373"
/>));

const Gif2 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif2}
  slogan={<h1 className="some-custom-classname">Hva drømmer du om å bli?</h1>}
  sloganStyling={{top: '10%', right: '2%', maxWidth: '300px'}}
  // 50% is default
  backgroundPositionX="10%"
  backgroundPositionY="20%"
  ogSiteName="second gif test"
  ogUrl={gif2}
  ogImage={gif2}
  ogType={gif2}
  ogTitle="this is number 2"
  ogDescription="This is a gif of an ocean"
  ogImageWidth="500"
  ogImageHeight="717"
/>));

// VideoSlogan can contain a Link to proper landing page.
const Video1 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={sampleVideo}
  imageUrl={poster1}
  slogan={<h1 className="some-custom-classname">Dette er tekst som vekker følelser</h1>}
  sloganStyling={{top: '50%', left: '2%', maxWidth: '300px'}}
  ogSiteName="first video test"
  ogUrl={sampleVideo}
  ogVideoType="video/mp4"
  ogTitle="This is a video, yay"
  ogDescription="This is a longer description of the video."
  ogVideoWidth="1280"
  ogVideoHeight="720"
/>));

// VideoSlogan can contain a Link to proper landing page.
const Video2 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={sampleVideo2}
  imageUrl={poster1}
  slogan={<h1 className="some-custom-classname">Dette er tekst som vekker følelser</h1>}
  sloganStyling={{bottom: '10%', left: '2%', maxWidth: '320px'}}
  ogSiteName="first video test"
  ogUrl={sampleVideo2}
  ogVideoType="video/mp4"
  ogTitle="This is a video, yay"
  ogDescription="This is a longer description of the video."
  ogVideoWidth="1280"
  ogVideoHeight="720"
/>));


const routes = (
  <div>
    <Route exact path="/" component={Video1} />
    <Route exact path="/gif1" component={Gif1} />
    <Route exact path="/gif2" component={Gif2} />
    <Route exact path="/video1" component={Video1} />
    <Route exact path="/video2" component={Video2} />
  </div>
);

export default routes;
