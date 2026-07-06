/* ==========================================================================
   GOOGLE FORM CONFIGURATION
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
        entry.111111111=Test+Name&
        entry.222222222=test%40email.com&
        entry.333333333=9999999999&
        entry.444444444=Security+Services

   4. Paste the long ID (the part between /d/e/ and /viewform) below as FORM_ID.
   5. Paste each "entry.XXXXXXXXX" number below, matching it to the right field.

   That's it — no server, no backend needed. The site POSTs directly to
   Google's form-response endpoint using a hidden fetch request.
   ========================================================================== */

window.SWIFTFOX_FORM_CONFIG = {
  // The long ID from your Google Form's pre-filled link (between /d/e/ and /viewform)
  FORM_ID: "REPLACE_WITH_YOUR_GOOGLE_FORM_ID",

  // The entry.XXXXXXXXX numbers from step 3 above, one per field
  ENTRY_NAME:    "REPLACE_WITH_ENTRY_ID_FOR_NAME",
  ENTRY_EMAIL:   "REPLACE_WITH_ENTRY_ID_FOR_EMAIL",
  ENTRY_PHONE:   "REPLACE_WITH_ENTRY_ID_FOR_PHONE",
  ENTRY_SERVICE: "REPLACE_WITH_ENTRY_ID_FOR_SERVICE"
};
