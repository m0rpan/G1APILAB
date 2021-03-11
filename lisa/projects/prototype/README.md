# Prototype
# Humidity
This prototype is based on a api from _trefle.io_. The user puts in a number between 0-10 in the input box. These numbers represents the humidity-level. When they put in a number they get a list of plants that fit that humidity-level. By doing this it simulates the usage of the big device from our project, which is a device that measures sunlight, humidity and temperature and depending on what value the devices gathers the user will see plants on the screen that are suitable for the environment the user put the device in.
The data is gathered through filtering with [soil_humidity].

Unfortunately I was not able to make the prototype fully work because the API is not working. My cod is working as it should but the API is not available because trefle.io is a beta version, therefore not fully developed. 

To be able to finish this example I took help from Peter Tolstrup lectures and the coding train's module "Working with Data and APIs in JavaScript" from youtube. I also got help from Taner Olcay and


## Installation
For this API you need to install the dependencies required to run the site. 
This is how you do it in VS CODE:
1. Open terminal
2. Open the current environment in the terminal
3. Type _npm install_  

It's necessary to have a personal token to be able to use this API. You can get a personal token by creating an account on [trefle.io](https://trefle.io/) website. 

## How To Use
1. Open your terminal
2. Navigate to _prototype_
3. start the server by typing _node index.js_
4. Open you browser and typ _http://localhost:3000/_