const fs = require('fs');
const path = require('path');

// List of MUI components to generate stories for
const components = [
  'Button',
  'RadioButton',
  'Select', // MUI's equivalent of Drop Down Button
  'Typography', // Used for Text
  'ImageList', // Can be used for Image galleries
  'Link', // For Hyperlink
  'Tabs', // For Tabbed Button
  'Accordion',
  'Card',
  // 'Counter', // No direct equivalent in MUI, could use TextField with type number
  'TextField', // For Search Box and Input Text Field
  // 'Timeline', // For Timeline widget, assuming custom implementation or using a library
  'Container',
  'Checkbox',
  'ButtonGroup',
];

// Directory where the story files will be saved
const storiesDir = path.join(__dirname, 'src/stories');

// Ensure the stories directory exists
if (!fs.existsSync(storiesDir)) {
  fs.mkdirSync(storiesDir, { recursive: true });
}

components.forEach((component) => {
  const componentName = component.replace(/([A-Z])/g, ' $1').trim(); // Add space before capital letters
  const storyName = component + '.stories.js';
  const storyContent = `
import React from 'react';
import { ${component} } from '@mui/material';

export default {
  title: 'MUI/${componentName}',
  component: ${component},
};

export const Default = () => <${component}>${componentName}</${component}>;
`;

  fs.writeFileSync(path.join(storiesDir, storyName), storyContent.trim());
  console.log(`${storyName} created.`);
});

console.log('Story generation complete.');
