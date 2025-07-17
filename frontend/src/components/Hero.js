import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import zaloQR from '../assets/images/zalo.jpg';
import telegramQR from '../assets/images/tele.jpg';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const profile = {
    name: t('hero.name'),
    title: t('hero.title'),
    email: 'lyhuuthanhtv@gmail.com',
    phone: '+84 372 917 006',
    location: 'Ho Chi Minh City, Vietnam',
    about: t('hero.description'),
    social: {
      linkedin: 'https://www.linkedin.com/in/thanh-ly-40a763215/',
      github: 'https://github.com/ly01dev',
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" role="banner" aria-labelledby="hero-title">
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              id="hero-title"
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.greeting')} <span className="gradient-text">{profile.name}</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('hero.title')}
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
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
                {t('hero.cta')}
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.querySelector('#projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('hero.viewWork')}
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="info-item">
                <span className="info-label">{t('hero.info.location')}:</span>
                <span className="info-value">{t('hero.info.locationValue')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('hero.info.email')}:</span>
                <a href={`mailto:${profile.email}`} className="info-value">{profile.email}</a>
              </div>
              <div className="info-item">
                <span className="info-label">{t('hero.info.phone')}:</span>
                <a href={`tel:${profile.phone}`} className="info-value">{profile.phone}</a>
              </div>
              <div className="info-item">
                <span className="info-label">{t('hero.info.zalo')}:</span>
                <div className="info-value-with-qr">
                  <span className="info-value">{t('hero.info.zaloValue')}</span>
                  <div className="qr-code-popup">
                    <img src={zaloQR} alt="Zalo QR Code" />
                    <span>{t('hero.info.scanToConnect')}</span>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-label">{t('hero.info.telegram')}:</span>
                <div className="info-value-with-qr">
                  <span className="info-value">{t('hero.info.telegramValue')}</span>
                  <div className="qr-code-popup">
                    <img src={telegramQR} alt="Telegram QR Code" />
                    <span>{t('hero.info.scanToConnect')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-image-container">
              <img
                src="./images/muadong.jpg"
                alt={profile.name}
                className="profile-image"
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
              <div className="profile-image-border"></div>
            </div>
            
            {/* Thông tin ngày sinh */}
            <motion.div
              className="birth-date-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="birth-date-container">
                <span className="birth-date-label">{t('hero.birthDate')}</span>
                <span className="birth-date-value">29/04/1984</span>
              </div>
            </motion.div>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="scroll-button"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
            <span>{t('hero.scrollDown')}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 