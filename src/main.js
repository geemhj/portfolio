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


/*
// 스크롤시 section 애니메이션
let observer = new IntersectionObserver((e)=>{
  e.forEach((box)=>{
    if (box.isIntersecting){
      box.target.style.opacity = 1;
    }else{
      box.target.style.opacity = 0;
    }
  })
})

let ability = document.querySelectorAll('.ability')
observer.observe(ability[0])
observer.observe(ability[1])
observer.observe(ability[2])
*/

// 스크롤시 등장 모션
ScrollOut({
  onShown: (element) => {
    new TypeIt(element.querySelector('.section__title'),{
      startDelay: 500,
      cursor: false,
    })
      .pause(2000)
      .go();
  },
});




