const express = require('express');
const app = express();

app.use(express.static('static'));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Magic dreams is running on port', app.get('port'));
});