document.addEventListener("DOMContentLoaded", function () {
    sliderInit.init()
});
var sliderInit = {
    init: function () {
        this.reviewSlider();
    },
    reviewSlider: function () {
        var self = this;
        var reviewSlider = new Swiper('.review__slider .swiper-container', {
            speed: 400,
            spaceBetween: 10,
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.review__button-next',
                prevEl: '.review__button-prev',
            }
        });
    }
};
