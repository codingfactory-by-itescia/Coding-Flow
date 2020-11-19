// Fonction Ajax pour récupérer une url
// Fonction Ajax pour post un objet



let btnSend = document.getElementById("send");
btnSend.addEventListener("click",form)

addEventListener("mousemove",validateForm)
addEventListener("keypress",validateForm)



function Post(yourUrl, userObj) {
  var xhr = new XMLHttpRequest(); 
  xhr.open("POST", yourUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("Accept", "application/json")
  xhr.send(userObj);
}


function form(){
  let username = document.getElementById("username").value; 
  let email = document.getElementById("emailUser").value;
  let password = document.getElementById("password").value;
  let tabUser = {"username": username, "email": email, "password": password}
  const obj = JSON.stringify(tabUser);
  Post("http://127.0.0.1:3000/api/users/register", obj)
  document.location.replace('../html/Accueil.html')
}



function validateForm() {
  var usernameField = document.forms["Form"]["username"].value;
  var emailField = document.forms["Form"]["email"].value;
  var pwdField = document.forms["Form"]["password"].value;
  if (usernameField == null || usernameField == "" || usernameField.length <= 6 || emailField == null || emailField == "" || pwdField == null || pwdField == "" || pwdField.length <= 8) {
    document.getElementById("send").disabled = true;
    return false;
  }
  document.getElementById("send").disabled = false;
}
