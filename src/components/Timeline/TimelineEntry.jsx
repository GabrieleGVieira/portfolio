import React from 'react';

export default function TimelineEntry({
  color,
  icon,
  title,
  period,
  animateEffect = 'fadeInLeft',
  children,
}) {
  return (
    <article className="timeline-entry animate-box" data-animate-effect={animateEffect}>
      <div className="timeline-entry-inner">
        <div className={`timeline-icon color-${color}`}>
          <i className={icon} />
        </div>
        <div className="timeline-label">
          <h2>
            {title} <span>{period}</span>
          </h2>
          {children}
        </div>
      </div>
    </article>
  );
}
