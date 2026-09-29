import React from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';
import SectionHeading from '../common/SectionHeading';
import ProjectCaseStudy from './ProjectCaseStudy';
import OtherProjects from './OtherProjects';

export default function Projects() {
  const { t } = useTranslation();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div>
      <section className="colorlib-work" data-section="projects">
        <div className="colorlib-narrow-content">
          <SectionHeading metaLabel={t('projects.metaLabel')} heading={t('projects.heading')} />
          <div className="project-case-list">
            {featuredProjects.map((project, index) => (
              <ProjectCaseStudy key={project.key} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
          <OtherProjects projects={otherProjects} />
        </div>
      </section>
    </div>
  );
}
