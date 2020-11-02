(function (ScrollReveal, $) {
  ScrollReveal().reveal(".headline", {
    distance: "50px",
    duration: 2000,
    interval: 800,
  });
  ScrollReveal().reveal(".reveal", {
    distance: "50px",
    duration: 1000,
    interval: 300,
  });

  window.addEventListener("scroll", function (e) {
    var $header = $(".header");
    if (window.scrollY > 0) {
      if ($header.hasClass("header--over")) return;
      $header.addClass("header--over");
    } else {
      $header.removeClass("header--over");
    }
  });
})(ScrollReveal, jQuery);
