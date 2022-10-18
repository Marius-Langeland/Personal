window.onload = function(){
    var slideshows = document.querySelector('.slideshow');
    var frame = 0
    for (let i = 1; i < slideshows.children.length; i++) {
        const child = slideshows.children[i];
        child.classList.add('display-hidden');
    }
    setInterval(() => {
        slideshows.children[frame].classList.add('display-hidden');
        frame = (frame+1)%slideshows.children.length;
        slideshows.children[frame].classList.remove('display-hidden');
    }, 1000 / slideshows.dataset.fps);
}

