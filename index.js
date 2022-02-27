// ----- Dark mode -----

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("body, a, ul, .ps, .ai").toggleClass("dark");
}

$(".display").click(function () {
    $("body, a, ul, .ps, .ai").toggleClass("dark");
});

// ----- Highlight menu item on scroll -----

// Get scroll distance from top
$(window)
    .scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $("section").each(function (i) {
            if ($(this).position().top <= scrollDistance + 300) {
                $("nav a.active").removeClass("active");
                $("nav a").eq(i).addClass("active");
            }
        });

        // Animate "SWIPE" message
        if ($(".swipe").position().top <= scrollDistance + 450) {
            $(".swipe").addClass("animate");
        } else {
            $(".swipe").removeClass("animate");
        }
    })
    .scroll();

// ----- Show description under icons on hover -----
$(".skill").hover(
    function () {
        $(".tooltip", this).css("visibility", "visible");
    },
    function () {
        $(".tooltip", this).css("visibility", "hidden");
    }
);

// ----- Horizontal scroll arrows -----
$(".prev").click(function (event) {
    $(".slider").animate({ scrollLeft: "-=545" }, 800);
});

$(".next").click(function () {
    $(".slider").animate({ scrollLeft: "+=545" }, 800);
});

// Active / Inactive arrows

$(".slider").scroll(function () {
    var sliderScrollLeft = $(".slider").scrollLeft();
    var sliderWidth = $(".slider").outerWidth();
    var scrollWidth = $(".slider")[0].scrollWidth;
    var scrollLeft = $(".slider").scrollLeft();

    // Previous Arrow
    if (sliderScrollLeft >= 1) {
        $(".prev").removeClass("inactive");
    } else {
        $(".prev").addClass("inactive");
    }

    // Next Arrow
    if (scrollWidth - sliderWidth <= scrollLeft + 1) {
        $(".next").addClass("inactive");
    } else {
        $(".next").removeClass("inactive");
    }
});

// ----- Portfolio Filtering -----
$(".category").click(function () {
    // ----- Menu
    $(".category").removeClass("active");
    $(this).addClass("active");

    // ----- Cards

    // Get "id" of selected category
    var selected = $(this).attr("id");

    // For "all" show all cards
    if (selected == "all") {
        $(".card").css("display", "inline");
        $(".card").addClass("animate-in");
        $(".slider").scrollLeft(1);
    }
    // When a category is chosen
    else {
        // Hide all cards
        $(".card").css("display", "none");
        // Display the cards for the selected category
        $(".card" + "." + selected).css("display", "inline");
        $(".card").addClass("animate-in");
        $(".slider").scrollLeft(1);
    }

    var windowWidth = $(window).width();
    var sectionWidth = $(".slider").prop("scrollWidth");

    if (sectionWidth < windowWidth) {
        $(".prev, .next").addClass("inactive");
    } else {
        $(".next").removeClass("inactive");
    }
});

// Show Lightbox
$(".lb-open").click(function () {
    var clicked = $(this).attr("id");

    $("." + clicked).css("display", "block");
    // Disable page scrolling
    $("html, body").css("overflow", "hidden");

    $(".close").click(function () {
        $("." + clicked).css("display", "none");
        // Enable page scrolling
        $("html, body").css("overflow", "auto");
    });

    $(document).on("keyup", function (e) {
        if (e.key == "Escape") {
            $("." + clicked).css("display", "none");
            $("html, body").css("overflow", "auto");
        }
    });
});
