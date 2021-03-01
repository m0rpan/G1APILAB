getData();

async function getData(){
  const res = await fetch('/api/Plants', options);
  const myData = await res.json();
  console.log(myData);
  const options ={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myData)
  }
  showDataOnPage(myData);
}

function showDataOnPage(data){
  console.log(data);
  const dataDiv= document.getElementById("showData");
  dataDiv.innerHTML= data;

}

/*const data = {
  status: 'success',
  data: 'Hello friend!',
}
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}
fetch('/api', options)
.then(response => response.json())
.then(data => console.log(data));*/