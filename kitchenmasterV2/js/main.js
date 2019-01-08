$(document).ready(function(){

$('.countdown').countdown('2060/10/10', function(event) {
   $(this).html(event.strftime('<div class="countdown__item--hour">%H</div>' +'<div class="countdown__item--minute">%M</div>' + '<div class="coundown__item--second">%S</div>'));
  });

    $("a").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 2000);
        return false;
    });
});

