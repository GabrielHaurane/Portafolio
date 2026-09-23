import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const cambiarIdioma = () => {
    const nuevoIdioma = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nuevoIdioma);
  };

  return (
    <button className="btn btn-sm btn-outline-neutral" onClick={cambiarIdioma}>
      {i18n.language === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
    </button>
  );
}

export default LanguageSwitcher;