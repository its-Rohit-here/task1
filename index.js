const createAccLink = document.getElementById("createAccLink");
const createAccDialog = document.getElementById("createAccDialog");
const close = document.getElementsByClassName("close")[0];

createAccLink.addEventListener("click", function() {
  createAccDialog.style.display = "block";
});

close.addEventListener("click", function() {
  createAccDialog.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == createAccDialog) {
    createAccDialog.style.display = "none";
  }
});