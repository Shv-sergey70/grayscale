window.onscroll = function() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('#navBar').removeClass("bg-lg-transparent").addClass('bg-light');
  } else {
    $('#navBar').removeClass('bg-light').addClass('bg-lg-transparent');
  }
}

$(document).ready(function() {
    $('.js-scroll-trigger').click(function(){
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).position().top
        }, 1500);
    });
});