console.log('ya cargo prueba.js');

$(document).ready(function() {
  $('.box').on('click', function(eventObject) {
    var $target = $(eventObject.target);
    if($target.prop('tagName') != 'P') {
      var color = "#";
      while(color.length < 7) {
        color += Math.floor(Math.random()*10);
      }
      $('.box').css('background-color', color);
    }
  });
});
