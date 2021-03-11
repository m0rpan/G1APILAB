const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

//EX 2
app.get('/api/coconutSpecies', (request,response)=>{
    fetch('https://trefle.io/api/v1/species/search?q=coconut&token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY')
    .then(res => res.json())
    .then(data => response.json(data));
  })
  
  app.post('/api/coconutSpecies', (request, response) => {
    console.log(request.body)
  })