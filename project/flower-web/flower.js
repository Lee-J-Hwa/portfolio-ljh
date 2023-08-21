// swiper1
new Swiper('#swiper-1', {
    loop: true,
    pagination: {
      // 페이징 설정
      el: '.swiper-pagination',
      clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    navigation: {
      // 네비게이션 설정
      nextEl: '.swiper-button-next', // 다음 버튼 클래스명
      prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
    },
  
    autoplay: {
      delay: 4000,
    },
  });
  // swiper2
new Swiper('#swiper-2', {
    loop: true,
    slidesPerView: 6.35,
    autoplay: {
      delay: 4000,
    },
  });
    // swiper3
new Swiper('#swiper-3', {
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 4000,
    },
  });
    // swiper4
new Swiper('#swiper-4', {
    loop: true,
    slidesPerView: 6.35,
    autoplay: {
      delay: 4000,
    },
  });
/* gnb 스크롤 이동 */
$('#gnb-btn1').on('click', (evt) => {
  evt.preventDefault();
  const best = $('.best').offset().top;
  console.log(best);
  scrollTo({
    top: best,
    behavior: 'smooth',
  });
});
$('#gnb-btn2').on('click', (evt) => {
  evt.preventDefault();
  const special = $('.special').offset().top;
  console.log(special);
  scrollTo({
    top: special,
    behavior: 'smooth',
  });
});
$('#gnb-btn3').on('click', (evt) => {
  evt.preventDefault();
  const magazine = $('.magazine').offset().top;
  console.log(magazine);
  scrollTo({
    top: magazine,
    behavior: 'smooth',
  });
});
$('#gnb-btn4').on('click', (evt) => {
  evt.preventDefault();
  const vision = $('.vision').offset().top+30;
  console.log(vision);
  scrollTo({
    top: vision,
    behavior: 'smooth',
  });
});