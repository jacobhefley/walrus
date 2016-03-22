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
});
