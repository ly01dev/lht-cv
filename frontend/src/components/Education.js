import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();

  const education = [
    {
      id: 1,
      degree: t('education.degrees.music'),
      school: t('education.schools.music'),
      period: t('education.periods.music'),
      description: t('education.descriptions.music')
    },
    {
      id: 2,
      degree: t('education.degrees.digital'),
      school: t('education.schools.digital'),
      period: t('education.periods.digital'),
      description: t('education.descriptions.digital')
    },
    {
      id: 3,
      degree: t('education.degrees.fullstack'),
      school: t('education.schools.fullstack'),
      period: t('education.periods.fullstack'),
      description: t('education.descriptions.fullstack')
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('education.title')}</h2>
          <p className="section-subtitle">
            {t('education.subtitle')}
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <div className="education-info">
                  <span className="school">
                    <FaMapMarkerAlt /> {edu.school}
                  </span>
                  <span className="period">
                    <FaCalendar /> {edu.period}
                  </span>
                </div>
                <p className="description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 