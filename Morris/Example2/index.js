const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

//Example 1, get data about plants with hight between 5cm & 20cm
app.get('/api/Plants1', (request,response)=>{
  fetch('https://trefle.io/api/v1/species/search?q=coconut&token=Y9sXckxAGaC1yOfpfizascRog15R1porQvOO0Cf4fFM')
  .then(res => res.json())
  .then(data => response.json(data));
})

app.post('/api/PlantID', (request, response) => {
  console.log(request.body)
})

