# SwiftFox Integrated Services — Technical & Customization Documentation

Welcome to the comprehensive developer and customization documentation for the **SwiftFox Integrated Services** website. This document provides an in-depth look at the site’s architecture, style guide, interactive components, form integration, and maintenance workflows.

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Directory Structure](#2-directory-structure)
3. [Architecture & Technology Stack](#3-architecture--technology-stack)
4. [Design System & CSS Styling](#4-design-system--css-styling)
5. [Interactive Behaviors (JavaScript)](#5-interactive-behaviors-javascript)
6. [Enquiry Form & Google Forms Integration](#6-enquiry-form--google-forms-integration)
7. [Maintenance & Customization Guide](#7-maintenance--customization-guide)
8. [Hosting & Deployment](#8-hosting--deployment)

---

## 1. Project Overview

The SwiftFox website is a modern, high-performance, 5-page static website designed specifically for a professional physical workforce company. It highlights SwiftFox's expertise in:
* **Security Services** (armed/unarmed guards, access control, patrolling)
* **Housekeeping Solutions** (corporate, industrial, and hospital-grade cleaning)
* **Facility Management** (building maintenance, utility operations)
* **Manpower Solutions** (trained, compliant, and supervised personnel)

### Key Features
* **Multi-Page Static Layout**: Structured across 5 clean HTML pages to improve search engine optimization (SEO) and user navigation.
* **Unified Design Language**: A sophisticated color scheme (corporate blue, warm grey-orange, stone, steel-blue) representing reliability, professionalism, and physical presence rather than looking like a digital tech vendor.
* **Seamless Enquiry Capture**: Integrated form submission directly to Google Sheets via Google Forms with robust client-side validation—no database or complex backend server required.
* **Optimized for Mobile**: Built on fluid responsive styling with custom media queries.
* **Strict Performance & Accessibility**: Zero third-party runtime frameworks (like React or Bootstrap), making it load instantly even on low-speed cellular connections.

---

## 2. Directory Structure

The project has been organized to keep all global design and behavior assets cleanly separated from the content:

```text
swiftfox-site/
├── index.html                # Homepage: Hero, Trust Stats, Services, Approach, FAQs
├── services.html             # Detailed breakdown of the 4 service lines with tab anchors
├── industries.html           # Target sectors (BFSI, Healthcare, Corporate, Hospitality, etc.)
├── about.html                # Team, compliance standards, timeline, and company story
├── contact.html              # Full enquiry form, phone/email details, map, and office hours
├── README.md                 # Project quick-start & deployment summary
├── DOCUMENTATION.md          # This comprehensive technical guide
└── assets/
    ├── css/
    │   └── style.css         # Consolidated, performance-tuned stylesheet
    ├── js/
    │   ├── form-config.js    # ⚠️ EDIT THIS ONLY to set up your Google Form credentials
    │   └── main.js           # Client-side validation, mobile menu, and modal triggers
    └── images/               # High-quality photography assets and logos
        ├── about-hero.jpg
        ├── approach-1.jpg
        ├── ...
        ├── logo.png          # Main company crest logo
        ├── favicon.png       # 64x64 browser icon
        └── favicon-32.png    # 32x32 fallback browser icon
```

---

## 3. Architecture & Technology Stack

The site is built with a **Vanilla Web Stack**:
* **HTML5**: Semantic and SEO-friendly tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **CSS3**: Core styling utilizing custom variables, flexible grid layouts (Flexbox and Grid), and fluid responsive queries.
* **ES5/ES6 JavaScript**: Pure, framework-free browser JavaScript executing natively without compilation or build stages.
* **Google Forms API**: Leverages the public `/formResponse` endpoint for database-less lead storage.

---

## 4. Design System & CSS Styling

The visual identity of SwiftFox is defined entirely inside `assets/css/style.css`. It avoids bloated utility CSS libraries in favor of a fast-rendering, clean CSS hierarchy.

### A. Color Palette & Typography Tokens (CSS Variables)
```css
:root {
  --ink: #255194;         /* corporate blue — header/footer/dark sections */
  --ink-2: #1a3c6e;       /* darker navy for gradients/borders */
  --stone: #efe9dc;       /* warm paper background */
  --stone-2: #e4dcc9;     /* slightly deeper stone for section breaks */
  --white: #fbfaf6;       /* clean card/container background */
  --rust: #bd6434;        /* warm grey-orange — primary accent for CTAs and highlights */
  --rust-dark: #9a4f26;   /* hover state for primary accent */
  --moss: #4a7ab5;        /* steel-blue — verified / compliance */
  --charcoal: #241f19;    /* body text color */
  --steel: #5c6459;       /* secondary text and borders */
  --line: #d8cfba;        /* hairline borders on stone */
  --line-dark: #1a3c6e;   /* hairline borders on blue sections */
  --radius: 3px;          /* card border radius styling */
  --font-body: 'Work Sans', sans-serif;
  --font-title: 'Barlow Condensed', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

### B. Typography Setup
* **Headers (`h1`, `h2`, `h3`, `.eyebrow`)**: Styled via `var(--font-title)` (`Barlow Condensed`) for an authoritative, structured corporate identity.
* **Body text**: Styled via `var(--font-body)` (`Work Sans`) for clean legibility and proportions on mobile.
* **Numeric metrics & labels**: Styled via `var(--font-mono)` (`IBM Plex Mono`) for statistics and progress indicators.

### C. Major CSS Structural Layouts
* **`.wrap`**: Standard container capping the main content width at `1200px` with responsive padding on mobile.
* **`.card-grid`**: Utilizes CSS Grid for robust automatic column adjustments:
  ```css
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  ```
* **`.trust-bar`**: Highlight bar styled in contrasting dark/light layout that displays key compliance and vertical metrics.

---

## 5. Interactive Behaviors (JavaScript)

All interactive features of the site are orchestrated by `assets/js/main.js` and run once the DOM is fully loaded.

### A. Mobile Navigation Drawer
The hamburger button (`#navToggle`) toggles the `.open` class on `#mobileMenu`. 
```javascript
navToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});
```

### B. Sticky "Enquire Now" CTA
A sticky CTA button (`#stickyCta`) is positioned in the bottom corner. It becomes visible on scroll once the user scrolls beyond `480px`, prompting them to enquire dynamically.
```javascript
window.addEventListener('scroll', function () {
  if (window.scrollY > 480) stickyCta.classList.add('show');
  else stickyCta.classList.remove('show');
});
```

### C. Modal Overlay System
The enquiry pop-up modal is embedded at the bottom of the HTML documents. To conserve system resources and prevent UX friction:
* The modal is triggered **only** on deliberate user actions (clicking an "Enquire Now" button). It does not trigger automatically on exit-intent or timer delays, ensuring compliance with search engine guidelines on intrusive interstitials.
* Triggers call `window.openModal()`, which applies `overflow: hidden` to the main document body (preventing background scrolling) and sets modal display classes.
* Keyboard listeners capture `Escape` and backdrop clicks to instantly return the user to their scroll position.

### D. Comprehensive Client-Side Form Validation
Before any submission, Javascript performs a real-time sanity check on the input elements:
1. **Full Name**: Must be at least 2 characters long (whitespace stripped).
2. **Email Address**: Matches against a standard standard email regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
3. **Phone Number**: Sanitizes and validates standard 10-digit Indian mobile numbers beginning with 6, 7, 8, or 9 (`/^[6-9]\d{9}$/`).
4. **Service Selected**: Validated against the static array configuration to prevent injection attacks or invalid selections.

When an input is invalid, the parent wrapper gains the `.invalid` class, triggering high-contrast red error borders and assistive text elements via CSS styling.

---

## 6. Enquiry Form & Google Forms Integration

This site uses a serverless lead capture mechanism. The data is submitted directly to your custom Google Form, which is connected to a Google Sheet.

### Flow Diagram
```text
[User Form Entry]
       │
       ▼
 [JS Validation] ──(fail)──► Show Visual Red Borders
       │
     (pass)
       ▼
 [FormData POST] ──────────► [Google Forms Response Endpoint]
       │                                  │
  (no-cors mode)                          ▼
       │                     [Automated Google Sheet Row]
       ▼
 [Success Modal Screen]
```

### Setup Instructions
1. **Create the Google Form**:
   * Go to [Google Forms](https://forms.google.com) and create a blank form.
   * Add four short-answer fields with these exact titles:
     * `Full Name`
     * `Email`
     * `Phone Number`
     * `Service Interested In` (You can also make this a dropdown with matching services).

2. **Retrieve Pre-filled Parameter Names**:
   * On your Google Form editor, click the three-dot menu `⋮` at the top right and select **Get pre-filled link**.
   * Fill in dummy values (e.g., `John Doe`, `john@example.com`, `9876543210`, `Security Services`).
   * Click **Get link** and **Copy link**.

3. **Deconstruct the URL**:
   * The copied link will look similar to this:
     ```text
     https://docs.google.com/forms/d/e/1FAIpQLSfi-z7b4G74K0Ck4QuFS3tSVgiBWvk5tHHeTL87EmJQIjq5YA/viewform?usp=pp_url&entry.1015531656=John+Doe&entry.2066316494=john%40example.com&entry.1240783789=9876543210&entry.265472517=Security+Services
     ```
   * Extract the **Form ID** (the long alphanumeric string between `/d/e/` and `/viewform`).
   * Extract each entry parameter: `entry.1015531656`, `entry.2066316494`, etc.

4. **Update `assets/js/form-config.js`**:
   * Open the config file and populate the extracted variables:
     ```javascript
     window.SWIFTFOX_FORM_CONFIG = {
       FORM_ID: "YOUR_EXTRACTED_FORM_ID",
       ENTRY_NAME: "entry.NAME_NUMBER",
       ENTRY_EMAIL: "entry.EMAIL_NUMBER",
       ENTRY_PHONE: "entry.PHONE_NUMBER",
       ENTRY_SERVICE: "entry.SERVICE_NUMBER",
       SERVICE_OPTIONS: [
         "Security Services",
         "Housekeeping Solutions",
         "Facility Management",
         "Manpower Solutions",
         "Not sure yet"
       ]
     };
     ```

### Why No-CORS Mode is Used
When Javascript posts data to `https://docs.google.com/forms/d/e/.../formResponse`, the browser’s Same-Origin Policy blocks standard cross-origin reads.
By passing `mode: 'no-cors'` inside the fetch options:
* The browser transmits the network request successfully and allows Google's servers to register the lead data.
* The browser receives an opaque response (cannot read body/status directly).
* The JavaScript catches any actual connection failures and displays the visual confirmation modal safely.

---

## 7. Maintenance & Customization Guide

### How to Modify Company Details
* **Phone & Email**: Standardized contact numbers and inbox endpoints exist on `contact.html` and the global `<footer>` elements. Use standard global find-and-replace to make swift updates across all 5 static files.
* **Physical Addresses**: The main Delhi/NCR office coordinates are detailed inside the footer grid and on the Contact page alongside embed elements.

### Updating Imagery & Brand Assets
* **Logo**: Replace `assets/images/logo.png` with your high-resolution crest logo (ideally a transparent PNG).
* **Favicon**: Upload your new icon files to `assets/images/favicon.png` (64x64) and `assets/images/favicon-32.png` (32x32) to update the browser tab illustration.
* **Photography**: If you need to refresh team, service, or hero banners, place the optimized JPG images into `assets/images/`. Recommended banner dimensions are `1920x1080` (compressed to `<300kb` for fast loading speeds).

---

## 8. Hosting & Deployment

Being a static front-end bundle, this project does not require heavy runtime nodes, databases, or runtime server setups. It can be hosted extremely cost-effectively.

### A. Deploying via cPanel / GoDaddy Web Hosting (Recommended)
Do not use GoDaddy's drag-and-drop Website Builder because it is not designed to accept complex, customized source code. Follow these steps:
1. Log into your **GoDaddy Dashboard** -> **My Products**.
2. Locate your **cPanel Web Hosting** plan and click **Manage**.
3. Under the **Files** section, click **File Manager**.
4. Navigate inside the **`public_html`** folder.
5. Create a ZIP file of the entire project contents on your local machine (making sure `index.html` is at the root of your ZIP, not nested inside an outer folder).
6. Click **Upload** inside File Manager, upload your zip file, then right-click on it and choose **Extract**.
7. Ensure your domain name DNS A-records are pointing to your cPanel IP address.

### B. Deploying via Netlify or GitHub Pages (Alternative)
For frictionless, git-backed static deployments:
* **Netlify**: Simply sign in, select **Import from Git**, point to the GitHub repository, and click **Deploy**. Alternatively, drag and drop the root workspace directory into the Netlify Web App.
* **GitHub Pages**: Push this code to a public/private repository on GitHub, navigate to **Settings -> Pages**, and select the branch you want to serve. No build scripts are required.
