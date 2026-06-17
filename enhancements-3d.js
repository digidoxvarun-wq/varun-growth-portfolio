(() => {
  "use strict";

  // ---- Terminal log typewriter ----
  const logEl = document.getElementById("engine-log");
  if (!logEl) return;

  const lines = [
    "meta: pausing low-ROAS creative, reallocating Rs.6,400/day",
    "google: shifting budget toward high-intent search terms",
    "seo: found 3 ranking gaps on the product page, fixing now",
    "crm: triggering winback flow for 142 lapsed customers",
    "system: net profit impact +Rs.18,400 this week"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const cursor = `<span class="cursor">&nbsp;</span>`;

  function tick() {
    const full = "> " + lines[lineIndex];
    if (!deleting) {
      charIndex++;
      logEl.innerHTML = full.slice(0, charIndex) + cursor;
      if (charIndex >= full.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 28);
    } else {
      charIndex--;
      logEl.innerHTML = full.slice(0, charIndex) + cursor;
      if (charIndex <= 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 12);
    }
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    logEl.textContent = "> " + lines[0];
  } else {
    tick();
  }
})();
