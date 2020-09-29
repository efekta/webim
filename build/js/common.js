$(document).ready(function(){
    // loader
    $(window).on('load', function () {
        var $preloader = $('#preloader'),
            $loader = $preloader.find('#loader');
        $loader.fadeOut();
        $preloader.delay(250).fadeOut(200);
    });

	// fixed header

    $(window).scroll(function() {
        if($(this).scrollTop() >= 250) {
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    });

    // mob menu
    $('.burger').on('click', function (e){
        $('.burger').toggleClass('on')
        $('.mob-nav').toggleClass('show')
    })
});
