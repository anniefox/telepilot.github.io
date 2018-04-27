$(function(){
  var $loader = $('#loader'),
      max = 75, speed = 500,
      char = '<i>.</i>', count = 0,
      dots = function(){
        if ( count <= max ) {
          count++;
          for ( var i = 0; i < 1; i++ ) {
            $loader.append(char);
            $loader.find('i').fadeIn(speed);
          }
        } else {
          clearInterval(dots);
        }
        // COLOR FUN * OPTIONAL *
        /*
        $('#loader i').each(function(i){
          var hue = 10 * i;
          $(this).css({ color: 'hsl('+hue+',75%,50%)' });
        });
        */
      };
  setInterval(dots,speed/2);
});
