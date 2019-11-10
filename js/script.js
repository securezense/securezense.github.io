$(document).ready(function() {
    $('#mobile_menu_button').click(function() {
        if($('.navbar ul').hasClass('active'))
        {
            $('.navbar ul').removeClass('slideInRight').addClass('slideOutRight');
        }
        else
        {
            $('.navbar ul').removeClass('slideOutRight').addClass('slideInRight');
        }
        $('.navbar ul').toggleClass('active');
        // $('.navbar ul').setTimeOut(function() { 
        //     $('.navbar ul').toggleClass('active');
        // },500);
    });
});