function passwordForm(){
    let email = document.getElementById("email").value; 
    let password = document.getElementById("newPassword").value;

    let tabUser = {"password": password}
    const obj = JSON.stringify(tabUser);
    // console.log(tabArticle);
    modifyPassword("http://127.0.0.1:3000/api/changePassword/" +email, tabUser)
    alert('Votre Mot de Passe a été modifié')
};


  

function modifyPassword(yourUrl, objPassword) {
    var xhr = new XMLHttpRequest(); 
    xhr.open("PUT", yourUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.setRequestHeader("Accept", "application/json")
    xhr.send(objPassword);
};


let btnPass = document.getElementById("mdpUpdate");
btnPass.addEventListener("click",passwordForm);