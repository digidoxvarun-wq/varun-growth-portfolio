(() => {
  "use strict";

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
  }

  function injectAutomationStyles() {
    if (document.getElementById("automation-ecosystem-styles")) return;

    const styles = document.createElement("style");
    styles.id = "automation-ecosystem-styles";
    styles.textContent = `
      .automation-ecosystem{
        position:relative;
        overflow:hidden;
        color:#f8fafc;
        background:
          radial-gradient(circle at 18% 18%,rgba(37,99,235,.18),transparent 34%),
          radial-gradient(circle at 82% 24%,rgba(6,182,212,.16),transparent 34%),
          radial-gradient(circle at 50% 92%,rgba(22,163,74,.1),transparent 36%),
          linear-gradient(145deg,#030712 0%,#07111f 52%,#0d1b33 100%);
      }
      .automation-ecosystem:before{
        content:"";
        position:absolute;
        inset:0;
        background-image:
          linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px);
        background-size:44px 44px;
        mask-image:radial-gradient(circle at 50% 42%,black,transparent 78%);
        pointer-events:none;
      }
      .automation-ecosystem .container{position:relative;z-index:1}
      .automation-ecosystem .section-heading p:not(.eyebrow){color:#aab7cb}
      .automation-architecture{
        display:grid;
        grid-template-columns:minmax(210px,1fr) minmax(230px,280px) minmax(210px,1fr);
        gap:28px;
        align-items:center;
        margin-top:44px;
      }
      .signal-column{
        display:grid;
        gap:12px;
      }
      .signal-title{
        margin:0 0 4px;
        color:#8be9ff;
        font-size:.72rem;
        font-weight:900;
        letter-spacing:.14em;
        text-transform:uppercase;
      }
      .signal-node{
        position:relative;
        display:flex;
        align-items:center;
        gap:11px;
        min-height:52px;
        padding:13px 14px;
        border:1px solid rgba(103,232,249,.14);
        border-radius:14px;
        background:rgba(255,255,255,.055);
        box-shadow:0 14px 34px rgba(0,0,0,.14);
        color:#dbeafe;
        font-size:.86rem;
        font-weight:800;
      }
      .signal-node i{
        width:9px;
        height:9px;
        border-radius:50%;
        flex:0 0 auto;
        background:#67e8f9;
        box-shadow:0 0 0 5px rgba(103,232,249,.09),0 0 18px rgba(103,232,249,.36);
      }
      .output-node i{background:#86efac;box-shadow:0 0 0 5px rgba(134,239,172,.09),0 0 18px rgba(134,239,172,.34)}
      .automation-core-wrap{
        position:relative;
        min-height:360px;
        display:grid;
        place-items:center;
      }
      .automation-core-wrap:before,.automation-core-wrap:after{
        content:"";
        position:absolute;
        left:50%;
        top:50%;
        border-radius:50%;
        transform:translate(-50%,-50%);
        pointer-events:none;
      }
      .automation-core-wrap:before{
        width:310px;
        height:310px;
        border:1px solid rgba(103,232,249,.18);
        box-shadow:0 0 70px rgba(37,99,235,.16);
      }
      .automation-core-wrap:after{
        width:222px;
        height:222px;
        border:1px dashed rgba(103,232,249,.26);
        animation:autoSpin 18s linear infinite;
      }
      @keyframes autoSpin{to{transform:translate(-50%,-50%) rotate(360deg)}}
      .automation-core{
        position:relative;
        width:188px;
        height:188px;
        display:grid;
        place-items:center;
        border-radius:50%;
        border:1px solid rgba(103,232,249,.34);
        background:radial-gradient(circle,#1d4ed8 0%,rgba(6,182,212,.32) 34%,rgba(7,17,31,.92) 68%);
        box-shadow:0 0 74px rgba(37,99,235,.44),inset 0 0 42px rgba(103,232,249,.16);
        text-align:center;
      }
      .automation-core:before{
        content:"";
        position:absolute;
        inset:34px;
        border-radius:50%;
        background:radial-gradient(circle,#e0f2fe,#67e8f9 50%,#2563eb 100%);
        opacity:.9;
        filter:blur(.2px);
        animation:autoPulse 2.6s ease-in-out infinite;
      }
      @keyframes autoPulse{50%{transform:scale(1.08);opacity:1}}
      .automation-core span{
        position:relative;
        display:block;
        z-index:1;
        color:#fff;
        font-family:"Space Grotesk",Inter,system-ui,sans-serif;
        font-size:1.08rem;
        font-weight:900;
        line-height:1.08;
        letter-spacing:-.02em;
      }
      .data-stream{
        position:absolute;
        left:50%;
        top:50%;
        width:min(82vw,760px);
        height:2px;
        transform:translate(-50%,-50%);
        background:linear-gradient(90deg,transparent,rgba(103,232,249,.48),rgba(134,239,172,.46),transparent);
        overflow:hidden;
        pointer-events:none;
      }
      .data-stream:after{
        content:"";
        position:absolute;
        inset:-6px auto -6px 0;
        width:140px;
        background:linear-gradient(90deg,transparent,#fff,transparent);
        animation:signalMove 2.8s ease-in-out infinite;
      }
      @keyframes signalMove{from{transform:translateX(-170px)}to{transform:translateX(820px)}}
      .automation-modules{
        margin-top:50px;
      }
      .automation-modules-head{
        display:flex;
        align-items:end;
        justify-content:space-between;
        gap:20px;
        margin-bottom:16px;
      }
      .automation-modules-head h3{margin:0;font-size:1.28rem;letter-spacing:-.03em}
      .automation-modules-head span{color:#94a3b8;font-size:.78rem;font-weight:800}
      .automation-module-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:14px;
      }
      .automation-module{
        position:relative;
        min-width:0;
        min-height:174px;
        padding:18px;
        border:1px solid rgba(255,255,255,.11);
        border-radius:18px;
        background:linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.045));
        box-shadow:0 18px 46px rgba(0,0,0,.18);
        backdrop-filter:blur(14px);
      }
      .automation-module:before{
        content:"";
        position:absolute;
        right:16px;
        top:16px;
        width:30px;
        height:30px;
        border-radius:10px;
        background:linear-gradient(135deg,rgba(103,232,249,.28),rgba(134,239,172,.18));
        box-shadow:0 0 22px rgba(103,232,249,.16);
      }
      .automation-module h4{
        margin:0 42px 14px 0;
        font-size:1.05rem;
        line-height:1.18;
        letter-spacing:-.025em;
      }
      .module-flow{
        display:grid;
        gap:8px;
      }
      .module-flow p{
        margin:0;
        display:flex;
        justify-content:space-between;
        gap:12px;
        color:#cbd5e1;
        font-size:.82rem;
        line-height:1.35;
      }
      .module-flow b{
        color:#67e8f9;
        font-size:.68rem;
        letter-spacing:.08em;
        text-transform:uppercase;
        flex:0 0 auto;
      }
      .automation-live{
        margin-top:22px;
        border:1px solid rgba(255,255,255,.1);
        border-radius:18px;
        background:rgba(5,11,25,.72);
        box-shadow:0 22px 56px rgba(0,0,0,.28);
        overflow:hidden;
      }
      .automation-live-top{
        display:flex;
        align-items:center;
        gap:8px;
        padding:13px 16px;
        border-bottom:1px solid rgba(255,255,255,.08);
        color:#94a3b8;
        font-size:.72rem;
        font-weight:900;
        letter-spacing:.1em;
        text-transform:uppercase;
      }
      .automation-live-top i{width:8px;height:8px;border-radius:50%;background:#86efac;box-shadow:0 0 16px rgba(134,239,172,.55)}
      .automation-feed{display:grid;padding:8px}
      .automation-feed-row{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:16px;
        padding:10px 12px;
        border-radius:12px;
        color:#aab7cb;
        font-size:.82rem;
        font-weight:700;
      }
      .automation-feed-row.is-active{
        color:#fff;
        background:rgba(103,232,249,.08);
      }
      .automation-feed-row span:last-child{color:#67e8f9;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap}
      .automation-ecosystem .reveal-auto{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease}
      .automation-ecosystem.is-visible .reveal-auto{opacity:1;transform:translateY(0)}
      .automation-ecosystem.is-visible .reveal-auto:nth-child(2){transition-delay:.08s}
      .automation-ecosystem.is-visible .reveal-auto:nth-child(3){transition-delay:.16s}
      .automation-ecosystem.is-visible .reveal-auto:nth-child(4){transition-delay:.24s}
      @media(max-width:980px){
        .automation-architecture{grid-template-columns:1fr;gap:22px}
        .automation-core-wrap{min-height:270px;order:-1}
        .data-stream{display:none}
        .signal-column{grid-template-columns:repeat(2,minmax(0,1fr))}
        .signal-title{grid-column:1/-1}
        .automation-module-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      }
      @media(max-width:720px){
        .automation-ecosystem .section-heading{text-align:left;margin-inline:0}
        .automation-architecture{margin-top:30px}
        .signal-column{grid-template-columns:1fr 1fr;gap:10px}
        .signal-node{min-height:48px;padding:12px;font-size:.8rem}
        .automation-core-wrap{min-height:236px}
        .automation-core-wrap:before{width:250px;height:250px}
        .automation-core-wrap:after{width:188px;height:188px}
        .automation-core{width:158px;height:158px}
        .automation-modules-head{align-items:flex-start;flex-direction:column;gap:5px}
        .automation-module-grid{
          display:flex;
          overflow-x:auto;
          gap:12px;
          scroll-snap-type:x mandatory;
          padding:2px 2px 12px;
          scrollbar-width:none;
        }
        .automation-module-grid::-webkit-scrollbar{display:none}
        .automation-module{
          flex:0 0 82%;
          min-height:174px;
          scroll-snap-align:start;
        }
        .automation-feed-row{align-items:flex-start;flex-direction:column;gap:4px}
      }
      @media(max-width:430px){
        .signal-column{grid-template-columns:1fr}
        .automation-module{flex-basis:92%}
      }
      @media(prefers-reduced-motion:reduce){
        .automation-core-wrap:after,.automation-core:before,.data-stream:after{animation:none!important}
        .automation-ecosystem .reveal-auto{opacity:1!important;transform:none!important;transition:none!important}
      }
    `;
    document.head.appendChild(styles);
  }

  function transformAutomationSection() {
    const section = document.querySelector("#automation");
    if (!section || section.dataset.automationEcosystemReady === "true") return;

    section.dataset.automationEcosystemReady = "true";
    section.className = "section automation-ecosystem";
    section.innerHTML = `
      <div class="container">
        <div class="section-heading centered narrow reveal-auto">
          <p class="eyebrow blue">AUTOMATION ECOSYSTEM</p>
          <h2>Systems That Work While You Sleep</h2>
          <p>AI, CRM, lead management, reporting and customer communication connected into one automated growth engine.</p>
        </div>

        <div class="automation-architecture" aria-label="AI automation architecture">
          <div class="signal-column reveal-auto" aria-label="Business inputs">
            <p class="signal-title">Inputs</p>
            <div class="signal-node"><i></i><span>Website Forms</span></div>
            <div class="signal-node"><i></i><span>Meta Leads</span></div>
            <div class="signal-node"><i></i><span>Google Leads</span></div>
            <div class="signal-node"><i></i><span>WhatsApp Messages</span></div>
            <div class="signal-node"><i></i><span>CRM Records</span></div>
            <div class="signal-node"><i></i><span>Email Events</span></div>
          </div>

          <div class="automation-core-wrap reveal-auto" aria-label="Central AI automation core">
            <div class="data-stream" aria-hidden="true"></div>
            <div class="automation-core"><span>AI<br>Automation<br>Core</span></div>
          </div>

          <div class="signal-column reveal-auto" aria-label="System outputs">
            <p class="signal-title">Outputs</p>
            <div class="signal-node output-node"><i></i><span>Lead Qualification</span></div>
            <div class="signal-node output-node"><i></i><span>CRM Updates</span></div>
            <div class="signal-node output-node"><i></i><span>Follow-Up Sequences</span></div>
            <div class="signal-node output-node"><i></i><span>Sales Alerts</span></div>
            <div class="signal-node output-node"><i></i><span>Dashboards</span></div>
            <div class="signal-node output-node"><i></i><span>Revenue Insights</span></div>
          </div>
        </div>

        <div class="automation-modules reveal-auto">
          <div class="automation-modules-head">
            <h3>Automation Modules</h3>
            <span>Input -> Automation -> Output</span>
          </div>
          <div class="automation-module-grid" aria-label="Automation modules">
            <article class="automation-module"><h4>Lead Intelligence</h4><div class="module-flow"><p><b>Input</b><span>Meta Lead Form</span></p><p><b>Automation</b><span>Lead Scoring</span></p><p><b>Output</b><span>Qualified Opportunity</span></p></div></article>
            <article class="automation-module"><h4>CRM Engine</h4><div class="module-flow"><p><b>Input</b><span>Customer Activity</span></p><p><b>Automation</b><span>Segmentation</span></p><p><b>Output</b><span>Personalized Journey</span></p></div></article>
            <article class="automation-module"><h4>Reporting Engine</h4><div class="module-flow"><p><b>Input</b><span>Marketing Data</span></p><p><b>Automation</b><span>Aggregation</span></p><p><b>Output</b><span>Executive Dashboard</span></p></div></article>
            <article class="automation-module"><h4>Follow-Up Engine</h4><div class="module-flow"><p><b>Input</b><span>New Enquiry</span></p><p><b>Automation</b><span>WhatsApp Trigger</span></p><p><b>Output</b><span>Faster Response</span></p></div></article>
            <article class="automation-module"><h4>Content Engine</h4><div class="module-flow"><p><b>Input</b><span>Customer Insight</span></p><p><b>Automation</b><span>Prompt Workflow</span></p><p><b>Output</b><span>Campaign Brief</span></p></div></article>
            <article class="automation-module"><h4>Revenue Watch</h4><div class="module-flow"><p><b>Input</b><span>Sales Pattern</span></p><p><b>Automation</b><span>Anomaly Detection</span></p><p><b>Output</b><span>Action Alert</span></p></div></article>
          </div>
        </div>

        <div class="automation-live reveal-auto" aria-label="Live automation activity feed">
          <div class="automation-live-top"><i></i><span>Live Activity Feed</span></div>
          <div class="automation-feed">
            <div class="automation-feed-row is-active"><span>Lead received from Meta</span><span>Inbound</span></div>
            <div class="automation-feed-row"><span>Score assigned: High Intent</span><span>Scored</span></div>
            <div class="automation-feed-row"><span>CRM updated automatically</span><span>Synced</span></div>
            <div class="automation-feed-row"><span>WhatsApp follow-up triggered</span><span>Sent</span></div>
            <div class="automation-feed-row"><span>Weekly dashboard generated</span><span>Ready</span></div>
          </div>
        </div>
      </div>
    `;
  }

  function initialiseAutomationMotion() {
    const section = document.querySelector(".automation-ecosystem");
    if (!section) return;

    const rows = [...section.querySelectorAll(".automation-feed-row")];
    let activeIndex = 0;
    if (rows.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.setInterval(() => {
        rows[activeIndex]?.classList.remove("is-active");
        activeIndex = (activeIndex + 1) % rows.length;
        rows[activeIndex]?.classList.add("is-active");
      }, 1400);
    }

    if (!("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-visible");
        observer.disconnect();
      });
    }, { threshold: 0.2 });
    observer.observe(section);
  }

  initialiseEngineTerminal();
  injectAutomationStyles();
  transformAutomationSection();
  initialiseAutomationMotion();
})();
