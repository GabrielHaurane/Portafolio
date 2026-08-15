import { appTechnologies } from "../../../data/data.jsx";

const AppTechnologyIcons = () => (
  <div className="row w-100 mx-auto">
    {appTechnologies.map((item) => (
      <div key={item.title} className="col-12 col-sm-6 col-md-4 mb-3">
        <div className="card h-100 border-2" style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}>
          <div className="card-body d-flex flex-column align-items-center text-center">
            <div className="fs-2">{item.icon}</div>
            <h5 className="card-title mb-0">{item.title}</h5>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default AppTechnologyIcons;
