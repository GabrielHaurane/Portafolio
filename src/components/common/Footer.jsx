import React from "react";

const Footer = () => {
  return (
    <div
      className="py-4 text-center text-white"
      style={{
        backgroundColor: "#2b0c3eff",
        position: "relative",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 100
      }}
    >
      <p> © {new Date().getFullYear()} Haurane Gabriel Alejandro</p>
    </div>
  );
};

export default Footer;
