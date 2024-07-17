$(document).ready(function() {
  var fullHeader = '<div class="logoBlock">' +
      '<a href = "index.html" class="logolink">' +
          '<h2 id = "logo">Caroline Win</h2>' +
          '<p class = "small">User Experience Designer</p>' +
      '</a>' +
      '</div>' +
      '<div class="navBar">' +
        '<ul>' +
        '<li class = "primaryNav">' +
          '<a id = "portfolioNav" class = "primaryNavItems" href = "index.html"> PORTFOLIO </a>' +
        '</li>' +
        '<li class = "primaryNav">' +
          '<a id = "aboutNav" class = "primaryNavItems" href = "about.html"> ABOUT </a>' +
        '</li>' +
        '<li class = "primaryNav">' +
          '<a id = "resumeNav" class = "primaryNavItems" href = "resume.html"> RESUME </a>' +
        '</li>' +
        '</ul>' +
      '</div>';

  var footer = '<div id = "footerBackground">' +
      '<div class = "footerbox">' +
        '<div id = "iconContainer">' +
          '<a href = "https://www.linkedin.com/in/caroline-win-33527913">' +
            '<img class = "iconsHeader" src="images/linkedin.svg">' +
          '</a>' +
          '<a href = "https://twitter.com/caroline_win">' +
            '<img class = "iconsHeader" src="images/twitter.svg">' +
          '</a>' +
          '<a href = "https://www.instagram.com/carothejelly/">' +
            '<img class = "iconsHeader" src="images/instagram.svg">' +
          '</a>' +
        '</div>' +
        '<p id = "copyright"> © 2018 Caroline Win</p>' +
      '</div>' +
      '<a id="backToTop"><i class="material-icons">keyboard_arrow_up</i></a>' +
    '</div>';

    $("header").append(fullHeader);
    $("footer").append(footer);

    //Highlighting navigation
    switch($(this).attr('title')) {
      case "Caroline Win | Resume":
        $("#resumeNav").addClass("highlight");
        $("#resumeNavC").addClass("highlight");
        $("#portfolioNav").removeClass("highlight");
        $("#portfolioNavC").removeClass("highlight");
        $("#aboutNav").removeClass("highlight");
        $("#aboutNavC").removeClass("highlight");
        break;
      case "Caroline Win | About":
        $("#aboutNav").addClass("highlight");
        $("#aboutNavC").addClass("highlight");
        $("#portfolioNav").removeClass("highlight");
        $("#portfolioNavC").removeClass("highlight");
        $("#resumeNav").removeClass("highlight");
        $("#resumeNavC").removeClass("highlight");
        break;
      case "Caroline Win | UX & Interaction Designer":
        $("#aboutNav").removeClass("highlight");
        $("#aboutNavC").removeClass("highlight");
        $("#portfolioNavC").addClass("highlight");
        $("#portfolioNav").addClass("highlight");
        $("#resumeNavC").removeClass("highlight");
        $("#resumeNav").removeClass("highlight");
        break;
      default:
        $("#portfolioNav").addClass("highlight");
        $("#portfolioNavC").addClass("highlight");
        $("#aboutNav").removeClass("highlight");
        $("#resumeNav").removeClass("highlight");
        $("#aboutNavC").removeClass("highlight");
        $("#resumeNavC").removeClass("highlight");
      }

      // ===== Scroll to Top ====
      $(window).scroll(function() {
          $('#backToTop').clearQueue();
          $('#backToTop').stop();

          if ($(this).scrollTop() > 400) {        // If page is scrolled more than 50px
              $('#backToTop').fadeTo("fast", 0.7);    // Fade in the arrow
          } else {
              $('#backToTop').fadeTo("fast", 0);   // Else fade out the arrow
          }
      });

      $('#backToTop').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
      });

})
