$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true
    });

    // Go to the prev item
    $('.prev img').click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
    });
    // Go to the next item
    $('.next img').click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
    });


    // APP扫码图
    $('.app-img').hide();
    var timer = null;
    $('#appDown').hover(
        function(){
            timer=setTimeout(function(){$('.app-img').fadeIn('slow')},200);
        }, function(){
            if(timer)
                clearTimeout(timer);
                $('.app-img').fadeOut('slow');
        }
    )
});



