$(document).ready(function() {

  var win = $(window);
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

  var process = $('#process');
  var lines = process.find('.line');
  win.scroll(function() {
    var scroll = body.scrollTop() + win.height() / 3;
    var limit = 500;
    lines.each(function(i, obj) {
      var el = $(obj);
      var diff = Math.abs(el.offset().top - scroll) / 100;
      if (diff > limit) diff = limit;
      if (diff < 1) diff = 1;

      el.css('opacity', 1 / diff);

    });

  });

});
