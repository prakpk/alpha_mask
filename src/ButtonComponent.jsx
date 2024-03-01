// ButtonComponent.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

function ButtonComponent() {
  const { t } = useTranslation();

  return (
    <button>{t('Button.Submit')}</button> // This will look up the 'Submit' key in your translation files
  );
}

export default ButtonComponent;
