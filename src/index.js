import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import VideoAd from 'components/ads/video-ad';
import GifAd from 'components/ads/gif-ad';
import './css/main.scss';
import sampleVideo from 'videos/video1.mp4';
import gif1 from 'images/ocean.gif';
import gif2 from 'images/ocean2.gif';

const Gif1 = withRouter((props) => (<GifAd
  {...props}
  imageUrl={gif1}
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

const Video1 = withRouter((props) => (<VideoAd
  {...props}
  mp4Url={sampleVideo}
  videoSlogan="Dette er tekst som vekker følelser"
  ogSiteName="first video test"
  ogUrl={sampleVideo}
  ogVideoType="video/mp4"
  ogTitle="This is a video, yay"
  ogDescription="This is a longer description of the video."
  ogVideoWidth="1280"
  ogVideoHeight="720"
/>));


export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Video1} />
          <Route exact path="/gif1" component={Gif1} />
          <Route exact path="/gif2" component={Gif2} />
          <Route exact path="/video1" component={Video1} />
        </Switch>
      </div>
    );
  }
}
