(() => {
  "use strict";

  const heroPhoto = document.querySelector(".hero-person-photo");
  const heroPanel = document.querySelector(".hero-photo-panel");
  const heroVisual = document.querySelector(".hero-visual");

  if (!heroPhoto || !heroPanel || !heroVisual) return;

  heroPhoto.alt = "Varun Kumar working on performance marketing and digital growth strategy";
  heroPhoto.loading = "eager";
  heroPhoto.decoding = "async";
  heroPhoto.fetchPriority = "high";

  // The uploaded hero image already includes performance cards,
  // so remove the separate HTML metric cards to prevent duplication.
  heroPanel.querySelectorAll(".floating-metric").forEach((metric) => metric.remove());

  heroPanel.classList.add("hero-section-complete");

  const style = document.createElement("style");
  style.id = "hero-section-final-styles";
  style.textContent = `
    .hero-visual{align-self:start;gap:18px}
    .hero-photo-panel.hero-section-complete{
      min-height:610px;
      isolation:isolate;
      background:
        radial-gradient(circle at 72% 18%,rgba(0,212,255,.18),transparent 32%),
        radial-gradient(circle at 20% 70%,rgba(0,87,255,.18),transparent 34%),
        linear-gradient(145deg,#f8fbff 0%,#eef4ff 48%,#ffffff 100%);
      border:1px solid rgba(255,255,255,.8);
      box-shadow:0 38px 90px rgba(0,0,0,.32);
    }
    .hero-photo-panel.hero-section-complete:before{
      content:"";
      position:absolute;
      inset:0;
      z-index:-1;
      background-image:
        linear-gradient(rgba(10,15,44,.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(10,15,44,.035) 1px,transparent 1px);
      background-size:42px 42px;
      mask-image:linear-gradient(to bottom,black 0%,transparent 88%);
    }
    .hero-photo-panel.hero-section-complete:after{
      background:linear-gradient(180deg,rgba(10,15,44,0) 68%,rgba(10,15,44,.08) 100%);
      z-index:1;
      pointer-events:none;
    }
    .hero-section-complete .hero-person-photo{
      position:absolute;
      inset:0;
      z-index:0;
      width:100%;
      height:100%;
      object-fit:contain;
      object-position:center center;
      filter:none;
      opacity:1;
    }
    .hero-visual .hero-dashboard{
      border-color:rgba(0,212,255,.2);
      background:linear-gradient(150deg,rgba(15,27,61,.96),rgba(10,15,44,.98));
      box-shadow:0 26px 70px rgba(0,0,0,.25);
    }
    @media(max-width:1100px){
      .hero-photo-panel.hero-section-complete{min-height:570px}
    }
    @media(max-width:720px){
      .hero-photo-panel.hero-section-complete{min-height:470px}
    }
    @media(max-width:430px){
      .hero-photo-panel.hero-section-complete{min-height:420px}
    }
  `;
  document.head.appendChild(style);
})();
