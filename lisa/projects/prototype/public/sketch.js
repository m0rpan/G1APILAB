var numberInput;

//function that shows the list of data if the number that is put inside the input box is between 0 and 10
function myFunction() {
    numberInput = document.getElementById("number").value;
    submitOK = "true";
    if(numberInput > -1 && numberInput < 11) {
        console.log(numberInput + " it is!");
        getDataHumidityValue(numberInput);
    } else {
        console.log("Wrong");
    }

    //when data is shown and a new number is supposed to be put in the input box, remove the current list that is visible
    document.getElementById("number").addEventListener('keyup', function() {
        if (this.value === "") {
        document.getElementById("showData").innerHTML = "";
        }
        });
}
 
//function that makes the data from API show on page
async function getDataHumidityValue(numberInput) {
  const res = await fetch('/api/humidityValue' + numberInput);
  const myDataHumidityValue = await res.json();
  
  showList(myDataHumidityValue.data);
}

// create a function containing a loop that creates the list with the data from the api
function showList(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");
//loop that creates the full list with the data from the first page from the api. Add only the names 
  for (var i = 0; i < data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data[i].common_name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}