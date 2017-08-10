import React from 'react';
import Helmet from 'react-helmet';
import './_media-ad.scss';

const urlPrefix = process.env.NODE_ENV === 'production' ? 'https://magic-dreams.herokuapp.com' : '';
const cacheBusting = `?bust=${new Date().getTime()}`;

const MediaAd = (Ad) => {
  // General properties.
  const { imageUrl, slogan, sloganStyling, headTitle, ogSiteName, location, ogTitle, ogDescription, ogType } = Ad;
  // Properties of a video ad
  const { mp4Url, ogVideoType, ogVideoWidth, ogVideoHeight } = Ad;
  // Properties of a gif ad
  const { ogImage, ogImageWidth, ogImageHeight } = Ad;
  /* Need to avoid using selv-closing tags on the meta tags, because for some reason they 
     caused errors with facebook share. */
  /*eslint-disable react/self-closing-comp*/
  return (
    <div className="media-ad-container">
      <Helmet>
        <title>{headTitle}</title>
        {/* Open graph */}
        <meta property="og:site_name" content={ogSiteName} ></meta>
        <meta property="og:type" content="video" ></meta>
        <meta property="og:url" content={`${urlPrefix}${location.pathname}${cacheBusting}`} ></meta>
        <meta property="og:title" content={ogTitle} ></meta>
        <meta property="og:description" content={ogDescription} ></meta>
        <meta property="og:type" content={ogType} ></meta>
        {imageUrl && (
          <meta property="og:image" content={`${urlPrefix}${imageUrl}${cacheBusting}`} ></meta>
        )}
        {mp4Url && (
          <meta property="og:video" content={`${urlPrefix}${mp4Url}${cacheBusting}`} ></meta>
        )}
        {mp4Url && (
          <meta property="og:video:secure_url" content={`${urlPrefix}${mp4Url}${cacheBusting}`} ></meta>
        )}
        {ogVideoType && (
          <meta property="og:video:type" content={ogVideoType} ></meta>
        )}
        {ogVideoWidth && (
          <meta property="og:video:width" content={ogVideoWidth} ></meta>
        )}
        {ogVideoHeight && (
          <meta property="og:video:height" content={ogVideoHeight} ></meta>
        )}
        {ogImage && (
          <meta property="og:image" content={`${urlPrefix}${ogImage}${cacheBusting}`} ></meta>
        )}
        {ogImageWidth && (
          <meta property="og:image:width" content={ogImageWidth} ></meta>
        )}
        {ogImageHeight && (
          <meta property="og:image:height" content={ogImageHeight} ></meta>
        )}
        
        {/* Twitter */}
        {mp4Url && (
          <meta name="twitter:card" content="player" />
        )}
        {(!mp4Url && imageUrl) && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
        
        <meta name="twitter:site" content="@AcandoNorge" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={`${urlPrefix}${imageUrl}${cacheBusting}`} />
        <meta name="twitter:player" content={`${urlPrefix}${location.pathname}${cacheBusting}`} />
        <meta name="twitter:player:width" content={ogVideoWidth} />
        <meta name="twitter:player:height" content={ogVideoHeight} />
        <meta name="twitter:player:stream" content={`${urlPrefix}${mp4Url}${cacheBusting}`} />
        <meta name="twitter:player:stream:content_type" content={ogVideoType} />
        
      </Helmet>
      <div className="slogan" style={sloganStyling}>
        {slogan}
      </div>
      {Ad.children}
    </div>
  );
/*eslint-enable react/self-closing-comp*/
};

export default MediaAd;
