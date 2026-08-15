const Footer = () => {
  return (
    <div
      className="py-4 text-center text-white d-flex flex-wrap mt-auto justify-content-center align-items-center"
      style={{
        backgroundColor: "var(--color-surface)",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <p> © {new Date().getFullYear()} Haurane Gabriel Alejandro</p>
    </div>
  );
};

export default Footer;
