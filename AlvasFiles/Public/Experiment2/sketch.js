//experiment 2.
getDataP_temp();


async function getDataP_temp(){
  const res = await fetch('/api/PlantsTemp');
  const myDataP_Temp = await res.json();
  console.log(myDataP_Temp );

  showList_WithImg(myDataP_Temp)

}
//function that makes the data from API show on page
async function showList_WithImg(data){
  
  const dataDiv2= document.getElementById("showDataP_temp");
  const list = document.createElement("ul");
  
  for (var i = 0; i < data.data.length; i++) {
    //calls api with the plant id
    const individualData = await getIndividualInfo(data.data[i].id);
    

    // Creating elements
    const item = document.createElement("li");
    const nameElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const infoElement = document.createElement("div");
    const minTempElement = document.createElement("p");
    const maxTempElement = document.createElement("p");

    //setting width and hight to imgElement
    imgElement.style.width = "150px";
    imgElement.style.height = "200px";
    
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
    if(individualData.data.growth.minimum_temperature.deg_c){
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
    }
    
    //place nameElement & imgElement in item --> place item in list
    item.appendChild(nameElement);
    item.appendChild(imgElement);
    item.appendChild(infoElement);
    
    // place info about plant in infoElemnet div
    infoElement.appendChild(minTempElement);
    infoElement.appendChild(maxTempElement);
    
    list.appendChild(item);

    
  }
  //place list in div
  dataDiv2.appendChild(list);
  
  
}

//Sends id to retrive individual data from API
async function getIndividualInfo(id){
  
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
    console.log(data);
    return data;
  });
}

