(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const form = document.querySelector("#lead-form");
  const formMessage = document.querySelector("#form-message");

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

  function initialiseServicesSlider() {
    const servicesGrid = document.querySelector(".services-grid");
    if (!servicesGrid || servicesGrid.dataset.sliderReady === "true") return;

    servicesGrid.dataset.sliderReady = "true";
    servicesGrid.setAttribute("role", "region");
    servicesGrid.setAttribute("aria-label", "Growth services slider");

    const serviceCards = [...servicesGrid.querySelectorAll(".service-card")];
    if (serviceCards.length < 2) return;

    const style = document.createElement("style");
    style.textContent = `
      .services-section{overflow:hidden}
      .services-slider-shell{position:relative}
      .services-grid[data-slider-ready="true"]{
        display:flex!important;
        gap:18px;
        overflow-x:auto;
        scroll-snap-type:x mandatory;
        scroll-behavior:smooth;
        scrollbar-width:none;
        overscroll-behavior-inline:contain;
        padding:4px 2px 18px;
      }
      .services-grid[data-slider-ready="true"]::-webkit-scrollbar{display:none}
      .services-grid[data-slider-ready="true"] .service-card{
        flex:0 0 calc((100% - 36px)/3);
        min-width:0;
        scroll-snap-align:start;
        display:flex;
        flex-direction:column;
        min-height:460px;
      }
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
        .services-grid[data-slider-ready="true"] .service-card{flex-basis:calc((100% - 18px)/2)}
      }
      @media(max-width:720px){
        .services-grid[data-slider-ready="true"]{gap:14px;padding-bottom:12px}
        .services-grid[data-slider-ready="true"] .service-card{flex-basis:88%;min-height:430px}
        .services-slider-controls{align-items:flex-end}
        .services-slider-progress{width:42vw}
        .services-slider-button{width:42px;height:42px}
      }
      @media(max-width:430px){
        .services-grid[data-slider-ready="true"] .service-card{flex-basis:94%}
        .services-slider-status{font-size:.62rem;gap:8px}
        .services-slider-progress{width:34vw}
      }
    `;
    document.head.appendChild(style);

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

    servicesGrid.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    });

    updateSliderUi();
  }

  initialiseServicesSlider();

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