
getDataP_Red();


async function getDataP_Red(){
  const res = await fetch('/api/RedFlowers');
  const myData = await res.json();
  console.log(myData);

  showList_WithImg(myData)

}

function showList_WithImg(data){
  const dataDiv2= document.getElementById("showData");
  const list = document.createElement("ul");

  for (var i = 0; i < data.data.length; i++) {
    //Creating elements
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

