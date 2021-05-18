import React from 'react';

export enum HeadingTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  Paragraph = 'p',
}

interface HeadingProps {
  type: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ type, className, children }) => {
  return React.createElement(type, className, children);
};

export default Heading;