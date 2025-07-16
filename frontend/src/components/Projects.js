import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  
  // Projects data from translations
  const projects = [
    {
      id: 1,
      title: t('projects.todoList.title'),
      description: t('projects.todoList.description'),
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Local Storage', 'Responsive Design'],
      link: 'https://github.com/ly01dev/web-to-do-list',
      demo: 'https://todo-frontend-fz9h.onrender.com/',
      features: t('projects.todoList.features', { returnObjects: true })
    },
    {
      id: 2,
      title: t('projects.filmApp.title'),
      description: t('projects.filmApp.description'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Bootstrap'],
      link: 'https://github.com/ly01dev/web-trailer-film-youtube',
      demo: 'https://film8x.xyz/',
      features: t('projects.filmApp.features', { returnObjects: true })
    },
    {
      id: 3,
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: ['React', 'Node.js', 'Framer Motion', 'i18next', 'EmailJS', 'GitHub Pages'],
      link: 'https://github.com/ly01dev/lht-cv',
      demo: 'https://ly01dev.github.io/lht-cv/',
      features: t('projects.portfolio.features', { returnObjects: true })
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <FaEye />
                  <span>{t('projects.preview')}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                      {t('projects.viewProject')}
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                      {t('projects.viewCode')}
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Features for TodoList project */}
                {project.features && (
                  <div className="project-features">
                    <h4>{t('projects.features')}:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>{t('projects.interestedMore')}</h3>
            <p>
              {t('projects.interestedMoreDesc')}
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
              {t('projects.startProject')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 