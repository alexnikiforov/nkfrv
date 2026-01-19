// Scroll reveal via IntersectionObserver
const revealTargets = () => {
  // Target elements with .reveal class and sections/footer
  const revealElements = document.querySelectorAll(".reveal");
  const additionalTargets = document.querySelectorAll("section:not(.reveal), footer:not(.reveal)");
  const targets = [...revealElements, ...additionalTargets];

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  targets.forEach((el) => {
    if (!el.classList.contains("reveal")) {
      el.classList.add("reveal");
    }
    io.observe(el);
  });
};

const setYear = () => {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
};

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  revealTargets();
});