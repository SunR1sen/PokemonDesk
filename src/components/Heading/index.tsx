import React from 'react';

export enum HeadingTypes {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    Paragraph = "p",
}

interface HeadingProps {
    type: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type }) => {

    return (
        React.createElement(type, null, children)
    );
};

export default Heading;