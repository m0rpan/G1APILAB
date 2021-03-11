//call the function 
getDataRedPlant();

//call the api through fetch
async function getDataRedPlant(){
  const res = await fetch('/api/redPlants');
  const myDataRed = await res.json();
  console.log(myDataRed);

  showList1(myDataRed)
}

//function that makes the data from API show on page
function showList1(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");

//loop that creates the full list with the data from the first page from the api. Add common mane and image of the plant
  for (var i = 0; i < data.data.length; i++) {
    //create the elements
    const item = document.createElement("li");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("p");
    imgElement.style.height = "230px";
    imgElement.style.width = "200px";
 
    //if the common name does not exist, then print out the scientific name
  if(data.data[i].common_name){
    nameElement.appendChild(document.createTextNode(data.data[i].common_name));
  } else{
    nameElement.appendChild(document.createTextNode(data.data[i].scientific_name));
  }
  
  //if the image does not exist then print out the "does_not_exist.jpg" image
  if(data.data[i].image_url){
    imgElement.src = data.data[i].image_url;
  } else{
    imgElement.src= "does_not_exist.JPG";
    imgElement.style.width = "400px";
  }

  //place the nameelement and the imgelement in item, then place the item in a list
    item.appendChild(nameElement);
    item.appendChild(imgElement);
    list.appendChild(item);
  
    getIndividualPlant(data.data[i].id);
  }
  //place the list in the div in html
  dataDiv.appendChild(list);
}

//Sends id to retrive individual data from API
function getIndividualPlant(id){
  const options = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(id)
  }
  fetch('/api/redPlants', options)
  .then(resp => resp.json())
  .then(data => console.log(data));
}