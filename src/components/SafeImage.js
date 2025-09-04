import { useState } from "react";

/**
 * <SafeImage src="/artists/arvind-sivakumaran.jpg" alt="Arvind" className="w-40 h-40" />
 *
 * Fallback order:
 *   .jpg  →  .png  →  /artists/placeholder.jpg
 */
export default function SafeImage({ src, alt = "", className = "", ...rest }) {
  const [current, setCurrent] = useState(src);
  const [triedPng, setTriedPng] = useState(false);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (!triedPng && /\.jpg$/i.test(current)) {
          setTriedPng(true);
          setCurrent(current.replace(/\.jpg$/i, ".png"));
        } else {
          setCurrent("/artists/placeholder.jpg");
        }
      }}
      {...rest}
    />
  );
}
