const input = document.querySelector('input')

function displayPage(pageSection) {
  input.checked = false
  var i;
  var x = document.getElementsByClassName("section")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(pageSection).style.display = "block";

}
