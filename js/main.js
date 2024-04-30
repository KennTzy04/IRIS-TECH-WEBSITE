(function ($) {
    "use strict";
    

    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills section
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    

    // Clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    // scroll smooth //
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1100, function(){
        
                window.location.hash = hash;
            });
        }
    });
    

  
})(jQuery);

// Select the "Read More..." buttons and the additional text
var readMoreBtn = document.querySelector('.read-more-btn');
var additionalText = document.querySelector('#more-text');
var readMoreBtnStory = document.querySelector("label[for='toggle-story']");
var additionalTextStory = document.querySelector('#more-text-story');
var readMoreBtnGoal = document.querySelector("label[for='toggle-goal']");
var additionalTextGoal = document.querySelector('#more-text-goal');

// Function to toggle the visibility of the additional text
function toggleText(button, text) {
    button.addEventListener('click', function() {
        if (text.style.display === 'none' || text.style.display === '') {
            text.style.display = 'block';
            button.textContent = 'Read Less...';
        } else {
            text.style.display = 'none';
            button.textContent = 'Read More...';
        }
    });
}

// Add a click event listener to the "Read More..." buttons
toggleText(readMoreBtn, additionalText);
toggleText(readMoreBtnStory, additionalTextStory);
toggleText(readMoreBtnGoal, additionalTextGoal);

