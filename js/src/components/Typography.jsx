import React from 'react';
// A mapping from variant to Tailwind CSS font size classes
const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    body: 'text-base font-normal',
    caption: 'text-sm font-light',
};
// The Typography component
const Typography = ({ variant = 'body', color = 'text-gray-900', // Default text color
className = '', children, }) => {
    // Combine the classes based on props
    const classes = `${variantClasses[variant]} ${color} ${className}`;
    return (<div className={classes}>
      {children}
    </div>);
};
export default Typography;
