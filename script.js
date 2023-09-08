let show = document.querySelector('.show');

let increment = 0;

document.addEventListener('click', e => {
    // aumentar y decrementar
    if (e.target.matches('.incrementar')) {
        increment++;
    } else if (e.target.matches('.decremento')) {
        increment--;
    } else if (e.target.matches('.reset')) {
        increment= 0;
    }
});