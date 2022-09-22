$(document).ready(function () {
    $("#project").load("itproject.html");
    $("#itProject").addClass("active");

    $("#itProject").click(function (e) { 
        e.preventDefault();
        $("#nonITProject").removeClass("active");
        $("#itProject").addClass("active");
        $("#project").load("itproject.html");
    });

    $("#nonITProject").click(function (e) {
        e.preventDefault();
        $("#itProject").removeClass("active");
        $("#nonITProject").addClass("active");
        $("#project").load("nonitproject.html");
    });

});

let navbarHeight = 120;
window.addEventListener("scroll", () => {
    if ($(window).scrollTop() >= navbarHeight) {
      $("#navbar").css("box-shadow", "3px 0 7px rgba(0, 0, 0, 0.306)")
    }else{
      $("#navbar").css("box-shadow", "none")
    }
});