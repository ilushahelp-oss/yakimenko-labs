(() => {
  const header = document.querySelector(".site-header");
  const drawer = document.querySelector(".nav-drawer");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (drawer) {
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.removeAttribute("open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.open) {
        drawer.removeAttribute("open");
        drawer.querySelector("summary")?.focus();
      }
    });
  }

  const viewOk = CSS.supports("(animation-timeline: view()) and (animation-range: entry)");
  if (!viewOk && !reduce.matches) {
    const nodes = document.querySelectorAll(
      ".print, .app-card, .readout-grid > div, .directory li, .partner-points li"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => {
      node.classList.add("js-reveal");
      io.observe(node);
    });
  }
})();
