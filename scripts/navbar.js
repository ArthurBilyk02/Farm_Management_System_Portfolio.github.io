$(document).ready(function() {
    console.log("navbar.js loaded!");
  
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
  });
  