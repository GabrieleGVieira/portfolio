import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">{t("about.metaLabel")}</span>
                    <h2 className="colorlib-heading">{t("about.heading")}</h2>
                    <p>{t("about.paragraph1")}</p>
                    <p>{t("about.paragraph2")}</p>
                    <p>{t("about.paragraph3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">
                {t("about.expertiseMetaLabel")}
              </span>
              <h2 className="colorlib-heading">
                {t("about.expertiseHeading")}
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>{t("about.fullstack.title")}</h3>
                  <p>{t("about.fullstack.description")}</p>
                  <p>{t("about.fullstack.skills")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>{t("about.systems.title")}</h3>
                  <p>{t("about.systems.description")}</p>
                  <p>{t("about.systems.skills")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>{t("about.ai.title")}</h3>
                  <p>{t("about.ai.description")}</p>
                  <p>{t("about.ai.skills")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-robo" />
                </span>
                <div className="desc">
                  <h3>{t("about.obs.title")}</h3>
                  <p>{t("about.obs.description")}</p>
                  <p>{t("about.obs.skills")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
