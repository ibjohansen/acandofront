import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoAd from 'components/ads/video-ad';
import GifAd from 'components/ads/gif-ad';
import './css/main.scss';

const Gif1 = () => (<GifAd
  imageUrl="images/ocean.gif"
  // 50% is default
  backgroundPositionX="50%"
  backgroundPositionY="50%"
  ogSiteName="first gif test"
  ogUrl="/images/ocean.gif"
  ogImage="/images/ocean.gif"
  ogType="video.webm"
  ogTitle="OceanGif yay"
  ogDescription="This is a gif of an ocean"
  ogImageWidth="497"
  ogImageHeight="373"
/>);

const Gif2 = () => (<GifAd
  imageUrl="images/ocean2.gif"
  // 50% is default
  backgroundPositionX="10%"
  backgroundPositionY="20%"
  ogSiteName="second gif test"
  ogUrl="/images/ocean2.gif"
  ogImage="/images/ocean2.gif"
  ogType="video.webm"
  ogTitle="this is number 2"
  ogDescription="This is a gif of an ocean"
  ogImageWidth="500"
  ogImageHeight="717"
/>);


export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={VideoAd} />
          <Route exact path="/gif1" component={Gif1} />
          <Route exact path="/gif2" component={Gif2} />
        </Switch>
      </div>
    );
  }
}
