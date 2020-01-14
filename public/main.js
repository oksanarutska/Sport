var landing = {
    init: function() {

        this.scene = document.getElementById('scene');
        this.wrapperImg = document.querySelector('.wrapper-img');
        this.secondPhoto = document.querySelector('.second-photo').src;
        this.firstPhoto = document.querySelector('.first-photo').src;
        this.thirdPhoto = document.querySelector('.third-photo').src;
        this.swiperCont = document.querySelector(".swiper-container");
        this.textMouse = document.querySelector(".text-mouse");

        // PARALLAX
        this.initParallax();
        // SWIPER
        this.initSwipper();
        // MOVE VISIBLE TEXT ABOVE MOUSE IN THE SLIDER BLOCK
        this.initMouseMove();
        // DELETE TEXT ABOVE MOUSE 
    },
    initParallax: function() {
        let parallaxInstance = new Parallax(this.scene);
    },
    initSwipper: function() {

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
                    this.wrapperImg.classList.add('change-slide')
                }.bind(this),
                slideChangeTransitionEnd: function() {

                    document.querySelector('.second-photo').src = this.thirdPhoto
                    document.querySelector('.first-photo').src = this.secondPhoto
                    document.querySelector('.third-photo').src = this.firstPhoto

                    this.wrapperImg.classList.remove('change-slide');
                }.bind(this),
            }
        });
    },
    initMouseMove: function() {
        this.swiperCont.addEventListener('mousemove', function(pos) {
            this.textMouse.classList.add('show');
            if ((pos.pageX + 15 + 27) > window.innerWidth) {
                this.textMouse.style.left = (pos.pageX - 15 - 27) + 'px';
            } else {
                this.textMouse.style.left = (pos.pageX + 15) + 'px';

            }
            this.textMouse.style.top = (pos.pageY - 15) + 'px';
        }.bind(this))
        this.swiperCont.addEventListener('mouseleave', function(pos) {
            this.textMouse.classList.remove('show');
        }.bind(this))
    },
}

landing.init();