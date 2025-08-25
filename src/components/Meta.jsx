import { useEffect } from "react";


export default function Meta({ title, description, url, image }) {
  useEffect(() => {
    const set = (selector, attr, value) => {
      if (!value) return;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith('meta[name="')) {
          el.setAttribute("name", selector.match(/meta\[name="([^"]+)"\]/)[1]);
        } else {
          el.setAttribute("property", selector.match(/meta\[property="([^"]+)"\]/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (title) document.title = title;

    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:type"]', "content", "website");
    set('meta[property="og:url"]', "content", url);
    if (image) set('meta[property="og:image"]', "content", image);

    set('meta[name="twitter:card"]', "content", image ? "summary_large_image" : "summary");
    set('meta[name="twitter:title"]', "content", title);
    set('meta[name="twitter:description"]', "content", description);
    if (image) set('meta[name="twitter:image"]', "content", image);

    if (url) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
    }
  }, [title, description, url, image]);

  return null;
}
