(function () {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
    btn.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
  });
})();
