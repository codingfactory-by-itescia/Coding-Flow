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
    // let userId = getUserId("http://localhost:3000/api/header");
    // console.log(userId)
    let userId = "admin"
    let tabArticle = {"title": title, "tags": tags, "description": desc, "userId": userId}
    const obj = JSON.stringify(tabArticle);
    Post("http://127.0.0.1:3000/api/articles", obj)
  }

  // On récupère les données de localHost
let btnSend = document.getElementById("send");
btnSend.addEventListener("click",form)



function boxArticles(){
    let articles = Get("http://127.0.0.1:3000/api/articles");
    let container = document.getElementById('fileactu')
    let i;
    for(i= (articles.length) -1 ; i>=0 ; i--){
        container.innerHTML+='<div class="w3-container w3-card w3-white w3-round w3-margin"><br><h4>'+articles[i].tags+'</h4><br><p>'+articles[i].title+'</p><hr class="w3-clear"><p>'+articles[i].description+'</p><button name="clickme" type="button" class="w3-button w3-margin-bottom"><i class="fa fa-thumbs-up"></i><img class="coeur" src="../image/coeur.png" alt="coeur" height="20em" width="20em"> Liker </button><button type="button" class="w3-button w3-margin-bottom"><i class="fa fa-comment"></i>Commenter</button> </div>';
  }
    let button = document.getElementsByName("clickme")
    

count = 0;


button.onclick = function() {
  count += 1;
  button.innerHTML = count + " " + "Likes";
};

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





