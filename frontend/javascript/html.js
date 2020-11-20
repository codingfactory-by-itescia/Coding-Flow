
let button = document.getElementById("click"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = count + " " + "Likes" ;
};