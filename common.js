$(function(){
     $("a.scroll").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
     return false;
     })
 $("a.roll img").hover(function(){
       $(this).fadeTo("fast", 0.6); 
    },function(){
       $(this).fadeTo("fast", 1.0); 
    });
});