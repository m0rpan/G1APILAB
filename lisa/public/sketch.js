
// EXAMPLE 1.
getDataRedPlant();

async function getDataRedPlant(){
  const res = await fetch('/api/redPlants');
  const myDataRed = await res.json();
  console.log(myDataRed);

  showList1(myDataRed)

}

function showList1(data){
  const dataDiv= document.getElementById("showData1");
  const list = document.createElement("ul");


  for (var i = 0; i < data.data.length; i++) {
    const item = document.createElement("li");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("p");
    imgElement.style.height = "230px";
    imgElement.style.width = "200px";


  if(data.data[i].common_name){
    nameElement.appendChild(document.createTextNode(data.data[i].common_name));
  }
  else{
    nameElement.appendChild(document.createTextNode(data.data[i].scientific_name));
  }
  
  if(data.data[i].image_url){
    imgElement.src = data.data[i].image_url;
  }
  else{
    imgElement.src= "does_not_exist.JPEG";
    imgElement.style.width = "400px";
  }

    item.appendChild(nameElement);
    item.appendChild(imgElement);
    list.appendChild(item);
  
    getIndividualPlant(data.data[i].id);
  }
  dataDiv.appendChild(list);
}

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



// EXAMPLE 2
getDataMax10();

async function getDataMax10(){
  const res = await fetch('/api/max10');
  const myDataMax10 = await res.json();
  console.log(myDataMax10);

  showList2(myDataMax10)

}

function showList2(data){
  const dataDiv= document.getElementById("showData2");
  const list = document.createElement("ul");

  for (var i = 0; i < data.data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data.data[i].name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}