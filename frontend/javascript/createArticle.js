// Fonction Ajax pour récupérer une url
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
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
  testLog(); //juste une fonction pour afficher les articles déjà présents dans l'ap

  let title = document.getElementById("title").value; 
  let tags = document.getElementById("tags").value;
  let desc = document.getElementById("desc").value;
  let userId = localStorage.getItem(userId);

  let tabArticle = {"title": title, "tags": tags, "description": desc, "userId": userId}
  const obj = JSON.stringify(tabArticle);
  // console.log(tabArticle);
  Post("http://127.0.0.1:3000/api/articles", obj)
}

// On récupère les données de localHost
let articles = Get("http://127.0.0.1:3000/api/articles");
let test = document.getElementById("send")
test.addEventListener("click",form)


function testLog(){
  let i;
  for(i=0;i<articles.length;i++){
    console.log(articles[i]);
  }
}


addEventListener("mousemove",validateForm)
addEventListener("keypress",validateForm)

function validateForm() {
  var textField = document.forms["Form"]["title"].value;
  var tagsField = document.forms["Form"]["tags"].value;
  var descField = document.forms["Form"]["desc"].value;
  if (textField == null || textField == "" || textField > 30, tagsField == null || tagsField == "", descField == null || descField == "") {
    document.getElementById("send").disabled = true;
    return false;
  }
  document.getElementById("send").disabled = false;
}
