function menuOpen() {
  document.querySelector(".menu").style.display = "block";
  document.getElementById("menu").style.width = "100%";
  document.getElementById("menu").style.height = "100%";
  document.querySelector(".main-container").style.display = "none";
}

function menuClose() {
  document.getElementById("menu").style.width = "0%";
  document.getElementById("menu").style.height = "0%";
  document.querySelector(".main-container").style.display = "block";
}
