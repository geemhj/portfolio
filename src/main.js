
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




  $(window).scroll(function(){
    $("h1 a").text($(window).scrollTop());        

  });


});




/*

// 하단 컨트롤 버튼
  // 현재 선택 버튼의 하이라이트 효과 ● ○ ○ ○  CSS 배경색 조작

var count = 0; 
function workBtn(count){

    count += 1;
    
    $(".work__list button").css({background:"var(--color-gray)"});
    $(".work__list button:eq(" + count + ")").css({background:"var(--color-accent)"});
};



$(function(){
    // 이전 버튼
    $(".work__controls button:eq(0)").on("click",function(){
        $(".projects").animate({marginLeft:100 * $(this).index() + "%" });
        workBtn(count);
    })
    // 다음 버튼

    $(".work__controls button:eq(1)").on("click",function(){
        $(".projects").animate({marginLeft:-100 * $(this).index() + "%" });
        workBtn(count);
    })

    // 네비게이션 버튼
    $(".work__list button").on("click",function(){
        $(".projects").animate({marginLeft:-100 * $(this).index() + "%" });
        $(".work__list button").css({background:"var(--color-gray)"});
        $(this).css({background:"var(--color-accent)"});

    });

    // Arrow up 상단이동 버튼
    $(".arrow-up").on("click",function(){
        $("html").animate({scrollTop:0});
    });

});
*/






