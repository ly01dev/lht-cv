import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('/api/education');
        const data = await response.json();
        setEducation(data);
      } catch (error) {
        console.error('Error fetching education:', error);
        setEducation([
          {
            id: 1,
            degree: 'Bachelor of Computer Science',
            school: 'University of Technology',
            period: '2014 - 2018',
            description: 'Specialized in Software Engineering and Web Development'
          }
        ]);
      }
    };

    fetchEducation();
  }, []);

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