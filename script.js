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
    .hero-copy > h1{max-width:640px}
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

    .hero-visual{grid-area:visual;position:relative;display:block;align-self:end}
    .hero-photo-panel{
      position:relative;
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

    .score-section{overflow:hidden}
    .score-section .container{width:100%;max-width:none}
    .score-section .section-heading{width:min(calc(100% - 40px),760px)}
    .score-grid{display:flex!important;grid-template-columns:none!important;gap:18px;width:max-content;animation:scoreMarquee 28s linear infinite;padding:4px 18px 12px;will-change:transform}
    .score-grid:hover{animation-play-state:paused}
    .score-grid article{flex:0 0 clamp(280px,31vw,420px);min-height:150px}
    .score-grid article[aria-hidden="true"]{pointer-events:none}
    @keyframes scoreMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

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

    @media(max-width:1180px){.dashboard-bottom{display:none}}
    @media(max-width:1100px){.hero-grid{gap:26px 40px}.hero-copy > h1{max-width:580px}.hero-photo-panel{min-height:600px}}
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
      .hero-visual{max-width:680px;margin:0 auto;width:100%}
      .hero-photo-panel{min-height:560px}
      .dashboard-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
      .system-map{flex-direction:column}
      .system-flow-arrow{transform:rotate(90deg);margin-left:10px;align-self:flex-start}
    }
    @media(max-width:720px){
      .testimonials-grid{grid-template-columns:1fr}
      .hero-support{gap:12px}
      .hero-support .text-link{padding:0}
      .hero-copy > h1{max-width:100%}
      .dashboard-top{flex-direction:column;align-items:flex-start;gap:12px}
      .dashboard-kpis{grid-template-columns:1fr}
      .hero-dashboard{padding:18px 18px 16px}
      .hero-actions{align-items:stretch;width:100%}
      .hero-actions .btn{width:100%}
      .system-map div{width:100%}
      .hero-photo-panel{min-height:500px;border-radius:26px}
      .score-section .section-heading{width:min(calc(100% - 28px),760px)}
      .score-grid{gap:14px;animation-duration:24s;padding-inline:14px}
      .score-grid article{flex-basis:82vw;min-height:135px}
      .services-grid[data-slider-ready="true"]{gap:14px;padding-bottom:12px}
      .services-grid[data-slider-ready="true"] .service-card{flex-basis:88%;min-height:430px}
      .services-grid[data-slider-ready="true"] .service-card ul{grid-template-columns:1fr}
      .services-slider-controls{align-items:flex-end}
      .services-slider-progress{width:42vw}
      .services-slider-button{width:42px;height:42px}
    }
    @media(max-width:430px){
      .hero-photo-panel{min-height:430px}
      .dashboard-top strong{font-size:.94rem}
      .dashboard-kpis strong{font-size:.95rem}
      .system-map div{padding:12px}
      .services-grid[data-slider-ready="true"] .service-card{flex-basis:94%}
      .services-slider-status{font-size:.62rem;gap:8px}
      .services-slider-progress{width:34vw}
    }
    @media(prefers-reduced-motion:reduce){.score-grid{animation:none;overflow-x:auto;width:auto}}
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

  function initialiseScoreMarquee() {
    const scoreGrid = document.querySelector(".score-grid");
    if (!scoreGrid || scoreGrid.dataset.marqueeReady === "true") return;

    scoreGrid.dataset.marqueeReady = "true";
    [...scoreGrid.children].forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scoreGrid.appendChild(clone);
    });
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
  initialiseScoreMarquee();
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
