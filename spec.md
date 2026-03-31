# MarketingHubb Website

## Current State
- Full React/TypeScript website with 10 pages (Home, About, Services, Contact + 6 service sub-pages)
- Navbar uses a text placeholder "M" as logo, not the actual brand logo
- index.html has empty <title> and no SEO meta tags
- No dynamic per-page SEO meta management
- No structured data / JSON-LD schema
- No Open Graph or Twitter Card tags
- No canonical URLs
- No favicon
- Logo image already exists at: /assets/chatgpt_image_mar_27_2026_09_54_33_am-019d422b-af9e-71ed-a6b3-252fc43015ce.png

## Requested Changes (Diff)

### Add
- Logo image in Navbar (replace M placeholder) and Footer
- useSEO custom hook for dynamic per-page meta tag management
- Complete SEO meta tags in index.html (title, description, keywords, OG, Twitter Card, canonical, robots, language)
- JSON-LD LocalBusiness + WebSite structured data schema in index.html
- Favicon link in index.html pointing to the logo
- Per-page SEO calls in all 10 pages with unique title, description, keywords, canonical
- Breadcrumb JSON-LD on inner pages
- Image alt text on all images

### Modify
- index.html: Add complete SEO head section
- Navbar.tsx: Replace M icon with actual logo image
- Footer.tsx: Replace text logo with actual logo image
- All 10 page components: Add useSEO() hook call with page-specific meta data

### Remove
- Empty <title></title> in index.html
- Placeholder "M" logo div in Navbar

## Implementation Plan
1. Create src/frontend/src/hooks/useSEO.ts - custom hook to dynamically set title, description, keywords, OG tags, canonical, JSON-LD per page
2. Update index.html with:
   - lang="en" on <html>
   - charset, viewport meta tags
   - Default title: Best Digital Marketing Agency in Varanasi | MarketingHubb
   - Default meta description (158 chars)
   - OG tags (og:title, og:description, og:image, og:url, og:type, og:site_name, og:locale)
   - Twitter Card tags
   - robots meta
   - Canonical URL
   - JSON-LD LocalBusiness schema with name, address, phone, email, geo coordinates
   - JSON-LD WebSite schema with SearchAction
   - Favicon: /assets/chatgpt_image_mar_27_2026_09_54_33_am-019d422b-af9e-71ed-a6b3-252fc43015ce.png
3. Update Navbar.tsx: Replace M placeholder with <img> tag using logo path
4. Update Footer.tsx: Replace text logo with <img> tag using logo path
5. Update all 10 page components to call useSEO() with page-specific SEO data:
   - HomePage: Primary keywords about digital marketing Varanasi
   - AboutPage: About MarketingHubb, Saurabh Chaubey
   - ServicesPage: Digital marketing services Varanasi
   - ContactPage: Contact MarketingHubb Varanasi
   - SeoPage, SmmPage, PpcPage, WebDesignPage, EmailMarketingPage, ContentMarketingPage: each with service-specific keywords
