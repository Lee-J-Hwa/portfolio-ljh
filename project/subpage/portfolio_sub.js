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
// home 화면 밖에서 menu 색 변경
$(window).on('scroll',()=>{
    const menu = $('.list').offset().top-100;
     if ( scrollY > menu) {
       $('header').addClass('color-change');
     } else {
       $('header').removeClass('color-change');
     }
   });
   /* gnb 스크롤 이동 */
  $('#gnb-btn1').on('click', (evt) => {
    evt.preventDefault();
    const home = $('header').offset().top;
    console.log(home);
    scrollTo({
      top: home,
      behavior: 'smooth',
    });
  });
  $('#gnb-btn2').on('click', (evt) => {
    evt.preventDefault();
    const list = $('.list').offset().top;
    console.log(list);
    scrollTo({
      top: list,
      behavior: 'smooth',
    });
  });
  $('#gnb-btn3').on('click', (evt) => {
    evt.preventDefault();
    const address = $('footer').offset().top - 70;
    console.log(address);
    scrollTo({
      top: address,
      behavior: 'smooth',
    });
  });