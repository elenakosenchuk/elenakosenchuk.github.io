// $(function(){
//     $(window).on('scroll', function(){
//         if($(window).scrollTop()>$(".first_screen").height()){
//             if(!$("body").hasClass("fixed_nav")){
//                 $("body").addClass("fixed_nav");
//             }           
//         }else{
//             if($("body").hasClass("fixed_nav")){
//             $("body").removeClass("fixed_nav");
//             }
//         }
//     });
// })

$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()>0){
            if(!$("body").hasClass("fixed_nav")){
                $("body").addClass("fixed_nav");
            }           
        }else{
            if($("body").hasClass("fixed_nav")){
            $("body").removeClass("fixed_nav");
            }
        }
    });

    $("#main_menu a").on('click', function(e){
        e.preventDefault();
        const top = $($(this).attr("href")).offset().top-60;       
        $("html, body").animate({scrollTop:top+'px'}, 500);
    });
})