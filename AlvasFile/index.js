const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

app.post('/api', (request, response)=> {
  console.log(request.body);
  response.json({
    status: 'the request was a success'
  })
});



app.get('/api/Plants', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20&token=tPkth5TH6pRDS6z3Ug7wb3JPeH-veqxTjiRiYnZwDeY')
  .then(res => res.json())
  .then(data => response.json(data));
})

