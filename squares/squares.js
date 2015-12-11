$(document).ready(function(){
  var speed = 200;
      function blah() {
      return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) 
    }
$('li').hover(
  function() {
    var color = blah();
$(this).stop().animate({"opacity": ".3"}, speed);
    $(this).css('background', color);
    $('body').css({'backgroundColor': color});
},
  function() {
$(this).stop().animate({"opacity": "1"}, speed);
    $(this).css('background', color)      
    }
); 
}
);

function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}