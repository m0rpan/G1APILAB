//getDataP_Red();
let userLux;


async function getDataP_Red(){ //I'd like to rename this function but if I do it stops working, I cannot wrap my head around why
  userLux = document.getElementById("lux").value;

  const res = await fetch('/api/RedFlowers');
  const myData = await res.json();
  console.log(myData);

  showList_WithImg(myData)

}

async function showList_WithImg(data){
  const dataDiv2= document.getElementById("showData");
  const list = document.createElement("ul");
  //to atleast try to make it seem like it works, don't show anything if the user inputs anything lower than 1
  if(userLux > 1)
  {

    for (var i = 0; i < data.data.length; i++) {
      
      
      //if(getIndividualPlant(data.data[i].light)< userLux)     --This was were I was trying to filter out plants that required mroe sunlight than the user had acsess to, though I could not get it to work properly even with the help of my peers
      //{
        
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
        //}
        //console.log(getIndividualPlant(data.data[i].light));
      }
      //place list in div
      dataDiv2.appendChild(list);
    }
  }
    


async function getIndividualPlant(id){
  const idObj = {id};
      const options = {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(idObj)
      }
  return await fetch('/api/PlantID', options)
  .then(resp => resp.json())
  .then(data => {
    return data;
  });
}

