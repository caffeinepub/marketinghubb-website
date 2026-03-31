import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const DEFAULT_TITLE =
  "Best Digital Marketing Agency in Varanasi | MarketingHubb";
const DEFAULT_DESC =
  "MarketingHubb is the best digital marketing agency in Varanasi. We offer SEO, SMM, PPC, Web Design & Content Marketing services. Call +91 73072 60253 for free consultation.";
const DEFAULT_CANONICAL = "https://marketinghubb.in/";
const DEFAULT_OG_IMAGE =
  "/assets/chatgpt_image_mar_27_2026_09_54_33_am-019d422b-af9e-71ed-a6b3-252fc43015ce.png";

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(
    `meta[${attr}="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow");

    // OG tags
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical || DEFAULT_CANONICAL, true);
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, true);
    setMeta("og:type", ogType || "website", true);
    setMeta("og:site_name", "MarketingHubb", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Canonical
    setLink("canonical", canonical || DEFAULT_CANONICAL);

    // Page-specific JSON-LD
    if (jsonLd) {
      let script = document.getElementById(
        "json-ld-page",
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "json-ld-page";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(
        Array.isArray(jsonLd) ? jsonLd : [jsonLd],
      );
    }

    return () => {
      // Restore defaults on unmount
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESC);
      setMeta("og:title", DEFAULT_TITLE, true);
      setMeta("og:description", DEFAULT_DESC, true);
      setMeta("og:url", DEFAULT_CANONICAL, true);
      setLink("canonical", DEFAULT_CANONICAL);
      const pageScript = document.getElementById("json-ld-page");
      if (pageScript) pageScript.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, jsonLd]);
}
