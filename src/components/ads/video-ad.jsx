import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const urlPrefix = process.env.NODE_ENV === 'production' ? 'https://magic-dreams.herokuapp.com' : '';

class VideoAd extends React.Component {
  render() {
    const { mp4Url, webmUrl, videoSlogan, headTitle, ogSiteName, location, ogTitle, ogDescription, ogVideoType, ogVideoWidth, ogVideoHeight } = this.props;

    /*eslint-disable react/self-closing-comp*/
    return (
      <div className="media-ad-container">
        <Helmet>
          <title>{headTitle}</title>
          <meta property="og:site_name" content={ogSiteName} ></meta>
          <meta property="og:type" content="video" ></meta>
          <meta property="og:url" content={`${urlPrefix}${location.pathname}`} ></meta>
          <meta property="og:title" content={ogTitle} ></meta>
          <meta property="og:description" content={ogDescription} ></meta>
          <meta property="og:video" content={`${urlPrefix}/${mp4Url}`} ></meta>
          <meta property="og:video:secure_url" content={`${urlPrefix}${mp4Url}`} ></meta>
          <meta property="og:video:type" content={ogVideoType} ></meta>
          <meta property="og:video:width" content={ogVideoWidth} ></meta>
          <meta property="og:video:height" content={ogVideoHeight} ></meta>
        </Helmet>
        <div className="video-slogan">
          <h1>{videoSlogan}</h1>
        </div>
        <video className="video-bg" preload="meta" autoPlay={true}>
          {mp4Url && (
            <source
              src={mp4Url}
              type="video/mp4"
            />
          )}
          {webmUrl && (
            <source
              src={webmUrl}
              type="video/webm"
            />
          )}
          <span>Your browser does not support HTML5 video tag.</span>
        </video>
      </div>
    );
    /*eslint-enable react/self-closing-comp*/
  }
}

VideoAd.propTypes = {
  location: PropTypes.any,
  mp4Url: PropTypes.string,
  webmUrl: PropTypes.string,
  videoSlogan: PropTypes.string,
  headTitle: PropTypes.string,
  ogSiteName: PropTypes.string,
  ogUrl: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogVideoType: PropTypes.string,
  ogVideoWidth: PropTypes.string,
  ogVideoHeight: PropTypes.string
};

export default VideoAd;
