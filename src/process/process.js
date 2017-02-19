$(document).ready(function() {

  $('body .animate').each(function(i, obj) {
    console.log(i, obj);
    var frames = $(obj).find('img');
    var step = 0;
    setInterval(function() {
      frames.eq(step - 1).css('opacity', 0);
      frames.eq(step).css('opacity', 1);
      step++;
      if (step > frames.length - 1) step = 0;
    }, 500);
  });

});
