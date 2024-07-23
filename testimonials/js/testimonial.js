$(function() {
    if (location.href.indexOf('?') > 0) {
        var offset = location.href.slice(location.href.indexOf('?') + 1);
    } else offset = "offset=0";

    $('a[href*="' + offset + '"]').addClass('active');

    $('#add-testimonial').on('submit', function() {
        var userName = $('#user-name'),
            message = $('#message');
        if (userName.val().length < 2) {
            userName.next().text('Заполните поле, пожалуйста').show();
            return false;
        } else userName.next().text('').hide();
        if (message.val().length < 10) {
            message.next().text('Слишком короткий отзыв').show();
            return false;
        } else message.next().text('').hide();
        $.ajax({
            type: 'POST',
            url: 'db.php',
            data: {
                'send-testimonial': true,
                'user-name': userName.val(),
                'message': message.val(),
            },
            success: function(data) {

                $('#all-testimonials').prepend(data);

            },
            error: function(data) {
                console.log("Error!!!" + data);
            }
        });
        return false;
    });
});