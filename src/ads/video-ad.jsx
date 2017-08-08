import React from 'react';
import Helmet from 'react-helmet';

class VideoAd extends React.Component {
  render() {
    return (
      <div className="video-ad-container">
        <Helmet>
          <title>VideoAd</title>
          <meta property="og:site_name" content="Acando ad" />
          <meta property="og:url" content="http://magic-dreams.herokuapp.com/sample_gif.gif" />
          <meta property="og:title" content="Magic dreams title" />
          <meta property="og:description" content="This is just a simple test<" />
          <meta property="og:type" content="video.webm" />
          <meta property="og:image" content="http://magic-dreams.herokuapp.com/sample_gif.gif" />
          <meta property="og:image:width" content="346" />
          <meta property="og:image:height" content="260" />
        </Helmet>
        <video className="video-bg" preload="meta" autoPlay={true}>
          {/*<source
            src="SampleVideo_1280x720_1mb.mp4"
            type="video/mp4"
          />*/}
          <source
            src="video.webm"
            type="video/webm"
          />
          <span>Your browser does not support HTML5 video tag.</span>
        </video>
      </div>
    );
  }
}

export default VideoAd;
