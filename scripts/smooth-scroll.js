            $(document).ready(function() {
            console.log("smooth-scroll.js loaded!");

            // Smooth Scrolling for Navigation Links
            $("nav ul li a, .ui.menu a").on("click", function(event) {
            event.preventDefault();

            let targetId = $(this).attr("href").substring(1);

            if (targetId === "home") {
            // Scroll all the way to the top when clicking "Home"
            $("html, body").animate({ scrollTop: 0 }, 600);
            } else {
            let targetSection = $("#" + targetId);

            if (targetSection.length) {
            $("html, body").animate({
                scrollTop: targetSection.offset().top
            }, 600);
            }
        }
    });
});