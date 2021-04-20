const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

//example 1: trying to get the height
app.get('/api/plantheight', (request,response)=>{
    fetch('https://trefle.io/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20&token=Xz3zPU0yxTlTQgPCL65vqZQP98wTLL2ETe70d2MsmUE')
    .then(res => res.json())
    .then(data => response.json(data));
  });



    //prototype
app.get('/api/zone distribution', (request,response)=>{
    fetch('https://trefle.io/api/v1/distributions?token=Xz3zPU0yxTlTQgPCL65vqZQP98wTLL2ETe70d2MsmUE')
    .then(res => res.json())
    .then(data => response.json(data));
  });