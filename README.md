# SwiftFox Integrated Services — Official Website

A premium, 5-page responsive static website for **SwiftFox Integrated Services**, a leading provider of professional, fully compliant Security, Housekeeping, Facility Management, and Manpower Solutions in India.

The site is built with a highly performance-optimized, clean, framework-free vanilla tech stack (HTML5, CSS3, and ES6 JavaScript), designed to load instantly on mobile networks while providing an executive-grade look and feel.

---

## 🚀 Quick Start & Directory Structure

```text
swiftfox-site/
├── index.html                # Home page with trust bar, core offerings, FAQs, and approach
├── services.html             # Detailed view of the 4 service lines with tab-anchors
├── industries.html           # Highlight of industries served (BFSI, Hospitality, Healthcare, etc.)
├── about.html                # Company story, leadership principles, compliance & timeline
├── contact.html              # Dedicated Contact page with details, map, and complete enquiry form
├── README.md                 # Project introduction and quick deployment guide (this file)
├── DOCUMENTATION.md          # 📖 Deep-dive technical & developer guide (Refer to this for full styling/JS rules)
└── assets/
    ├── css/style.css         # Single performance-tuned CSS file
    ├── js/main.js            # Site interactive behaviors (navigation, modal, form validation)
    ├── js/form-config.js     # ⚠️ EDIT THIS file to connect your own Google Form
    └── images/               # High-res optimized visual assets, favicon, and company logos
```

---

## 📋 1. Connecting the Enquiry Form to Google Forms

Both the pop-up modal and the full-page contact form submit straight to Google Forms — meaning **zero backend servers, databases, or monthly form-service fees are required**. Submissions arrive instantly in your designated Google Sheet.

1. **Create your Google Form**: Go to [forms.google.com](https://forms.google.com) and create a form with these 4 fields:
   * **Full Name** — Short answer
   * **Email** — Short answer
   * **Phone Number** — Short answer
   * **Service Interested In** — Dropdown (with options: `Security Services`, `Housekeeping Solutions`, `Facility Management`, `Manpower Solutions`, `Not sure yet`)

2. **Generate a Pre-filled Link**:
   * Open the **⋮ (three dots menu)** in the top-right corner of the Google Form editor.
   * Click **Get pre-filled link**.
   * Fill in sample values for each field, then click **Get link** and **Copy link**.

3. **Configure Your Project Keys**:
   * Paste the copied link into a text editor. It will look like this:
     `https://docs.google.com/forms/d/e/1FAIpQLSfi-z7b4G74K.../viewform?entry.1015531656=John+Doe&entry.2066316494=john@example.com...`
   * Open **`assets/js/form-config.js`** in your editor.
   * Update the `FORM_ID` string with the long ID between `/d/e/` and `/viewform`.
   * Update `ENTRY_NAME`, `ENTRY_EMAIL`, `ENTRY_PHONE`, and `ENTRY_SERVICE` with the respective `entry.XXXXXXXX` identifiers from your pre-filled link.

4. **Verify**:
   * Submit an enquiry on the website.
   * Check your Google Form's **Responses** tab or the connected Google Sheet to verify the lead has populated perfectly.

---

## 🌐 2. Publishing Your Site on GoDaddy

Because this is a bespoke, high-performance static website, **do not use GoDaddy's visual Website Builder**, which is restricted to its own proprietary templates. Instead, publish it using your **GoDaddy Web Hosting (cPanel)**:

1. Log into your **GoDaddy Product Dashboard** -> click **Manage** next to your **Web Hosting (cPanel)**.
2. In the cPanel Dashboard, locate and click on **File Manager**.
3. Open the **`public_html`** folder. If this website is for your main domain (e.g., `www.swiftfox.in`), upload the files directly here.
4. On your local computer, create a ZIP file of the website directory (ensure `index.html` is at the top level of the zip).
5. Click **Upload** in the cPanel File Manager, choose the ZIP file, and once completed, right-click the ZIP and choose **Extract**.
6. Ensure that `index.html` and the `assets/` folder are located directly within `public_html`.
7. Visit your domain to see the site live!

*For alternative modern static hosts (such as Netlify, Vercel, or GitHub Pages), you can connect your repository directly and deploy with one click for free. Refer to `DOCUMENTATION.md` for these setup details.*

---

## 🎨 3. Key Design Choices & Enhancements

* **Warm Physical Brand Palette**: Modeled as a premium physical workforce company. Utilizes deep inks, warm stones, slate blues, and structural brick reds. No digital grid lines or CCTV scanner overlays, reading as a disciplined, human-first enterprise.
* **Photography & Assets**: All photography is optimized, compressed (`<300kb`), and mapped directly to its respective service cards and industry matrices from official corporate documents.
* **Strict Non-Intrusive Interstitials**: To optimize SEO search rankings and respect user focus, the Enquiry popup modal only launches on **deliberate button clicks** (e.g., header, hero, or cards), keeping exit-intent and automatic page-load prompts completely silent.
* **Sticky Navigation Callout**: A subtle, non-intrusive "Enquire Now" floating CTA activates on the bottom edge of the screen once the user scrolls beyond `480px` for optimal lead conversion.

---

## 📖 4. Comprehensive Technical Documentation

For an in-depth breakdown of the styling variables, page layouts, form submit validations, mobile responsive menus, and customization workflows, please consult the:

👉 **[DOCUMENTATION.md](./DOCUMENTATION.md)**
