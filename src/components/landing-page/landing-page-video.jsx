import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const urlPrefix = process.env.NODE_ENV === 'production' ? 'https://magic-dreams.herokuapp.com' : '';
const cacheBusting = `?bust=${new Date().getTime()}`;

const LandingPageVideo = ({location, mp4Url, title, subTitle, text, styling, videoSlogan, videoSloganType, metadata}) => {
  // General properties.
  const { ogSiteName, ogTitle, ogDescription } = metadata;
  // Properties of a video ad
  const { ogVideoType, ogVideoWidth, ogVideoHeight } = metadata;
  // Properties of a gif ad
  const { ogImage, ogImageWidth, ogImageHeight } = metadata;
  
  /*eslint-disable react/self-closing-comp*/
  return (
    <div className="landing-page-video">
      <Helmet
        meta={[
          { property: 'og:site_name', content: ogSiteName },
          { property: 'og:type', content: 'video' },
          { property: 'og:url', content: `${urlPrefix}${location.pathname}${cacheBusting}` },
          { property: 'og:title', content: ogTitle },
          { property: 'og:description', content: ogDescription },
          { property: 'og:type', content: 'article' },
          { property: 'og:video', content: `${urlPrefix}${mp4Url}${cacheBusting}` },
          { property: 'og:video:secure_url', content: `${urlPrefix}${mp4Url}${cacheBusting}` },
          { property: 'og:video:type', content: ogVideoType },
          { property: 'og:video:width', content: ogVideoWidth },
          { property: 'og:video:height', content: ogVideoHeight },
          { property: 'og:image', content: `${urlPrefix}${ogImage}${cacheBusting}` },
          { property: 'og:image:width', content: ogImageWidth },
          { property: 'og:image:height', content: ogImageHeight }
        ]}
      >
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
            controls={false}
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
  /*eslint-enable react/self-closing-comp*/
};

LandingPageVideo.propTypes = {
  mp4Url: PropTypes.any,
  videoSlogan: PropTypes.string,
  videoSloganType: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.object,
  styling: PropTypes.object,
  metadata: PropTypes.object,
  location: PropTypes.any
};

export default LandingPageVideo;
