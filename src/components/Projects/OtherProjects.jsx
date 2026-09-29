import React from 'react';
import { useTranslation } from 'react-i18next';

export default function OtherProjects({ projects }) {
  const { t } = useTranslation();

  return (
    <div className="other-projects">
      <span className="heading-meta">{t('projects.labels.otherHeading')}</span>
      <ul className="other-projects__list">
        {projects.map(({ key, codeUrl }) => (
          <li key={key}>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <span className="other-projects__title">{t(`projects.${key}.title`)}</span>
              <i className="icon-arrow-right3" />
            </a>
            <p>{t(`projects.${key}.description`)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
