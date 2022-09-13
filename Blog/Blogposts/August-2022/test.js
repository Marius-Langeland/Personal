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
            $(obj).removeClass('above below');
            $(obj).addClass("target");

            let clr = $(obj).data('color');
            if(clr != undefined)
                $('body').css('background-color', clr);
        }

        $('.progress').css('flex-grow', `${target / size}`)
    }
}

$(function(){
    size = $('.page').length - 1;
    scroll(0);

    let scrolled = false;
    let start = 0;

    addEventListener('touchstart', (e) => start = e.touches[0].pageY);
    addEventListener('touchend', (e) => onScroll(start - e.touches[0].pageY));
    addEventListener('wheel', (e) => onScroll(e.deltaY));

    async function onScroll(delta){
        if(Math.abs(delta) > 50 && !scrolled)
        {
            scroll(Math.sign(delta));
            scrolled = true;

            await new Promise(resolve => setTimeout(resolve, 300));
            scrolled = false;
        }
    }

    $('.go-down').click(function(){
        scroll(1);
    });
});