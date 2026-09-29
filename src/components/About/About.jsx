import React from "react";
import { useTranslation } from "react-i18next";
import {
  CodeOutlined,
  BulbOutlined,
  RobotOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";
import links from "../../data/links";

const EXPERTISE_ITEMS = [
  { key: "fullstack", color: 2, icon: <CodeOutlined /> },
  { key: "systems", color: 3, icon: <BulbOutlined /> },
  { key: "ai", color: 5, icon: <RobotOutlined /> },
  { key: "obs", color: 6, icon: <DashboardOutlined /> },
];

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
                    <p className="about-cta">
                      <Button href={links.github} icon="icon-github" className="btn-outline btn-sm">
                        {t("about.cta.github")}
                      </Button>
                      <Button href={links.linkedin} icon="icon-linkedin2" className="btn-sm">
                        {t("about.cta.linkedin")}
                      </Button>
                    </p>
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
          <SectionHeading
            metaLabel={t("about.expertiseMetaLabel")}
            heading={t("about.expertiseHeading")}
          />
          <div className="row row-pt-md">
            {EXPERTISE_ITEMS.map(({ key, color, icon }) => (
              <ServiceCard
                key={key}
                color={color}
                icon={icon}
                title={t(`about.${key}.title`)}
                description={t(`about.${key}.description`)}
                skills={t(`about.${key}.skills`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
