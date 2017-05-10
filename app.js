const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(3000, () => {
  console.log('magic-dreams listening on port 3000!') //eslint-disable-line no-console
});
