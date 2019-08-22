var ipad = window.matchMedia('screen and (max-width:767px)');
var menu = document.querySelector('.menu');
var burgerBottom = document.querySelector('#burger-Menu');

ipad.addListener(validation);

function validation(event) {
    if (event.matches) {
        burgerBottom.addEventListener('click', hideShow);
        menu.addEventListener('click', hideShow);
    } else {
        burgerBottom.removeEventListener('click', hideShow);
        menu.removeEventListener('click', hideShow);
    }

}

burgerBottom.addEventListener('click', hideShow);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }

}