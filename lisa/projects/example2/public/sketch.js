getDataCoconutSpecies();

async function getDataCoconutSpecies(){
  const res = await fetch('/api/CoconutSpecies');
  const myDataCoconutSpecies = await res.json();
  console.log(myDataCoconutSpecies);

  showList2(myDataCoconutSpecies) 

}

function showList2(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");

  for (var i = 0; i < data.data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data.data[i].common_name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}