$(window).scroll(function () {
    var scrollTop=$(window).scrollTop();
    // var aaa =$('#title_txt').offset().top;
    if(scrollTop>600){
        $('#top_button').slideDown(500);
    } else{
        $('#top_button').slideUp(500);
    }
});
$(function () {
    $('#top_button').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
});
