let a = document.getElementById("displaybar");

a.addEventListener('click',displayTags);

function displayTags(){
    a.style = "block;"
};



function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;
    // Afficher la valeur
    alert(input);
}