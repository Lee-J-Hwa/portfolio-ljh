// 스와이퍼
const mySwiper = new Swiper('#slide1', {
    loop: true,
    autoplay: {
    delay: 10000,
    },  
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    }
});
