//Prototype
getDataFromAPI();


async function getDataFromAPI(){
  const res = await fetch('/api/FilterOutNull');
  const filterdData = await res.json();
  console.log(filterdData);

  show_plant_name_Img(filterdData);

}


//function that makes the name & img data from API show on page
async function show_plant_name_Img(data){
  
  const listDiv= document.getElementById("Pick_a_Plant");
  
  
  for (var i = 0; i < data.data.length; i++) {
    //calls api with the plant id
    /*const individualData = await getIndividualInfo(data.data[i].id);*/
    

    // Creating elements
    
    const nameImgDiv = document.createElement("div");
    const nameElement = document.createElement("p");
    const imgElement = document.createElement("img");
    /*const infoElement = document.createElement("div");
    const minTempElement = document.createElement("p");
    const maxTempElement = document.createElement("p");*/

    //setting width and hight to imgElement
    imgElement.style.width = "150px";
    imgElement.style.height = "200px";

    nameImgDiv.style.display = "inline-block";
    nameImgDiv.style.margin = "15px";
    
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

    //if minimun_temerature does not exist print "Info missing"
    /*if(individualData.data.growth.minimum_temperature.deg_c){
      minTempElement.appendChild(document.createTextNode('Min Temperature: ' + individualData.data.growth.minimum_temperature.deg_c+ '°C'+ ' || ')); 
    }
    else{
      minTempElement.appendChild(document.createTextNode('Min Temperature: Info missing'+ ' || '));
    }

     //if maximum_temperature does not exist print "Info missing"
    if(individualData.data.growth.maximum_temperature.deg_c){
      minTempElement.appendChild(document.createTextNode('Max Temperature: ' + individualData.data.growth.maximum_temperature.deg_c+ '°C' ));
    }
    else{
      minTempElement.appendChild(document.createTextNode('Max Temperature: Info missing'));
    }*/
    
    //place nameElement & imgElement in item --> place item in list
    
    nameImgDiv.appendChild(nameElement);
    nameImgDiv.appendChild(imgElement);
    /*item.appendChild(infoElement);
    
    // place info about plant in infoElemnet div
    infoElement.appendChild(minTempElement);
    infoElement.appendChild(maxTempElement);*/
    
    //place div in div
    listDiv.appendChild(nameImgDiv);

    
  }

  
  
}