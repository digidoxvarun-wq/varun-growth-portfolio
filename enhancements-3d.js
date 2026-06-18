(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initialiseEngineTerminal() {
    const logEl = document.getElementById("engine-log");
    if (!logEl) return;

    const lines = [
      "meta: pausing low-ROAS creative, reallocating Rs.6,400/day",
      "google: shifting budget toward high-intent search terms",
      "seo: found 3 ranking gaps on the product page, fixing now",
      "crm: triggering winback flow for 142 lapsed customers",
      "system: net profit impact +Rs.18,400 this week"
    ];

    if (reduceMotion) {
      logEl.textContent = "> " + lines[0];
      return;
    }

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
        return;
      }

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

    tick();
  }

  function injectHowWeWorkStyles() {
    if (document.getElementById("how-we-work-styles")) return;

    const styles = document.createElement("style");
    styles.id = "how-we-work-styles";
    styles.textContent = `
      .how-work-section{position:relative;overflow:hidden;background:radial-gradient(circle at 18% 18%,rgba(37,99,235,.08),transparent 32%),radial-gradient(circle at 82% 14%,rgba(6,182,212,.08),transparent 30%),linear-gradient(180deg,#fff 0%,#f8fafc 100%);color:#0f172a}
      .how-work-section:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(15,23,42,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.035) 1px,transparent 1px);background-size:48px 48px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent);pointer-events:none}
      .how-work-section .container{position:relative;z-index:1}.how-work-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.7fr);gap:56px;align-items:end;margin-bottom:64px}.how-work-head .eyebrow{margin-top:0;color:#2563eb}.how-work-head h2{margin:0;max-width:720px;font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:clamp(2.2rem,4.8vw,4.45rem);line-height:1.02;letter-spacing:-.055em}.how-work-head p:not(.eyebrow){margin:0;color:#526173;font-size:1rem;line-height:1.7}
      .process-timeline{--work-progress:0%;position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}.process-timeline:before,.process-line-fill{content:"";position:absolute;left:8%;right:8%;top:49px;height:2px;border-radius:999px}.process-timeline:before{background:#dbe3ef}.process-line-fill{width:var(--work-progress);right:auto;background:linear-gradient(90deg,#2563eb,#06b6d4,#16a34a);box-shadow:0 0 22px rgba(37,99,235,.22);transition:width 900ms cubic-bezier(.2,.8,.2,1),height 900ms cubic-bezier(.2,.8,.2,1)}
      .process-step{position:relative;min-width:0;display:flex;flex-direction:column;gap:18px;padding-top:2px;transition:transform .24s ease}.process-step:hover{transform:translateY(-6px)}.step-marker{position:relative;z-index:2;width:98px;height:98px;display:grid;place-items:center;border-radius:50%;background:#fff;border:1px solid #dbeafe;box-shadow:0 18px 42px rgba(15,23,42,.08);color:#2563eb;font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:1.35rem;font-weight:900;letter-spacing:-.04em;transition:border-color .35s ease,box-shadow .35s ease,background .35s ease,color .35s ease,transform .35s ease}.step-marker:after{content:"";position:absolute;inset:-7px;border-radius:inherit;border:1px solid rgba(37,99,235,.12);opacity:0;transition:opacity .35s ease}
      .process-step-card{height:100%;min-height:238px;display:flex;flex-direction:column;gap:14px;padding:22px;border:1px solid #e2e8f0;border-radius:20px;background:rgba(255,255,255,.78);box-shadow:0 18px 48px rgba(15,23,42,.07);backdrop-filter:blur(14px);transition:border-color .24s ease,box-shadow .24s ease,background .24s ease}.process-step:hover .process-step-card{border-color:#bfdbfe;box-shadow:0 28px 70px rgba(37,99,235,.13);background:#fff}
      .process-kicker{display:flex;align-items:center;justify-content:space-between;gap:12px}.process-kicker span:first-child{color:#64748b;font-size:.72rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.timeline-badge{padding:6px 9px;border-radius:999px;background:#eff6ff;color:#1d4ed8;font-size:.68rem;font-weight:900;white-space:nowrap}.process-step h3{margin:0;font-size:1.2rem;line-height:1.18;letter-spacing:-.03em}.process-step p{margin:0;color:#526173;font-size:.92rem;line-height:1.55}
      .process-step.is-done .step-marker{border-color:#93c5fd;color:#1d4ed8;box-shadow:0 20px 54px rgba(37,99,235,.14)}.process-step.is-done .step-marker:after{opacity:1}.process-step.is-active .step-marker{color:#fff;background:linear-gradient(135deg,#2563eb,#06b6d4);border-color:rgba(6,182,212,.46);box-shadow:0 24px 62px rgba(37,99,235,.28);transform:scale(1.03)}.process-step.is-active .step-marker:after{opacity:1;border-color:rgba(37,99,235,.28)}.process-step.is-active .process-step-card{border-color:#bae6fd;background:#fff;box-shadow:0 30px 76px rgba(37,99,235,.16)}.process-step.final.is-active .step-marker{animation:finalStepPulse 2.4s ease-in-out infinite}
      @keyframes finalStepPulse{0%,100%{box-shadow:0 22px 56px rgba(37,99,235,.22),0 0 0 0 rgba(6,182,212,.2)}50%{box-shadow:0 26px 68px rgba(37,99,235,.28),0 0 0 12px rgba(6,182,212,0)}}
      .how-work-section .reveal-work{opacity:0;transform:translateY(18px);transition:opacity .75s ease,transform .75s ease}.how-work-section.is-visible .reveal-work{opacity:1;transform:translateY(0)}.how-work-section.is-visible .process-step:nth-child(2){transition-delay:.08s}.how-work-section.is-visible .process-step:nth-child(3){transition-delay:.22s}.how-work-section.is-visible .process-step:nth-child(4){transition-delay:.36s}.how-work-section.is-visible .process-step:nth-child(5){transition-delay:.5s}
      @media(max-width:980px){.how-work-head{grid-template-columns:1fr;gap:18px;margin-bottom:42px}.process-timeline{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.process-timeline:before,.process-line-fill{display:none}.process-step-card{min-height:210px}}
      @media(max-width:620px){.how-work-head{text-align:left}.process-timeline{grid-template-columns:1fr;gap:18px;padding-left:28px}.process-timeline:before{display:block;left:18px;right:auto;top:10px;bottom:10px;width:2px;height:auto}.process-line-fill{display:block;left:18px;top:10px;width:2px!important;height:var(--work-progress);right:auto}.process-step{display:grid;grid-template-columns:72px minmax(0,1fr);gap:0 16px;padding-top:0}.step-marker{width:72px;height:72px;font-size:1.05rem}.process-step-card{min-height:auto;padding:20px;border-radius:18px}}
      @media(prefers-reduced-motion:reduce){.how-work-section .reveal-work,.process-step,.step-marker,.process-line-fill{transition:none!important;animation:none!important;opacity:1!important;transform:none!important}.process-timeline{--work-progress:84%!important}.process-step.final .step-marker{color:#fff;background:linear-gradient(135deg,#2563eb,#06b6d4)}}
    `;
    document.head.appendChild(styles);
  }

  function insertHowWeWorkSection() {
    const services = document.querySelector("#services");
    if (!services || document.querySelector("#how-we-work")) return;

    services.insertAdjacentHTML("beforebegin", `
      <section class="section how-work-section" id="how-we-work">
        <div class="container">
          <div class="how-work-head reveal-work">
            <div><p class="eyebrow blue">HOW WE WORK</p><h2>From Brief to Measurable Growth</h2></div>
            <p>No templates. No guesswork. Every project is built around your business goals, current systems, competitors, and revenue targets, then executed with full transparency.</p>
          </div>
          <div class="process-timeline" aria-label="Client delivery process timeline">
            <div class="process-line-fill" aria-hidden="true"></div>
            <article class="process-step reveal-work"><div class="step-marker" aria-hidden="true">01</div><div class="process-step-card"><div class="process-kicker"><span>Step 01</span><span class="timeline-badge">Week 1</span></div><h3>Discovery &amp; Audit</h3><p>Map your current marketing, website, tracking and automation gaps.</p></div></article>
            <article class="process-step reveal-work"><div class="step-marker" aria-hidden="true">02</div><div class="process-step-card"><div class="process-kicker"><span>Step 02</span><span class="timeline-badge">Week 1-2</span></div><h3>Custom Strategy</h3><p>Build a clear growth plan with channels, priorities, timelines and success metrics.</p></div></article>
            <article class="process-step reveal-work"><div class="step-marker" aria-hidden="true">03</div><div class="process-step-card"><div class="process-kicker"><span>Step 03</span><span class="timeline-badge">Week 2-4</span></div><h3>Launch &amp; Execute</h3><p>Campaigns, websites and workflows go live with proper tracking from day one.</p></div></article>
            <article class="process-step final reveal-work"><div class="step-marker" aria-hidden="true">04</div><div class="process-step-card"><div class="process-kicker"><span>Step 04</span><span class="timeline-badge">Ongoing</span></div><h3>Optimise &amp; Scale</h3><p>Review performance, improve conversion paths and scale what actually works.</p></div></article>
          </div>
        </div>
      </section>
    `);
  }

  function setHowWeWorkStep(section, index) {
    const timeline = section.querySelector(".process-timeline");
    const steps = [...section.querySelectorAll(".process-step")];
    if (!timeline || !steps.length) return;

    const desktopProgress = [0, 28, 56, 84];
    const mobileProgress = [10, 35, 64, 100];
    const isMobile = window.matchMedia("(max-width: 620px)").matches;
    const progress = isMobile ? mobileProgress[index] : desktopProgress[index];
    timeline.style.setProperty("--work-progress", `${progress}%`);

    steps.forEach((step, stepIndex) => {
      step.classList.toggle("is-active", stepIndex === index);
      step.classList.toggle("is-done", stepIndex < index);
    });
  }

  function initialiseHowWeWorkMotion() {
    const section = document.querySelector(".how-work-section");
    if (!section) return;

    let liveTimer;
    let activeIndex = 0;

    function startLiveProgress() {
      section.classList.add("is-visible");
      setHowWeWorkStep(section, activeIndex);
      if (reduceMotion || liveTimer) return;
      liveTimer = window.setInterval(() => {
        activeIndex = (activeIndex + 1) % 4;
        setHowWeWorkStep(section, activeIndex);
      }, 1600);
    }

    window.addEventListener("resize", () => setHowWeWorkStep(section, activeIndex));

    if (!("IntersectionObserver" in window)) {
      startLiveProgress();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        startLiveProgress();
        observer.disconnect();
      });
    }, { threshold: 0.22 });
    observer.observe(section);
  }

  function injectServicePackageStyles() {
    if (document.getElementById("service-packages-styles")) return;
    const styles = document.createElement("style");
    styles.id = "service-packages-styles";
    styles.textContent = `
      .service-packages-section{position:relative;overflow:hidden;color:#f8fafc;background:radial-gradient(circle at 16% 12%,rgba(37,99,235,.2),transparent 34%),radial-gradient(circle at 84% 18%,rgba(6,182,212,.16),transparent 34%),linear-gradient(145deg,#030712 0%,#07111f 56%,#0d1b33 100%)}.service-packages-section:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px);background-size:46px 46px;mask-image:radial-gradient(circle at 50% 36%,black,transparent 76%);pointer-events:none}.service-packages-section .container{position:relative;z-index:1}.service-packages-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,.56fr);gap:54px;align-items:end;margin-bottom:42px}.service-packages-head .eyebrow{margin-top:0;color:#67e8f9}.service-packages-head h2{margin:0;max-width:760px;font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:1.02;letter-spacing:-.055em}.service-packages-head p:not(.eyebrow){margin:0;color:#aab7cb;font-size:1rem}.package-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;align-items:stretch}.solution-package{position:relative;min-width:0;min-height:100%;display:flex;flex-direction:column;gap:18px;padding:22px;border:1px solid rgba(255,255,255,.12);border-radius:22px;background:linear-gradient(155deg,rgba(255,255,255,.105),rgba(255,255,255,.038));box-shadow:0 24px 64px rgba(0,0,0,.24);backdrop-filter:blur(16px);transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease,background .24s ease;isolation:isolate}.solution-package:before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(135deg,rgba(103,232,249,.72),transparent 34%,rgba(134,239,172,.36));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .24s ease;pointer-events:none}.solution-package:hover{transform:translateY(-6px);border-color:rgba(103,232,249,.32);box-shadow:0 34px 90px rgba(37,99,235,.2)}.solution-package:hover:before,.solution-package.is-featured:before{opacity:1}.solution-package.is-featured{background:linear-gradient(155deg,rgba(37,99,235,.2),rgba(6,182,212,.08));border-color:rgba(103,232,249,.36);box-shadow:0 30px 86px rgba(37,99,235,.22)}.popular-ribbon{position:absolute;top:18px;right:18px;padding:6px 9px;border-radius:999px;background:linear-gradient(135deg,#60a5fa,#67e8f9);color:#031224;font-size:.62rem;font-weight:900;letter-spacing:.08em}.package-top{display:grid;gap:13px}.package-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(135deg,rgba(103,232,249,.22),rgba(37,99,235,.24));border:1px solid rgba(103,232,249,.22);color:#dff9ff;font-weight:900;box-shadow:0 0 28px rgba(103,232,249,.14)}.package-tag{width:max-content;max-width:100%;padding:6px 9px;border:1px solid rgba(103,232,249,.16);border-radius:999px;color:#8be9ff;background:rgba(103,232,249,.07);font-size:.66rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.solution-package h3{margin:0;min-height:54px;font-size:1.2rem;line-height:1.12;letter-spacing:-.035em}.package-price{display:flex;align-items:flex-end;gap:7px;margin-top:2px}.package-price strong{font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:2.2rem;line-height:.9;letter-spacing:-.055em}.package-price span{color:#94a3b8;font-size:.78rem;font-weight:800}.package-includes{display:grid;gap:9px;padding:0;margin:0;list-style:none}.package-includes li{display:flex;align-items:center;gap:9px;color:#cbd5e1;font-size:.86rem;line-height:1.28}.package-includes li:before{content:"✓";display:grid;place-items:center;width:18px;height:18px;flex:0 0 auto;border-radius:50%;background:rgba(134,239,172,.12);color:#86efac;font-size:.72rem;font-weight:900}.result-badge{margin-top:auto;display:flex;align-items:center;gap:9px;padding:10px 11px;border:1px solid rgba(134,239,172,.18);border-radius:14px;background:rgba(134,239,172,.07);color:#d9ffe8;font-size:.8rem;font-weight:900}.result-badge i{width:8px;height:8px;border-radius:50%;background:#86efac;box-shadow:0 0 14px rgba(134,239,172,.5)}.package-cta{display:flex;align-items:center;justify-content:center;min-height:46px;border-radius:12px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);color:#fff;font-size:.86rem;font-weight:900;transition:transform .2s ease,background .2s ease,border-color .2s ease}.package-cta:hover{transform:translateY(-2px);background:linear-gradient(135deg,#2563eb,#06b6d4);border-color:transparent}.solution-package.is-featured .package-cta{background:linear-gradient(135deg,#2563eb,#06b6d4);box-shadow:0 14px 32px rgba(37,99,235,.28)}.service-packages-section .reveal-package{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}.service-packages-section.is-visible .reveal-package{opacity:1;transform:translateY(0)}.service-packages-section.is-visible .solution-package:nth-child(1){transition-delay:.05s}.service-packages-section.is-visible .solution-package:nth-child(2){transition-delay:.12s}.service-packages-section.is-visible .solution-package:nth-child(3){transition-delay:.19s}.service-packages-section.is-visible .solution-package:nth-child(4){transition-delay:.26s}@media(max-width:1120px){.package-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.solution-package h3{min-height:auto}}@media(max-width:820px){.service-packages-head{grid-template-columns:1fr;gap:16px;text-align:left}.service-packages-head p:not(.eyebrow){max-width:620px}}@media(max-width:620px){.package-grid{grid-template-columns:1fr}.solution-package{padding:20px}.popular-ribbon{top:16px;right:16px}.package-price strong{font-size:2rem}}@media(prefers-reduced-motion:reduce){.service-packages-section .reveal-package{opacity:1!important;transform:none!important;transition:none!important}.solution-package{transition:none!important}}
    `;
    document.head.appendChild(styles);
  }

  function transformServicePackagesSection() {
    const section = document.querySelector("#services");
    if (!section || section.dataset.servicePackagesReady === "true") return;
    section.dataset.servicePackagesReady = "true";
    section.className = "section services-section service-packages-section";
    section.innerHTML = `<div class="container"><div class="service-packages-head reveal-package"><div><p class="eyebrow">SERVICES &amp; ENGAGEMENT</p><h2>Growth Systems Built Around Your Business Goals</h2></div><p>Choose the service that solves your biggest growth bottleneck.</p></div><div class="package-grid" aria-label="Service packages"><article class="solution-package reveal-package"><div class="package-top"><div class="package-icon" aria-hidden="true">M</div><span class="package-tag">Customer Acquisition</span><h3>META ADS MANAGEMENT</h3><div class="package-price"><strong>₹10,000</strong><span>/ month</span></div></div><ul class="package-includes"><li>Campaign Setup</li><li>Audience Research</li><li>Creative Direction</li><li>Weekly Optimization</li><li>Performance Reporting</li></ul><div class="result-badge"><i></i><span>Generate More Qualified Leads</span></div><a class="package-cta" href="#contact" data-event="book_call_click">Start Growing</a></article><article class="solution-package is-featured reveal-package"><span class="popular-ribbon">MOST POPULAR</span><div class="package-top"><div class="package-icon" aria-hidden="true">G</div><span class="package-tag">Multi-Channel Growth</span><h3>META + GOOGLE ADS</h3><div class="package-price"><strong>₹15,000</strong><span>/ month</span></div></div><ul class="package-includes"><li>Meta Ads</li><li>Google Ads</li><li>Conversion Tracking</li><li>Budget Optimization</li><li>Weekly Reporting + Growth Insights</li></ul><div class="result-badge"><i></i><span>Scale Across Multiple Channels</span></div><a class="package-cta" href="#contact" data-event="book_call_click">Scale My Growth</a></article><article class="solution-package reveal-package"><div class="package-top"><div class="package-icon" aria-hidden="true">A</div><span class="package-tag">Operational Efficiency</span><h3>AI AUTOMATION SETUP</h3><div class="package-price"><strong>₹5,000</strong><span>/ setup</span></div></div><ul class="package-includes"><li>Lead Routing</li><li>CRM Automation</li><li>WhatsApp Automation</li><li>Workflow Setup</li><li>Process Optimization</li></ul><div class="result-badge"><i></i><span>Reduce Manual Work</span></div><a class="package-cta" href="#contact" data-event="book_call_click">Automate My Business</a></article><article class="solution-package reveal-package"><div class="package-top"><div class="package-icon" aria-hidden="true">W</div><span class="package-tag">Conversion Foundation</span><h3>WEBSITE DEVELOPMENT</h3><div class="package-price"><strong>₹10,000</strong><span>/ project</span></div></div><ul class="package-includes"><li>Responsive Design</li><li>Landing Pages</li><li>WordPress / Shopify</li><li>Speed Optimization</li><li>Basic SEO Setup</li></ul><div class="result-badge"><i></i><span>Turn Visitors Into Customers</span></div><a class="package-cta" href="#contact" data-event="book_call_click">Build My Website</a></article></div></div>`;
  }

  function initialiseServicePackageMotion() {
    const section = document.querySelector(".service-packages-section");
    if (!section) return;
    if (!("IntersectionObserver" in window)) { section.classList.add("is-visible"); return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (!entry.isIntersecting) return; section.classList.add("is-visible"); observer.disconnect(); });
    }, { threshold: 0.18 });
    observer.observe(section);
  }

  function injectAutomationStyles() {
    if (document.getElementById("automation-ecosystem-styles")) return;
    const styles = document.createElement("style");
    styles.id = "automation-ecosystem-styles";
    styles.textContent = `
      .automation-ecosystem{position:relative;overflow:hidden;color:#f8fafc;background:radial-gradient(circle at 18% 18%,rgba(37,99,235,.18),transparent 34%),radial-gradient(circle at 82% 24%,rgba(6,182,212,.16),transparent 34%),radial-gradient(circle at 50% 92%,rgba(22,163,74,.1),transparent 36%),linear-gradient(145deg,#030712 0%,#07111f 52%,#0d1b33 100%)}.automation-ecosystem:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(circle at 50% 42%,black,transparent 78%);pointer-events:none}.automation-ecosystem .container{position:relative;z-index:1}.automation-ecosystem .section-heading p:not(.eyebrow){color:#aab7cb}.automation-architecture{display:grid;grid-template-columns:minmax(210px,1fr) minmax(230px,280px) minmax(210px,1fr);gap:28px;align-items:center;margin-top:44px}.signal-column{display:grid;gap:12px}.signal-title{margin:0 0 4px;color:#8be9ff;font-size:.72rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.signal-node{position:relative;display:flex;align-items:center;gap:11px;min-height:52px;padding:13px 14px;border:1px solid rgba(103,232,249,.14);border-radius:14px;background:rgba(255,255,255,.055);box-shadow:0 14px 34px rgba(0,0,0,.14);color:#dbeafe;font-size:.86rem;font-weight:800}.signal-node i{width:9px;height:9px;border-radius:50%;flex:0 0 auto;background:#67e8f9;box-shadow:0 0 0 5px rgba(103,232,249,.09),0 0 18px rgba(103,232,249,.36)}.output-node i{background:#86efac;box-shadow:0 0 0 5px rgba(134,239,172,.09),0 0 18px rgba(134,239,172,.34)}.automation-core-wrap{position:relative;min-height:360px;display:grid;place-items:center}.automation-core-wrap:before,.automation-core-wrap:after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none}.automation-core-wrap:before{width:310px;height:310px;border:1px solid rgba(103,232,249,.18);box-shadow:0 0 70px rgba(37,99,235,.16)}.automation-core-wrap:after{width:222px;height:222px;border:1px dashed rgba(103,232,249,.26);animation:autoSpin 18s linear infinite}@keyframes autoSpin{to{transform:translate(-50%,-50%) rotate(360deg)}}.automation-core{position:relative;width:188px;height:188px;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(103,232,249,.34);background:radial-gradient(circle,#1d4ed8 0%,rgba(6,182,212,.32) 34%,rgba(7,17,31,.92) 68%);box-shadow:0 0 74px rgba(37,99,235,.44),inset 0 0 42px rgba(103,232,249,.16);text-align:center}.automation-core:before{content:"";position:absolute;inset:34px;border-radius:50%;background:radial-gradient(circle,#e0f2fe,#67e8f9 50%,#2563eb 100%);opacity:.9;filter:blur(.2px);animation:autoPulse 2.6s ease-in-out infinite}@keyframes autoPulse{50%{transform:scale(1.08);opacity:1}}.automation-core span{position:relative;display:block;z-index:1;color:#fff;font-family:"Space Grotesk",Inter,system-ui,sans-serif;font-size:1.08rem;font-weight:900;line-height:1.08;letter-spacing:-.02em}.data-stream{position:absolute;left:50%;top:50%;width:min(82vw,760px);height:2px;transform:translate(-50%,-50%);background:linear-gradient(90deg,transparent,rgba(103,232,249,.48),rgba(134,239,172,.46),transparent);overflow:hidden;pointer-events:none}.data-stream:after{content:"";position:absolute;inset:-6px auto -6px 0;width:140px;background:linear-gradient(90deg,transparent,#fff,transparent);animation:signalMove 2.8s ease-in-out infinite}@keyframes signalMove{from{transform:translateX(-170px)}to{transform:translateX(820px)}}.automation-modules{margin-top:50px}.automation-modules-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:16px}.automation-modules-head h3{margin:0;font-size:1.28rem;letter-spacing:-.03em}.automation-modules-head span{color:#94a3b8;font-size:.78rem;font-weight:800}.automation-module-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.automation-module{position:relative;min-width:0;min-height:174px;padding:18px;border:1px solid rgba(255,255,255,.11);border-radius:18px;background:linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.045));box-shadow:0 18px 46px rgba(0,0,0,.18);backdrop-filter:blur(14px)}.automation-module:before{content:"";position:absolute;right:16px;top:16px;width:30px;height:30px;border-radius:10px;background:linear-gradient(135deg,rgba(103,232,249,.28),rgba(134,239,172,.18));box-shadow:0 0 22px rgba(103,232,249,.16)}.automation-module h4{margin:0 42px 14px 0;font-size:1.05rem;line-height:1.18;letter-spacing:-.025em}.module-flow{display:grid;gap:8px}.module-flow p{margin:0;display:flex;justify-content:space-between;gap:12px;color:#cbd5e1;font-size:.82rem;line-height:1.35}.module-flow b{color:#67e8f9;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;flex:0 0 auto}.automation-live{margin-top:22px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(5,11,25,.72);box-shadow:0 22px 56px rgba(0,0,0,.28);overflow:hidden}.automation-live-top{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid rgba(255,255,255,.08);color:#94a3b8;font-size:.72rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.automation-live-top i{width:8px;height:8px;border-radius:50%;background:#86efac;box-shadow:0 0 16px rgba(134,239,172,.55)}.automation-feed{display:grid;padding:8px}.automation-feed-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:10px 12px;border-radius:12px;color:#aab7cb;font-size:.82rem;font-weight:700}.automation-feed-row.is-active{color:#fff;background:rgba(103,232,249,.08)}.automation-feed-row span:last-child{color:#67e8f9;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap}.automation-ecosystem .reveal-auto{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease}.automation-ecosystem.is-visible .reveal-auto{opacity:1;transform:translateY(0)}.automation-ecosystem.is-visible .reveal-auto:nth-child(2){transition-delay:.08s}.automation-ecosystem.is-visible .reveal-auto:nth-child(3){transition-delay:.16s}.automation-ecosystem.is-visible .reveal-auto:nth-child(4){transition-delay:.24s}@media(max-width:980px){.automation-architecture{grid-template-columns:1fr;gap:22px}.automation-core-wrap{min-height:270px;order:-1}.data-stream{display:none}.signal-column{grid-template-columns:repeat(2,minmax(0,1fr))}.signal-title{grid-column:1/-1}.automation-module-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:720px){.automation-ecosystem .section-heading{text-align:left;margin-inline:0}.automation-architecture{margin-top:30px}.signal-column{grid-template-columns:1fr 1fr;gap:10px}.signal-node{min-height:48px;padding:12px;font-size:.8rem}.automation-core-wrap{min-height:236px}.automation-core-wrap:before{width:250px;height:250px}.automation-core-wrap:after{width:188px;height:188px}.automation-core{width:158px;height:158px}.automation-modules-head{align-items:flex-start;flex-direction:column;gap:5px}.automation-module-grid{display:flex;overflow-x:auto;gap:12px;scroll-snap-type:x mandatory;padding:2px 2px 12px;scrollbar-width:none}.automation-module-grid::-webkit-scrollbar{display:none}.automation-module{flex:0 0 82%;min-height:174px;scroll-snap-align:start}.automation-feed-row{align-items:flex-start;flex-direction:column;gap:4px}}@media(max-width:430px){.signal-column{grid-template-columns:1fr}.automation-module{flex-basis:92%}}@media(prefers-reduced-motion:reduce){.automation-core-wrap:after,.automation-core:before,.data-stream:after{animation:none!important}.automation-ecosystem .reveal-auto{opacity:1!important;transform:none!important;transition:none!important}}
    `;
    document.head.appendChild(styles);
  }

  function transformAutomationSection() {
    const section = document.querySelector("#automation");
    if (!section || section.dataset.automationEcosystemReady === "true") return;
    section.dataset.automationEcosystemReady = "true";
    section.className = "section automation-ecosystem";
    section.innerHTML = `<div class="container"><div class="section-heading centered narrow reveal-auto"><p class="eyebrow blue">AUTOMATION ECOSYSTEM</p><h2>Systems That Work While You Sleep</h2><p>AI, CRM, lead management, reporting and customer communication connected into one automated growth engine.</p></div><div class="automation-architecture" aria-label="AI automation architecture"><div class="signal-column reveal-auto" aria-label="Business inputs"><p class="signal-title">Inputs</p><div class="signal-node"><i></i><span>Website Forms</span></div><div class="signal-node"><i></i><span>Meta Leads</span></div><div class="signal-node"><i></i><span>Google Leads</span></div><div class="signal-node"><i></i><span>WhatsApp Messages</span></div><div class="signal-node"><i></i><span>CRM Records</span></div><div class="signal-node"><i></i><span>Email Events</span></div></div><div class="automation-core-wrap reveal-auto" aria-label="Central AI automation core"><div class="data-stream" aria-hidden="true"></div><div class="automation-core"><span>AI<br>Automation<br>Core</span></div></div><div class="signal-column reveal-auto" aria-label="System outputs"><p class="signal-title">Outputs</p><div class="signal-node output-node"><i></i><span>Lead Qualification</span></div><div class="signal-node output-node"><i></i><span>CRM Updates</span></div><div class="signal-node output-node"><i></i><span>Follow-Up Sequences</span></div><div class="signal-node output-node"><i></i><span>Sales Alerts</span></div><div class="signal-node output-node"><i></i><span>Dashboards</span></div><div class="signal-node output-node"><i></i><span>Revenue Insights</span></div></div></div><div class="automation-modules reveal-auto"><div class="automation-modules-head"><h3>Automation Modules</h3><span>Input -> Automation -> Output</span></div><div class="automation-module-grid" aria-label="Automation modules"><article class="automation-module"><h4>Lead Intelligence</h4><div class="module-flow"><p><b>Input</b><span>Meta Lead Form</span></p><p><b>Automation</b><span>Lead Scoring</span></p><p><b>Output</b><span>Qualified Opportunity</span></p></div></article><article class="automation-module"><h4>CRM Engine</h4><div class="module-flow"><p><b>Input</b><span>Customer Activity</span></p><p><b>Automation</b><span>Segmentation</span></p><p><b>Output</b><span>Personalized Journey</span></p></div></article><article class="automation-module"><h4>Reporting Engine</h4><div class="module-flow"><p><b>Input</b><span>Marketing Data</span></p><p><b>Automation</b><span>Aggregation</span></p><p><b>Output</b><span>Executive Dashboard</span></p></div></article><article class="automation-module"><h4>Follow-Up Engine</h4><div class="module-flow"><p><b>Input</b><span>New Enquiry</span></p><p><b>Automation</b><span>WhatsApp Trigger</span></p><p><b>Output</b><span>Faster Response</span></p></div></article><article class="automation-module"><h4>Content Engine</h4><div class="module-flow"><p><b>Input</b><span>Customer Insight</span></p><p><b>Automation</b><span>Prompt Workflow</span></p><p><b>Output</b><span>Campaign Brief</span></p></div></article><article class="automation-module"><h4>Revenue Watch</h4><div class="module-flow"><p><b>Input</b><span>Sales Pattern</span></p><p><b>Automation</b><span>Anomaly Detection</span></p><p><b>Output</b><span>Action Alert</span></p></div></article></div></div><div class="automation-live reveal-auto" aria-label="Live automation activity feed"><div class="automation-live-top"><i></i><span>Live Activity Feed</span></div><div class="automation-feed"><div class="automation-feed-row is-active"><span>Lead received from Meta</span><span>Inbound</span></div><div class="automation-feed-row"><span>Score assigned: High Intent</span><span>Scored</span></div><div class="automation-feed-row"><span>CRM updated automatically</span><span>Synced</span></div><div class="automation-feed-row"><span>WhatsApp follow-up triggered</span><span>Sent</span></div><div class="automation-feed-row"><span>Weekly dashboard generated</span><span>Ready</span></div></div></div></div>`;
  }

  function initialiseAutomationMotion() {
    const section = document.querySelector(".automation-ecosystem");
    if (!section) return;
    const rows = [...section.querySelectorAll(".automation-feed-row")];
    let activeIndex = 0;
    if (rows.length && !reduceMotion) {
      window.setInterval(() => { rows[activeIndex]?.classList.remove("is-active"); activeIndex = (activeIndex + 1) % rows.length; rows[activeIndex]?.classList.add("is-active"); }, 1400);
    }
    if (!("IntersectionObserver" in window)) { section.classList.add("is-visible"); return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (!entry.isIntersecting) return; section.classList.add("is-visible"); observer.disconnect(); });
    }, { threshold: 0.2 });
    observer.observe(section);
  }

  initialiseEngineTerminal();
  injectHowWeWorkStyles();
  insertHowWeWorkSection();
  initialiseHowWeWorkMotion();
  injectServicePackageStyles();
  transformServicePackagesSection();
  initialiseServicePackageMotion();
  injectAutomationStyles();
  transformAutomationSection();
  initialiseAutomationMotion();
})();
