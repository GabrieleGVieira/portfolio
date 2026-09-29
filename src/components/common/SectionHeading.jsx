import React from 'react';

export default function SectionHeading({ metaLabel, heading }) {
  return (
    <div className="row">
      <div
        className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
        data-animate-effect="fadeInLeft"
      >
        <span className="heading-meta">{metaLabel}</span>
        <h2 className="colorlib-heading animate-box">{heading}</h2>
      </div>
    </div>
  );
}
