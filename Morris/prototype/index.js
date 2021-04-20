const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

app.get('/api/PlantsSize', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20&token=Y9sXckxAGaC1yOfpfizascRog15R1porQvOO0Cf4fFM')
  .then(res => res.json())
  .then(data => response.json(data));
})






app.get('/api/RedFlowers', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?filter_not[light]=null&token=Y9sXckxAGaC1yOfpfizascRog15R1porQvOO0Cf4fFM')
  .then(res => res.json())
  .then(data => response.json(data));
})


app.post('/api/PlantID', (request, response) => {
  fetch('https://trefle.io/api/v1/species/'+request.body.id + '?token=Y9sXckxAGaC1yOfpfizascRog15R1porQvOO0Cf4fFM')
  .then(res => res.json())
  .then(data => {
    response.json(data);
  }); 
  
})