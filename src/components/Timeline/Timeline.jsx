import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Timeline() {
  const { t } = useTranslation();

  const shopeeBullets = t('timeline.shopee.bullets', { returnObjects: true });
  const edpBullets = t('timeline.edp.bullets', { returnObjects: true });

  return (
    <div>
      <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t('timeline.metaLabel')}</span>
              <h2 className="colorlib-heading animate-box">{t('timeline.heading')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        {t('timeline.shopee.title')} <span>{t('timeline.shopee.period')}</span>
                      </h2>
                      {shopeeBullets.map((bullet, index) => (
                        <p key={index}>◦ {bullet}</p>
                      ))}
                      <b>{t('timeline.shopee.achievementLabel')}</b>
                      <p>◦ {t('timeline.shopee.achievement')}</p>
                      <p>
                        <b>{t('timeline.shopee.skillsLabel')} </b>
                        {t('timeline.shopee.skills')}
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        {t('timeline.inpe.title')} <span>{t('timeline.inpe.period')}</span>
                      </h2>
                      <p>
                        <b>{t('timeline.inpe.projectNameLabel')}</b> {t('timeline.inpe.projectName')}
                      </p>
                      <b>{t('timeline.inpe.objectiveLabel')}</b>
                      <p>{t('timeline.inpe.objective')}</p>
                      <p>
                        <b>{t('timeline.inpe.skillsLabel')} </b>
                        {t('timeline.inpe.skills')}
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        {t('timeline.edp.title')} <span>{t('timeline.edp.period')}</span>
                      </h2>
                      {edpBullets.map((bullet, index) => (
                        <p key={index}>◦ {bullet}</p>
                      ))}
                      <b>{t('timeline.edp.achievementLabel')}</b>
                      <p>◦ {t('timeline.edp.achievement')}</p>
                      <p>
                        <b>{t('timeline.edp.skillsLabel')} </b>
                        {t('timeline.edp.skills')}
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
