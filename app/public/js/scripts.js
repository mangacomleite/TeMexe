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

// VOTAR

$('.vote').on('click', function(){
    var text = $(this).text() == 'Votar' ? 'Votado' : 'Votar';
    $(this).find('span').text(text);
    $(this).toggleClass('votado');
});

// Like, dislike, vote

$('.like').on('click', function(e){
    e.preventDefault();
    $(this).find('i').each(function(){
        $(this).toggleClass('fa-heart-o fa-heart');
    });

    $(this).find('span').each(function(){
        var x = parseInt( $(this).text());

        $(this).parent().find('i').each(function() {
            if( $(this).hasClass('fa-heart')) {
                x++;
            }else {
                x--;
            }
        });
        $(this).text(x);
    });
});

$('.voteSuggestion').on('click', function(e){
    e.preventDefault();
    $(this).find('i').each(function(){
        $(this).toggleClass('fa-hand-o-up fa-hand-rock-o');
    });

    $(this).find('span').each(function(){
        var x = parseInt( $(this).text());

        $(this).parent().find('i').each(function() {
            if( $(this).hasClass('fa-hand-rock-o')) {
                x++;
            }else {
                x--;
            }
        });
        $(this).text(x);
    });

});

// MODAL

$(document).on('click', '#close-preview', function(){
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        },
         function () {
           $('.image-preview').popover('hide');
        }
    );
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse");
    });
    // Create the preview image
    $(".image-preview-input input:file").change(function (){
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        };
        reader.readAsDataURL(file);
    });
});

// Index MAP

function initMap() {
  // var myLatLng = {lat: -29.9629768, lng: -51.629387};
  //
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 15,
  //   center: myLatLng
  // });
  //
  // var marker = new google.maps.Marker({
  //   position: myLatLng,
  //   map: map,
  //   title: 'Hello World!'
  // });
  var locations = [
      ['Charqueadas', -29.9629768, -51.629387, 23],
      ['São Jerônimo', -29.962127, -51.7250108, 15],
      ['Triunfo', -29.9356233, -51.7124176, 21],
      ['Butiá', -30.1180899, -51.9615457, 63]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new google.maps.LatLng(-29.9629768, -51.629387),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
          };
      })(marker, i));
  }
}
