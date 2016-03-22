$(function() {
  $(".slide-up").click(function() {
    $("img").slideUp();
  });
  $(".slide-down").click(function() {
    $("img").slideDown();
  });
  $(".slide-toggle").click(function() {
    $("img").slideToggle();
  });
  $(".fade-in").click(function() {
    $("img").fadeIn();
  });
  $(".fade-out").click(function() {
    $("img").fadeOut();
  });
  $(".fade-toggle").click(function() {
    $("img").fadeToggle();
  });

  $(".darkmode").click(function() {
    $("body").toggleClass("dark");
    $("p, h1").toggleClass("white");
  });

  $("p").click(function() {
    $(this).toggleClass("highlight");
    $(this).children("span").toggleClass("highlight");
    $(this).children("span").toggleClass("highlight");    
  });



});
