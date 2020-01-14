// PARALLAX
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
// SWIPER
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    // other parameters
    breakpoints: {
        // when window width is <= 1040px     
        1000: {
            slidesPerView: 1.5,
        },
        1100: {
            slidesPerView: 1.7,
        },
        480: {
            slidesPerView: 1.5,
        },
        320: {
            slidesPerView: 1.3,
        }
    },
    on: {
        slideChangeTransitionStart: function() {
            document.querySelector('.wrapper-img').classList.add('change-slide')
        },
        slideChangeTransitionEnd: function() {
            var secondPhoto = document.querySelector('.second-photo').src
            var firstPhoto = document.querySelector('.first-photo').src
            var thirdPhoto = document.querySelector('.third-photo').src

            document.querySelector('.second-photo').src = thirdPhoto
            document.querySelector('.first-photo').src = secondPhoto
            document.querySelector('.third-photo').src = firstPhoto

            document.querySelector('.wrapper-img').classList.remove('change-slide');
        },
    }
});

document.querySelector(".swiper-container")
    .addEventListener('mousemove', function(pos) {
        document.querySelector(".text-mouse").classList.add('show');
        document.querySelector(".text-mouse").style.left = (pos.pageX + 15) + 'px';
        document.querySelector(".text-mouse").style.top = (pos.pageY - 15) + 'px';

    })
document.querySelector(".swiper-container").addEventListener('mouseleave', function(pos) {
    document.querySelector(".text-mouse").classList.remove('show');
})