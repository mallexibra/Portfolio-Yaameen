$(document).ready(function () {
    $("#project").load("itproject.html");
    $("#itProject").addClass("active");
    $("#itProject").css("background-color", "#5A80FD");

    $("#itProject").click(function (e) { 
        e.preventDefault();
        $("#nonITProject").removeClass("active");
        $("#itProject").addClass("active");
        $("#project").load("itproject.html");
        $("#itProject").css("background-color", "#5A80FD");
        $("#nonITProject").css("background-color", "#121315");
      });
      
      $("#nonITProject").click(function (e) {
        e.preventDefault();
        $("#itProject").removeClass("active");
        $("#nonITProject").addClass("active");
        $("#project").load("nonitproject.html");
        $("#itProject").css("background-color", "#121315");
        $("#nonITProject").css("background-color","#5A80FD");
    });

    let navbarHeight = 120;
    window.addEventListener("scroll", () => {
        if ($(window).scrollTop() >= navbarHeight) {
          $("#navbar").css("box-shadow", "3px 0 7px rgba(0, 0, 0, 0.306)");
        }else{
          $("#navbar").css("box-shadow", "none");
        };
    });
    
    let tema = localStorage.getItem("tema");
    let toggle = document.querySelector(".dark");

    if(!tema){
      localStorage.setItem("tema", "light");
    }

    
    const darkMode = () => {
      localStorage.setItem("tema", "dark");
      $("body").css("background-color", "#00121D");
      $("#navbar").css("background-color", "#00121D");
      $(".rectangle-out").css("background-color", "#206FEB");
      $(".rectangle-in").css("background-color", "#2573EE");
      $(".myCV").css("background-color", "#206FEB");
      $(".container .left a").css("background-color", "#206FEB");
      $(".sosmed").css("background-color", "#206FEB");
      $(".image").css("background-color", "#206FEB");
      $(".technical .main span").css("background-color", "#206FEB");
      $(".general .main span").css("background-color", "#206FEB");
      $("footer").css("background-color", "#000");
      $(".talk").css("background-color", "#121416");
      $(".link").css("background-color", "#050505");
      $(".link a").css("background-color", "#121315");
      $(".link a").css("opacity", "100%");
      $(".link a").css("border-radius", "10px");
      $(".myWorks .link a").css("border", "none");
    };

    const lightMode = () => {
      localStorage.setItem("tema", "light");
      $("body").css("background-color", "#1c4a64");
      $("#navbar").css("background-color", "#1c4a64");
      $(".myWorks .link a").css("background-color", "none");
      $(".myWorks .link .active").css("background-color", "#1c4a64");
    };
    
    if(tema == "dark"){
      darkMode();
    }
  
    toggle.addEventListener("click", function (e){
      // e.preventDefault();
      tema = localStorage.getItem("tema");
      if(tema == "light"){
        darkMode();
      }else{
        lightMode();
      }
    });
  });
