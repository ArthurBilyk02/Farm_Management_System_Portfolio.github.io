$(document).ready(function() {

  console.log("script.js is loaded!");

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

  // Contact Form Handling - Inline Message Display with Field Highlighting
  $("#submit-btn").on("click", function() {
    console.log("✅ Submit button clicked!");

    let nameField = $("#name");
    let emailField = $("#email");
    let messageField = $("#message");
    let messageBox = $("#form-message");

    // Ensure elements exist before calling .val()
    if (nameField.length === 0 || emailField.length === 0 || messageField.length === 0 || messageBox.length === 0) {
      console.error("❌ One or more form fields are missing in the DOM!");
      return;
    }

    let name = nameField.val().trim();
    let email = emailField.val().trim();
    let message = messageField.val().trim();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset borders before checking
    $(".ui.form input, .ui.form textarea").removeClass("error-border");

    let hasError = false;

    if (!name) {
      nameField.addClass("error-border");
      hasError = true;
    }
    if (!email) {
      emailField.addClass("error-border");
      hasError = true;
    }
    if (!message) {
      messageField.addClass("error-border");
      hasError = true;
    }

    if (hasError) {
      console.warn("⚠️ Form validation failed: Missing fields.");
      
      // Show error message
      messageBox
        .removeClass("hidden positive")
        .addClass("negative")
        .html("<i class='times circle icon'></i> Please fill in all fields.")
        .fadeIn(300);
        
      return;
    }

    // Show success message
    messageBox
      .removeClass("hidden negative")
      .addClass("positive")
      .html("<i class='check circle icon'></i> Thank you for your message!")
      .fadeIn(300);

    // Clear form fields safely
    nameField.val("");
    emailField.val("");
    messageField.val("");

    console.log("✅ Form fields cleared!");

    // Hide message after 5 seconds
    setTimeout(function() {
      messageBox.fadeOut(300);
    }, 5000);
  });

  // Remove red border when the user types
  $(".ui.form input, .ui.form textarea").on("input", function() {
    $(this).removeClass("error-border");
  });

});
