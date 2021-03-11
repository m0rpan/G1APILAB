// EXAMPLE 1.
getDataP_size();

async function getDataP_size(){
  const res = await fetch('/api/PlantsSize');
  const myData = await res.json();
  console.log(myData);

  showList(myData)

}

function showList(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");

  for (var i = 0; i < data.data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data.data[i].common_name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}






//EXAMPLE 2
getDataP_Arctic();


async function getDataP_Arctic(){
  const res = await fetch('/api/PlantsArctic');
  const myDataArctic = await res.json();
  console.log(myDataArctic);

  showList_WithImg(myDataArctic)

}

function showList_WithImg(data){
  const dataDiv2= document.getElementById("showDataArctic");
  const list = document.createElement("ul");

  for (var i = 0; i < data.data.length; i++) {
    // Creating elements
    const item = document.createElement("li");
    const nameElement = document.createElement("p");
    const imgElement = document.createElement("img");
    //setting width and hight to imgElement
    imgElement.style.width = "150px";
    imgElement.style.height = "200px";
    
    //if common_name does not exist print scientific_name
    if(data.data[i].common_name){
      nameElement.appendChild(document.createTextNode(data.data[i].common_name));
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
    
    //place nameElement & imgElement in item --> place item in list
    item.appendChild(nameElement);
    item.appendChild(imgElement);
    list.appendChild(item);

    getIndividualPlant(data.data[i].id);

  }
  //place list in div
  dataDiv2.appendChild(list);


}


function getIndividualPlant(id){
      //data that I want to send back to the api/database
      const options = {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
      }
      fetch('/api/PlantID', options)
      .then(resp => resp.json())
      .then(data => console.log(data));
}

