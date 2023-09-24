
var count = 0;   

// 다음 이미지 슬라이드
function vSlide(){

    count += 1; 
    var ln = $(".projects li:last").index(); 
    
    if( count <= ln ){
      $(".projects").stop().animate({marginLeft: -100 * count + "%"},"fast"); 
      vSlideBtn(count);
    };
};
        
// 이전 이미지 슬라이드
function vSlideRe(){

    count -= 1;    
    var ln = $(".projects li:last").index();          

    if( count >= 0 ){
    $(".projects").stop().animate({marginLeft: -100 * count + "%"},"fast"); 
    vSlideBtn(count);
    };
};

// 현재 선택 버튼의 하이라이트 효과 ● ○ ○ ○  CSS 배경색 조작
function vSlideBtn(count){
    
    $(".work__list button").css({background:"var(--color-gray)"});
    $(".work__list button:eq(" + count + ")").css({background:"var(--color-accent)"});
};

// --------------------------------------------------------

$(function(){

  vSlideBtn(count);

  // 이전버튼
  $(".work__controls button:eq(0)").on("click",function(){
    vSlideRe();
  });

  // 다음버튼
  $(".work__controls button:eq(1)").on("click",function(){
    vSlide(); 
  });

  $(".work__list button").on("click",function(){

  count = $(this).index()     

    vSlideBtn(count);

    $(".projects").stop().animate({marginLeft:-100 * count + "%"});
  });

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
    $(".header__menu").hide();
    $(".header__closebtn").hide();
    $(".header__openbtn").show();
  });
  
   


});


// ------------------

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






