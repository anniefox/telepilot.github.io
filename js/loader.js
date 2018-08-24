var overlay = document.getElementById("overlay");

window.addEventListener("load", removeOverlay, false)

 function removeOverlay() {
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 1500);

}
