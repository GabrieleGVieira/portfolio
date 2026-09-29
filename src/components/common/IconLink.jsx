import React from 'react';

export default function IconLink({ href, icon, ariaLabel }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      <i className={icon} />
    </a>
  );
}
