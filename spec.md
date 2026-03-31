# MarketingHubb Website

## Current State
The site has Home, About, Services, Contact pages plus 6 individual service pages. The services preview section on HomePage shows 6 service cards. About page has company story, stats, and values sections. Founder Saurabh Chaubey's photo is available at `/assets/generated/saurabh-founder.jpg`.

## Requested Changes (Diff)

### Add
- A founder highlight section on the **Home page**, placed directly AFTER the Services Preview section (after line 499 in HomePage.tsx). Must include: Saurabh Chaubey's photo (`/assets/generated/saurabh-founder.jpg`), name, title "Digital Marketing Manager", badge "2 Years Experience", badge "Company Established 2024", and a short bio.
- A founder section on the **About page**, placed after the Stats section (after line 188). Must include: same photo, same name, title, experience badges, and bio.

### Modify
- HomePage.tsx: insert founder section JSX after the closing `</section>` of Services Preview (around line 499).
- AboutPage.tsx: insert founder section JSX after the closing `</section>` of Stats section (around line 188).

### Remove
- Nothing.

## Implementation Plan
1. In `HomePage.tsx`, after the Services Preview `</section>` tag, add a new `<section>` with a two-column layout: left = founder photo with professional frame, right = name, title, experience & year badges, short bio paragraph.
2. In `AboutPage.tsx`, after the Stats `</section>` tag, add the same founder section (can reuse similar layout).
3. Use the existing site color scheme (navy, seagreen, white) and scroll-reveal animations consistent with the rest of the site.
