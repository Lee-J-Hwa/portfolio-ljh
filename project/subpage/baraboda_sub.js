// home 화면 밖에서 menu 색 변경
$(window).on('scroll',()=>{
    const menu = $('.project').offset().top-100;
     if ( scrollY > menu) {
       $('header').addClass('color-change');
     } else {
       $('header').removeClass('color-change');
     }
   });
   /* gnb 스크롤 이동 */
  $('#gnb-btn1').on('click', (evt) => {
    evt.preventDefault();
    const project = $('.project').offset().top+5;
    scrollTo({
      top: project,
      behavior: 'smooth',
    });
  });
  $('#gnb-btn2').on('click', (evt) => {
    evt.preventDefault();
    const design = $('.design').offset().top+5;
    scrollTo({
      top: design,
      behavior: 'smooth',
    });
  });
  $('#gnb-btn3').on('click', (evt) => {
    evt.preventDefault();
    const publishing = $('.publishing').offset().top+5;
    scrollTo({
      top: publishing,
      behavior: 'smooth',
    });
  });
  $('#gnb-btn4').on('click', (evt) => {
    evt.preventDefault();
    const solution = $('.solution').offset().top+5;
    scrollTo({
      top: solution,
      behavior: 'smooth',
    });
  });
  $('#gnb-btn5').on('click', (evt) => {
    evt.preventDefault();
    const review = $('.review').offset().top+5;
    scrollTo({
      top: review,
      behavior: 'smooth',
    });
  });