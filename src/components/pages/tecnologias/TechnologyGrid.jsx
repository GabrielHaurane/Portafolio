import { knownTechnologies } from "../../../data/data.jsx";

const TechnologyGrid = () => (
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-4">
    {knownTechnologies.map((technology) => (
      <div className="col" key={technology.title}>
        <div className="card h-100 border-2" style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
            <div className="fs-1">{technology.icon}</div>
            <h2 className="h5 card-title mb-0">{technology.title}</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TechnologyGrid;
