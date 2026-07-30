# West Coast Mediators — Website

Professional website for **West Coast Mediators**, a certified Federal and State Circuit Court mediation practice based in Sarasota, Florida. The site represents two mediators — **Stephen G. Brannan, Esq.** (Sarasota) and **Kevin B. Woods, Esq.** (Tampa) — and provides practice information, attorney bios, and per-attorney scheduling pages.

---

## Project Status

Two parallel deliverables exist in this repository:

| Deliverable | Location | Status |
|---|---|---|
| Next.js app (live preview + Vercel deploy) | `/app`, `/components` | Live — deploys on merge to `main` |
| Static HTML export (for PHP server hosting) | `/html-export` | Complete — ready to upload to server |

---

## Tech Stack

### Next.js Application (`/app`)

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.6 | App Router, API routes, SSR |
| React | 19 | UI components |
| TypeScript | 5.7.3 | Type safety |
| Tailwind CSS | 4.x | Utility-class styling |
| Lucide React | 1.16 | Icons |
| Cheerio | 1.2 | Server-side HTML parsing for calendar proxy |
| Sharp | 0.35 | Image processing |
| Vercel Analytics | 1.6.1 | Usage analytics |

### Static HTML Export (`/html-export`)

| Technology | Purpose |
|---|---|
| Semantic HTML5 | Page structure |
| CSS custom properties | Brand tokens (colors, typography, spacing) |
| Google Fonts CDN | Playfair Display, Montserrat, Lato |
| Vanilla JavaScript | Navbar scroll, mobile menu, accordions, forms |
| PHP mail handler (stub) | Contact/inquiry form submission — to be wired on server |
| WebCalendar iframe | Live PHP calendar embed per attorney |

---

## Site Structure

```
/                          Homepage
  #home                    Hero — "Resolving Conflict. Restoring Solutions."
  #about                   Practice overview and brand pillars
  #practice-areas          7 areas of civil law
  #mediators               Stephen Brannan + Kevin Woods bios with credentials
  #contact                 Firm contact form and direct contact details

/schedule                  Mediator selection hub
/schedule/stephen          Stephen G. Brannan — scheduling page + calendar
/schedule/kevin            Kevin B. Woods — scheduling page + calendar
```

The HTML export mirrors the same structure:

```
html-export/
  index.html
  schedule/
    index.html
    stephen/index.html
    kevin/index.html
  assets/
    styles.css             All brand tokens and component styles (863 lines)
    main.js                Interactive behavior (navbar, forms, accordions)
```

---

## Brand

| Token | Value | Usage |
|---|---|---|
| Navy | `#0A1B2E` | Primary background, headings |
| Forest | `#23423D` | Secondary background, accents |
| Slate | `#5A6B66` | Body text, muted elements |
| Cream | `#F2F2F0` | Light backgrounds |
| Gold | `#B99B5A` | CTAs, "MEDIATORS" wordmark, accents |

**Fonts:** Playfair Display (headings) / Montserrat SemiBold (subheadings) / Lato (body)

**Logos (in `/public`):**

| File | Usage |
|---|---|
| `wcm-logo.png` | Light backgrounds (navy + gold) |
| `wcm-logo-white.jpg` | Dark backgrounds (white + gold) |
| `wcm-logo-navy.jpg` | Full navy lockup |

---

## Calendar Integration

### Current setup

The Next.js scheduling pages use a server-side API proxy (`/app/api/calendar/[id]/route.ts`) that fetches the live PHP WebCalendar HTML, parses it with Cheerio, and drives a branded React calendar component (`/components/mediation-calendar.tsx`).

The static HTML export uses `<iframe>` tags pointing to the PHP calendar directly.

| Attorney | PHP Calendar URL |
|---|---|
| Stephen G. Brannan | `https://www.westcoastmediators.com/webcalendar_joe/month.php` |
| Kevin B. Woods | `https://www.westcoastmediators.com/webcalendar_kevin/month.php` *(pending — instance not yet set up)* |

### WebCalendar open source

- GitHub: [https://github.com/craigk5n/webcalendar](https://github.com/craigk5n/webcalendar)
- Language: PHP + MySQL
- **Updating:** Replace PHP files with new release, run `install/index.php` upgrade script, preserve `settings.php` (holds DB credentials). With two instances sharing one codebase, both update simultaneously.

---

## Next Steps — Making the HTML + iframe Calendar Live

### 1. Upload the HTML export to the PHP server

Copy `html-export/` contents to the web root:

```
html-export/index.html              → /public_html/index.html
html-export/schedule/               → /public_html/schedule/
html-export/assets/                 → /public_html/assets/
```

Copy image assets from `public/` to the server:

```
public/wcm-logo-white.jpg           → /public_html/assets/images/
public/wcm-logo.png                 → /public_html/assets/images/
public/hero-bg.png                  → /public_html/assets/images/
public/stephen-brannan-crop.jpg     → /public_html/assets/images/
public/kevin-woods.jpg              → /public_html/assets/images/
```

Update `src` and `href` paths in the HTML files to match the server's actual directory structure.

---

### 2. Enable iframe embedding on the WebCalendar server

The PHP server currently blocks cross-origin iframing with:

```
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self'
```

**Option A — `.htaccess` in the webcalendar directory (preferred):**

```apache
Header always unset X-Frame-Options
Header always set Content-Security-Policy "frame-ancestors 'self' https://westcoastmediators.com"
```

**Option B — Edit WebCalendar PHP directly:**

In `includes/header.php`, remove or replace the existing header line:

```php
// Remove:
header('X-Frame-Options: SAMEORIGIN');

// Add:
header("Content-Security-Policy: frame-ancestors 'self' https://westcoastmediators.com");
```

---

### 3. Set up Kevin's WebCalendar instance

1. Copy the existing `webcalendar_joe/` directory to `webcalendar_kevin/` on the server
2. Create a new MySQL database (suggested: `wcm_webcalendar_kevin`, user: `wcm_cal_user`)
3. Edit `webcalendar_kevin/settings.php` with Kevin's database credentials
4. Run `webcalendar_kevin/install/index.php` to initialize the schema
5. Update the iframe `src` in `html-export/schedule/kevin/index.html` from the placeholder URL to the live URL

---

### 4. Wire the contact forms to PHP mail

The HTML forms POST to `assets/mail.php` (not yet created). Add this file to the server:

```php
<?php
$name    = htmlspecialchars($_POST['name'] ?? '');
$email   = htmlspecialchars($_POST['email'] ?? '');
$phone   = htmlspecialchars($_POST['phone'] ?? '');
$matter  = htmlspecialchars($_POST['matter'] ?? '');
$message = htmlspecialchars($_POST['message'] ?? '');
$to      = htmlspecialchars($_POST['recipient'] ?? 'scheduling@westcoastmediators.com');

$subject = "Mediation Inquiry — $matter ($name)";
$body    = "Name: $name\nPhone: $phone\nEmail: $email\nMatter Type: $matter\n\nMessage:\n$message";
$headers = "From: noreply@westcoastmediators.com\r\nReply-To: $email";

mail($to, $subject, $body, $headers);
header('Location: ' . $_SERVER['HTTP_REFERER'] . '?sent=1');
```

The `recipient` hidden field on each form routes Stephen's inquiries to the WCM scheduling office and Kevin's to Gulf Coast Mediation scheduling.

---

### 5. Connect the new MySQL database (when ready)

Once the MySQL database is provisioned, provide:
- Host / port
- Database name
- Username + password

The Next.js API route (`/app/api/calendar/[id]/route.ts`) can then be updated to query the WebCalendar tables (`webcal_entry`, `webcal_entry_user`, `webcal_user`) directly — bypassing the PHP layer entirely for a fully native branded calendar with no iframe or cross-origin dependency.

---

## Local Development (Next.js)

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm start
```

Continue editing in v0: [https://v0.app/chat/projects/prj_YDxpHeJZcm46dL9kQvDRlfUsJjSN](https://v0.app/chat/projects/prj_YDxpHeJZcm46dL9kQvDRlfUsJjSN)
