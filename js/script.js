//타이머 작동
function counter(){
   var dday = new Date("jul 11,2022,09:00:00").getTime(); //디데이
   setInterval(function(){
      var now = new Date(); //현재 날짜 가져오기
      var distance = dday - now;
      var d = Math.floor(distance / (1000 * 60 * 60 * 24));
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);
      if(s < 10){
         s = '0'+s;
      }
      $('.d_day1').html(d+' 일　　　'+h+' : '+m+' : '+s)
   }, 1000);
}
counter();

//GNB 서브메뉴 
$(function(){
   $(".submenu_wrap").hide();
   $(".gnb li, .submenu_wrap").mouseenter(function(){
      $(".submenu_wrap").stop().slideDown();
   });
   $(".gnb li, .submenu_wrap").mouseleave(function(){
      $(".submenu_wrap").stop().slideUp();
   });
});

//스케쥴 드롭다운
$(function(){
   $(".schedule_menu").hide();
   $("#schedule ul li").mouseenter(function(){
      $(this).children(".schedule_menu").stop().slideDown();
   });
   $("#schedule ul li").mouseleave(function(){
      $(this).children(".schedule_menu").stop().slideUp();
   });
});

//경기일정 탭
$(document).ready(function(){
  
   $('ul.tabs li').click(function(){
     var tab_id = $(this).attr('data-tab');
 
     $('ul.tabs li').removeClass('current');
     $('.tab-content').removeClass('current');
 
     $(this).addClass('current');
     $("#"+tab_id).addClass('current');
   })
 
 });

//탭내려보내기  회색줄
$(function(){
   //menu
   //┌─ 1.서브메뉴를 숨긴다.
   $(".subtab").hide();
   //┌─ #gnb li에 마우스가 올라가면,
   $("#calendar li").click(function(){
      //┌─ #gnb li의 자식인 .submenu 를 슬라이드다운 한다.
      $(this).children(".subtab").stop().slideDown();
   });
   //┌─ #gnb li에 마우스가 벗어나면,
   $("#calendar li").mouseleave(function(){
      //┌─ #gnb li의 자식인 .submenu 를 슬라이드업 한다.
      $(this).children(".subtab").stop().slideUp();
   });
   //선택자와 명령문 사이에 .stop() 를 넣어 무분별한 재생을 막을 수 있다.
});

//탭내려보내기  흰색줄

$(function(){
   //menu
   //┌─ 1.서브메뉴를 숨긴다.
   $(".subtab").hide();
   //┌─ #gnb li에 마우스가 올라가면,
   $("#calendar1 li").click(function(){
      //┌─ #gnb li의 자식인 .submenu 를 슬라이드다운 한다.
      $(this).children(".subtab").stop().slideDown();
   });
   //┌─ #gnb li에 마우스가 벗어나면,
   $("#calendar1 li").mouseleave(function(){
      //┌─ #gnb li의 자식인 .submenu 를 슬라이드업 한다.
      $(this).children(".subtab").stop().slideUp();
   });
   //선택자와 명령문 사이에 .stop() 를 넣어 무분별한 재생을 막을 수 있다.
});

//페이드 슬라이드
var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < 6) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } 
        
        $(".slideImg").eq(currentIndex).siblings().fadeOut();
        $(".slideImg").eq(currentIndex).fadeIn();
        
    },3000);

//상세페이지 클릭 사진 변경//
$(function(){

   $(".pic2").hide();
   $(".pic3").hide();
   $(".pic4").hide();
   $(".pic5").hide();
   $("#button1").click(function(){
         $(".pic1").fadeIn();
         $(".pic2").fadeOut();
         $(".pic3").fadeOut();
         $(".pic4").fadeOut();
         $(".pic5").fadeOut();
   });	
   $("#button2").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeIn();
         $(".pic3").fadeOut();
         $(".pic4").fadeOut();
         $(".pic5").fadeOut();
   });
   $("#button3").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeOut();
         $(".pic3").fadeIn();
         $(".pic4").fadeOut();
         $(".pic5").fadeOut();
   });
   $("#button4").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeOut();
         $(".pic3").fadeOut();
         $(".pic4").fadeIn();
         $(".pic5").fadeOut();
   });
   $("#button5").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeOut();
         $(".pic3").fadeOut();
         $(".pic4").fadeOut();
         $(".pic5").fadeIn();
   });
   $("#button6").click(function(){
         $(".pic1").fadeIn();
         $(".pic2").fadeOut();
         $(".pic3").fadeOut();
         $(".pic4").fadeOut();
         $(".pic5").fadeOut();
   });	
   $("#button7").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeIn();
         $(".pic3").fadeOut();
         $(".pic4").fadeOut();
         $(".pic5").fadeOut();
   });
   $("#button8").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeOut();
         $(".pic3").fadeIn();
         $(".pic4").fadeOut();
         $(".pic5").fadeOut();
   });
   $("#button9").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeOut();
         $(".pic3").fadeOut();
         $(".pic4").fadeIn();
         $(".pic5").fadeOut();
   });
   $("#button10").click(function(){
         $(".pic1").fadeOut();
         $(".pic2").fadeOut();
         $(".pic3").fadeOut();
         $(".pic4").fadeOut();
         $(".pic5").fadeIn();
   });
});

//클릭시 CSS변경 csschanger1
//흰배경 검글씨 >>검배경 흰글씨
$(function(){          
   $(".csschanger1").click(function(){
 $(".csschanger1").css({"background-color":"#333","color":"#fff","border":"1px solid #ddd"});
 $(this).eq(0).siblings().css({"background-color":"#fff","color":"#333"});
 $(".soldout").css({"background-color":"#ddd","color":"#aaa","border":"1px solid #aaa"});
   });	
});

$(function(){          
   $(".csschanger2").click(function(){
 $(".csschanger2").css({"background-color":"#333","color":"#fff","border":"1px solid #ddd"});
 $(this).eq(0).siblings().css({"background-color":"#fff","color":"#333"});
     });	
});

//상세페이지 하단 슬라이드
$(document).on('ready', function() {
	$(".regular").slick({infinite: true , /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */         
	slidesToShow: 4, /* 화면에 보여질 이미지 갯수*/        
	slidesToScroll: 1,  /* 스크롤시 이동할 이미지 갯수 */         
	autoplay: true, /* 자동으로 다음이미지 보여주기 */         
	arrows: true, /* 화살표 */         
	dots:true, /* 아래점 */         
	autoplaySpeed:1000,/* 다음이미지로 넘어갈 시간 */         
	speed:2000 , /* 다음이미지로 넘겨질때 걸리는 시간 */         
	pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */        
	//vertical:true,/* 세로방향으로 슬라이드를 원하면 추가하기// 기본값 가로방향 슬라이드*/        
	       });
});