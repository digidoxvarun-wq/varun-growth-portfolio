(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const form = document.querySelector("#lead-form");
  const formMessage = document.querySelector("#form-message");

  const VARUN_HERO_IMAGE = "data:image/webp;base64,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 ";

  window.trackEvent = function trackEvent(eventName, data = {}) {
    const payload = { event: eventName, ...data, timestamp: new Date().toISOString() };
    console.info("[tracking-placeholder]", payload);

    // Add your analytics integration here later.
    // Example for Google Tag Manager:
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push(payload);
  };

  function updateNavbar() {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  }

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

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
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

  function injectGrowthPortfolioStyles() {
    if (document.querySelector("#growth-portfolio-upgrades")) return;
    const style = document.createElement("style");
    style.id = "growth-portfolio-upgrades";
    style.textContent = `
      :root{--deep-navy:#0A0F2C;--electric-blue:#0057FF;--cyan:#00D4FF}
      .hero{padding-bottom:0}
      .hero-grid{grid-template-columns:1fr 1fr;align-items:center}
      .hero-visual{position:relative;display:grid;gap:20px}
      .hero-photo-panel{position:relative;min-height:640px;border:1px solid rgba(255,255,255,.12);border-radius:34px;background:linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.035));overflow:hidden;box-shadow:0 35px 90px rgba(0,0,0,.34)}
      .hero-person-photo{position:absolute;inset:auto 0 0 0;width:100%;height:100%;object-fit:cover;object-position:center top;filter:saturate(1.03) contrast(1.02)}
      .hero-photo-panel:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,15,44,0) 62%,rgba(10,15,44,.28) 100%);pointer-events:none}
      .floating-metric{position:absolute;z-index:2;background:rgba(255,255,255,.95);color:#0f172a;border:1px solid rgba(255,255,255,.65);box-shadow:0 24px 55px rgba(15,23,42,.18);border-radius:18px;padding:14px 16px;min-width:185px;backdrop-filter:blur(14px)}
      .floating-metric span{display:block;font-size:.61rem;color:#64748b;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
      .floating-metric strong{display:block;font-size:1.28rem;letter-spacing:-.04em;margin-top:4px}
      .floating-metric small{display:block;color:#16a34a;font-size:.66rem;font-weight:800;margin-top:4px}
      .metric-roas{top:34px;left:24px;transform:rotate(-3deg)}
      .metric-spend{top:132px;right:18px;transform:rotate(3deg)}
      .metric-cpa{bottom:86px;left:20px;transform:rotate(-2deg)}
      .hero-visual .hero-dashboard{width:100%;transform:none}
      .hero-visual .image-note{display:none}

      .results-marquee-section{background:#fff;padding:80px 0 45px;overflow:hidden}
      .results-marquee-head{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:24px}
      .results-marquee-head h2{font-size:clamp(2rem,4vw,3.05rem);line-height:1.08;letter-spacing:-.045em;margin:0;color:#0f172a}
      .results-marquee-head p:not(.eyebrow){max-width:470px;color:#475569;margin:0;font-size:.94rem}
      .results-marquee-window{overflow:hidden;margin-inline:calc((100vw - min(calc(100vw - 40px),var(--container)))/-2)}
      .results-marquee-track{display:flex;gap:18px;width:max-content;animation:resultsScroll 34s linear infinite;padding:2px calc((100vw - min(calc(100vw - 40px),var(--container)))/2)}
      .results-marquee-track:hover{animation-play-state:paused}
      .result-card{width:280px;height:160px;flex:0 0 280px;background:#0A0F2C;border:1px solid rgba(0,212,255,.16);border-radius:22px;padding:20px;color:#fff;box-shadow:0 18px 45px rgba(10,15,44,.16)}
      .result-card span{display:inline-flex;color:#00D4FF;font-size:.63rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;margin-bottom:13px}
      .result-card h3{font-size:1rem;margin:0 0 14px;letter-spacing:-.02em}
      .result-card .result-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px}
      .result-card strong{display:block;color:#0057FF;font-size:1.14rem;letter-spacing:-.04em}
      .result-card small{display:block;color:#94a3b8;font-size:.62rem;margin-top:2px}
      @keyframes resultsScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

      .brand-marquee-section{background:#f1f5f9;padding:32px 0;overflow:hidden;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0}
      .brand-marquee-layout{display:flex;align-items:center;gap:28px}
      .brand-marquee-label{flex:0 0 auto;font-size:.68rem;font-weight:900;letter-spacing:.16em;color:#0057FF;text-transform:uppercase}
      .brand-marquee-window{overflow:hidden;flex:1}
      .brand-marquee-track{display:flex;gap:12px;width:max-content;animation:brandScroll 36s linear infinite}
      .brand-marquee-track:hover{animation-play-state:paused}
      .brand-pill{flex:0 0 auto;padding:12px 18px;border-radius:999px;background:#fff;border:1px solid #dbe3ef;color:#0f172a;font-size:.78rem;font-weight:850;box-shadow:0 8px 22px rgba(15,23,42,.05)}
      @keyframes brandScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

      .growth-thinking-section{background:#0A0F2C;color:#fff;position:relative;overflow:hidden}
      .growth-thinking-section:before{content:"";position:absolute;inset:-20% auto auto -10%;width:420px;height:420px;border-radius:50%;background:rgba(0,87,255,.16);filter:blur(10px)}
      .growth-tabs-layout{position:relative;display:grid;grid-template-columns:.82fr 1.18fr;gap:70px;align-items:start}
      .growth-tabs-intro h2{font-size:clamp(2rem,4vw,3.2rem);line-height:1.1;letter-spacing:-.05em;margin:0 0 15px}
      .growth-tabs-intro p:not(.eyebrow){color:#94a3b8;margin:0}
      .growth-tabs{display:flex;gap:16px;border-bottom:1px solid rgba(255,255,255,.12);margin-bottom:30px}
      .growth-tab{background:none;border:0;color:#94a3b8;padding:0 0 14px;font-size:.9rem;font-weight:900;position:relative}
      .growth-tab:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:3px;border-radius:999px;background:#0057FF;transform:scaleX(0);transform-origin:left;transition:.2s}
      .growth-tab.active{color:#fff}
      .growth-tab.active:after{transform:scaleX(1)}
      .growth-tab-panel{display:none;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);border-radius:26px;padding:34px;box-shadow:0 30px 80px rgba(0,0,0,.22)}
      .growth-tab-panel.active{display:block}
      .growth-tab-panel h3{font-size:1.85rem;letter-spacing:-.04em;margin:0 0 12px}
      .growth-tab-panel p{color:#cbd5e1;margin:0;font-size:.96rem}
      .principle-box{margin-top:25px;border-left:4px solid #00D4FF;background:rgba(0,87,255,.16);border-radius:14px;padding:16px 18px;color:#fff;font-size:.83rem;font-weight:800}

      .credibility-section{background:#f8fafc}
      .credibility-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
      .credibility-card{background:#fff;border:1px solid #e2e8f0;border-radius:22px;padding:30px;box-shadow:0 14px 40px rgba(15,23,42,.06)}
      .credibility-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:15px;background:#dbeafe;color:#0057FF;font-weight:900;margin-bottom:24px}
      .credibility-card strong{display:block;font-size:2.05rem;letter-spacing:-.055em;color:#0A0F2C}
      .credibility-card h3{font-size:1rem;margin:8px 0 7px}
      .credibility-card p{font-size:.8rem;color:#64748b;margin:0}

      .services-section{overflow:hidden}
      .services-slider-shell{position:relative}
      .services-grid[data-slider-ready="true"]{display:flex!important;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior-inline:contain;padding:4px 2px 18px}
      .services-grid[data-slider-ready="true"]::-webkit-scrollbar{display:none}
      .services-grid[data-slider-ready="true"] .service-card{flex:0 0 calc((100% - 36px)/3);min-width:0;scroll-snap-align:start;display:flex;flex-direction:column;min-height:460px}
      .services-grid[data-slider-ready="true"] .service-card>p{min-height:70px}
      .services-grid[data-slider-ready="true"] .service-card ul{grid-template-columns:1fr;margin:22px 0}
      .services-grid[data-slider-ready="true"] .service-card li{font-size:.72rem;padding:10px 11px}
      .services-grid[data-slider-ready="true"] .service-footer{margin-top:auto;align-items:flex-start;flex-direction:column}
      .services-grid[data-slider-ready="true"] .service-footer a{text-align:left}
      .services-slider-controls{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:22px}
      .services-slider-status{display:flex;align-items:center;gap:12px;color:#94a3b8;font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
      .services-slider-progress{width:min(320px,42vw);height:4px;background:rgba(255,255,255,.12);border-radius:999px;overflow:hidden}
      .services-slider-progress span{display:block;height:100%;width:0;background:linear-gradient(90deg,#60a5fa,#a78bfa);border-radius:inherit;transition:width .25s ease}
      .services-slider-buttons{display:flex;gap:10px}
      .services-slider-button{width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#fff;font-size:1.15rem;font-weight:900;transition:.2s ease}
      .services-slider-button:hover:not(:disabled){background:#fff;color:#081126;transform:translateY(-2px)}
      .services-slider-button:disabled{opacity:.35;cursor:not-allowed}

      @media(max-width:1100px){
        .hero-grid{grid-template-columns:1fr}
        .hero-visual{max-width:720px;margin-inline:auto}
        .hero-photo-panel{min-height:560px}
        .services-grid[data-slider-ready="true"] .service-card{flex-basis:calc((100% - 18px)/2)}
        .growth-tabs-layout{grid-template-columns:1fr;gap:35px}
      }
      @media(max-width:900px){
        .credibility-grid{grid-template-columns:1fr}
        .brand-marquee-layout{display:block}
        .brand-marquee-label{display:block;margin-bottom:16px}
      }
      @media(max-width:720px){
        .results-marquee-section{padding:65px 0 35px}
        .results-marquee-head{display:block}
        .results-marquee-head p:not(.eyebrow){margin-top:12px}
        .results-marquee-window{overflow-x:auto;margin-inline:-14px;padding-left:14px;scroll-snap-type:x mandatory}
        .results-marquee-track{animation:none;padding:0 14px 12px 0;width:auto}
        .result-card{width:82vw;flex-basis:82vw;scroll-snap-align:start}
        .brand-marquee-window{overflow-x:auto}
        .brand-marquee-track{animation:none;padding-bottom:8px}
        .hero-photo-panel{min-height:500px;border-radius:26px}
        .floating-metric{min-width:142px;padding:11px 12px;border-radius:14px}
        .floating-metric strong{font-size:1rem}.floating-metric span{font-size:.54rem}.floating-metric small{font-size:.56rem}
        .metric-roas{top:20px;left:12px}.metric-spend{top:102px;right:10px}.metric-cpa{bottom:58px;left:12px}
        .services-grid[data-slider-ready="true"]{gap:14px;padding-bottom:12px}
        .services-grid[data-slider-ready="true"] .service-card{flex-basis:88%;min-height:430px}
        .services-slider-controls{align-items:flex-end}
        .services-slider-progress{width:42vw}
        .services-slider-button{width:42px;height:42px}
        .growth-tabs{overflow-x:auto}.growth-tab{white-space:nowrap}
        .growth-tab-panel{padding:25px}
      }
      @media(max-width:430px){
        .hero-photo-panel{min-height:430px}
        .hero-person-photo{object-position:center top}
        .services-grid[data-slider-ready="true"] .service-card{flex-basis:94%}
        .services-slider-status{font-size:.62rem;gap:8px}
        .services-slider-progress{width:34vw}
      }
    `;
    document.head.appendChild(style);
  }

  function addHeroPhotoExperience() {
    const heroGrid = document.querySelector(".hero-grid");
    const dashboard = document.querySelector(".hero-dashboard");
    if (!heroGrid || !dashboard || document.querySelector(".hero-visual")) return;

    const visual = document.createElement("div");
    visual.className = "hero-visual";
    visual.innerHTML = `
      <div class="hero-photo-panel">
        <img class="hero-person-photo" src="${VARUN_HERO_IMAGE}" data-image-path="assets/images/varun_hero_photo.png" alt="Varun Kumar, Digital Growth Specialist">
        <div class="floating-metric metric-roas"><span>Blended ROAS</span><strong>4.12x</strong><small>Performance signal</small></div>
        <div class="floating-metric metric-spend"><span>Meta Ads Managed</span><strong>₹5Cr+</strong><small>Budget experience</small></div>
        <div class="floating-metric metric-cpa"><span>CPA Reduction</span><strong>18.2%</strong><small>Efficiency focus</small></div>
      </div>
    `;
    heroGrid.appendChild(visual);
    visual.appendChild(dashboard);
  }

  function createResultsAndBrands() {
    const hero = document.querySelector(".hero");
    const existingResults = document.querySelector(".results-strip");
    if (!hero || !existingResults || document.querySelector(".results-marquee-section")) return;

    const heroMetrics = document.querySelector(".hero-metrics");
    if (heroMetrics) heroMetrics.remove();

    const resultCards = [
      ["META ADS", "D2C Skincare", "3.78x", "ROAS", "₹3.04Cr", "Revenue"],
      ["GOOGLE ADS", "Home Decor", "4.44x", "ROAS", "40%", "Less Wasted Spend"],
      ["CRM AUTOMATION", "Wellness Brand", "18%", "Cart Recovery", "22%", "Revenue"],
      ["LEAD GEN", "B2B Consultant", "3.2x", "More Qualified Leads", "High", "Lead Quality"],
      ["LANDING PAGE", "D2C Fashion", "38%", "Conversion Rate Lift", "Mobile", "UX Improved"]
    ];

    const cardsMarkup = resultCards.map(([tag, brand, m1, l1, m2, l2]) => `
      <article class="result-card"><span>${tag}</span><h3>${brand}</h3><div class="result-metrics"><div><strong>${m1}</strong><small>${l1}</small></div><div><strong>${m2}</strong><small>${l2}</small></div></div></article>
    `).join("");

    const resultsSection = document.createElement("section");
    resultsSection.className = "results-marquee-section";
    resultsSection.id = "results-at-a-glance";
    resultsSection.innerHTML = `
      <div class="container">
        <div class="results-marquee-head">
          <div><p class="eyebrow blue">RESULTS AT A GLANCE</p><h2>Proof Points Across Acquisition, Conversion and Retention</h2></div>
          <p>Quick performance snapshots that communicate what the portfolio is really about: measurable business outcomes, not vanity marketing activity.</p>
        </div>
      </div>
      <div class="results-marquee-window" aria-label="Results at a glance horizontal slider">
        <div class="results-marquee-track">${cardsMarkup}${cardsMarkup}</div>
      </div>
    `;

    const brands = ["Nourish Mantra","D2C Skincare Co.","Home Decor Brand","Wellness Brand","B2B Consultant","E-commerce Store"];
    const brandMarkup = brands.map((brand) => `<span class="brand-pill">${brand}</span>`).join("");
    const brandSection = document.createElement("section");
    brandSection.className = "brand-marquee-section";
    brandSection.innerHTML = `
      <div class="container brand-marquee-layout">
        <div class="brand-marquee-label">TRUSTED BY GROWTH-FOCUSED BRANDS</div>
        <div class="brand-marquee-window"><div class="brand-marquee-track">${brandMarkup}${brandMarkup}${brandMarkup}</div></div>
      </div>
    `;

    existingResults.parentNode.insertBefore(resultsSection, existingResults);
    existingResults.parentNode.insertBefore(brandSection, existingResults);
    if (heroMetrics) existingResults.parentNode.insertBefore(heroMetrics, existingResults);
  }

  function addGrowthThinkingSection() {
    const servicesSection = document.querySelector("#services");
    if (!servicesSection || document.querySelector("#growth-thinking")) return;

    const section = document.createElement("section");
    section.className = "section growth-thinking-section";
    section.id = "growth-thinking";
    section.innerHTML = `
      <div class="container growth-tabs-layout">
        <div class="growth-tabs-intro">
          <p class="eyebrow">HOW I THINK ABOUT GROWTH</p>
          <h2>Marketing Is Not Only About Running Ads. It Is About Building a System.</h2>
          <p>My growth operating model connects acquisition, conversion and retention so every campaign has a clear commercial reason behind it.</p>
        </div>
        <div class="growth-tabs-area">
          <div class="growth-tabs" role="tablist" aria-label="Growth thinking tabs">
            <button class="growth-tab active" type="button" role="tab" aria-selected="true" data-tab="acquisition">Acquisition</button>
            <button class="growth-tab" type="button" role="tab" aria-selected="false" data-tab="conversion">Conversion</button>
            <button class="growth-tab" type="button" role="tab" aria-selected="false" data-tab="retention">Retention</button>
          </div>
          <article class="growth-tab-panel active" data-panel="acquisition">
            <h3>Acquisition</h3>
            <p>Paid ads should be structured around contribution margin, cash flow and learning velocity — not only surface-level ROAS. The objective is to identify profitable segments, scalable creatives and acquisition economics that can survive real market pressure.</p>
            <div class="principle-box">Key principle: Scale only after the offer, tracking and margin math are clean.</div>
          </article>
          <article class="growth-tab-panel" data-panel="conversion">
            <h3>Conversion</h3>
            <p>Conversion is where traffic becomes business value. I look at landing-page hierarchy, message-match, mobile UX and funnel drop-offs to reduce wasted spend and make every visitor easier to move toward one clear action.</p>
            <div class="principle-box">Key principle: The page must continue the promise made by the ad.</div>
          </article>
          <article class="growth-tab-panel" data-panel="retention">
            <h3>Retention</h3>
            <p>Retention turns one-time buyers into long-term revenue. Lifecycle automation, LTV thinking and CRM segmentation help brands recover carts, drive repeat purchases and build stronger customer relationships beyond the first conversion.</p>
            <div class="principle-box">Key principle: Growth becomes easier when every customer journey has a next step.</div>
          </article>
        </div>
      </div>
    `;
    servicesSection.insertAdjacentElement("afterend", section);

    section.querySelectorAll(".growth-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const selected = tab.dataset.tab;
        section.querySelectorAll(".growth-tab").forEach((button) => {
          const isActive = button === tab;
          button.classList.toggle("active", isActive);
          button.setAttribute("aria-selected", String(isActive));
        });
        section.querySelectorAll(".growth-tab-panel").forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.panel === selected);
        });
      });
    });
  }

  function addCredibilityStrip() {
    const comparisonSection = document.querySelector(".comparison-section");
    if (!comparisonSection || document.querySelector("#credibility")) return;

    const section = document.createElement("section");
    section.className = "section credibility-section";
    section.id = "credibility";
    section.innerHTML = `
      <div class="container">
        <div class="section-heading centered narrow"><p class="eyebrow blue">CREDIBILITY &amp; BACKGROUND</p><h2>Execution Experience That Supports the Strategy</h2></div>
        <div class="credibility-grid">
          <article class="credibility-card"><span class="credibility-icon">↗</span><strong>3+ Years</strong><h3>Performance Marketing Experience</h3><p>D2C &amp; E-commerce Focus</p></article>
          <article class="credibility-card"><span class="credibility-icon">CRM</span><strong>MoEngage Certified</strong><h3>CRM Automation Specialist</h3><p>Lifecycle Marketing</p></article>
          <article class="credibility-card"><span class="credibility-icon">₹</span><strong>₹5.5Cr+</strong><h3>Total Ad Spend Managed</h3><p>Meta + Google Combined</p></article>
        </div>
      </div>
    `;
    comparisonSection.insertAdjacentElement("afterend", section);
  }

  function initialiseServicesSlider() {
    const servicesGrid = document.querySelector(".services-grid");
    if (!servicesGrid || servicesGrid.dataset.sliderReady === "true") return;

    servicesGrid.dataset.sliderReady = "true";
    servicesGrid.setAttribute("role", "region");
    servicesGrid.setAttribute("aria-label", "Growth services slider");

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
        <button class="services-slider-button services-prev" type="button" aria-label="View previous services">←</button>
        <button class="services-slider-button services-next" type="button" aria-label="View next services">→</button>
      </div>
    `;
    shell.appendChild(controls);

    const previousButton = controls.querySelector(".services-prev");
    const nextButton = controls.querySelector(".services-next");
    const counter = controls.querySelector(".services-slider-count");
    const progress = controls.querySelector(".services-slider-progress span");

    function cardStep() {
      const firstCard = serviceCards[0];
      const gap = Number.parseFloat(getComputedStyle(servicesGrid).gap) || 0;
      return firstCard.getBoundingClientRect().width + gap;
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

  injectGrowthPortfolioStyles();
  addHeroPhotoExperience();
  createResultsAndBrands();
  initialiseServicesSlider();
  addGrowthThinkingSection();
  addCredibilityStrip();

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

    const requiredFields = [...form.querySelectorAll("[required]")];
    const invalidField = requiredFields.find((field) => !field.value.trim());

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
    if (!isValidUrl(websiteField.value)) {
      formMessage.classList.add("error");
      formMessage.textContent = "Please enter a complete website URL, including https://";
      websiteField.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    trackEvent("lead_form_submit", {
      businessType: data.businessType,
      service: data.service,
      adSpend: data.adSpend,
      contactMethod: data.contactMethod
    });

    const subject = encodeURIComponent(`Free Growth Audit Request — ${data.businessName}`);
    const body = encodeURIComponent(
`Hello Varun,

I would like to request a free growth audit.

Full name: ${data.fullName}
Business name: ${data.businessName}
Work email: ${data.email}
Phone / WhatsApp: ${data.phone}
Website: ${data.website || "Not provided"}
Business type: ${data.businessType}
Primary service: ${data.service}
Approximate monthly ad spend: ${data.adSpend}
Preferred contact method: ${data.contactMethod}

Current biggest challenge:
${data.challenge}

Regards,
${data.fullName}`
    );

    formMessage.classList.add("success");
    formMessage.textContent = "Your enquiry is ready. Opening your email application…";

    window.location.href = `mailto:varunchouhan239@gmail.com?subject=${subject}&body=${body}`;
  });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
})();