import { useTranslation } from "react-i18next";
import { evidenceSources } from "../../../data/data.jsx";

// Grilla de una categoría de la sección Stack. Recibe los ítems ya armados por StackEvidence:
// { id, Icon?, title | titleKey, usedIn?, usageKey? }
// - Icon: tecnologías y herramientas de IA (los conceptos no llevan ícono).
// - usedIn con fuentes → "Usado en: …"; vacío o ausente → solo el nombre.
// - usageKey → etiqueta con el uso (herramientas de IA), en lugar de "Usado en".
const StackCategoryGrid = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
      {items.map((item) => {
        const { Icon } = item;
        const title = item.titleKey ? t(item.titleKey) : item.title;
        const sources = (item.usedIn ?? []).filter((source) => evidenceSources[source]);

        return (
          <div className="col" key={item.id}>
            <div className="content-card h-100 p-3">
              <div className="d-flex align-items-center gap-2">
                {Icon && (
                  <span className="stack-icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                )}
                <h4 className="h5 mb-0">{title}</h4>
              </div>

              {item.usageKey && (
                <p className="mt-2 mb-0">
                  <span className="evidence-tag d-inline-block">{t(item.usageKey)}</span>
                </p>
              )}

              {sources.length > 0 && (
                <>
                  <p className="small mt-2 mb-1">{t("home_page.stack.used_in")}</p>
                  <ul className="list-unstyled d-flex flex-wrap gap-1 mb-0">
                    {sources.map((source) => (
                      <li key={source} className="evidence-tag">
                        {t(evidenceSources[source])}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StackCategoryGrid;
