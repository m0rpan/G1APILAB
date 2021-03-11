const fetch = require('node-fetch');
const express = require('express');


const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

//EXPERIMENT 1, get data about plants with hight between 5cm & 20cm
app.get('/api/PlantsSize', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20&token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY')
  .then(res => res.json())
  .then(data => response.json(data));
})


//EXPERIMENT  2 
app.get('/api/PlantsTemp', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY&range[minimum_temperature_deg_c]=5,30')
  .then(res => res.json())
  .then(data => response.json(data));
})


app.post('/api/PlantID', (request, response) => {
  fetch('https://trefle.io/api/v1/species/'+request.body.id + '?token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY')
  .then(res => res.json())
  .then(data => {
    response.json(data);
  }); 
  
})

// PROTOTYPE
// Data about plants that does not have minimum_temperature=null
app.get('/api/FilterOutNull', (request,response)=>{
  fetch('https://trefle.io/api/v1/plants?token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY&filter_not[minimum_temperature_deg_c]=null')
  .then(res => res.json())
  .then(data => response.json(data));
})



