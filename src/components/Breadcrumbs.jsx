import { Link, useLocation } from "react-router-dom";

/**
 * Breadcrumbs
 * - variant="light" → for dark hero sections (light text)
 * - variant="dark"  → for light sections (dark text)
 */
export default function Breadcrumbs({ variant = "light" }) {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean); // e.g. ['growth','communication']

  const mapTitle = (seg) =>
    ({
      growth: "Growth",
      posh: "POSH",
      communication: "Communication",
      creative: "Creative",
    }[seg] || seg);

  let path = "";
  const isLight = variant === "light";

  return (
    <nav className={`text-sm ${isLight ? "text-gray-300" : "text-gray-500"}`}>
      <Link to="/" className={isLight ? "hover:underline" : "hover:underline"}>
        Home
      </Link>
      {parts.map((seg, i) => {
        path += `/${seg}`;
        const last = i === parts.length - 1;
        const label = mapTitle(seg);
        return (
          <span key={path}>
            {" "}/{" "}
            {last ? (
              <span className={isLight ? "text-white" : "text-gray-900"}>{label}</span>
            ) : (
              <Link to={path} className="hover:underline">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
