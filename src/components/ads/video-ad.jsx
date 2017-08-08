import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

class VideoAd extends React.Component {
  render() {
    const { headTitle, ogSiteName, ogUrl, ogTitle, ogDescription, ogType, ogImage, ogImageWidth, ogImageHeight } = this.props;

    return (
      <div className="media-ad-container">
        <Helmet>
          <title>{headTitle}</title>
          <meta property="og:site_name" content={ogSiteName} />
          <meta property="og:url" content={ogUrl} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:type" content={ogType} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content={ogImageWidth} />
          <meta property="og:image:height" content={ogImageHeight} />
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

VideoAd.propTypes = {
  headTitle: PropTypes.string,
  ogSiteName: PropTypes.string,
  ogUrl: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  ogImageWidth: PropTypes.string,
  ogImageHeight: PropTypes.string
};

export default VideoAd;
