import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../common/SectionHeading';
import TimelineEntry from './TimelineEntry';
import TimelineDetails from './TimelineDetails';

export default function Timeline() {
  const { t } = useTranslation();

  const shopeeBullets = t('timeline.shopee.bullets', { returnObjects: true });
  const edpBullets = t('timeline.edp.bullets', { returnObjects: true });

  return (
    <div>
      <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
          <SectionHeading metaLabel={t('timeline.metaLabel')} heading={t('timeline.heading')} />
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <TimelineEntry
                  color={3}
                  icon="icon-pen2"
                  title={t('timeline.shopee.title')}
                  period={t('timeline.shopee.period')}
                >
                  <TimelineDetails
                    bullets={shopeeBullets}
                    achievementLabel={t('timeline.shopee.achievementLabel')}
                    achievement={t('timeline.shopee.achievement')}
                    skillsLabel={t('timeline.shopee.skillsLabel')}
                    skills={t('timeline.shopee.skills')}
                  />
                </TimelineEntry>
                <TimelineEntry
                  color={2}
                  icon="icon-study"
                  animateEffect="fadeInRight"
                  title={t('timeline.education.title')}
                  period={t('timeline.education.period')}
                >
                  <p>{t('timeline.education.institution')}</p>
                  <p>{t('timeline.education.note')}</p>
                </TimelineEntry>
                <TimelineEntry
                  color={4}
                  icon="icon-pen2"
                  animateEffect="fadeInTop"
                  title={t('timeline.inpe.title')}
                  period={t('timeline.inpe.period')}
                >
                  <p>
                    <b>{t('timeline.inpe.projectNameLabel')}</b> {t('timeline.inpe.projectName')}
                  </p>
                  <b>{t('timeline.inpe.objectiveLabel')}</b>
                  <p>{t('timeline.inpe.objective')}</p>
                  <TimelineDetails
                    skillsLabel={t('timeline.inpe.skillsLabel')}
                    skills={t('timeline.inpe.skills')}
                  />
                </TimelineEntry>
                <TimelineEntry
                  color={5}
                  icon="icon-pen2"
                  title={t('timeline.edp.title')}
                  period={t('timeline.edp.period')}
                >
                  <TimelineDetails
                    bullets={edpBullets}
                    achievementLabel={t('timeline.edp.achievementLabel')}
                    achievement={t('timeline.edp.achievement')}
                    skillsLabel={t('timeline.edp.skillsLabel')}
                    skills={t('timeline.edp.skills')}
                  />
                </TimelineEntry>
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
