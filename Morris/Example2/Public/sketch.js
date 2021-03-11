getDataP_size();

async function getDataP_size(){
  const res = await fetch('/api/Plants1');
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