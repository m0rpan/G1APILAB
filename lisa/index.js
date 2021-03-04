
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

const fetch = require('node-fetch');

(async () => { 
  const response = await fetch('https://trefle.io/api/v1/plants?token=RLDwZa0xCVzkqz0Ho4s_8IkuIy0bMSdwTTYJh64fNCY');
  const json = await response.json();
  console.log(json);
})(); 


