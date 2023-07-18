// home 화면 밖에서 menu 색 변경
$(window).on('scroll',()=>{
  const menu = $('.about h2').offset().top-100;
   if ( scrollY > menu) {
     $('header').addClass('color-change');
   } else {
     $('header').removeClass('color-change');
   }
 });
 /* gnb 스크롤 이동 */
$('#gnb-btn1').on('click', (evt) => {
  evt.preventDefault();
  const about = $('.about').offset().top - 70;
  console.log(about);
  scrollTo({
    top: about,
    behavior: 'smooth',
  });
});
$('#gnb-btn2').on('click', (evt) => {
  evt.preventDefault();
  const survice = $('.survice').offset().top - 70;
  console.log(survice);
  scrollTo({
    top: survice,
    behavior: 'smooth',
  });
});
$('#gnb-btn3').on('click', (evt) => {
  evt.preventDefault();
  const portfolio = $('.portfolio').offset().top - 70;
  console.log(portfolio);
  scrollTo({
    top: portfolio,
    behavior: 'smooth',
  });
});
$('#gnb-btn4').on('click', (evt) => {
  evt.preventDefault();
  const clients = $('.clients').offset().top - 70;
  console.log(clients);
  scrollTo({
    top: clients,
    behavior: 'smooth',
  });
});
$('#gnb-btn5').on('click', (evt) => {
  evt.preventDefault();
  const contact = $('.contact').offset().top - 70;
  console.log(contact);
  scrollTo({
    top: contact,
    behavior: 'smooth',
  });
});