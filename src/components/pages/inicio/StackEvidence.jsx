import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { aiTools, concepts, stackCategories, stackEvidence, techCatalog } from "../../../data/data.jsx";
import StackCategoryGrid from "./StackCategoryGrid";

// Arma los ítems de cada categoría según su kind (ver stackCategories en data.jsx).
const buildItems = (category) => {
  if (category.kind === "ai") {
    return aiTools
      .filter((tool) => techCatalog[tool.key])
      .map((tool) => ({ id: tool.key, ...techCatalog[tool.key], usageKey: tool.usageKey }));
  }
  if (category.kind === "concepts") {
    return concepts.map((concept) => ({
      id: concept.key,
      titleKey: `home_page.stack.concepts.${concept.key}`,
      usedIn: concept.usedIn,
    }));
  }
  return stackEvidence
    .filter((item) => item.category === category.id && techCatalog[item.tech])
    .map((item) => ({ id: item.tech, ...techCatalog[item.tech], usedIn: item.usedIn }));
};

const categories = stackCategories
  .map((category) => ({ ...category, items: buildItems(category) }))
  .filter((category) => category.items.length > 0);

// Todas las categorías arrancan abiertas. Los ids salen de data.jsx, así que una
// categoría nueva también arranca abierta sin tocar este archivo.
const allCategoryIds = stackCategories.map((category) => category.id);

// Un solo acordeón para todos los tamaños. alwaysOpen: cada categoría se abre y se
// cierra por separado. Los encabezados son <button> nativos (Tab, Enter y Espacio).
const StackEvidence = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="home-section home-section-alt">
      <div className="container">
        <h2 className="fw-bold">{t("home_page.stack.title")}</h2>
        <p className="fs-5 section-lead mb-4">{t("home_page.stack.subtitle")}</p>

        <Accordion alwaysOpen defaultActiveKey={allCategoryIds} className="stack-accordion">
          {categories.map((category) => (
            <Accordion.Item eventKey={category.id} key={category.id}>
              <Accordion.Header as="h3">
                {`${t(category.titleKey)} (${category.items.length})`}
              </Accordion.Header>
              <Accordion.Body>
                <StackCategoryGrid items={category.items} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default StackEvidence;
