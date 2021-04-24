const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
const fetch = require('node-fetch');
app.use(express.json( {limit: '1mb'}));