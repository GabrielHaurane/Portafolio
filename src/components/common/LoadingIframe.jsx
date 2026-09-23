import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoadingIframe = ({ className = "", ...props }) => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="media-frame ratio ratio-16x9 rounded-top overflow-hidden" aria-busy={!isLoaded}>
      {!isLoaded && <div className="media-skeleton" aria-label={t("a11y.loading_video")} />}
      <iframe
        {...props}
        className={`${className} ${isLoaded ? "media-loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LoadingIframe;
