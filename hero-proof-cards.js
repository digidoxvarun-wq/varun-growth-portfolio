(() => {
  "use strict";

  function addHeroProofCards() {
    const panel = document.querySelector(".hero-photo-panel");
    if (!panel || panel.querySelector(".hero-proof-card")) return Boolean(panel);

    if (!document.getElementById("hero-proof-card-labels")) {
      const styles = document.createElement("style");
      styles.id = "hero-proof-card-labels";
      styles.textContent = `
        .hero-photo-panel{isolation:isolate}
        .hero-proof-card{position:absolute;z-index:3;display:grid;gap:3px;min-width:150px;padding:12px 14px;border:1px solid rgba(255,255,255,.18);border-radius:18px;background:linear-gradient(145deg,rgba(15,23,42,.74),rgba(15,23,42,.44));box-shadow:0 18px 48px rgba(0,0,0,.28);backdrop-filter:blur(16px)}
        .hero-proof-card strong{display:block;color:#fff;font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:1.15rem;line-height:1;font-weight:800;letter-spacing:-.03em}
        .hero-proof-card span{display:block;color:#b8c4d6;font-size:.62rem;line-height:1.28;font-weight:700}
        .proof-leads{left:24px;top:24%}
        .proof-cpl{right:22px;top:42%}
        .proof-cvr{left:28px;bottom:20%}
        @media(max-width:720px){.hero-proof-card{min-width:132px;padding:10px 12px}.hero-proof-card strong{font-size:1rem}.hero-proof-card span{font-size:.58rem}.proof-leads{left:14px;top:18%}.proof-cpl{right:14px;top:42%}.proof-cvr{left:14px;bottom:16%}}
      `;
      document.head.appendChild(styles);
    }

    panel.insertAdjacentHTML("beforeend", `
      <div class="hero-proof-card proof-leads"><strong>1,256</strong><span>Leads Generated This Month</span></div>
      <div class="hero-proof-card proof-cpl"><strong>₹154.13</strong><span>Avg. Cost Per Lead</span></div>
      <div class="hero-proof-card proof-cvr"><strong>24%</strong><span>Conversion Rate Increase</span></div>
    `);
    return true;
  }

  if (!addHeroProofCards()) {
    window.addEventListener("load", addHeroProofCards, { once: true });
  }
})();
