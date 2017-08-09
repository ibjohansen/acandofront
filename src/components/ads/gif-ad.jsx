import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';


const urlPrefix = process.env.NODE_ENV === 'production' ? 'https://magic-dreams.herokuapp.com' : '';

class GifAd extends React.Component {
  render() {
    const { imageUrl, imageSlogan, backgroundPositionX, backgroundPositionY, headTitle, ogSiteName, location, ogTitle, ogDescription, ogType, ogImage, ogImageWidth, ogImageHeight } = this.props;

    const gifStyling = {
      backgroundImage: `url("${imageUrl}")`,
      backgroundPositionX,
      backgroundPositionY
    };
    /*eslint-disable react/self-closing-comp*/
    return (
      <div className="media-ad-container">
        <Helmet>
          <title>{headTitle}</title>
          <meta property="og:site_name" content={ogSiteName} ></meta>
          <meta property="og:url" content={`${urlPrefix}${location.pathname}`} ></meta>
          <meta property="og:title" content={ogTitle} ></meta>
          <meta property="og:description" content={ogDescription} ></meta>
          <meta property="og:type" content={ogType} ></meta>
          <meta property="og:image" content={`${urlPrefix}${ogImage}`} ></meta>
          <meta property="og:image:width" content={ogImageWidth} ></meta>
          <meta property="og:image:height" content={ogImageHeight} ></meta>
        </Helmet>
        <div className="gif-slogan">
          <h1>{imageSlogan}</h1>
        </div>
        <div className="gif-container" style={gifStyling} />
      </div>
    );
    /*eslint-enable react/self-closing-comp*/
  }
}

GifAd.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageSlogan: PropTypes.string.isRequired,
  backgroundPositionX: PropTypes.string,
  backgroundPositionY: PropTypes.string,
  headTitle: PropTypes.string,
  ogSiteName: PropTypes.string,
  location: PropTypes.any,
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
