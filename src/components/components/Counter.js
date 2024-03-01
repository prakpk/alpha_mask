
import React from 'react';
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  return <div>Current Language: {currentLanguage}</div>;
};
