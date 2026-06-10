(() => {
  "use strict";

  const heroPhoto = document.querySelector(".hero-person-photo");
  const heroPanel = document.querySelector(".hero-photo-panel");
  const heroVisual = document.querySelector(".hero-visual");

  if (!heroPhoto || !heroPanel || !heroVisual) return;

  // Keep the working portrait already injected by script.js.
  // The previous repository SVG asset rendered as a blurred placeholder.
  heroPhoto.alt = "Varun Kumar working on performance marketing and digital growth strategy";
  heroPhoto.loading = "eager";
  heroPhoto.decoding = "async";
  heroPhoto.fetchPriority = "high";

  const metrics = heroPanel.querySelectorAll(".floating-metric");
  if (metrics[0]) metrics[0].innerHTML = "<span>Blended ROAS</span><strong>4.12x</strong><small>Across growth campaigns</small>";
  if (metrics[1]) metrics[1].innerHTML = "<span>Meta Ads Managed</span><strong>₹5Cr+</strong><small>D2C &amp; e-commerce</small>";
  if (metrics[2]) metrics[2].innerHTML = "<span>CPA Reduction</span><strong>18.2%</strong><small>Efficiency improvement</small>";

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
    .hero-section-complete .floating-metric{
      z-index:3;
      border:1px solid rgba(255,255,255,.92);
      background:rgba(255,255,255,.92);
      box-shadow:0 18px 50px rgba(10,15,44,.15);
    }
    .hero-section-complete .floating-metric strong{color:#0A0F2C}
    .hero-section-complete .floating-metric small{color:#16865a}
    .hero-section-complete .metric-roas{top:24px;left:20px}
    .hero-section-complete .metric-spend{top:132px;right:16px}
    .hero-section-complete .metric-cpa{bottom:76px;left:18px}
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
      .hero-section-complete .metric-roas{top:14px;left:10px}
      .hero-section-complete .metric-spend{top:88px;right:8px}
      .hero-section-complete .metric-cpa{bottom:48px;left:10px}
    }
    @media(max-width:430px){
      .hero-photo-panel.hero-section-complete{min-height:420px}
      .hero-section-complete .floating-metric{max-width:148px}
    }
  `;
  document.head.appendChild(style);
})();
