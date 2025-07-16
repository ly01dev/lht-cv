import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ly01dev', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/thanh-ly-40a763215/', label: 'LinkedIn' },
    // { icon: <FaTwitter />, url: 'https://twitter.com/yourhandle', label: 'Twitter' },
    // { icon: <FaFacebook />, url: 'https://facebook.com/yourprofile', label: 'Facebook' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text">{t('hero.name')}</h3>
            <p>{t('hero.title')}</p>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>{t('footer.social')}</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#home">{t('header.home')}</a></li>
              <li><a href="#about">{t('header.about')}</a></li>
              <li><a href="#experience">{t('header.experience')}</a></li>
              <li><a href="#projects">{t('header.projects')}</a></li>
              <li><a href="#contact">{t('header.contact')}</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-line"></div>
          <p>
            {t('footer.copyright').replace('2024', currentYear)}. {t('footer.madeWith')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 