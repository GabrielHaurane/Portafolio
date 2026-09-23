import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoadingImage = ({ className = "", wrapperClassName = "", ...props }) => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`media-frame ${wrapperClassName}`} aria-busy={!isLoaded}>
      {!isLoaded && <div className="media-skeleton" aria-label={t("a11y.loading_image")} />}
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
