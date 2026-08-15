import { useState } from "react";

const LoadingImage = ({ className = "", wrapperClassName = "", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`media-frame ${wrapperClassName}`} aria-busy={!isLoaded}>
      {!isLoaded && <div className="media-skeleton" aria-label="Cargando imagen" />}
      <img
        {...props}
        className={`${className} ${isLoaded ? "media-loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LoadingImage;
