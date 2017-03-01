$(document).ready(function() {

  var body = $("body");

  body.find('.animate').each(function(i, obj) {
    var frames = $(obj).find('img');
    var step = 0;
    frames.css('transition', 'opacity 100ms');
    setInterval(function() {
      frames.eq(step).css({'opacity': 1});
      setTimeout(function() {
        frames.eq(step - 1).css({'opacity': 0});
        step++;
        if (step > frames.length - 1) step = 0;
      }, 100);
    }, 750);
  });

});
