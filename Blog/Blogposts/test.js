let current = -1;
let target = 0;
let size = 0;


function scroll(delta){
    if(delta != undefined)
    {
        target += delta;
        target = target>size? size : target<0? 0 : target;
        if(current != Math.floor(target)){
            let c = Math.sign(current - target) == -1 ? 'above' : 'below';
            current = Math.floor(target);
            $('.target').addClass(c).removeClass('target');
            let obj = $(`.page:nth-of-type(${current+2})`);
            $(obj).removeClass('above below')
            $(obj).addClass("target");

            let clr = $(obj).data('color');
            if(clr != undefined)
                $('body').css('background-color', clr);
        }

        $('.progress').css('height', `${target / size * 100}%`)
    }
}

$(function(){
    size = $('.page').length;
    scroll(0);
    addEventListener('wheel', (e) => scroll(e.deltaY / 1000));
});