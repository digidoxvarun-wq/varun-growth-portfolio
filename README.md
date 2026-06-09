# Varun Kumar Growth Portfolio

Static portfolio landing page built with HTML, CSS and JavaScript for GitHub Pages.

## Files

- index.html
- style.css
- script.js
- assets/images/README.md

## Preview locally

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

Open repository Settings, select Pages, choose Deploy from a branch, then select `main` and `/(root)`.

Expected public URL:

`https://digidoxvarun-wq.github.io/varun-growth-portfolio/`

## Required replacements

Search `index.html` and replace:

- WhatsApp placeholder: `https://wa.me/910000000000`
- Booking placeholder: `#contact`
- LinkedIn placeholder: `https://www.linkedin.com/in/your-profile`
- Testimonial placeholders: `[Client Name]`, `[D2C Brand]`, `[E-commerce Brand]`, `[Wellness Brand]`

Only publish genuine, approved testimonials and verified case-study claims.

## Images

The website currently uses CSS-generated visuals. Final image paths are documented in `assets/images/README.md`.

## Formspree setup

The current form validates entries and opens the visitor's email client using `mailto:`.

To use Formspree later:

1. Create a Formspree form.
2. Add its endpoint to the form `action` in `index.html`.
3. Add `method="POST"`.
4. Replace the mailto submit logic in `script.js` with normal form submission or a fetch request.
5. Retain the validation and `lead_form_submit` tracking call.

## Tracking placeholders

The `trackEvent(eventName, data)` function currently logs to the browser console. It is used for:

- book_audit_click
- whatsapp_click
- service_meta_ads_click
- case_study_google_cta
- lead_form_submit

Connect this function to GTM, GA4 or Meta Pixel after analytics and consent requirements are finalised.

## Launch checklist

Replace all contact placeholders, add final images, verify metrics, replace testimonials, test the form, configure GitHub Pages, and test the live site across mobile and desktop widths.
