import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: 'url(images/about.jpg)' }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">{t('sidebar.name')}</a>
            </h1>
            <span className="email">
              <i className="icon-mail"></i> gabrielevieira011@gmail.com
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    {t('nav.introduction')}
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#timeline" data-nav-section="timeline">
                    {t('nav.timeline')}
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="projects">
                    {t('nav.projects')}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/gabrielevieira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GabrieleGVieira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p>
              <small>
                {t('sidebar.footerMade')}{' '}
                <i className="icon-heart" aria-hidden="true" /> {t('sidebar.footerAnd')}{' '}
                <i className="icon-beer" aria-hidden="true"></i>
                <br></br>
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
