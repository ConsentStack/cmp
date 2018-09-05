require('dotenv').config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const cookieParser = require('cookie-parser');
const cmp = require('./routes/cmp');
const api = require('./routes/api');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cookieParser());
app.use('/cmp', cmp);
app.use('/api', api);
app.use(express.static('dist'));
app.use(express.static('public'));

// fire up the server
app.listen(PORT, () => {
  console.log(`CMP++ :: ExpressServer --> Mode : ${process.env.NODE_ENV}`);
  console.log(`CMP++ :: ExpressServer --> NodeV :  ${process.version}`); // TODO: node v9.8.0 -> needs to be updated
  console.log(`CMP++ :: ExpressServer --> Port : ${PORT}`);
});
