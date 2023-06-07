$(window).ready(function(){
    let wHeight = $(window).height();
    console.log(wHeight);

    $('.slide')
    .height(wHeight)
    .scrollie({
       scrollOffset: -50,
       scrollingInView: function(elem) {
        let bgColor = elem.data('background');
        console.log(bgColor,'data');
        $('.contacts__box').css('background-color', bgColor);
       }
    });
});