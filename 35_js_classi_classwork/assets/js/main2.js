$(function(){
    $("body").width();
    console.log($("body").css("margin-top", '200px'));
    $("body").css({
        backgroundColor:'tomato', 
        fontSize:'26px', 
        color:'blue'});
    
    $("p:eq(2)").css('color', 'green');

    $('p').addClass('foo');

    $(".wrap p").addClass('bar');

    $('p').on('click', function(){
        $(this).remove();
    });

    $("#my_div").on('click', function(){
        $(this).animate({width:'200px',height:'200px',}, 1000);
    });

    $("#my_div").on('click', function(){
        let body_html = $('body').html();
        console.log(body_html);
        let body_obj = $(body_html);
        console.log(body_obj);
        // $(this).html('<p>Hello</p>')
    });

});

// $(window).load(function(){

// });