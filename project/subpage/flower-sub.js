// home 화면 밖에서 menu 색 변경
$(window).on('scroll',()=>{
  const menu = $('.project').offset().top;
   if ( scrollY > menu) {
     $('header').addClass('color-change');
   } else {
     $('header').removeClass('color-change');
   }
 });