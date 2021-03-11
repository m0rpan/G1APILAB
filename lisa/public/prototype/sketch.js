//create a input box where the user can put in a number between 0-10
//0=xherophile, 10=subaquatic
//depending on what number the user puts in, give a list of plants that can survive in that humidity



//Create input box. 

//create else if statement, from 0-10. last else statement gives an alert that says "this is not valid"
//each number-statement shows a list of plants that can live in that humidity. 

var numberInput;


function myFunction() {
    numberInput = document.getElementById("number").value;
    submitOK = "true";
    if(numberInput > -1 && numberInput < 11) {
        console.log(numberInput + " it is!");
        getDataHumidityValue(numberInput);
    } else {
        console.log("Wrong");
    }

    if(document.getElementById("showData") == "block") {
        document.getElementById("showData") == "none";
    } else {
        document.getElementById("showData") == "block";
    }

    document.getElementById("number").addEventListener('keyup', function() {
        if (this.value === "") {
        document.getElementById("showData").innerHTML = "";
        }
        });
}

async function getDataHumidityValue(numberInput) {
  const res = await fetch('/api/humidityValue' + numberInput);
  const myDataHumidityValue = await res.json();
  
  showList(myDataHumidityValue.data);
}

function showList(data){
  const dataDiv= document.getElementById("showData");
  const list = document.createElement("ul");

  for (var i = 0; i < data.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(data[i].common_name));
    list.appendChild(item);
  }
  dataDiv.appendChild(list);
}