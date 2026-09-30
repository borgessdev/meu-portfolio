const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav a");
const animatedElements = document.querySelectorAll(".reveal");
const currentYear = document.querySelector("#currentYear");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  document.body.classList.toggle("menu-open", isOpen);

  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});

currentYear.textContent = new Date().getFullYear();
