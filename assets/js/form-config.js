/* ==========================================================================
   GOOGLE FORM CONFIGURATION — SAMPLE / FILL-IN-TEMPLATE
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to connect the enquiry form
   to your own Google Form. Follow these steps:

   1. Create a Google Form with these fields (use these exact types):
        - Full Name        (Short answer)
        - Email            (Short answer)
        - Phone Number     (Short answer)
        - Service Interested In   (Dropdown, options matching the site)

   2. Click the three-dot menu (top right of the Form editor) -> "Get pre-filled link".
      Fill in dummy values in each field, then click "Get link".

   3. Copy that pre-filled link. It looks like:
      https://docs.google.com/forms/d/e/1FAIpQLSc.......XYZ/viewform?
        usp=pp_url&
        entry.1111111111=Test+Name&
        entry.2222222222=test%40email.com&
        entry.3333333333=9999999999&
        entry.4444444444=Security+Services

   4. Paste the long ID (the part between /d/e/ and /viewform) below as FORM_ID.
   5. Paste each "entry.XXXXXXXXXXX" number below, matching it to the right field.

   That's it — no server, no backend needed. The site POSTs directly to
   Google's form-response endpoint using a hidden fetch request.

   --------------------------------------------------------------------------
   Example (replace with your own values):

    window.SWIFTFOX_FORM_CONFIG = {
      FORM_ID:       "1FAIpQLSc...XYZ",
      ENTRY_NAME:    "entry.1111111111",
      ENTRY_EMAIL:   "entry.2222222222",
      ENTRY_PHONE:   "entry.3333333333",
      ENTRY_SERVICE: "entry.4444444444",
      // Allowed service options — must match the <option value="..."> list in the HTML
      SERVICE_OPTIONS: ["Security Services","Housekeeping Solutions","Facility Management","Manpower Solutions","Not sure yet"]
    };
   ========================================================================== */

window.SWIFTFOX_FORM_CONFIG = {
  // The long ID from your Google Form's pre-filled link (between /d/e/ and /viewform)
  FORM_ID: "1FAIpQLSfi-z7b4G74K0Ck4QuFS3tSVgiBWvk5tHHeTL87EmJQIjq5YA",

  // The entry.XXXXXXXXXXX numbers from step 3 above, one per field
  ENTRY_NAME:    "entry.1015531656",
  ENTRY_EMAIL:   "entry.2066316494",
  ENTRY_PHONE:   "entry.1240783789",
  ENTRY_SERVICE: "entry.265472517",

  // Allowed service options — must match the <option value="..."> list in the HTML
  SERVICE_OPTIONS: ["Security Services","Housekeeping Solutions","Facility Management","Manpower Solutions","Not sure yet"]
};
