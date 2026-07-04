const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 2);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
