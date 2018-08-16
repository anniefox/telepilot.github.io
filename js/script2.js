function displayPage(pageSection) {
  var i;
  var x = document.getElementsByClassName("section")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  document.getElementById(pageSection).style.display = "block";

}
