import React from 'react';

export default function Button({ href, icon, children, className = '', ...rest }) {
  return (
    <a
      className={`btn btn-primary ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
      {icon && <i className={icon} />}
    </a>
  );
}
