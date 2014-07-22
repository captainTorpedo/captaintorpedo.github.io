$( document ).ready(function() {

  selectNav = function(i) {
    $(".navbar .selected").removeClass("selected");
    if (i >= 0) {
      $($(".navbar li")[i]).addClass("selected");
    }
  }

  $(".navbar li a").click(function (e) {
    $(".navbar .selected").removeClass("selected");
    $(e.target).parent().addClass("selected");
  });

  $(document).scroll(function() {
    if ($(document).scrollTop() <= 0) {
      $(".pageUp").css('opacity',0);
    }
    else {
      $(".pageUp").css('opacity',1);
    }
    if ($(document).height() - $(window).height() - $(window).scrollTop() <= 0) {
      $(".pageDn").css('opacity',0);
    }
    else {
      $(".pageDn").css('opacity',1);
    }
    selectNav(Math.floor($(document).scrollTop()/$(window).height()+0.5)-1);
  });

  $(".pageUp").click(function() {
    $('html, body').animate({
      scrollTop: (Math.floor($(document).scrollTop()/$(window).height())-1)*$(window).height()
    }, 100);
  });
  $(".pageDn").click(function() {
    $('html, body').animate({
      scrollTop: (Math.floor($(document).scrollTop()/$(window).height())+1)*$(window).height()
    }, 100);
  });
});

