// 스크롤 고정
gsap.utils.toArray("article").forEach((hold, i) => {
    ScrollTrigger.create({
        trigger: hold,
        start: "top top",
        pin: true, 
        pinSpacing: true
    });
});
// 스와이퍼
const mySwiper = new Swiper('#slide1', {
    loop: true,
    autoplay: {
    delay: 6000,
    },  
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    }
});
