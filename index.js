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
  ScrollReveal().reveal("zoom", {
    duration: 1500,
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    interval: 200,
    scale: 0.65,
    mobile: false,
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
