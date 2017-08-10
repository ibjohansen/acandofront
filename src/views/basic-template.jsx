export default ({ markup, helmet }) => {
  return `<!doctype html>
    <html ${helmet.htmlAttributes.toString()} prefix="og: http://ogp.me/ns#">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${markup}</div>
      <script src="/js/bundle.js" async></script>
    </body>
    </html>`;
};
