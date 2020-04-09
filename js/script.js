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
$('.imgoverlay').hover(function () {
    $('.overlaytext', this).slideToggle('slow');
}, function () {
    $('.overlaytext', this).slideToggle('slow');
});
$("button").click(function (event) {
    event.preventDefault();
    let user = document.getElementById('username').value;
    alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
});
$("button").on('click', function () {
    $('form').each(function () {
        this.reset();
    });
});