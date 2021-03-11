const fetch = require('node-fetch');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listen at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'}));

//soil_humidity value for 0
app.get('/api/humidityValue' + numberInput, (request,response)=>{
    fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=0')
    .then(res => res.json())
    .then(data => response.json(data));
  })

//soil_humidity value for 1
app.get('/api/humidityValue' + numberInput, (request,response)=>{
  fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=1')
  .then(res => res.json())
  .then(data => response.json(data));
})

//soil_humidity value for 2
app.get('/api/humidityValue' + numberInput, (request,response)=>{
    fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=2')
    .then(res => res.json())
    .then(data => response.json(data));
  })

//soil_humidity value for 3
app.get('/api/humidityValue' + numberInput, (request,response)=>{
  fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=3')
  .then(res => res.json())
  .then(data => response.json(data));
})

//soil_humidity value for 4
app.get('/api/humidityValue' + numberInput, (request,response)=>{
    fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=4')
    .then(res => res.json())
    .then(data => response.json(data));
  })

//soil_humidity value for 5
app.get('/api/humidityValue' + numberInput, (request,response)=>{
  fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=5')
  .then(res => res.json())
  .then(data => response.json(data));
})

//soil_humidity value for 6
app.get('/api/humidityValue' + numberInput, (request,response)=>{
    fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=6')
    .then(res => res.json())
    .then(data => response.json(data));
  })

//soil_humidity value for 7
app.get('/api/humidityValue' + numberInput, (request,response)=>{
  fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=7')
  .then(res => res.json())
  .then(data => response.json(data));
})

//soil_humidity value for 8
app.get('/api/humidityValue' + numberInput, (request,response)=>{
    fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=8')
    .then(res => res.json())
    .then(data => response.json(data));
  })

//soil_humidity value for 9
app.get('/api/humidityValue' + numberInput, (request,response)=>{
  fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=9')
  .then(res => res.json())
  .then(data => response.json(data));
})

//soil_humidity value for 10
app.get('/api/humidityValue' + numberInput, (request,response)=>{
    fetch('https://trefle.io/api/v1/species?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY&filter[soil_humidity]=10')
    .then(res => res.json())
    .then(data => response.json(data));
  })
