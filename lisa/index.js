const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));



//EX 1
app.get('/api/redPlants', (request,response)=>{
  fetch('https://trefle.io/api/v1/species?filter%5Bflower_color%5D=red&token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY')
  .then(res => res.json())
  .then(data => response.json(data));
})




//EX 2
app.get('/api/max10', (request,response)=>{
  fetch('https://trefle.io/api/v1/distributions?range%5Bspecies_count%5D=%2C10&token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY')
  .then(res => res.json())
  .then(data => response.json(data));
})

app.post('/api/max10', (request, response) => {
  console.log(request.body)
})


