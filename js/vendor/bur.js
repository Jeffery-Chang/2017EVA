jQuery(document).ready(function($) {
  $('.burger').click(function() {
    if(!$('.burger').hasClass('cross'))
      $('.burger').addClass('cross');
    else
      $('.burger').removeClass('cross');
  });
});