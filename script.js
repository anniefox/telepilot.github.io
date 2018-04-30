
window.onload = function() {
  var url = window.location.href;
  var urlCheck = url.substr(url.lastIndexOf('#') + 1)
  console.log(urlCheck)
  if (urlCheck === 'releases'){
    var element = document.getElementById('releases');

   element.classList.toggle("displayit");
   console.log(url)
 } else if (urlCheck === 'retail') {
   var element = document.getElementById('retail');

  element.classList.toggle("displayit");
 }


};
