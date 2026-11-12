const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

// Public contact links supplied for this portfolio.
const CONTACT = {
  email: "mrzahusnain@gmail.com",
  github: "https://github.com/Husnain-Gujjar",
  instagram: "https://www.instagram.com/lestyouknow/",
  tiktok: "https://www.tiktok.com/@husnaingujjar7676"
};
const emailLink = document.getElementById("email-link");
if (emailLink) emailLink.href = `mailto:${CONTACT.email}`;
const socialLinks = {
  github: CONTACT.github,
  instagram: CONTACT.instagram,
  tiktok: CONTACT.tiktok
};
document.querySelectorAll(".social-links a").forEach(a => {
  const platform = a.dataset.platform;
  if (socialLinks[platform]) a.href = socialLinks[platform];
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".hero-copy,.hero-art,.section").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
