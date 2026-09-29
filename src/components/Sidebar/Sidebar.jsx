import React from 'react';
import { useTranslation } from 'react-i18next';
import IconLink from '../common/IconLink';
import links from '../../data/links';

const NAV_ITEMS = [
  { section: 'about', href: '#about' },
  { section: 'timeline', href: '#timeline' },
  { section: 'projects', href: '#' },
];

const SOCIAL_LINKS = [
  { href: links.linkedin, icon: 'icon-linkedin2', ariaLabel: 'LinkedIn' },
  { href: links.github, icon: 'icon-github', ariaLabel: 'GitHub' },
];

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
              <i className="icon-mail"></i> gabrielevieira.co@gmail.com
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                {NAV_ITEMS.map(({ section, href }, index) => (
                  <li key={section} className={index === 0 ? 'active' : undefined}>
                    <a href={href} data-nav-section={section}>
                      {t(`nav.${section}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              {SOCIAL_LINKS.map(({ href, icon, ariaLabel }) => (
                <li key={icon}>
                  <IconLink href={href} icon={icon} ariaLabel={ariaLabel} />
                </li>
              ))}
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
