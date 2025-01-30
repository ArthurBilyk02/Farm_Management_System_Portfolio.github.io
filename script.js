$(document).ready(function() {

  // Navbar Fade-In Effect on Scroll
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function() {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function() {
      $(".fixed.menu").transition("fade out");
    }
  });

  // Sidebar Toggle (For Mobile)
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

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

  // Contact Form Handling
  $("#contact-form").on("submit", function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name && email && message) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      alert("Thank you for your message!");
      $(this).trigger("reset");
    } else {
      alert("Please fill in all fields.");
    }
  });

});
