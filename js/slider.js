var slideWidth = 1000;
var sliderTimer;
$(function() {
    $(".slidewrap").width($(".slidewrap").children().width() * slideWidth);
    sliderTimer = setInterval(nextSlide, 5000);
    $("#slider").hover(function() {
        clearInterval(sliderTimer);
    }, function() {
        sliderTimer = setInterval(nextSlide, 5000);
    });
//    nextSlide($(".slide1").slideDown(300));
    /*$("#next_slide").click(function() {
        clearInterval(sliderTimer);
        nextSlide();
        sliderTimer = setInterval(nextSlide, 5000);
    });
    $("#prev_slide").click(function() {
        clearInterval(sliderTimer);
        prevSlide();
        sliderTimer = setInterval(nextSlide, 5000);
    });*/

});

function nextSlide() {
    var currentSlide = parseInt($(".slidewrap").data("current"));
    currentSlide++;
    if (currentSlide >= $(".slidewrap").children().length) {
        currentSlide = 0;
    }
    $(".slidewrap").animate({
        left: -currentSlide * slideWidth
    }, 500).data("current", currentSlide);

}
/*
function prevSlide() {
    var currentSlide = parseInt($(".slidewrap").data("current"));
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = $(".slidewrap").children().length - 1;
    }
    $(".slidewrap").animate({
        left: -currentSlide * slideWidth
    }, 500).data("current", currentSlide);
}*/