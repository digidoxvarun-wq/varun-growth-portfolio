(() => {
  "use strict";

  const VARUN_HERO_IMAGE = "assets/images/varun-hero.png";
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const form = document.querySelector("#lead-form");
  const formMessage = document.querySelector("#form-message");

  window.trackEvent = function trackEvent(eventName, data = {}) {
    const payload = { event: eventName, ...data, timestamp: new Date().toISOString() };
    console.info("[tracking-placeholder]", payload);
  };

  const layoutPatch = document.createElement("style");
  layoutPatch.textContent = `
    .recommendation-section{display:none!important}
    .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}

    .hero-grid{
      grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);
      grid-template-areas:
        "copy visual"
        "support visual";
      align-items:start;
      gap:28px 64px;
    }
    .hero-copy{grid-area:copy;display:flex;flex-direction:column;align-items:flex-start}
    .hero-support{grid-area:support;display:flex;flex-direction:column;align-items:flex-start;gap:16px}
    .hero-copy > h1{
      max-width:720px;
      margin:0;
      display:flex;
      flex-direction:column;
      gap:4px;
      font-family:"Space Grotesk",Inter,system-ui,sans-serif;
      font-size:clamp(3rem,5.35vw,5.5rem);
      font-weight:700;
      line-height:.92;
      letter-spacing:-.07em;
      text-wrap:balance;
      text-shadow:0 18px 42px rgba(2,6,23,.38);
    }
    .hero-title-line{display:block;color:#f8fafc}
    .hero-title-emphasis{
      position:relative;
      display:inline-block;
      width:fit-content;
      padding-right:.08em;
      background:linear-gradient(90deg,#ffffff 0%,#dbeafe 24%,#8be9ff 62%,#60a5fa 100%);
      -webkit-background-clip:text;
      background-clip:text;
      color:transparent;
    }
    .hero-title-emphasis:after{
      content:"";
      position:absolute;
      left:-2%;
      bottom:-12px;
      width:104%;
      height:18px;
      border-bottom:3px solid rgba(103,232,249,.9);
      border-radius:50%;
      opacity:.95;
      filter:drop-shadow(0 4px 12px rgba(103,232,249,.24));
      pointer-events:none;
    }
    .hero-copy > .hero-dashboard{order:4;margin-top:24px}
    .hero-copy > .hero-actions{order:5;margin-top:22px}
    .hero-support .text-link{padding:0}
    .hero-support .micro-benefits{margin:0;justify-content:flex-start}

    .hero-dashboard{
      width:min(100%,720px);
      border:1px solid rgba(103,232,249,.18);
      border-radius:26px;
      padding:20px 22px;
      background:linear-gradient(160deg,rgba(13,27,51,.88),rgba(7,17,31,.78));
      box-shadow:0 24px 60px rgba(0,0,0,.24);
      backdrop-filter:blur(10px);
    }
    .dashboard-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
    .dashboard-top > div{display:flex;flex-direction:column;gap:6px}
    .dashboard-top strong{font-size:1rem;line-height:1.2;letter-spacing:-.02em}
    .dashboard-label{font-size:.7rem;letter-spacing:.16em;color:#93c5fd}
    .live-pill i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#22c55e;margin-right:5px}

    .dashboard-kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:16px 0 12px}
    .dashboard-kpis > div,.channel{
      background:rgba(5,11,25,.58);
      border:1px solid rgba(255,255,255,.08);
      border-radius:14px;
      padding:12px 13px;
    }
    .dashboard-kpis span,.dashboard-kpis small{display:block;font-size:.64rem;color:#94a3b8}
    .dashboard-kpis strong{display:block;font-size:1rem;margin:5px 0}
    .dashboard-kpis small{color:#67e8f9}

    .system-map{display:flex;align-items:stretch;gap:10px;margin:0}
    .system-map div{
      flex:1;
      padding:13px 14px;
      border:1px solid rgba(255,255,255,.08);
      border-radius:16px;
      background:rgba(255,255,255,.05);
    }
    .system-map strong,.system-map span{display:block}
    .system-map strong{font-size:.86rem}
    .system-map span{color:#94a3b8;font-size:.74rem;line-height:1.45;margin-top:4px}
    .system-flow-arrow{align-self:center;flex:0 0 auto;color:#67e8f9;font-size:1rem;font-weight:800;opacity:.85}

    .dashboard-bottom{display:flex;gap:10px;margin-top:12px}
    .channel{display:flex;align-items:center;gap:10px;flex:1}
    .channel-icon{width:29px;height:29px;display:grid;place-items:center;border-radius:8px;font-size:.68rem;font-weight:900}
    .channel-icon.meta{background:linear-gradient(135deg,#2563eb,#06b6d4)}
    .channel-icon.google{background:#fff;color:#2563eb}
    .channel small,.channel strong{display:block}
    .channel small{font-size:.58rem;color:#94a3b8}
    .channel strong{font-size:.72rem}

    .hero-visual{grid-area:visual;position:relative;display:block;align-self:stretch}
    .hero-photo-panel{
      position:relative;
      height:100%;
      min-height:640px;
      border:1px solid rgba(255,255,255,.12);
      border-radius:34px;
      background:linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.035));
      overflow:hidden;
      box-shadow:0 35px 90px rgba(0,0,0,.34);
    }
    .hero-person-photo{
      position:absolute;
      inset:auto 0 0 0;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center top;
      filter:saturate(1.03) contrast(1.02);
    }
    .hero-photo-panel:after{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(180deg,rgba(7,17,31,0) 62%,rgba(7,17,31,.3) 100%);
      pointer-events:none;
    }

    .positioning-transformation{
      position:relative;
      min-height:100vh;
      overflow:hidden;
      color:#f8fafc;
      padding:118px 0;
      background:
        radial-gradient(circle at 17% 22%,rgba(248,113,113,.14),transparent 32%),
        radial-gradient(circle at 82% 28%,rgba(6,182,212,.18),transparent 34%),
        radial-gradient(circle at 54% 78%,rgba(37,99,235,.14),transparent 38%),
        linear-gradient(145deg,#030712 0%,#07111f 48%,#0b1730 100%);
    }
    .positioning-transformation:before{
      content:"";
      position:absolute;
      inset:0;
      background-image:
        linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
      background-size:48px 48px;
      mask-image:radial-gradient(circle at 50% 45%,black,transparent 78%);
      pointer-events:none;
    }
    .positioning-transformation .container{position:relative;z-index:1}
    .positioning-head{
      max-width:810px;
      margin:0 auto 58px;
      text-align:center;
    }
    .positioning-head .eyebrow{margin-top:0;color:#67e8f9}
    .positioning-head h2{
      margin:0 0 18px;
      font-family:"Space Grotesk",Inter,system-ui,sans-serif;
      font-size:clamp(2.55rem,5vw,5rem);
      line-height:1;
      letter-spacing:-.055em;
    }
    .positioning-head p{margin:0 auto;color:#aab7cb;max-width:690px;font-size:1.02rem}
    .transformation-stage{
      position:relative;
      display:grid;
      grid-template-columns:minmax(0,1fr) 210px minmax(0,1fr);
      gap:24px;
      align-items:center;
    }
    .transform-panel{
      min-height:560px;
      border:1px solid rgba(255,255,255,.1);
      border-radius:28px;
      padding:26px;
      background:linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.035));
      box-shadow:0 26px 70px rgba(0,0,0,.26);
      backdrop-filter:blur(16px);
    }
    .before-panel{opacity:.86;background:linear-gradient(145deg,rgba(127,29,29,.17),rgba(255,255,255,.025))}
    .after-panel{border-color:rgba(103,232,249,.26);background:linear-gradient(145deg,rgba(37,99,235,.14),rgba(255,255,255,.05));box-shadow:0 28px 90px rgba(37,99,235,.16)}
    .transform-panel h3{margin:0;font-size:1.55rem;letter-spacing:-.035em}
    .panel-note{margin:4px 0 24px;color:#94a3b8;font-size:.82rem}
    .fragment-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
    .fragment-card{
      position:relative;
      min-height:82px;
      padding:17px 16px 16px 42px;
      border:1px solid rgba(251,146,60,.18);
      border-radius:16px;
      background:rgba(15,23,42,.42);
      color:#cbd5e1;
      box-shadow:0 14px 34px rgba(0,0,0,.16);
      transform:rotate(var(--tilt,0deg));
    }
    .fragment-card:before{
      content:"";
      position:absolute;
      left:16px;
      top:20px;
      width:9px;
      height:9px;
      border-radius:50%;
      background:#fb923c;
      box-shadow:0 0 0 5px rgba(251,146,60,.1),0 0 18px rgba(248,113,113,.38);
    }
    .fragment-card strong,.module-card strong{display:block;font-size:.94rem;line-height:1.25}
    .fragment-card span,.module-card span{display:block;margin-top:7px;color:#8391a7;font-size:.7rem;line-height:1.35}
    .fragment-card:nth-child(1){--tilt:-1.5deg}.fragment-card:nth-child(2){--tilt:1.2deg}.fragment-card:nth-child(3){--tilt:.8deg}.fragment-card:nth-child(4){--tilt:-1deg}.fragment-card:nth-child(5){--tilt:1.4deg}.fragment-card:nth-child(6){--tilt:-.6deg}
    .fragment-caption{margin:26px 0 0;color:#fbbea1;font-size:.78rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
    .bridge{
      position:relative;
      min-height:560px;
      display:grid;
      place-items:center;
    }
    .bridge-beam{
      position:absolute;
      left:50%;
      top:56px;
      bottom:56px;
      width:2px;
      transform:translateX(-50%);
      background:linear-gradient(180deg,rgba(248,113,113,.1),rgba(103,232,249,.82),rgba(74,222,128,.22));
      box-shadow:0 0 34px rgba(103,232,249,.45);
      overflow:hidden;
    }
    .bridge-beam:after{
      content:"";
      position:absolute;
      inset:auto -8px 0;
      height:42%;
      background:linear-gradient(180deg,transparent,rgba(255,255,255,.95),transparent);
      animation:bridgePulse 2.8s ease-in-out infinite;
    }
    @keyframes bridgePulse{0%{transform:translateY(-190%);opacity:0}30%,70%{opacity:1}100%{transform:translateY(260%);opacity:0}}
    .bridge-core{
      position:relative;
      width:178px;
      min-height:178px;
      display:grid;
      place-items:center;
      border:1px solid rgba(103,232,249,.28);
      border-radius:50%;
      background:radial-gradient(circle,rgba(37,99,235,.3),rgba(7,17,31,.92) 62%,rgba(6,182,212,.08));
      box-shadow:0 0 60px rgba(37,99,235,.34),inset 0 0 40px rgba(103,232,249,.1);
    }
    .bridge-core:before,.bridge-core:after{
      content:"";
      position:absolute;
      border-radius:50%;
      border:1px solid rgba(103,232,249,.2);
    }
    .bridge-core:before{inset:-18px;animation:softSpin 14s linear infinite}.bridge-core:after{inset:22px;border-color:rgba(255,255,255,.08)}
    @keyframes softSpin{to{transform:rotate(360deg)}}
    .bridge-copy{text-align:center;z-index:1;padding:22px}
    .bridge-copy span{display:block;color:#8be9ff;font-size:.67rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
    .bridge-copy strong{display:block;margin-top:8px;font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:2.1rem;letter-spacing:-.04em}
    .bridge-copy small{display:block;margin-top:5px;color:#aab7cb;font-weight:800}
    .after-ecosystem{position:relative;min-height:430px;margin-top:10px}
    .ecosystem-lines{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      pointer-events:none;
    }
    .ecosystem-lines path{
      fill:none;
      stroke:rgba(103,232,249,.32);
      stroke-width:1.3;
      stroke-dasharray:6 8;
      animation:dashFlow 3.2s linear infinite;
    }
    @keyframes dashFlow{to{stroke-dashoffset:-90}}
    .module-card{
      position:absolute;
      width:min(188px,44%);
      padding:15px;
      border:1px solid rgba(103,232,249,.22);
      border-radius:16px;
      background:linear-gradient(145deg,rgba(255,255,255,.14),rgba(255,255,255,.055));
      box-shadow:0 16px 42px rgba(0,0,0,.18),0 0 28px rgba(37,99,235,.08);
      backdrop-filter:blur(14px);
    }
    .module-card:before{
      content:"";
      position:absolute;
      left:14px;
      top:14px;
      width:7px;
      height:7px;
      border-radius:50%;
      background:#67e8f9;
      box-shadow:0 0 0 5px rgba(103,232,249,.09),0 0 18px rgba(103,232,249,.42);
    }
    .module-card strong,.module-card span{padding-left:18px}
    .module-card.core{
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:194px;
      text-align:center;
      border-color:rgba(74,222,128,.32);
      background:linear-gradient(145deg,rgba(22,163,74,.18),rgba(6,182,212,.12));
    }
    .module-card.core:before{display:none}
    .module-card.m1{left:0;top:8%}.module-card.m2{right:0;top:8%}.module-card.m3{left:0;top:42%}.module-card.m4{right:0;top:42%}.module-card.m5{left:7%;bottom:0}.module-card.m6{right:7%;bottom:0}
    .outcome-badges{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      gap:12px;
      margin-top:42px;
    }
    .outcome-badge{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:11px 14px;
      border:1px solid rgba(255,255,255,.12);
      border-radius:999px;
      background:rgba(255,255,255,.07);
      box-shadow:0 12px 34px rgba(0,0,0,.18);
      backdrop-filter:blur(12px);
      color:#dbeafe;
      font-size:.78rem;
      font-weight:800;
    }
    .outcome-badge span{color:#86efac}
    .positioning-transformation .reveal-item{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
    .positioning-transformation.is-visible .reveal-item{opacity:1;transform:translateY(0)}
    .positioning-transformation.is-visible .fragment-card:nth-child(1){transition-delay:.04s}.positioning-transformation.is-visible .fragment-card:nth-child(2){transition-delay:.1s}.positioning-transformation.is-visible .fragment-card:nth-child(3){transition-delay:.16s}.positioning-transformation.is-visible .fragment-card:nth-child(4){transition-delay:.22s}.positioning-transformation.is-visible .fragment-card:nth-child(5){transition-delay:.28s}.positioning-transformation.is-visible .fragment-card:nth-child(6){transition-delay:.34s}
    .positioning-transformation.is-visible .bridge{transition-delay:.46s}.positioning-transformation.is-visible .module-card.m1{transition-delay:.62s}.positioning-transformation.is-visible .module-card.m2{transition-delay:.7s}.positioning-transformation.is-visible .module-card.m3{transition-delay:.78s}.positioning-transformation.is-visible .module-card.core{transition-delay:.86s}.positioning-transformation.is-visible .module-card.m4{transition-delay:.94s}.positioning-transformation.is-visible .module-card.m5{transition-delay:1.02s}.positioning-transformation.is-visible .module-card.m6{transition-delay:1.1s}.positioning-transformation.is-visible .outcome-badge:nth-child(1){transition-delay:1.18s}.positioning-transformation.is-visible .outcome-badge:nth-child(2){transition-delay:1.24s}.positioning-transformation.is-visible .outcome-badge:nth-child(3){transition-delay:1.3s}.positioning-transformation.is-visible .outcome-badge:nth-child(4){transition-delay:1.36s}.positioning-transformation.is-visible .outcome-badge:nth-child(5){transition-delay:1.42s}

    .services-section{overflow:hidden}
    .services-slider-shell{position:relative}
    .services-grid[data-slider-ready="true"]{display:flex!important;grid-template-columns:none!important;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior-inline:contain;padding:4px 2px 18px}
    .services-grid[data-slider-ready="true"]::-webkit-scrollbar{display:none}
    .services-grid[data-slider-ready="true"] .service-card{flex:0 0 calc((100% - 18px)/2);min-width:0;scroll-snap-align:start;display:flex;flex-direction:column;min-height:420px}
    .services-grid[data-slider-ready="true"] .service-card ul{grid-template-columns:1fr 1fr 1fr;margin:22px 0}
    .services-grid[data-slider-ready="true"] .service-meta{margin-top:auto}
    .services-slider-controls{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:22px}
    .services-slider-status{display:flex;align-items:center;gap:12px;color:#94a3b8;font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .services-slider-progress{width:min(320px,42vw);height:4px;background:rgba(255,255,255,.12);border-radius:999px;overflow:hidden}
    .services-slider-progress span{display:block;height:100%;width:0;background:linear-gradient(90deg,#60a5fa,#67e8f9);border-radius:inherit;transition:width .25s ease}
    .services-slider-buttons{display:flex;gap:10px}
    .services-slider-button{width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#fff;font-size:1.15rem;font-weight:900;transition:.2s ease}
    .services-slider-button:hover:not(:disabled){background:#fff;color:#07111f;transform:translateY(-2px)}
    .services-slider-button:disabled{opacity:.35;cursor:not-allowed}

    @media(max-width:1180px){.dashboard-bottom{display:none}.transformation-stage{grid-template-columns:1fr;gap:22px}.bridge{min-height:220px}.bridge-beam{left:56px;right:56px;top:50%;bottom:auto;width:auto;height:2px;transform:translateY(-50%)}.bridge-beam:after{inset:-8px auto -8px 0;width:42%;height:auto;animation:bridgePulseHorizontal 2.8s ease-in-out infinite}.transform-panel{min-height:auto}.after-ecosystem{min-height:460px}@keyframes bridgePulseHorizontal{0%{transform:translateX(-190%);opacity:0}30%,70%{opacity:1}100%{transform:translateX(260%);opacity:0}}}
    @media(max-width:1100px){.hero-grid{gap:26px 40px}.hero-copy > h1{max-width:620px;font-size:clamp(2.9rem,6vw,4.85rem)}.hero-photo-panel{min-height:600px}}
    @media(max-width:900px){
      .hero-grid{
        grid-template-columns:1fr;
        grid-template-areas:
          "copy"
          "visual"
          "support";
        gap:28px;
      }
      .hero-copy > .hero-actions{order:4;margin-top:22px}
      .hero-copy > .hero-dashboard{order:5;margin-top:20px}
      .hero-copy > h1{max-width:100%}
      .hero-visual{max-width:680px;margin:0 auto;width:100%;align-self:start}
      .hero-photo-panel{min-height:560px}
      .dashboard-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
      .system-map{flex-direction:column}
      .system-flow-arrow{transform:rotate(90deg);margin-left:10px;align-self:flex-start}
    }
    @media(max-width:720px){
      .testimonials-grid{grid-template-columns:1fr}
      .hero-support{gap:12px}
      .hero-support .text-link{padding:0}
      .hero-copy > h1{max-width:100%;font-size:clamp(2.55rem,11.5vw,4rem);line-height:.95;gap:6px}
      .hero-title-emphasis:after{bottom:-9px;height:14px;border-bottom-width:2px}
      .dashboard-top{flex-direction:column;align-items:flex-start;gap:12px}
      .dashboard-kpis{grid-template-columns:1fr}
      .hero-dashboard{padding:18px 18px 16px}
      .hero-actions{align-items:stretch;width:100%}
      .hero-actions .btn{width:100%}
      .system-map div{width:100%}
      .hero-photo-panel{min-height:500px;border-radius:26px}
      .positioning-transformation{padding:88px 0}
      .positioning-head{text-align:left;margin-bottom:34px}
      .transform-panel{padding:20px;border-radius:22px}
      .fragment-grid{grid-template-columns:1fr}
      .bridge{min-height:190px}
      .bridge-core{width:150px;min-height:150px}
      .bridge-copy strong{font-size:1.72rem}
      .after-ecosystem{min-height:auto;display:grid;gap:12px;margin-top:22px}
      .ecosystem-lines{display:none}
      .module-card,.module-card.core{position:relative;left:auto;right:auto;top:auto;bottom:auto;transform:none;width:100%;text-align:left}
      .module-card.core:before{display:block;background:#86efac;box-shadow:0 0 0 5px rgba(134,239,172,.09),0 0 18px rgba(134,239,172,.34)}
      .module-card.core strong,.module-card.core span{padding-left:18px}
      .outcome-badges{justify-content:flex-start;margin-top:28px}
      .outcome-badge{width:100%;justify-content:space-between;border-radius:14px}
      .services-grid[data-slider-ready="true"]{gap:14px;padding-bottom:12px}
      .services-grid[data-slider-ready="true"] .service-card{flex-basis:88%;min-height:430px}
      .services-grid[data-slider-ready="true"] .service-card ul{grid-template-columns:1fr}
      .services-slider-controls{align-items:flex-end}
      .services-slider-progress{width:42vw}
      .services-slider-button{width:42px;height:42px}
    }
    @media(max-width:430px){
      .hero-copy > h1{font-size:clamp(2.2rem,12.5vw,3.15rem)}
      .hero-title-emphasis:after{bottom:-7px;height:12px}
      .hero-photo-panel{min-height:430px}
      .dashboard-top strong{font-size:.94rem}
      .dashboard-kpis strong{font-size:.95rem}
      .system-map div{padding:12px}
      .positioning-head h2{font-size:clamp(2.25rem,12vw,3.1rem)}
      .fragment-card{padding-right:14px}
      .services-grid[data-slider-ready="true"] .service-card{flex-basis:94%}
      .services-slider-status{font-size:.62rem;gap:8px}
      .services-slider-progress{width:34vw}
    }
    @media(prefers-reduced-motion:reduce){.positioning-transformation .reveal-item,.bridge-core:before,.bridge-beam:after,.ecosystem-lines path{transition:none!important;animation:none!important;opacity:1!important;transform:none!important}}
  `;
  document.head.appendChild(layoutPatch);

  function restoreHeroImage() {
    const heroGrid = document.querySelector(".hero-grid");
    const heroSupport = document.querySelector(".hero-support");
    if (!heroGrid || document.querySelector(".hero-visual")) return;

    const visual = document.createElement("div");
    visual.className = "hero-visual";
    visual.innerHTML = `
      <div class="hero-photo-panel">
        <img class="hero-person-photo" src="${VARUN_HERO_IMAGE}" alt="Varun Kumar, Digital Growth and AI Automation Professional">
      </div>
    `;

    if (heroSupport) {
      heroGrid.insertBefore(visual, heroSupport);
      return;
    }

    heroGrid.appendChild(visual);
  }

  function removeRecommendationSection() {
    document.querySelector(".recommendation-section")?.remove();
  }

  function transformPositioningSection() {
    const section = document.querySelector("#audit-score");
    if (!section || section.dataset.positioningReady === "true") return;

    section.dataset.positioningReady = "true";
    section.className = "section positioning-transformation";
    section.innerHTML = `
      <div class="container">
        <div class="positioning-head">
          <p class="eyebrow">POSITIONING TRANSFORMATION</p>
          <h2>From Generic Marketer<br>To Growth System Builder</h2>
          <p>The portfolio was redesigned to position expertise as a scalable growth system rather than a collection of marketing services.</p>
        </div>

        <div class="transformation-stage" aria-label="Before and after positioning transformation">
          <div class="transform-panel before-panel">
            <h3>Before</h3>
            <p class="panel-note">Many activities, no connected operating model.</p>
            <div class="fragment-grid">
              <article class="fragment-card reveal-item"><strong>Running Ads</strong><span>Channel work without a wider revenue map.</span></article>
              <article class="fragment-card reveal-item"><strong>Posting Content</strong><span>Output measured as activity, not system leverage.</span></article>
              <article class="fragment-card reveal-item"><strong>SEO Tasks</strong><span>Optimization separated from acquisition intent.</span></article>
              <article class="fragment-card reveal-item"><strong>Email Campaigns</strong><span>Messages disconnected from lifecycle strategy.</span></article>
              <article class="fragment-card reveal-item"><strong>Website Updates</strong><span>Page changes without conversion architecture.</span></article>
              <article class="fragment-card reveal-item"><strong>Freelance Services</strong><span>Individual deliverables competing for attention.</span></article>
            </div>
            <p class="fragment-caption reveal-item">Fragmented execution layer</p>
          </div>

          <div class="bridge reveal-item" aria-label="Positioning upgrade bridge">
            <div class="bridge-beam" aria-hidden="true"></div>
            <div class="bridge-core">
              <div class="bridge-copy">
                <span>Positioning Upgrade</span>
                <strong>+<span data-upgrade-counter>0</span>%</strong>
                <small>service provider -> system operator</small>
              </div>
            </div>
          </div>

          <div class="transform-panel after-panel">
            <h3>After</h3>
            <p class="panel-note">One integrated growth architecture built around revenue movement.</p>
            <div class="after-ecosystem" aria-label="Connected growth system modules">
              <svg class="ecosystem-lines" viewBox="0 0 520 430" preserveAspectRatio="none" aria-hidden="true">
                <path d="M94 68 C188 112 214 150 260 215"></path>
                <path d="M426 68 C332 112 306 150 260 215"></path>
                <path d="M94 210 C176 214 212 214 260 215"></path>
                <path d="M426 210 C344 214 308 214 260 215"></path>
                <path d="M130 372 C205 314 228 260 260 215"></path>
                <path d="M390 372 C315 314 292 260 260 215"></path>
              </svg>
              <article class="module-card m1 reveal-item"><strong>Growth Strategy</strong><span>Positioning, offer clarity and growth priorities.</span></article>
              <article class="module-card m2 reveal-item"><strong>Paid Media</strong><span>Meta and Google acquisition economics.</span></article>
              <article class="module-card m3 reveal-item"><strong>Conversion Systems</strong><span>Landing pages, funnel UX and CRO loops.</span></article>
              <article class="module-card core reveal-item"><strong>Revenue Operations</strong><span>The connected command layer for growth.</span></article>
              <article class="module-card m4 reveal-item"><strong>CRM Automation</strong><span>Lead response, lifecycle and retention flows.</span></article>
              <article class="module-card m5 reveal-item"><strong>Analytics</strong><span>Reporting that turns data into next actions.</span></article>
              <article class="module-card m6 reveal-item"><strong>AI Workflows</strong><span>Automation that reduces friction and speeds execution.</span></article>
            </div>
          </div>
        </div>

        <div class="outcome-badges" aria-label="Transformation outcomes">
          <div class="outcome-badge reveal-item">Positioning Clarity <span>&uarr; Stronger</span></div>
          <div class="outcome-badge reveal-item">Service Differentiation <span>&uarr; Higher</span></div>
          <div class="outcome-badge reveal-item">Premium Perception <span>&uarr; Improved</span></div>
          <div class="outcome-badge reveal-item">Lead Qualification <span>&uarr; Better</span></div>
          <div class="outcome-badge reveal-item">Authority Level <span>&uarr; Stronger</span></div>
        </div>
      </div>
    `;
  }

  function initialisePositioningAnimation() {
    const section = document.querySelector(".positioning-transformation");
    if (!section) return;

    const counter = section.querySelector("[data-upgrade-counter]");
    let hasCounted = false;

    function runCounter() {
      if (!counter || hasCounted) return;
      hasCounted = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        counter.textContent = "245";
        return;
      }
      const target = 245;
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      runCounter();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-visible");
        runCounter();
        observer.disconnect();
      });
    }, { threshold: 0.28 });

    observer.observe(section);
  }

  function initialiseServicesSlider() {
    const servicesGrid = document.querySelector(".services-grid");
    if (!servicesGrid || servicesGrid.dataset.sliderReady === "true") return;

    servicesGrid.dataset.sliderReady = "true";
    servicesGrid.setAttribute("role", "region");
    servicesGrid.setAttribute("aria-label", "Growth services horizontal slider");

    const serviceCards = [...servicesGrid.querySelectorAll(".service-card")];
    if (serviceCards.length < 2) return;

    const shell = document.createElement("div");
    shell.className = "services-slider-shell";
    servicesGrid.parentNode.insertBefore(shell, servicesGrid);
    shell.appendChild(servicesGrid);

    const controls = document.createElement("div");
    controls.className = "services-slider-controls";
    controls.innerHTML = `
      <div class="services-slider-status" aria-live="polite">
        <span class="services-slider-count">01 / ${String(serviceCards.length).padStart(2, "0")}</span>
        <div class="services-slider-progress" aria-hidden="true"><span></span></div>
      </div>
      <div class="services-slider-buttons">
        <button class="services-slider-button services-prev" type="button" aria-label="View previous services">&#8592;</button>
        <button class="services-slider-button services-next" type="button" aria-label="View next services">&#8594;</button>
      </div>
    `;
    shell.appendChild(controls);

    const previousButton = controls.querySelector(".services-prev");
    const nextButton = controls.querySelector(".services-next");
    const counter = controls.querySelector(".services-slider-count");
    const progress = controls.querySelector(".services-slider-progress span");

    function cardStep() {
      const gap = Number.parseFloat(getComputedStyle(servicesGrid).gap) || 0;
      return serviceCards[0].getBoundingClientRect().width + gap;
    }

    function currentIndex() {
      return Math.max(0, Math.min(serviceCards.length - 1, Math.round(servicesGrid.scrollLeft / cardStep())));
    }

    function updateSliderUi() {
      const index = currentIndex();
      const maxScroll = Math.max(0, servicesGrid.scrollWidth - servicesGrid.clientWidth);
      const percentage = maxScroll ? (servicesGrid.scrollLeft / maxScroll) * 100 : 100;
      counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(serviceCards.length).padStart(2, "0")}`;
      progress.style.width = `${Math.max(8, Math.min(100, percentage))}%`;
      previousButton.disabled = servicesGrid.scrollLeft <= 4;
      nextButton.disabled = servicesGrid.scrollLeft >= maxScroll - 4;
    }

    function move(direction) {
      servicesGrid.scrollBy({ left: cardStep() * direction, behavior: "smooth" });
      trackEvent("services_slider_navigation", { direction: direction > 0 ? "next" : "previous" });
    }

    previousButton.addEventListener("click", () => move(-1));
    nextButton.addEventListener("click", () => move(1));
    servicesGrid.addEventListener("scroll", updateSliderUi, { passive: true });
    window.addEventListener("resize", updateSliderUi);
    updateSliderUi();
  }

  function updateNavbar() {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  }

  restoreHeroImage();
  removeRecommendationSection();
  transformPositioningSection();
  initialisePositioningAnimation();
  initialiseServicesSlider();
  updateNavbar();

  window.addEventListener("scroll", updateNavbar, { passive: true });

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  document.querySelectorAll("[data-event]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent(element.dataset.event, {
        label: element.textContent.trim(),
        destination: element.getAttribute("href") || ""
      });
    });
  });

  function isValidUrl(value) {
    if (!value.trim()) return true;
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.className = "form-message";
    formMessage.textContent = "";

    const invalidField = [...form.querySelectorAll("[required]")].find((field) => !field.value.trim());
    if (invalidField) {
      formMessage.classList.add("error");
      formMessage.textContent = "Please complete all required fields.";
      invalidField.focus();
      return;
    }

    const emailField = form.elements.email;
    if (!emailField.validity.valid) {
      formMessage.classList.add("error");
      formMessage.textContent = "Please enter a valid work email.";
      emailField.focus();
      return;
    }

    const websiteField = form.elements.website;
    if (websiteField && !isValidUrl(websiteField.value)) {
      formMessage.classList.add("error");
      formMessage.textContent = "Please enter a complete URL, including https://";
      websiteField.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    trackEvent("lead_form_submit", { service: data.service, adSpend: data.adSpend });

    const subject = encodeURIComponent(`Growth Discovery Call Request - ${data.businessName}`);
    const body = encodeURIComponent(
`Hello Varun,

I would like to request a growth discovery call.

Full name: ${data.fullName}
Company / brand: ${data.businessName}
Work email: ${data.email}
Phone / WhatsApp: ${data.phone}
Website / LinkedIn: ${data.website || "Not provided"}
Need: ${data.service}
Monthly ad spend / stage: ${data.adSpend}

Biggest growth challenge:
${data.challenge}

Regards,
${data.fullName}`
    );

    formMessage.classList.add("success");
    formMessage.textContent = "Your enquiry is ready. Opening your email application...";
    window.location.href = `mailto:varunchouhan239@gmail.com?subject=${subject}&body=${body}`;
  });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
})();
