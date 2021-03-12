const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));


app.get('/api/RedFlowers', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?filter%5Bflower_color%5D=red&token=Y9sXckxAGaC1yOfpfizascRog15R1porQvOO0Cf4fFM')
  .then(res => res.json())
  .then(data => response.json(data));
})


app.post('/api/PlantID', (request, response) => {
  console.log(request.body)
})

