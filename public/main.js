// PARALLAX
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);
// SWIPER
let swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    // other parameters
    breakpoints: {
        // when window width is <= 1100px    
        1100: {
            slidesPerView: 1.7,
        },
        // when window width is <= 1000px 
        1000: {
            slidesPerView: 1.5,
        },
        // when window width is <= 480px 
        480: {
            slidesPerView: 1.5,
        },
        // when window width is <= 320px 
        320: {
            slidesPerView: 1.3,
        }
    },
    on: {
        slideChangeTransitionStart: function() {
            document.querySelector('.wrapper-img').classList.add('change-slide')
        },
        slideChangeTransitionEnd: function() {
            let secondPhoto = document.querySelector('.second-photo').src
            let firstPhoto = document.querySelector('.first-photo').src
            let thirdPhoto = document.querySelector('.third-photo').src

            document.querySelector('.second-photo').src = thirdPhoto
            document.querySelector('.first-photo').src = secondPhoto
            document.querySelector('.third-photo').src = firstPhoto

            document.querySelector('.wrapper-img').classList.remove('change-slide');
        },
    }
});

let swiperCont = document.querySelector(".swiper-container")
let textMouse = document.querySelector(".text-mouse")
swiperCont
    .addEventListener('mousemove', function(pos) {
        textMouse.classList.add('show');
        textMouse.style.left = (pos.pageX + 15) + 'px';
        textMouse.style.top = (pos.pageY - 15) + 'px';
    })
swiperCont.addEventListener('mouseleave', function(pos) {
    textMouse.classList.remove('show');
})