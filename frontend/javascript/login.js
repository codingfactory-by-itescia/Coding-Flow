//Valider formulaire vide ou non => Déblocage boutton
addEventListener("mousemove",validateLoginForm)
addEventListener("keypress",validateLoginForm)

function validateLoginForm() {
  var usernameField = document.forms["loginForm"]["loginEmail"].value;
  var pwdField = document.forms["loginForm"]["loginPwd"].value;
  if (loginEmail == null || loginEmail == "" || pwdField == null || pwdField == ""|| pwdField.length <= 8) {
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
    console.log(obj);
    Post("http://127.0.0.1:3000/api/users/login", obj)
  }
