const express = require('express');
const logger = require('morgan');
const path = require('path');

require('dotenv').config();
require('./config/database');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());
app.use(logger('dev'));

app.use('/api/v1/collections', require('./routes/collections'));
app.use('/api/v1/works', require('./routes/works'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = app.get('port');
app.listen(port, () => {
  console.log(`express listening from port ${port}`);
});