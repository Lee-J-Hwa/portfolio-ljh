/* 프로젝트 리스트 이미지 슬라이드,배경색 변경 */
$('.project-list li')
  .eq(0)
  .on('mouseenter', () => {
    $('.pro-1 img').stop().animate({ right: 100 }, 300);
    $('body').addClass('bg-color-blue');
  });
$('.project-list li')
  .eq(0)
  .on('mouseleave', () => {
    $('.pro-1 img').stop().animate({ right: -1000 }, 300);
    $('body').removeClass('bg-color-blue');
  });
$('.project-list li')
  .eq(1)
  .on('mouseenter', () => {
    $('.pro-2 img').stop().animate({ right: 100 }, 300);
    $('body').addClass('bg-color-purple');
  });
$('.project-list li')
  .eq(1)
  .on('mouseleave', () => {
    $('.pro-2 img').stop().animate({ right: -1000 }, 300);
    $('body').removeClass('bg-color-purple');
  });
$('.project-list li')
  .eq(2)
  .on('mouseenter', () => {
    $('.pro-3 img').stop().animate({ right: 100 }, 300);
    $('body').addClass('bg-color-gray');
  });
$('.project-list li')
  .eq(2)
  .on('mouseleave', () => {
    $('.pro-3 img').stop().animate({ right: -1000 }, 300);
    $('body').removeClass('bg-color-gray');
  });

$('.project-list li')
  .eq(3)
  .on('mouseenter', () => {
    $('.pro-4 img').stop().animate({ right: 100 }, 300);
    $('body').addClass('bg-color-orange');
  });
$('.project-list li')
  .eq(3)
  .on('mouseleave', () => {
    $('.pro-4 img').stop().animate({ right: -1000 }, 300);
    $('body').removeClass('bg-color-orange');
  });
$('.project-list li')
  .eq(4)
  .on('mouseenter', () => {
    $('.pro-5 img').stop().animate({ right: 100, bottom: -5 }, 300);
    $('body').addClass('bg-color-green');
  });
$('.project-list li')
  .eq(4)
  .on('mouseleave', () => {
    $('.pro-5 img').stop().animate({ right: -1000, bottom: 0 }, 300);
    $('body').removeClass('bg-color-green');
  });
$('.project-list li')
  .eq(5)
  .on('mouseenter', () => {
    $('.pro-6 img').stop().animate({ right: 100, bottom: -5 }, 300);
    $('body').addClass('bg-color-red');
  });
$('.project-list li')
  .eq(5)
  .on('mouseleave', () => {
    $('.pro-6 img').stop().animate({ right: -1000, bottom: 0 }, 300);
    $('body').removeClass('bg-color-red');
  });
$('.project-list li')
  .eq(6)
  .on('mouseenter', () => {
    $('.pro-7 img').stop().animate({ right: 100, bottom: -5 }, 300);
    $('body').addClass('bg-color-pink');
  });
$('.project-list li')
  .eq(6)
  .on('mouseleave', () => {
    $('.pro-7 img').stop().animate({ right: -1000, bottom: 0 }, 300);
    $('body').removeClass('bg-color-pink');
  });
/* gnb 스크롤 이동 */
$('#gnb-btn2').on('click', (evt) => {
  evt.preventDefault();
  const project = $('.arti-project').offset().top - 70;
  console.log(project);
  scrollTo({
    top: project,
    behavior: 'smooth',
  });
});
$('#gnb-btn3').on('click', (evt) => {
  evt.preventDefault();
  const skill = $('.arti-skill').offset().top - 70;
  console.log(skill);
  scrollTo({
    top: skill,
    behavior: 'smooth',
  });
});
