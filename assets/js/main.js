$(document).ready(function(){
    $(".header").load("header.html"); 



    // nav animation


    setTimeout(
     function(){
        var path1 = $('.path1');
        var path2 = $('.path2');
        var mline = $('.mline');
        $('.svgburg').click(function(){
      
           path1.toggleClass('cross');
            path2.toggleClass('cross');
            mline.toggleClass('hide');



            $(".navbar").toggleClass("active");
        })
     }
    , 100)

    
 
      
  });



