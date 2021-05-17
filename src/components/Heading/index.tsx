import React from 'react';


export const HeadingTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  Paragraph: 'p',
};

interface HeadingProps {
  type: string;
}

const Heading: React.FC<HeadingProps> = ({ type, children }) => {
  return React.createElement(type, null, children);
};

export default Heading;