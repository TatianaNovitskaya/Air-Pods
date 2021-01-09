
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