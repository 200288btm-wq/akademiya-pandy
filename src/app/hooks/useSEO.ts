import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSEO({ title, description, keywords, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helpers
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", "ru_RU", true);
    setMeta("og:site_name", "Академия Панды", true);
  }, [title, description, keywords, ogTitle, ogDescription]);
}
