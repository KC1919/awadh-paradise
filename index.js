$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // Set the time interval for each slide (in milliseconds)
    autoplayHoverPause: true,
    nav: true, // Set to 'false' if you don't want navigation arrows
    dots: true, // Set to 'false' if you don't want pagination dots
  });
});
