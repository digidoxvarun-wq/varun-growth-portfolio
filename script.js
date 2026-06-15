(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const form = document.querySelector("#lead-form");
  const formMessage = document.querySelector("#form-message");

  const layoutPatch = document.createElement("style");
  layoutPatch.textContent = `
    .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .score-section{overflow:hidden}
    .score-section .container{width:100%;max-width:none}
    .score-section .section-heading{width:min(calc(100% - 40px),760px)}
    .score-grid{display:flex!important;grid-template-columns:none!important;gap:18px;width:max-content;animation:scoreMarquee 28s linear infinite;padding:4px 18px 12px;will-change:transform}
    .score-grid:hover{animation-play-state:paused}
    .score-grid article{flex:0 0 clamp(280px,31vw,420px);min-height:150px}
    .score-grid article[aria-hidden="true"]{pointer-events:none}
    @keyframes scoreMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    @media(max-width:720px){
      .testimonials-grid{grid-template-columns:1fr}
      .score-section .section-heading{width:min(calc(100% - 28px),760px)}
      .score-grid{gap:14px;animation-duration:24s;padding-inline:14px}
      .score-grid article{flex-basis:82vw;min-height:135px}
    }
    @media(prefers-reduced-motion:reduce){.score-grid{animation:none;overflow-x:auto;width:auto}}
  `;
  document.head.appendChild(layoutPatch);

  function initialiseScoreMarquee() {
    const scoreGrid = document.querySelector(".score-grid");
    if (!scoreGrid || scoreGrid.dataset.marqueeReady === "true") return;

    scoreGrid.dataset.marqueeReady = "true";
    const originalCards = [...scoreGrid.children];
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scoreGrid.appendChild(clone);
    });
  }

  initialiseScoreMarquee();

  window.trackEvent = function trackEvent(eventName, data = {}) {
    const payload = { event: eventName, ...data, timestamp: new Date().toISOString() };
    console.info("[tracking-placeholder]", payload);
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
    if (websiteField && !isValidUrl(websiteField.value)) {
      formMessage.classList.add("error");
      formMessage.textContent = "Please enter a complete URL, including https://";
      websiteField.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    trackEvent("lead_form_submit", {
      service: data.service,
      adSpend: data.adSpend
    });

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
