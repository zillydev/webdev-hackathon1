document.addEventListener("DOMContentLoaded", function () {
    var aboutUsSection = document.getElementById('section2');
    var scrollButton = document.getElementById('scroll-button');
    scrollButton.addEventListener('click', function () {
        aboutUsSection.scrollIntoView({behavior: "smooth"});
    });

    var homeSection = document.getElementById('dashboard');
    var homeButton = document.getElementById('nav-btn-home');
    homeButton.addEventListener('click', function () {
        homeSection.scrollIntoView({behavior: "smooth"});
    });

    var aboutUsSection = document.getElementById('section2');
    var aboutUsButton = document.getElementById('nav-btn-aboutus');
    aboutUsButton.addEventListener('click', function () {
        aboutUsSection.scrollIntoView({behavior: "smooth"});
    });
  });