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

//탭내려보내기
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