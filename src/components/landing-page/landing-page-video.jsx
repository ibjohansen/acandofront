import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const LandingPageVideo = ({mp4Url, title, subTitle, text, styling, videoSlogan, videoSloganType}) => {
  return (
    <div className="landing-page-video">
      <Helmet>
        <body className="is-landing-page" />
      </Helmet>
      <div className="">
        <div className="video-banner-container">
          <video className="video-banner" preload="metadata"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            style={styling}
          >
            <source
              src={mp4Url}
              type="video/mp4"
            />
            <span>Your browser does not support HTML5 video tag.</span>
          </video>
          <div className="video-text-overlay">
            <div className={`video-slogan ${videoSloganType}`}>
              {videoSlogan}
            </div>
          </div>
          <div className="video-pointer-overlay">
            <div className="video-pointer-overlay__left" />
            <div className="video-pointer-overlay__right" />
          </div>
        </div>
        <div className="container">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          {text}
        </div>
      </div>
    </div>
  );
};

LandingPageVideo.propTypes = {
  mp4Url: PropTypes.any,
  videoSlogan: PropTypes.string,
  videoSloganType: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.object,
  styling: PropTypes.object
};

export default LandingPageVideo;
