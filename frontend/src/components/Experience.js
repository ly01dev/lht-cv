import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      company: t('experience.companies.company1'),
      position: t('experience.positions.position1'),
      period: t('experience.periods.period1'),
      description: t('experience.descriptions.description1'),
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      id: 2,
      company: t('experience.companies.company2'),
      position: t('experience.positions.position2'),
      period: t('experience.periods.period2'),
      description: t('experience.descriptions.description2'),
      technologies: ['JavaScript', 'Python', 'SQL', 'Git', 'REST APIs']
    },
    {
      id: 3,
      company: t('experience.companies.company3'),
      position: t('experience.positions.position3'),
      period: t('experience.periods.period3'),
      description: t('experience.descriptions.description3'),
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="position">{exp.position}</h3>
                  <div className="company-info">
                    <span className="company">
                      <FaBriefcase /> {exp.company}
                    </span>
                    <span className="period">
                      <FaCalendar /> {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <div className="technologies">
                  <h4>{t('experience.technologies')}:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 