(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const menu = document.querySelector(".nav-more");

  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.removeAttribute("open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") menu.removeAttribute("open");
    });
  }

  const toast = document.getElementById("toast");
  let toastTimer = 0;

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(value);
        if (!toast) return;
        toast.hidden = false;
        toast.textContent = "Copied.";
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => {
          toast.hidden = true;
        }, 1800);
      } catch {
        window.prompt("Copy email", value);
      }
    });
  });

  const supportsViewTimeline =
    !reduce &&
    typeof CSS !== "undefined" &&
    CSS.supports("(animation-timeline: view()) and (animation-range: entry)");

  if (supportsViewTimeline || reduce) return;

  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((node) => {
    node.style.opacity = "0.001";
    node.style.transform = "translateY(0.9rem)";
    node.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(node);
  });
})();
