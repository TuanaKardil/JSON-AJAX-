var animalContainer=document.getElementById("animal-info"); //animal-info isimli div'i bir değişkene atıyoruz.
var btn=document.getElementById("btn");
var pageCounter=1;
btn.addEventListener("click",function(){
  var ourRequest=new XMLHttpRequest();
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
  ourRequest.onload=function(){
        var ourData= JSON.parse(ourRequest.responseText); //JSON.parse diyerek bunun bir text değil JSON dosyası olduğunu belirtiyoruz.
        renderHTML(ourData);
      };
  ourRequest.send();
  pageCounter++;
  if(pageCounter>3){
    btn.classList.add("hide-me");
  }
});

function renderHTML(data){  //it'll add HTML to the empty div element
  var htmlString="";
  for(var i=0; i<data.length;i++){
    htmlString+= "<p>"+data[i].name+" is a "+data[i].species+" that likes to eat ";
    for(var j=0;j<data[i].foods.likes.length;j++){
      if(j==0){
        htmlString+=data[i].foods.likes[j];
      }else{
        htmlString+=", "+data[i].foods.likes[j];
      }
    }
    htmlString+=" and dislikes ";

    for(var k=0;k<data[i].foods.dislikes.length;k++){
      if(k==0){
        htmlString+=data[i].foods.dislikes[k];
      }else{
        htmlString+=", "+data[i].foods.dislikes[k];
      }
    }
    htmlString+=".</p>";
  }
  animalContainer.insertAdjacentHTML('beforeend',htmlString);
}