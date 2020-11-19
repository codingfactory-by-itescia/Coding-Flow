// Fonction Ajax pour récupérer une url
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
}

function getUserId(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
}

function getId(yourUrl){
  var client = new XMLHttpRequest();
  client.open("GET", yourUrl, true);
  client.send();

  client.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) {
    var userId = client.getResponseHeader("userId");
    console.log(userId);
    return userId;
  }
}

}



// Fonction Ajax pour post un objet
function Post(yourUrl, postArticle) {
  var xhr = new XMLHttpRequest(); 
  xhr.open("POST", yourUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("Accept", "application/json")
  xhr.send(postArticle);
}

function form(){
    let title = document.getElementById("title").value; 
    let tags = document.getElementById("tags").value;
    let desc = document.getElementById("desc").value;
    let userId = getUserId("http://localhost:3000/api/header");
    console.log(userId)
    let tabArticle = {"title": title, "tags": tags, "description": desc, "userId": userId}
    const obj = JSON.stringify(tabArticle);
    Post("http://127.0.0.1:3000/api/articles", obj)
  }

  // On récupère les données de localHost
//let articles = Get("http://127.0.0.1:3000/api/articles");
let btnSend = document.getElementById("send");
btnSend.addEventListener("click",form)



function testLog(){
  let i;
  for(i=0;i<articles.length;i++){
    console.log(articles[i]);
  }
}

//Valider formulaire vide ou non => Déblocage boutton
addEventListener("mousemove",validateForm)
addEventListener("keypress",validateForm)

function validateForm() {
  var textField = document.forms["Form"]["title"].value;
  var tagsField = document.forms["Form"]["tags"].value;
  var descField = document.forms["Form"]["desc"].value;
  if (textField == null || textField == "" || textField > 30 || tagsField == null || tagsField == "" || descField == null || descField == "") {
    document.getElementById("send").disabled = true;
    return false;
  }
  document.getElementById("send").disabled = false;
}



// function searchrequest {

//   var request = location.getElementById(search).value
// }

// var input = document.getElementById("search");






// let image = document.getElementsByClassName(coeur)

// let button = document.getElementById("click"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = count + " " + "Liker" ;
// };


let button = document.getElementById("clickme")
let button2 = document.getElementById("clickme2")

count = 0;
count2 = 0;

button.onclick = function() {
  count += 1;
  button.innerHTML = count + " " + "Likes";
};

button2.onclick = function() {
  count2 += 1;
  button2.innerHTML = count2 + " " + "Likes";
};


