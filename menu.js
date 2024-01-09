// siden er færdig med at loade
document.addEventListener("DOMContentLoaded", function () {
  // window.location.href = henter den fulde URL for den aktuelle side.
  const currentLocation = window.location.href;
  // vælger alle elementer med klassen "nav-link" og "logolink a"
  const navLink = document.querySelectorAll(".navlink");
  const logoLink = document.querySelectorAll(".logolink a");
  const webLink = document.querySelectorAll(".web");
  const uxuiLink = document.querySelectorAll(".uxui");
  const animationLink = document.querySelectorAll(".animation");
  const indholdLink = document.querySelectorAll(".indhold");
  const portfolieLink = document.querySelectorAll(".portfolie");

  // vælger alle links
  navLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "navlink"
      link.classList.add("active");
    }
  });

  logoLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "web"
      link.classList.add("active");
    }
  });

  webLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "web"
      link.classList.add("active");
    }
  });

  uxuiLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "web"
      link.classList.add("active");
    }
  });

  animationLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "web"
      link.classList.add("active");
    }
  });

  indholdLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "web"
      link.classList.add("active");
    }
  });

  portfolieLink.forEach((link) => {
    // checker om siden indeholder URL'en for det aktuelle link
    if (currentLocation.includes(link.href)) {
      // classen "active" tilføjes til "web"
      link.classList.add("active");
    }
  });
});
