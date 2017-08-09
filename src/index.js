import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoAd from 'components/ads/video-ad';
import GifAd from 'components/ads/gif-ad';
import './css/main.scss';
import sampleVideo from 'videos/video1.mp4';
import gif1 from 'images/ocean.gif';
import gif2 from 'images/ocean2.gif';

const Gif1 = () => (<GifAd
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
/>);

const Gif2 = () => (<GifAd
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
/>);

const Video1 = () => (<VideoAd
  mp4Url={sampleVideo}
  backgroundPositionX="50%"
  backgroundPositionY="50%"
  ogSiteName="first video test"
  ogUrl={sampleVideo}
  ogImage={sampleVideo}
  ogType="video/webm"
  ogTitle="Video ad with ocean image yay"
  ogDescription="This is a gif of an ocean"
  ogImageWidth="497"
  ogImageHeight="373"
/>);


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
