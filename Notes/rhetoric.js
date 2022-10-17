window.onload = function(){

    let manualToggle = false;
    // Toggle the light on the cards
    let terms = document.getElementsByClassName('term');
    for (let i = 0; i < terms.length; i++) {
            const e = terms[i];
        e.addEventListener('click', () => {
            e.classList.toggle('open');
            manualToggle = true;
        });
    }

    let cards = document.querySelectorAll('.term');
    let current = -1;
    setInterval(function(){
        if(!manualToggle){
            if(current != -1)
                cards[current].classList.remove('open');
            
            current = (current + 1) % cards.length;
            cards[current].classList.add('open');
        }
    }, 2000);
}