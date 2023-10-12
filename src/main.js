$(function(){

  // Arrow up 상단이동 버튼
  $(".arrow-up").on("click",function(){
    $("html").animate({scrollTop:0});
  });
  

/*
  $(window).scroll(function(){

    $("h1").text($(window).scrollTop());   //제거가능

    var st = $(window).scrollTop();

 
*/
  // 모바일 버전 햄버거 메뉴
  $(".header__openbtn").on("click",function(){
    $(".header__menu").show();
    $(this).hide();
    $(".header__closebtn").show();
  }); 
  
  $(".header__closebtn").on("click",function(){
    $(".header__menu").hide();
    $(this).hide();
    $(".header__openbtn").show();
  }); 

  // nav 메뉴 클릭시 메뉴 화면 닫기

  $(".header__menu__item").on("click",function(){
    if($(window).width() < 800) {
      $(".header__menu").hide();
      $(".header__closebtn").hide();
      $(".header__openbtn").show();
    };
  });

  // section 등장모션
  
});


// ------------------
'use strict';

// Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 -window.scrollY / homeHeight;
});

// Arrow up 버튼 아래로  스크롤시 투명하게 처리
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',() => {
  if(window.scrollY > homeHeight / 2 ){
    arrowUp.style.opacity = 1;
  }else{
    arrowUp.style.opacity = 0;
  }
});

// section 스크롤시 등장 모션
$(function(){
  var sections = $(".section__motion");
  
  $(window).scroll(function() {
    sections.each(function() {
      var section = $(this);
      var scrollPosition = $(window).scrollTop();
      var sectionPosition = section.offset().top;
      
      // 스크롤이 섹션의 상단을 지나갔을 때 애니메이션 실행
      if (scrollPosition > sectionPosition - (window.innerHeight / 2)) {
        section.css({
          opacity: 1,
          transform: "translateY(0)"
        });
      }
    });
  });
});






