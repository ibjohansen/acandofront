const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '/public')));

const ClientStatsPath = path.join(__dirname, './public/stats.json');
const ServerRendererPath = path.join(__dirname, './public/js/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.use(ServerRenderer(Stats));

app.listen(app.get('port'));
