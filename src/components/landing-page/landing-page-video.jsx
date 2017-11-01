import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const LandingPageVideo = ({mp4Url, title, subTitle, text}) => {
  return (
    <div className="landing-page-2">
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
          >
            <source
              src={mp4Url}
              type="video/mp4"
            />
            <span>Your browser does not support HTML5 video tag.</span>
          </video>
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
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.object
};

export default LandingPageVideo;
