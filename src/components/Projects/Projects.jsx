import React from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="colorlib-work" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t('projects.metaLabel')}</span>
              <h2 className="colorlib-heading animate-box">{t('projects.heading')}</h2>
            </div>
          </div>
          <div className="row">
            {projects.map(({ key, image, animateEffect, codeUrl, liveUrl }) => (
              <div
                key={key}
                className="col-md-4 animate-box"
                data-animate-effect={animateEffect}
              >
                <div className="project" style={{ backgroundImage: `url(${image})` }}>
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">{t(`projects.${key}.title`)}</a>
                      </h3>
                      <span>{t(`projects.${key}.description`)}</span>
                      <p className="icon">
                        <span>
                          <a
                            className="btn btn-primary btn-learn"
                            href={codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-code" />
                          </a>
                        </span>
                        {liveUrl && (
                          <span>
                            <a
                              className="btn btn-primary btn-learn"
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-open" />
                            </a>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
