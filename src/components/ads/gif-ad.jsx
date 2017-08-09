import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

class GifAd extends React.Component {
  render() {
    const { imageUrl, imageSlogan, backgroundPositionX, backgroundPositionY, headTitle, ogSiteName, ogUrl, ogTitle, ogDescription, ogType, ogImage, ogImageWidth, ogImageHeight } = this.props;

    const gifStyling = {
      backgroundImage: `url("${imageUrl}")`,
      backgroundPositionX,
      backgroundPositionY
    };
    
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
        <div className="gif-slogan">
          <h1>{imageSlogan}</h1>
        </div>
        <div className="gif-container" style={gifStyling} />
      </div>
    );
  }
}

GifAd.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageSlogan: PropTypes.string.isRequired,
  backgroundPositionX: PropTypes.string,
  backgroundPositionY: PropTypes.string,
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

GifAd.defaultProps = {
  imageSlogan: 'Put some text here',
  backgroundPositionX: '50%',
  backgroundPositionY: '50%'
};

export default GifAd;
