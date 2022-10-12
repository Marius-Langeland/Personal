window.onload = function(){
    let terms = document.getElementsByClassName('term');
    for (let i = 0; i < terms.length; i++) {
            const e = terms[i];
        e.addEventListener('click', () => {
            e.classList.toggle('open');
        });
    }
}