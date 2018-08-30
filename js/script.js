  var url = window.location.href;
  var urlCheck = url.substr(url.lastIndexOf('#') + 1)
  if (urlCheck === 'releases'){
    var element = document.getElementById('releases');

   element.classList.toggle("displayit");

 } else if (urlCheck === 'retail') {
   var element = document.getElementById('retail');

  element.classList.toggle("displayit");
 }
