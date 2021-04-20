# Prototype
## Filtering plants by required Sunlight
 THis Prototype is based on the API Trefle, acsessible at [trefle.io](https://trefle.io/) while referencing [Plant Fields] (https://docs.trefle.io/docs/advanced/plants-fields) and [Search for a plant](https://docs.trefle.io/reference/#operation/searchPlants) in the trefle docs.
 The goal of this prototype was to allow the user to search for plants that were suitable for their acsess to sunlight by filtering by [light], a scale of 0 to 10 where 0 represents <= 10 Lux and 10 representing 100 000 Lux.

 The idea was that this combined with Alvas and Lisas prototypes would be able to simulate all inputs and responses required by our concept but sadly I was not able to get it to work properly, I suspect something with getIndividualPlant(id) or how I handle the data is causing the issue but due to limited time I have not been able to look further into it
 
To build this program I have mainly referenced the Trefle docs and The Coding Trains playlist "Working with Data and APIs in JavaScript" on youtube together with help from my groupmates.
 
## Installation
For this API you need to install the dependencies required to run the site. 
This is how you do it in VS CODE:
1. Open terminal
2. Open the current environment in the terminal
3. Type _npm install_  
 
It's necessary to have a personal token to be able to use this API. You can get a personal token by creating an account on [trefle.io](https://trefle.io/) webbsite. 
 
## How To Use
1. Open your terminal
2. Navigate to _Morris/Prototype_
3. start the server by typing _node index.js_
4. Open you browser and typ _http://localhost:3000/_

 
## Who maintains and contributes to the project
This project was created by Morris Ahlstrand from Group 1, IDB20 at Malmö University.  
I have built my experiment with the help of Peter Tolstrup Aagesen, my groupmates Alva, Lisa and Inotilla and the YouTube channel _the coding train_ and the examples from Trefle.io. 