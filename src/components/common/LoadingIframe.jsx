import { useState } from "react";

const LoadingIframe = ({ className = "", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="media-frame ratio ratio-16x9 rounded-top overflow-hidden" aria-busy={!isLoaded}>
      {!isLoaded && <div className="media-skeleton" aria-label="Cargando video" />}
      <iframe
        {...props}
        className={`${className} ${isLoaded ? "media-loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LoadingIframe;
