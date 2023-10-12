var count = 0;   
var totalSlides = $(".projects>li").length - 1; // 총 슬라이드 수

// 다음 이미지 슬라이드
function projectSlide() {
    if (count < totalSlides) {
        count += 1;
        slideTo(count);
    }
}
        
// 이전 이미지 슬라이드
function projectSlideRe() {
    if (count > 0) {
        count -= 1;
        slideTo(count);
    }
}

function slideTo(index) {
    $(".projects").stop().animate({ marginLeft: -100 * index + "%" }, "slow");
    projectSlideBtn(index);
}

// 현재 선택 버튼의 하이라이트 효과 ● ○ ○ ○  CSS 배경색 조작
function projectSlideBtn(count){
    
    $(".work__list button").css({background:"var(--color-gray)"});
    $(".work__list button:eq(" + count + ")").css({background:"var(--color-accent)"});
};

// --------------------------------------------------------

$(function(){

    projectSlideBtn(count);

    // 이전버튼
    $(".work__controls button:eq(0)").on("click",function(){
    projectSlideRe();
    });

    // 다음버튼
    $(".work__controls button:eq(1)").on("click",function(){
        if (count < totalSlides) {
            projectSlide();
        }
    });

    $(".work__list button").on("click", function () {
        count = $(this).index();
        slideTo(count);
    });
});

