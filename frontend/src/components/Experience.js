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
      company: "Freelance",
      position: t('experience.positions.fullstack'),
      period: "05/2025 - " + t('experience.present'),
      description: t('experience.descriptions.fullstack'),
      technologies: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js', 'HTML/CSS', 'Git']
    },
    {
      id: 2,
      company: "OKVIP (Taipei101)",
      position: t('experience.positions.seo'),
      period: "2022 - 05/2024",
      description: t('experience.descriptions.seo'),
      technologies: ['SEO', 'Google Analytics', 'Google Search Console', 'WordPress', 'Content Marketing', 'Data Analysis']
    },
    {
      id: 3,
      company: "Winner Company",
      position: t('experience.positions.teamLeader'),
      period: "2021 - 2022",
      description: t('experience.descriptions.teamLeader'),
      technologies: ['Team Leadership', 'Digital Marketing', 'Campaign Management', 'Recruitment', 'Training', 'Communication']
    },
    {
      id: 4,
      company: "Freelance",
      position: t('experience.positions.marketing'),
      period: "2020 - 2021",
      description: t('experience.descriptions.marketing'),
      technologies: ['Digital Marketing', 'Social Media Marketing', 'Content Creation', 'SEO', 'Google Ads', 'Facebook Ads']
    },
    {
      id: 5,
      company: "Education Sector",
      position: t('experience.positions.teacher'),
      period: "2019 - 2020",
      description: t('experience.descriptions.teacher'),
      technologies: ['Teaching', 'Communication', 'Curriculum Development', 'Student Assessment', 'Leadership', 'Patience']
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