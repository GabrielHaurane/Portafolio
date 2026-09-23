import { useState } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "theme";

// La fuente de verdad es el atributo de <html> (lo pone el script inline de index.html).
const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const ThemeToggle = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.setAttribute("data-theme", nextTheme);
    root.setAttribute("data-bs-theme", nextTheme);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // localStorage bloqueado: el tema vale solo para esta visita.
    }
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";
  const label = isDark ? t("theme.to_light") : t("theme.to_dark");

  return (
    <button
      type="button"
      className="btn btn-sm btn-outline-neutral"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <i className={`bi ${isDark ? "bi-sun" : "bi-moon"}`} aria-hidden="true"></i>
    </button>
  );
};

export default ThemeToggle;
