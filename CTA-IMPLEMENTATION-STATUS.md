# CTA Button Implementation Status

This document lists Call-to-Action (CTA) buttons, **non-functional links**, and **single input elements outside forms** in the codebase that are not yet fully implemented.

---

## 1. Contact Page — "Send Message"

- **File:** `src/components/Contact.jsx`
- **Issue:** The "Send Message" button is `type="button"` and the form has no `onSubmit` handler, no controlled state for inputs, and no logic to send or store the message.
- **Current behavior:** Clicking the button does nothing; form data is never read or submitted.
- **To implement:** Add form state, wire inputs to state, add `onSubmit` (e.g. API call or email service), and use `type="submit"` on the button (or call the submit handler from the button).

---

## 2. Resources Page — "Explore All Resources"

- **File:** `src/components/Resources.jsx` (hero section)
- **Issue:** The button is a plain `<button>` with no `onClick` or `Link`. It does not navigate or perform any action.
- **Current behavior:** Clicking has no effect. User is already on the Resources page.
- **To implement:** Decide intent (e.g. scroll to content, open a specific section, or link to another page) and either add `onClick` logic or replace with a `Link`.

---

## 3. Resources Page — Search Bar "Search" Button

- **File:** `src/components/Resources.jsx` (search section)
- **Issue:** The search input is uncontrolled (no `value`/`onChange`), and the "Search" button has no `onClick` or form submit handler. There is no search logic or integration (e.g. filtering content or calling an API).
- **Current behavior:** Typing and clicking "Search" do nothing.
- **To implement:** Add state for the search query, wire the input to it, and implement search (e.g. filter local content or call a search/API endpoint) on button click or form submit.

---

## 4. Overview Page — Conclusion / CTA Section

- **File:** `src/components/Overview.jsx`
- **Issue:** The "Conclusion / CTA" block (around line 241) contains only text (“Grow Smarter, Faster” and tagline). There is no CTA button or link.
- **Current behavior:** No actionable CTA for users to take the next step.
- **To implement:** Add a button or link (e.g. “Get Started”, “View Pricing”, or “Request Demo”) that routes to `/pricing`, `/request-demo`, or another appropriate page.

---

## 5. Apply Form — "Submit Application"

- **File:** `src/components/ApplyForm.jsx`
- **Issue:** Submit is simulated only: `handleSubmit` logs to console and uses `setTimeout` to show the success state. No real API or backend is called; data is not persisted or sent to the team.
- **Current behavior:** User sees a success message, but no application is stored or delivered.
- **To implement:** Replace the simulation with a real API call (or form backend, e.g. Formspree, Netlify Forms, or your own endpoint) and add error handling and loading state.

---

## 6. Request Demo Page — "Request Demo" (Form Submit)

- **File:** `src/components/RequestDemo.jsx`
- **Issue:** Same as Apply Form: `handleSubmit` only logs form data and shows success after a timeout. No backend or email integration.
- **Current behavior:** User sees “Request Received!”, but the request is not stored or sent anywhere.
- **To implement:** Send form data to a backend API or email/CRM integration and add error handling and loading state.

---

## Summary Table

| # | Location | CTA Label / Action | Missing Piece |
|---|----------|--------------------|---------------|
| 1 | Contact | Send Message | Form state, submit handler, backend/email |
| 2 | Resources (hero) | Explore All Resources | Any action (scroll/link/handler) |
| 3 | Resources (search) | Search | Input state + search logic/API |
| 4 | Overview | CTA section | No button/link added |
| 5 | ApplyForm | Submit Application | Real API/backend integration |
| 6 | RequestDemo | Request Demo submit | Real API/email integration |

---

## Non-functional Links

- **Result:** No non-functional links were found.
- **Checked:** Internal routes use React Router `Link` with valid paths; sidebar links in `Documentation.jsx` use `href="#section-id"` and each has a matching `id` on the page; external and `mailto:` links point to valid URLs. There are no `href="#"` placeholders.

---

## Single Input Elements Outside Form (Not Functional)

### 1. Help Center — Search input

- **File:** `src/components/HelpCenter.jsx` (hero section, ~line 36)
- **Issue:** A single `<input>` is used as a search field with no surrounding `<form>`. It has no `value`/`onChange`, no state, and no submit button or handler. There is no search logic.
- **Current behavior:** User can type but the value is not read or used; nothing happens on Enter or elsewhere.
- **To implement:** Either wrap in a form with `onSubmit`, or add state (`value`/`onChange`), a submit control (button or Enter handler), and search logic (e.g. filter local content or call an API).

### 2. Resources Page — Search input (in search bar)

- **File:** `src/components/Resources.jsx` (search section, ~line 142)
- **Issue:** The search `<input>` is outside a `<form>`. It is uncontrolled (no `value`/`onChange`) and the adjacent "Search" button has no handler. Documented above under **CTA #3**.
- **Current behavior:** Typing and clicking "Search" do nothing.
- **To implement:** Same as CTA #3: add state, wire the input, and implement search on button click or form submit.

---

## CTAs That Are Implemented

- **Hero:** “Try Reliosa” → navigates to `/pricing`
- **Navbar:** “Request Demo” → `Link` to `/request-demo`
- **Pricing:** “Get Started” per plan → `Link` to `/apply/:plan`
- **CustomerStories:** “Start Your Story” → `Link` to `/pricing`
- **Resources:** “Visit Help Center”, “Browse Knowledge Base”, “Contact Support” → `Link`s to respective routes
- **HelpCenter:** “Contact Support” → `Link` to `/contact`
