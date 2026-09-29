import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';

export default function ProjectCaseStudy({ project, reverse }) {
  const { t } = useTranslation();
  const { key, image, animateEffect, codeUrl, liveUrl, stack } = project;

  return (
    <div className="project-case row animate-box" data-animate-effect={animateEffect}>
      <div className={`col-md-5 project-case__media-col${reverse ? ' col-md-push-7' : ''}`}>
        <div className="project-case__media" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <div className={`col-md-7 project-case__body${reverse ? ' col-md-pull-5' : ''}`}>
        <h3>{t(`projects.${key}.title`)}</h3>
        <p className="project-case__description">{t(`projects.${key}.description`)}</p>

        <span className="heading-meta">{t('projects.labels.problem')}</span>
        <p>{t(`projects.${key}.problem`)}</p>

        <span className="heading-meta">{t('projects.labels.solution')}</span>
        <p>{t(`projects.${key}.solution`)}</p>

        <span className="heading-meta">{t('projects.labels.result')}</span>
        <p>{t(`projects.${key}.result`)}</p>

        {stack && (
          <p className="project-case__stack">
            {stack.map((tech) => (
              <span key={tech} className="tag-chip">
                {tech}
              </span>
            ))}
          </p>
        )}

        <p className="project-case__links">
          <Button href={codeUrl} icon="icon-code" className="btn-outline btn-sm">
            {t('projects.labels.code')}
          </Button>
          {liveUrl && (
            <Button href={liveUrl} icon="icon-open" className="btn-sm">
              {t('projects.labels.demo')}
            </Button>
          )}
        </p>
      </div>
    </div>
  );
}
