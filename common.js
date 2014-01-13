$(function(){
﻿//scroll
  $("a.scroll").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
     return false;
     })
 //image fade    
 $("a.rollFade img").hover(function(){
       $(this).fadeTo("fast", 0.6); 
    },function(){
       $(this).fadeTo("fast", 1.0); 
    });
 // img replace _on _off   
  $('a img.btn').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
          }, function(){
             if (!$(this).hasClass('currentPage')) {
             $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
   });
 //link box
    $(".box_hover").click(function(){
         window.location=$(this).find("a").attr("href");
         return false;
    });
    
    
});
//テストテスト

