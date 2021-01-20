document.addEventListener("DOMContentLoaded", function () {
    function tomorowDate() {
        var d = new Date();
        var mm = d.getMonth()+1;
        var dd = d.getDate()+1;
        var yy = d.getFullYear();
        var tomorrowDay = roundZero(dd) + "."+ roundZero(mm) +"."+ yy;
        var currentDay = document.querySelectorAll('.js__tomorrow');
        currentDay.forEach(function(item){
            item.innerHTML = tomorrowDay;
        });
    }
    tomorowDate();
    function roundZero(num){
        return num < 10 ? "0"+num : num;
    }
});

$(document).ready(function () {
    $("[data-fancybox]").fancybox({
        loop: true
    });
    var $window = $(window),
        win_height_padded = $window.height() * 1.1;
    if (window.innerWidth > 480) {
        $window.on('scroll', revealOnScroll);
    } else {
        $(".block_animated:not(.block_show)").each(function () {
            $(this).addClass('block_show');
        });
    }
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() / 1.2;

        $(".block_animated:not(.block_show)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded >= offsetTop) {
                $this.addClass('block_show');
            }
        });
    }
    if (window.innerWidth > 480) {
        revealOnScroll();
    }
    svg4everybody();
});

document.addEventListener("DOMContentLoaded", function () {
    let elementDesktopScroll = document.getElementById('desktop-scroll');
    let btnCart = document.querySelector('.btn-cart');
    let last_known_scroll_position = 0;
    let ticking = false;
    if(window.innerWidth <= 1024) {
        function doSomething(scroll_pos) {
            var heightWindow = window.innerHeight;
            var delta = 1.1;
            var objectElementScroll = elementDesktopScroll.getBoundingClientRect();
            var elementOffsetTop = elementDesktopScroll.offsetTop;
            var bottomLine = objectElementScroll.height + elementOffsetTop;
            console.log(heightWindow);
            // Делаем что-нибудь с позицией скролла
            if (elementOffsetTop - (heightWindow/delta) >= scroll_pos || bottomLine - (heightWindow/delta) <= scroll_pos) {
                btnCart.style.display = "flex";
            }else{
                btnCart.style.display = "none";
            }
        }
        window.addEventListener('scroll', function(e) {
            last_known_scroll_position = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(function() {
                    doSomething(last_known_scroll_position);
                    ticking = false;
                });

                ticking = true;
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var menuItems = $('.js__scroll__to');
    menuItems.on ('click',function (e) {
        e.preventDefault ();
        var mobileVersion = window.innerWidth <= 1023;
        var $this = $ (this);
        var dataHref = mobileVersion ? $this.attr ("data-header-mobile") : $this.attr ("data-header-desktop");
        var offsetTop = $ ('#' + dataHref).offset ().top;
        $ ('html, body').stop ().animate ({
            scrollTop: mobileVersion ? offsetTop -100 : offsetTop
        }, 900);
    });
    // var elementGif = document.querySelector('.img-gif');
    // var mobileVersion = window.innerWidth >= 1000;
    // if(elementGif && mobileVersion){
    //     var createGif = document.createElement('img');
    //     createGif.src = "./images/phone-gif.gif";
    // }
});

function appendGifOnDesktop(){
    var elementGif = document.querySelector('.js__showgif');
    var mobileVersion = window.innerWidth >= 1000;
    var createGif = document.createElement('img');
    if(elementGif && mobileVersion){
        createGif.onload = function(){
            elementGif.appendChild(createGif)
        };
        createGif.src = "./images/phone-gif.gif";
    }else{
        createGif.onload = function(){
            elementGif.appendChild(createGif)
        };
        createGif.src = "./images/iphone.png";
    }

}
appendGifOnDesktop();
document.addEventListener("DOMContentLoaded", function () {
    function togglePopup(ClassName) {
        var popupClose = document.querySelector(ClassName);
        popupClose.classList.toggle('popup_show');
    }
    function closePopup() {
        var popupClose = document.querySelectorAll('.popup');
        for (var i = 0; i < popupClose.length; i++) {
            var obj2 = popupClose[i];
            obj2.classList.remove('popup_show');
        }
    }
    function showPopupEvent() {
        var btnsItems = document.querySelectorAll('.js__show-popup');
        for (var i = 0; i < btnsItems.length; i++) {
            var obj3 = btnsItems[i];
            obj3.addEventListener('click', function (e) {
                e.preventDefault();
                var currentPopup = this.getAttribute('data-popup');
                togglePopup('.' + currentPopup)
            });
        }
    }
    showPopupEvent();
    function closeBtns() {
        var closeButton = document.querySelectorAll('.js__close-popup');
        for (var i = 0; i < closeButton.length; i++) {
            var obj2 = closeButton[i];
            obj2.addEventListener('click', function (e) {
                e.preventDefault();
                closePopup()
            })
        }
    }
    closeBtns();
});



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
