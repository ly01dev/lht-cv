import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaChartLine, FaUsers } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const skills = {
    technical: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL/NoSQL', level: 85 },
      { name: 'AWS/Cloud', level: 75 }
    ],
    marketing: [
      { name: 'SEO/SEM', level: 90 },
      { name: 'Google Analytics', level: 85 },
      { name: 'Social Media Marketing', level: 80 },
      { name: 'Content Marketing', level: 85 },
      { name: 'Email Marketing', level: 75 },
      { name: 'PPC Advertising', level: 80 }
    ],
    soft: [
      { name: 'Leadership', level: 85 },
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Team Management', level: 80 },
      { name: 'Project Management', level: 75 }
    ]
  };

  const skillCategories = [
    {
      icon: <FaCode />,
      title: t('skills.frontend'),
      skills: skills.technical,
      color: 'var(--primary-color)'
    },
    {
      icon: <FaChartLine />,
      title: t('skills.backend'),
      skills: skills.marketing,
      color: 'var(--secondary-color)'
    },
    {
      icon: <FaUsers />,
      title: t('skills.tools'),
      skills: skills.soft,
      color: 'var(--accent-color)'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>{t('skills.whyChooseMe')}</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <h4>{t('skills.technicalExcellence')}</h4>
                <p>{t('skills.technicalExcellenceDesc')}</p>
              </div>
              <div className="summary-item">
                <h4>{t('skills.businessFocus')}</h4>
                <p>{t('skills.businessFocusDesc')}</p>
              </div>
              <div className="summary-item">
                <h4>{t('skills.continuousLearning')}</h4>
                <p>{t('skills.continuousLearningDesc')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 