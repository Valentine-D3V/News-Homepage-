const navToggle = document.querySelector("#nav-toggle");

const navbar = document.querySelector("#navbar");

navToggle.addEventListener("click", (e) => {
  const openNav = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !openNav);
});
