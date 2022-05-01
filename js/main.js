const menuButton = document.querySelector('.menu__nav');
const navList = document.querySelector('.nav');
const chooseLang = document.querySelector('.choose__lang');
const closeBlock = document.querySelector('.close__block');

if (menuButton) {
    menuButton.addEventListener('click', menu)
    closeBlock.addEventListener('click', menu)
}

function menu(e) {
    document.body.classList.toggle('lock');
    navList.classList.toggle('open-menu');
    chooseLang.classList.toggle('open-menu');
    closeBlock.classList.toggle('open-menu');
}


const swiper = new Swiper('.swiper', {

    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets:true,
    },


    centeredSlides: true,

    slidesPerView:3,
    
    // centeredSlides: true,
    // slidesPerGroup:1,

    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 80,
    //     depth: 200,
    //     modifier: 1,
    //     slideShadows: false,
    // },
});
