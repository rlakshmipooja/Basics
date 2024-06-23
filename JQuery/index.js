$(document).ready(function () {
  // waits till jquery gets loaded

  $("button").click(function () {
    $("h1").css("color", "green");
  });

  $(".hide").click(function () {
    $("h1").hide(); // disappear forever
  });

  $(".toggle").click(function () {
    $("h1").toggle(); // toggle
  });

  $(".fadeOut").click(function () {
    $("h1").fadeOut(); // fade out
  });

  $(".fadeIn").click(function () {
    $("h1").fadeIn(); // fade in
  });

  $(".fadeToggle").click(function () {
    $("h1").fadeToggle(); // fade toggle
  });

  $(".slideUp").click(function () {
    $("h1").slideUp(); // slide up
  });

  $(".slideDown").click(function () {
    $("h1").slideDown(); // slide down
  });

  $(".slideToggle").click(function () {
    $("h1").slideToggle(); // slide toggle
  });

  $(".animate").click(function () {
    $("h1").animate({
      opacity: 0.5, // only numeric values can be animated, color: red, text cannot be animated
    });
  });

  $(".animate1").click(function () {
    $("h1").slideUp().slideDown().animate({
      opacity: 0.5,
    });
  });

  $("input").keypress(function (event) {
    $("h1").text(event.key);
  });

  $("h1").mouseover(function () {
    $("h1").css("color", "purple");
  });
});
