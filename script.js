const carousel = document.querySelector('.experiences-container');
let scrollAmount = 0;

function automaticScroll()
{
    carousel.scrollBy({left: 5, behavior: 'smooth'});
}

setInterval(automaticScroll, 1000);

automaticScroll();



