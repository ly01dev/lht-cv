import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('/api/experience');
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        setExperiences([
          {
            id: 1,
            company: 'Tech Company ABC',
            position: 'Senior Full Stack Developer',
            period: '2022 - Present',
            description: 'Led development of enterprise web applications using React, Node.js, and cloud technologies.',
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
          }
        ]);
      }
    };

    fetchExperiences();
  }, []);

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
                
                <p className="description">{t(`experience.descriptions.${exp.id}`)}</p>
                
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