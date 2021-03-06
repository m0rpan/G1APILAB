const { response } = require('express');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
const fetch = require('node-fetch');
app.use(express.json( {limit: '1mb'}));

const apiToken = '0KQjJWrg0Rz3iVgO5oV4xjhqo_8VKAqkYFl17ObAV6M';
const baseUrl = "https://trefle.io"
//example 1(index.htm;) fetching the common name og the plants
app.get(`/api`, async (request, response) =>{
    
    const api_url = `${baseUrl}/api/v1/plants?token=0KQjJWrg0Rz3iVgO5oV4xjhqo_8VKAqkYFl17ObAV6M`;
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json();
    response.json(json);
});

//example 2 (index2.html) fetching the genus. Added a query at the end to get the genus of the searched for plant
app.get(`/search`, async (request, response) =>{
    
    const api_url = `${baseUrl}/api/v1/plants/search?token=${apiToken}&q=${request.query.searchText}`;
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json();
    response.json(json);
});

//prototype fetching the distrubution data of the api
app.get(`/prototype`, async (request, response) =>{
    
    const api_url = `${baseUrl}/api/v1/distributions?token=${apiToken}`;
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json();
    response.json(json);

    
});