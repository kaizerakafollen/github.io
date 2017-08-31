// Slider-block-1
$(document).ready(function(){
  $('.skill-panel').each(function(){
    $(this).find('.skill-panel-panel').animate({
      width:$(this).attr('data-percent')
    },6000);
  });
});

// Close slider-block-1

