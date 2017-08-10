import React from 'react';
import PropTypes from 'prop-types';
import MediaAd from 'components/media-ad/media-ad';
import './_gif-ad.scss';

class GifAd extends React.Component {
  render() {
    const { imageUrl, backgroundPositionX, backgroundPositionY} = this.props;

    const gifStyling = {
      backgroundImage: `url("${imageUrl}")`,
      backgroundPositionX,
      backgroundPositionY
    };

    return (
      <MediaAd {...this.props}>
        <div className="gif-container" style={gifStyling} />
      </MediaAd>
    );
  }
}

GifAd.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  slogan: PropTypes.object.isRequired,
  sloganStyling: PropTypes.object,
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
  backgroundPositionX: '50%',
  backgroundPositionY: '50%'
};

export default GifAd;
