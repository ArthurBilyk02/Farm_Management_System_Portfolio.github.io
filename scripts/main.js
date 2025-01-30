$(document).ready(function() {
    console.log("main.js loaded!");
  
    // Load other scripts dynamically
    $.getScript("scripts/navbar.js");
    $.getScript("scripts/smooth-scroll.js");
    $.getScript("scripts/form-handler.js");
  });
  