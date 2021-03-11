//Prototype
getDataFromAPI();

//variable for input value
let inputTemp;


async function getDataFromAPI(){
  const res = await fetch('/api/FilterOutNull');
  const filterdData = await res.json();
  console.log(filterdData);

  show_plant_name_Img(filterdData);

}


//makes the name & img data from API show on page
async function show_plant_name_Img(data){
  
  const listDiv= document.getElementById("Pick_a_Plant");
  
  
  for (var i = 0; i < data.data.length; i++) {
    // Creating elements
    const nameImgDiv = document.createElement("div");
    const nameElement = document.createElement("p");
    const imgElement = document.createElement("img");
    
    //gives an id attribue to nameImgDiv, id= id from plant array 
    nameImgDiv.setAttribute("id",data.data[i].id);

    //setting width and hight to imgElement
    imgElement.style.width = "150px";
    imgElement.style.height = "200px";

    // removes linebreak between divs' & puts a margent to the divs'
    nameImgDiv.style.display = "inline-block";
    nameImgDiv.style.margin = "15px";

    //if div is clicked compareInput function will be called
    nameImgDiv.addEventListener("click", compareInput);
    
    //if common_name does not exist print scientific_name
    if(data.data[i].common_name){
      nameElement.appendChild(document.createTextNode(data.data[i].common_name) );
    }
    else{
      nameElement.appendChild(document.createTextNode(data.data[i].scientific_name));
    }
    
    //if imge_url does not exist print default img
    if(data.data[i].image_url){
      imgElement.src = data.data[i].image_url;
    }
    else{
      imgElement.src= "https://media.giphy.com/media/SvoWj5IUsGwmHPTQqO/giphy.gif";
      imgElement.style.width = "200px";
    }
    
    //place nameElement & imgElement in nameImgDiv(div) --> place nameImgDiv in listDiv
    nameImgDiv.appendChild(nameElement);
    nameImgDiv.appendChild(imgElement);
    listDiv.appendChild(nameImgDiv);

    
  }
}

//get temperature value from user
function saveUserTemp(){
  inputTemp = document.getElementById("temp").value;
  document.getElementById("value").innerHTML= "Your Temperature: " + inputTemp;
}

async function compareInput() {
  //if inputTemp has value = true
  if(inputTemp != null){
    //gets extended data that includes the minimum_temperature
    const idData = await getExtendedDataFromAPI(this.id);
    //gives diffrent messages in alert boxes depending on if the inputTemp is more than the minimum_temperature of the plant
    if(idData.data.growth.minimum_temperature.deg_c <= inputTemp){
      alert(`IT'S A MATCH!\n
      Your Temp: ${inputTemp}
      Plants Minimum Temperature: ${idData.data.growth.minimum_temperature.deg_c}`);
    }else{
      alert(`This plant has a minimum temperature that is lower than: ${inputTemp}\n\nPlants Minimum Temperature: ${idData.data.growth.minimum_temperature.deg_c}`);
    }
  }
}

//Sends id to retrive extended data from API that includes the minimum_temperature
async function getExtendedDataFromAPI(id){
  
  const idObject = {id}
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(idObject)
  }


  return await fetch('/api/PlantID', options)
  .then(resp => resp.json())
  .then(data => {
    return data;
  });
}



