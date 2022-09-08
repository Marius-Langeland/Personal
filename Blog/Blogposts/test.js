let current = -1;
let target = 0;
let size = 0;


function scroll(delta){
    target += delta;
    target = target>size? size : target<0? 0 : target;
    if(current != Math.floor(target)){
        current = Math.floor(target);
        $('.target').addClass('fade');
        $(`.page:nth-of-type(${current+2})`).addClass("target");
    }

    $('.progress').css('height', `${target / size * 100}%`)
}

$(function(){
    size = $('.page').length;
    scroll(0);
    $(window).bind('mousewheel DOMMouseScroll', function(e){
        scroll(e.originalEvent.detail / 100);
    });

    $('.page').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
        let obj = $('.fade');
        obj.addClass('reset');
        obj.removeClass('target fade');
        obj.removeClass('reset');
    });
});