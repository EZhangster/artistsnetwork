$(document).ready(function() {

var  nb = $(".nav-button");
    nbs = "nav-button-scrolled";
    logo = $(".logo").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > logo ) {
    nb.addClass(nbs);
  } else {
    nb.removeClass(nbs);
  }
});


$(nb).click( function() {
    $(this).addClass("nav-button-active");
    $(this).removeClass("nav-button");
    $(".page-container").addClass("container-nav-active");
    $(".square-1").addClass("square-1-active");
    $(".square-2").addClass("square-2-active");
    $(".square-3").addClass("square-3-active");
    $(".square-4").addClass("square-4-active");
    $(".close, .link-square").removeClass("hidden");
} );

$(".close").click( function() {
    $(".nav-button-active").addClass("nav-button");
    $(".nav-button-active").removeClass("nav-button-active");
    $(".square-1").removeClass("square-1-active");
    $(".square-2").removeClass("square-2-active");
    $(".square-3").removeClass("square-3-active");
    $(".square-4").removeClass("square-4-active");
    $(".close").addClass("hidden");
} );

$(document).scroll(function(){
var y = $(document).scrollTop();

$("#update").html(y);

if (y>400) {
  $("#florence").fadeIn();
}

else {
  $("#florence").fadeOut();
}

if (y>800) {
  $("#selfie").fadeIn();
}

else {
  $("#selfie").fadeOut();
}

if (y>1200) {
  $("#simonetta").fadeIn();
}

else {
  $("#simonetta").fadeOut();
}

if (y>1600) {
  $("#venus-simonetta").fadeIn();
}

else {
  $("#venus-simonetta").fadeOut();
}

if (y>2000) {
  $("#bonfire").fadeIn();
}

else {
  $("#bonfire").fadeOut();
}

if (y>2400) {
  $("#grave").fadeIn();
}

else {
  $("#grave").fadeOut();
}

if (y>2800) {
  $("#boticelli_museum").fadeIn();
}

else {
  $("#boticelli_museum").fadeOut();
}
});

var mixer = mixitup('.container');

});
