$(function(){
     $("a.scroll").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
     return false;
     })
 $("a.rollFade img").hover(function(){
       $(this).fadeTo("fast", 0.6); 
    },function(){
       $(this).fadeTo("fast", 1.0); 
    });
});
//テストテスト

