// Husnain Gujjar Portfolio — interactive features
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Highlight the navigation link for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

// Update the footer year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your real email address before publishing.
const contactEmail = "hello@example.com";
const emailButton = document.querySelector("#emailButton");
emailButton.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Portfolio project inquiry")}`;

// Replace these sample details with your real contact information.
const contactDetails = { whatsapp: "923000000000", email: "hello@example.com" };
const whatsappButton = document.querySelector("#whatsappButton");
whatsappButton.href = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent("Assalam-o-alaikum Husnain, I visited your portfolio.")}`;
emailButton.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent("Portfolio project inquiry")}`;
window.addEventListener("load", () => {
  const loader = document.querySelector("#pageLoader");
  window.setTimeout(() => loader.classList.add("loaded"), 450);
});
