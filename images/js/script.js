
new WOW().init()

$(function (){
    $('.message .icon').on('click', function (){
        if ($('.message .main').css('display') == 'none') {
            $('.message .main').slideDown()
        } else {
            $('.message .main').slideUp()
        }
    })
})

$(window).scroll(function (){
    if ($(window).scrollTop() > ($('.logo-box').offset().top + $('.logo-box').height())) {
        $('.navbar').addClass('navbar-fixed-top')
    } else {
        $('.navbar').removeClass('navbar-fixed-top')
    }
})