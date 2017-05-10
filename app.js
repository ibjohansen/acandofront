const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/static', {index: 'index.html'}));

app.listen(3000, () => {
  initApp(db, store).then(() => {
    console.log('acando-dreams listening on port 3000!') //eslint-disable-line no-console
  });
});
