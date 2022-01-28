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
})

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
