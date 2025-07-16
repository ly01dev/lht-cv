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
      degree: t('education.degrees.degree1'),
      school: t('education.schools.school1'),
      period: t('education.periods.period1'),
      description: t('education.descriptions.description1')
    },
    {
      id: 2,
      degree: t('education.degrees.degree2'),
      school: t('education.schools.school2'),
      period: t('education.periods.period2'),
      description: t('education.descriptions.description2')
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