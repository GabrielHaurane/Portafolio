import { techCatalog } from "../../../data/data.jsx";

// Recibe claves de techCatalog (p. ej. ["react", "vite"]) y las muestra como chips.
const TechChips = ({ technologies }) => (
  <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
    {technologies
      .filter((key) => techCatalog[key])
      .map((key) => {
        const { Icon, title } = techCatalog[key];
        return (
          <li key={key} className="tech-chip">
            <Icon size={16} aria-hidden="true" />
            {title}
          </li>
        );
      })}
  </ul>
);

export default TechChips;
