import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUser, FaCode, FaChartLine, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  const features = useMemo(() => [
    {
      icon: <FaCode />,
      title: t('about.features.fullstack.title'),
      description: t('about.features.fullstack.description')
    },
    {
      icon: <FaChartLine />,
      title: t('about.features.marketing.title'),
      description: t('about.features.marketing.description')
    },
    {
      icon: <FaLightbulb />,
      title: t('about.features.problemSolving.title'),
      description: t('about.features.problemSolving.description')
    },
    {
      icon: <FaRocket />,
      title: t('about.features.fastDelivery.title'),
      description: t('about.features.fastDelivery.description')
    },
    {
      icon: <FaUsers />,
      title: t('about.features.leadership.title'),
      description: t('about.features.leadership.description')
    },
    {
      icon: <FaUser />,
      title: t('about.features.clientFocus.title'),
      description: t('about.features.clientFocus.description')
    }
  ], [t]);

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-intro">
              <h3>{t('about.whoIAm')}</h3>
              <p>{t('about.description')}</p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">{t('about.yearsExperience')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{t('about.projectsCompleted')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">{t('about.happyClients')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">{t('about.technologies')}</span>
              </div>
            </div>

            <div className="about-location">
              <h4>📍 {t('about.basedIn')} {t('hero.info.locationValue')}</h4>
              <p>
                {t('about.locationDescription')}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>{t('common.readyToWork')}</h3>
            <p>
              {t('common.letsDiscuss')}
            </p>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('common.letsTalk')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 