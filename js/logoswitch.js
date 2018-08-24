const checked = document.querySelector('input')
const logo1 = document.getElementById('logolink1')
const logo2 = document.getElementById('logolink2')
let clicked = false;

  function logoswitch() {
    setTimeout(function(){
      if(!clicked) {
        logo2.style.display = 'inline'
        logo1.style.display = 'none'
        clicked = true
      } else if (clicked) {
        logo2.style.display = 'none'
        logo1.style.display = 'inline'
        clicked = false
      }}, 200);


  }
