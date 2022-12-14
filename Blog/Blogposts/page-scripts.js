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

            // Set all above/below classes
            $('.page').each(function(index){
                $(this).removeClass('above below target');
                $(this).addClass(index < current ? 'above' : 'below');
            });

            let obj = $(`.page:nth-of-type(${current+2})`);
            $(obj).addClass('target');
        }

        $('.progress').css('flex-grow', `${target / size}`)
    }
}

$(function(){
    size = $('.page').length - 1;
    $('[data-scroll]').click(function(){scroll($(this).data('scroll'))});
    scroll(0);

    //#region Wheel and touch scroll
    let scrolled = false;
    let start = 0;
    let end = 0;

    // Fix mobile height being offset by toolbar
    if(window.innerHeight < 1200){
        var setSize = () => $('.full-height, .page').css('height', window.innerHeight);
        addEventListener('resize', setSize);
        setSize();
    }
    addEventListener('touchstart', (e) => start = e.touches[0].pageY);
    addEventListener('touchmove', (e) => end = e.touches[0].pageY == end ? start : e.touches[0].pageY);
    addEventListener('touchend', (e) => {onScroll(end == 0 ? 0 : start - end); end = 0;});
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
    //#endregion

    let table_of_content = "<ol><li>Start</li>";
    let headers = [];
    $('.page h3').each(function(index) {
        table_of_content += `<li>${$(this).html()}</li>`;
        headers[index] = this;
    });

    table_of_content += "<li>End</li></ol>";
    $('.table-of-content').append(table_of_content);
    $('.table-of-content li').each(function(index){
        $(this).click(function(){
            target = index;
            scroll(0);
        });
    });
});