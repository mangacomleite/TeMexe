//Menu
$(window).scroll(function(){
    var fromTopPx = 1; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        $('.menuTop').addClass('scrolled');
    }else{
        $('.menuTop').removeClass('scrolled');
    }
});
//Menu

//sliders body
$(document).ready(function() {
    
    $('a[href^="#"]').on('click', function(event) {    
        var target = $(this).attr("href");

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top-50
            }, 600);
        }
    });

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.header-image').css({'background-position':'center calc(50% + '+(scrolled*.5)+'px)'});
    }

    $(window).scroll(function(e){
        parallax();
    });

    var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

    $(".navbarMediaIn .sliding-middle-out a").on("click", function(event){
        event.preventDefault();
        $(".navbarMediaIn .slidingActive").removeClass("slidingActive");
        $(this).parent().addClass("slidingActive");

        var social = $(this).attr("data-social");

        if (social=="All") {
            $(".grid>div").css("opacity","1");
        }
        else{
            // $(".grid>.data"+social+"").css("opacity","1");
            $(".grid>.data"+social+"").css("opacity","1");
            $(".grid>div:not(.data"+social+")").css("opacity","0.4");
        }
        
        // alert(social);
    });

    // $(".mainNavbar .sliding-middle-out a").on("click", function(event){
    //     event.preventDefault();
    //     $(".mainNavbar .slidingActive").removeClass("slidingActive");
    //     $(this).parent().addClass("slidingActive");
    // });

    $("#searchInput").on("keyup", function(event){
        // event.preventDefault();
        if ($(this).val()!=""){
            $("#searchResults").addClass("open");
        }
        else {
            $("#searchResults").removeClass("open");
        }
        
    }).focus(function(){
        if ($(this).val()!=""){
            $("#searchResults").addClass("open");
        }
    }).blur(function(){
        $("#searchResults").removeClass("open");
    });

    $("#toast").addClass("show");
    var myTimeOut;
    myTimeOut = setTimeout(function(){ $("#toast").removeClass("show"); }, 3000);

    $("#toast").mouseout( function () {
      myTimeOut = setTimeout(function(){ $("#toast").removeClass("show"); }, 1000);
    });

    $("#toast").mouseover( function () {
      clearTimeout(myTimeOut);
    });

});