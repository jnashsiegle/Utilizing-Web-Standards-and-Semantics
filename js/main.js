/**
 * Created by janasiegle on 5/6/15.
 */


$(document).ready(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;

    });

});
document.querySelector("#primaryNav-toggle")

    .addEventListener("click", function () {
    this.classList.toggle("active");

});



