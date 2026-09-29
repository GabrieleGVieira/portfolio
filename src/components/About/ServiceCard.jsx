import React from 'react';

export default function ServiceCard({ color, icon, title, description, skills }) {
  return (
    <div className="col-md-4 text-center animate-box">
      <div className={`services color-${color}`}>
        <span className="icon">{icon}</span>
        <div className="desc">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
}
