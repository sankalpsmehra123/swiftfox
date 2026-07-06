# SwiftFox Integrated Services — Website Project

A 5-page static website: `index.html` (Home), `services.html`, `industries.html`,
`about.html`, `contact.html`, sharing one CSS file and one JS file.

```
swiftfox-site/
├── index.html
├── services.html
├── industries.html
├── about.html
├── contact.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js            ← site behaviour (nav, modal, form logic)
    ├── js/form-config.js     ← ⚠️ EDIT THIS to connect your Google Form
    └── images/               ← logo, favicon, and photos used across the site
```

---

## 1. Connect the enquiry form to Google Forms

The pop-up and the full form on the Contact page both submit straight to
Google Forms — no backend server required.

1. Go to [forms.google.com](https://forms.google.com) and create a new form
   called something like "SwiftFox Website Enquiries" with these four fields:
   - **Full Name** — Short answer
   - **Email** — Short answer
   - **Phone Number** — Short answer
   - **Service Interested In** — Dropdown (options: Security Services,
     Housekeeping Solutions, Facility Management, Manpower Solutions, Not sure yet)

2. In the Form editor, open the **⋮ (three dots) menu → Get pre-filled link**.

3. Type any test value into each field, then click **Get link** and **Copy link**.
   You'll get something like:

   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc0AbCdEfGhIjKlMnOpQrStUvWxYz/viewform?
   usp=pp_url&entry.111111111=Test&entry.222222222=test%40mail.com&
   entry.333333333=9999999999&entry.444444444=Security+Services
   ```

4. Open **`assets/js/form-config.js`** and fill in:
   - `FORM_ID` → the long string between `/d/e/` and `/viewform`
   - `ENTRY_NAME`, `ENTRY_EMAIL`, `ENTRY_PHONE`, `ENTRY_SERVICE` → the matching
     `entry.XXXXXXXXX` numbers, matched to the right field by the test values
     you typed in.

5. Save the file. Every enquiry submitted on the site — from the pop-up on
   any page, or the full form on the Contact page — will now land as a new
   row in your Form's linked **Google Sheet** (Responses tab → green Sheets icon).

No further code changes are needed. If you ever change the Form's fields,
just repeat steps 2–4.

**Note:** submissions use a "fire and forget" request (the browser can't read
Google's response due to cross-origin restrictions), so the site always shows
a success message once the request is sent. Double-check your Sheet after a
test submission to confirm it arrived.

---

## 2. Publish on GoDaddy

You mentioned GoDaddy's Website Builder help page — that flow is for
GoDaddy's *drag-and-drop* website builder, which doesn't accept custom
HTML/CSS/JS projects like this one. For a coded site like this, use
**GoDaddy Web Hosting** (cPanel) instead:

1. Log into your GoDaddy account → **My Products** → next to your hosting
   plan click **Manage**. (If you don't have hosting yet, GoDaddy sells
   "Web Hosting" plans separately from the Website Builder — Linux hosting
   with cPanel is the right choice for a static HTML site.)

2. Open **cPanel** → under **Files**, click **File Manager**.

3. Navigate to the `public_html` folder. If you want the site at your root
   domain (`www.swiftfox.in`), upload the contents directly here. If it
   should live at a subfolder, create that folder first.

4. Upload the whole `swiftfox-site` project:
   - Easiest: zip the folder on your computer, use **Upload** in File
     Manager, upload the `.zip`, then right-click it in File Manager and
     choose **Extract**.
   - Make sure `index.html` ends up directly inside `public_html` (not
     inside an extra subfolder), along with the `assets` folder next to it.

5. Visit your domain in a browser — the homepage should load immediately.
   No build step, no server config, and no database needed; it's a fully
   static site.

6. If your domain isn't already pointed at this hosting account, go to
   **My Products → DNS → Manage Zones** and confirm the A record / nameservers
   point to the hosting plan you just uploaded to. GoDaddy usually sets this
   up automatically when hosting and domain are bought together.

If you'd prefer a simpler always-on alternative later (e.g. Netlify or
GitHub Pages, which support drag-and-drop static hosting for free), the same
folder can be deployed there with no changes — but since you already have
GoDaddy, the steps above are the direct path.

---

## 3. Where the photos came from

All photography used across the site (`assets/images/*.jpg`) was extracted
from the SwiftFox company profile PDF you supplied, matched back to the page
each image originally appeared on (Security page → security photo,
Housekeeping page → housekeeping photo, Industries page → the six sector
photos, and so on). The crest logo is the one you uploaded, used both as the
header logo and the browser tab favicon.

---

## 4. What's different from the earlier single-page version

- Split into 5 linked pages instead of one long scroll.
- New visual identity: warm stone/ink/brick palette with real photography
  as the lead visual on every page, instead of the CCTV-style scanline/grid
  motif — meant to read as a physical workforce company, not a cybersecurity
  vendor.
- Design cues taken (not copied) from G4S, SIS India, Gurgaon Protection
  Force and Checkmate: a stats bar, photo-led service cards, an industries
  grid, a five-phase "approach" timeline, testimonials, and an FAQ accordion.
- The enquiry pop-up still fires on: the nav/hero/contact buttons, exit-intent,
  a 15-second timed fallback, and a sticky "Enquire Now" button on scroll —
  now wired to submit into your Google Form/Sheet instead of just logging
  to the browser console.
