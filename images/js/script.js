
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
    if ($(window).scrollTop() > $('#ad-carousel').offset().top) {
        $('.navbar').addClass('navbar-fixed-top')
    } else {
        $('.navbar').removeClass('navbar-fixed-top')
    }
})