import React from "react";
import {proIcons} from "../../../data/data.jsx";
const TecIcons = () => {
  return (
    <div className="row w-100 mx-auto">
      {proIcons.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3 mb-4" >
          <div className="card h-100 border-2 hover-shadow" style={{background: '#ae69e3',}}>
            <div className="card-body d-flex flex-column align-items-center text-center " >
              <div className="fs-2 text-white">{item.icon}</div>
              <h5 className="card-title mb-0 text-white">{item.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TecIcons;
