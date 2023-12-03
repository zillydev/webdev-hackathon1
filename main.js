document.addEventListener("DOMContentLoaded", function () {
    var homeSection = document.getElementById('home');
    var homeButton = document.getElementById('nav-btn-home');
    homeButton.addEventListener('click', function () {
        homeSection.scrollIntoView({behavior: "smooth"});
    });

    var aboutUsSection = document.getElementById('about-us');
    var aboutUsButton = document.getElementById('nav-btn-aboutus');
    aboutUsButton.addEventListener('click', function () {
        aboutUsSection.scrollIntoView({behavior: "smooth"});
    });

    var servicesSection = document.getElementById('services');
    var servicesButton = document.getElementById('nav-btn-services');
    servicesButton.addEventListener('click', function () {
        servicesSection.scrollIntoView({behavior: "smooth"});
    });

    var portfolioSection = document.getElementById('portfolio');
    var portfolioButton = document.getElementById('nav-btn-portfolio');
    portfolioButton.addEventListener('click', function () {
        portfolioSection.scrollIntoView({behavior: "smooth"});
    });

    var teamSection = document.getElementById('team');
    var teamButton = document.getElementById('nav-btn-team');
    teamButton.addEventListener('click', function () {
        teamSection.scrollIntoView({behavior: "smooth"});
    });
  });