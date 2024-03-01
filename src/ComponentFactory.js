import React from 'react';
import Button from './components/Button';
// ...import all components

const componentMap = {
  Button,
  // ...map all component types
};

const ComponentFactory = ({ componentData }) => {
  const { type, ...props } = componentData;
  const Component = componentMap[type];
  return Component ? <Component {...props} /> : null;
};

export default ComponentFactory;
