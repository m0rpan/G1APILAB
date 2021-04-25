const { response } = require('express');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
const fetch = require('node-fetch');
app.use(express.json( {limit: '1mb'}));

//example 1
app.get(`/api`, async (request, response) =>{
    
    const api_url = "https://trefle.io/api/v1/plants?token=0KQjJWrg0Rz3iVgO5oV4xjhqo_8VKAqkYFl17ObAV6M";
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json();
    response.json(json);
});