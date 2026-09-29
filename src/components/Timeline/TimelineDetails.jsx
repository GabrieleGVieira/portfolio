import React from 'react';

export default function TimelineDetails({
  bullets,
  achievementLabel,
  achievement,
  skillsLabel,
  skills,
}) {
  return (
    <>
      {bullets && bullets.map((bullet, index) => <p key={index}>◦ {bullet}</p>)}
      {achievementLabel && (
        <>
          <b>{achievementLabel}</b>
          <p>◦ {achievement}</p>
        </>
      )}
      {skillsLabel && (
        <p>
          <b>{skillsLabel} </b>
          {skills}
        </p>
      )}
    </>
  );
}
