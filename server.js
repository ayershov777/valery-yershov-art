const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');
require('./config/aws');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(logger('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use('/api/v1/photos', require('./routes/photos'));
app.use('/api/v1/collections', require('./routes/collections'));
app.use('/api/v1/works', require('./routes/works'));
app.use('/api/v1/exhibitions', require('./routes/exhibitions'));
app.use('/api/v1/pages', require('./routes/pages'));
    
    app.use('/api/v1/videos', require('./routes/videos'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = app.get('port');
app.listen(port, () => {
  console.log(`express listening from port ${port}`);
});