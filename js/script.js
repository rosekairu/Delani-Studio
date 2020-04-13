$(".clickable").click(function () {
    $(".design-hidden").slideToggle();
    $(".design-showing").slideToggle();
});
$(".clickable2").click(function () {
    $(".development-hidden").slideToggle();
    $(".development-showing").slideToggle();
});
$(".clickable3").click(function () {
    $(".management-hidden").slideToggle();
    $(".management-showing").slideToggle();
});
$('.imgOverLay').hover(function () {
    $('.overLayText', this).slideToggle('slow');
});

const key = '192c3bb803ef5e0c9189b6f9699b5f8a-us19';

$(document).ready(function () {
    $("#submit-button").click(function (event) {
        //event.preventDefault();
        var name = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        // form validation
        if (name == "") {
            alert("Please enter your name");
            return false;
        } else if (email == "") {
            alert("Please enter your email address")
            return false;
        } else if (message == "") {
            alert("Please give us feedback")
            return false;
        } else {
            alert("Dear " + name + ", we have received your message. Thank you for reaching out to us.");
        }
        $("button").on('click', function () {
            $('form').each(function () {
                this.reset();
            });
        });

    });
});
