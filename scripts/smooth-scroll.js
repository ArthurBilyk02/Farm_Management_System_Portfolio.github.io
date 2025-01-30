$(document).ready(function() {
    console.log("smooth-scroll.js loaded!");
  
    // Smooth Scrolling for Navigation Links
    $("nav ul li a, .ui.menu a").on("click", function(event) {
      event.preventDefault();
      let targetId = $(this).attr("href").substring(1);
      let targetSection = $("#" + targetId);
  
      if (targetSection.length) {
        $("html, body").animate({
          scrollTop: targetSection.offset().top
        }, 600);
      }
    });
  });