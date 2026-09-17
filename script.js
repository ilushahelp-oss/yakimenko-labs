(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsViewTimeline =
    typeof CSS !== "undefined" &&
    CSS.supports("(animation-timeline: view()) and (animation-range: entry)");

  initHeader();
  initMenu();
  initCopy();
  initExternalLinks();
  initSmoothScroll();
  if (!reduceMotion && !supportsViewTimeline) {
    initRevealFallback();
  }

  function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMenu() {
    const dialog = document.getElementById("menu");
    const openBtn = document.getElementById("menu-open");
    if (!dialog || !openBtn || typeof dialog.showModal !== "function") return;

    openBtn.addEventListener("click", () => {
      if (!dialog.open) dialog.showModal();
    });

    dialog.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (dialog.open) dialog.close();
      });
    });
  }

  function initCopy() {
    const toast = document.getElementById("toast");
    const msg = toast ? toast.querySelector(".toast-msg") : null;
    let hideTimer = 0;

    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const email = btn.getAttribute("data-email");
        if (!email) return;
        const ok = await copyText(email);
        const original = btn.textContent;
        btn.textContent = ok ? "Copied" : "Copy failed";
        announce(ok ? `Copied ${email}` : "Copy failed");
        window.setTimeout(() => {
          btn.textContent = original;
        }, 1800);
      });
    });

    async function copyText(value) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        const area = document.createElement("textarea");
        area.value = value;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(area);
        return ok;
      }
    }

    function announce(text) {
      if (!toast || !msg) return;
      msg.textContent = text;
      toast.hidden = false;
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        toast.hidden = true;
      }, 2800);
    }
  }

  function initExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      link.setAttribute("target", "_blank");
      const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      rel.add("noreferrer");
      link.setAttribute("rel", Array.from(rel).join(" "));
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
        if (typeof target.focus === "function") {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  function initRevealFallback() {
    const nodes = document.querySelectorAll(".reveal, .filmstrip .frame");
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
      { threshold: 0.16 }
    );

    nodes.forEach((el) => {
      el.style.opacity = "0.35";
      el.style.transform = "translateY(12px)";
      el.style.transition = "opacity 420ms ease, transform 420ms ease";
      observer.observe(el);
    });
  }
})();
