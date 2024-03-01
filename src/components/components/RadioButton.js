
import React from 'react';
import { useTranslation } from 'react-i18next';

const NumberComponent = ({ number }) => {
  const { i18n } = useTranslation();
  const formattedNumber = new Intl.NumberFormat(i18n.language).format(number);

  return <span>{formattedNumber}</span>;
};