  var len = $(".slogan img").length - 1,
            img = $(".slogan img");

        function nextAnim() {
            $(this).delay(len * 1000).animate({
                opacity: 1
            }, 1000, againAnim)
        }

        function againAnim() {
            $(this).delay(len * 1000).animate({
                opacity: 0
            }, 1000, nextAnim);
        }
        img.each(function(i) {
            $(this).delay(i * 1000).animate({
                opacity: 1
            }, 1000, againAnim);
        });
