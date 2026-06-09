# Portfolio image replacement guide

The landing page currently uses CSS-generated visuals, so it works without external images.

Add these final JPG files when approved assets are ready:

- `varun_growth_hero_banner.jpg` — recommended 1600 × 1000 px
- `meta_ads_case_study.jpg` — recommended 1400 × 1000 px
- `google_ads_case_study.jpg` — recommended 1400 × 1000 px
- `crm_automation_case_study.jpg` — recommended 1400 × 1000 px

## Hero image

Use a premium performance dashboard composition. Avoid stock photography, fake client logos and unverifiable claims.

The Open Graph and Twitter metadata already reference `varun_growth_hero_banner.jpg`, so add this before sharing the site publicly.

## Case-study images

Use anonymised dashboards, trend charts, customer-journey maps or branded metric summaries. Remove client-identifying data unless written approval exists.

## Add an image to a case study

Replace the existing CSS visual inside the relevant `.case-visual` element with:

```html
<img
  src="assets/images/meta_ads_case_study.jpg"
  alt="Anonymised Meta Ads performance case study dashboard"
  loading="lazy"
>
```

Use the matching filename and accurate alternative text for each case study.

## Add the hero image

Replace the `.hero-dashboard` content with:

```html
<div class="hero-dashboard hero-image">
  <img
    src="assets/images/varun_growth_hero_banner.jpg"
    alt="Growth performance dashboard showing acquisition and revenue metrics"
  >
</div>
```

Add this CSS:

```css
.hero-image {
  padding: 0;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: inherit;
}
```

Compress each image before upload. Target less than 300 KB where practical without making dashboard text unreadable.
