import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div>
      <section
        id="colorlib-hero"
        className="js-fullheight"
        data-section="home"
      >
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/dev-bg.jpeg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>
                          {t('hero.slide1.titleLine1')} <br />
                          {t('hero.slide1.titleLine2')}
                        </h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://docs.google.com/document/d/1O6Vkf1NbJndf3Xji3Ql9664nq__D3j02ZiL1VteyB_E/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t('hero.slide1.cta')}
                            <i className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/dev-bg.jpeg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>
                          {t('hero.slide2.titleLine1')}
                          <br /> {t('hero.slide2.titleLine2')}
                        </h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/GabrieleGVieira"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t('hero.slide2.cta')} <i className="icon-briefcase3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
