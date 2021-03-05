const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

//Example 1, get data about plants with hight between 5cm & 20cm
app.get('/api/PlantsSize', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20&token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY')
  .then(res => res.json())
  .then(data => response.json(data));
})






//Example 2 
app.get('/api/PlantsEdible', (request,response)=>{
  fetch('https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY')
  .then(res => res.json())
  .then(data => response.json(data));
})


app.post('/api/PlantID', (request, response) => {
  console.log(request.body)
 /* fetch('https://trefle.io/api/v1/species/'+request.id + '&token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY')
  .then(res => res.json())
  .then(data => response.json(data));*/
})

