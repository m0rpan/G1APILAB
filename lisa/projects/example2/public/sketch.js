//call function
getDataCoconutSpecies();

//call the api through fetch
async function getDataCoconutSpecies(){
  const res = await fetch('/api/CoconutSpecies');
  const myDataCoconutSpecies = await res.json();
  console.log(myDataCoconutSpecies);

  showList2(myDataCoconutSpecies) 
}

// create a function containing a loop that creates the list with the data from the api
function showList2(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");
//loop that creates the full list with the data from the first page from the api. Add only the names 
  for (var i = 0; i < data.data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data.data[i].common_name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}