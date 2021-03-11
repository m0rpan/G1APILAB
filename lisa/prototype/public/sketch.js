//create a input box where the user can put in a number between 0-10
//0=xherophile, 10=subaquatic
//depending on what number the user puts in, give a list of plants that can survive in that humidity



//Create input box. 

//create else if statement, from 0-10. last else statement gives an alert that says "this is not valid"
//each number-statement shows a list of plants that can live in that humidity. 

function myFunction() {
    var age = document.getElementById("age").value;
    submitOK = "true";

    if (age == "0") {
        alert("0 it is!");
    } else if (age == 1) {
        getDataHumidityValue1();
    } else if (age == 2) {
        alert("2 it is!");
    } else if (age == 3) {
        alert("3 it is!");
    } else if (age == 4) {
        alert("4 it is!");
    } else if (age == 5) {
        alert("5 it is!");
    } else if (age == 6) {
        alert("6 it is!");
    } else if (age == 7) {
        alert("7 it is!");
    } else if (age == 8) {
        alert("8 it is!");
    } else if (age == 9) {
        alert("9 it is!");
    } else if (age == 10) {
        alert("10 it is!");
    } else {
        alert("this is not valid");
    }
    
    
    if (submitOK == "false") {
      return false;
    }
  }

  


async function getDataHumidityValue1(){
  const res = await fetch('/api/humidityValue1');
  const myDataHumidityValue1 = await res.json();
  console.log(myDataHumidityValue1);

  showList1(myDataHumidityValue1)
}

function showList1(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");

  for (var i = 0; i < data.data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data.data[i].common_name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}