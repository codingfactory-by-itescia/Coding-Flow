//Valider formulaire vide ou non => Déblocage boutton
addEventListener("mousemove",validateLoginForm)
addEventListener("keypress",validateLoginForm)

// Fonction Ajax pour post un objet
function Post(yourUrl, postLogin) {
  var xhr = new XMLHttpRequest(); 
  xhr.open("POST", yourUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("Accept", "application/json")
  xhr.send(postLogin);
}

function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return JSON.parse(Httpreq.responseText);
}

function validateLoginForm() {
  var emailField = document.forms["loginForm"]["loginEmail"].value;
  var pwdField = document.forms["loginForm"]["loginPwd"].value;
  if (emailField == null || emailField == "" || pwdField == null || pwdField == ""|| pwdField.length <= 8) {
    document.getElementById("login").disabled = true;
    return false;
  }
  document.getElementById("login").disabled = false;
}

let btnLog = document.getElementById("login");
btnLog.addEventListener("click",loginForm)

function loginForm(){
    let loginEmail = document.getElementById("loginEmail").value; 
    let loginPwd = document.getElementById("loginPwd").value;
    let tabUser = {"email": loginEmail, "password": loginPwd}
    const obj = JSON.stringify(tabUser);
    Post("http://127.0.0.1:3000/api/users/login", obj)
    let userInfo = Get('http://127.0.0.1:3000/api/findUser/'+loginEmail)
    localStorage.setItem('userId', userInfo.userId);
    localStorage.setItem('userName', userInfo.username);
    
    if(localStorage.getItem('userId') != null){
      let displayDisconnect = document.getElementById('deconnecter')
      let changeConnect = document.getElementById('social')
      // console.log(localStorage.getItem('userName')); 'Bonjour'+localStorage.getItem('userName') 
      changeConnect.innerHTML = '<ul class="nav navbar-nav navbar-right"><li><a>Bonjour '+ localStorage.getItem('userName') + '</a></li><li><a id="deconnecter" onclick="deleteLS()"><span class="glyphicon glyphicon-log-in w3"></span> Se déconnecter</a></li>'
      
    }
  }
