$(function (){
    $('.message .icon').on('click', function (){
        if ($('.message .main').css('display') == 'none') {
            $('.message .main').show()
        } else {
            $('.message .main').hide()
        }
    })
})