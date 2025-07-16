import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Fallback data
        setProfile({
          name: t('hero.name'),
          title: t('hero.title'),
          email: 'lyhuuthanhtv@gmail.com',
          phone: '+84 372 917 006',
          location: 'Ho Chi Minh City, Vietnam',
          about: t('hero.description'),
          social: {
            linkedin: 'https://www.linkedin.com/in/thanh-ly-40a763215/',
            github: 'https://github.com/ly01dev',
            // twitter: 'https://twitter.com/yourhandle',
            // facebook: 'https://facebook.com/yourprofile'
          }
        });
      }
    };

    fetchProfile();
  }, [t]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!profile) {
    return <div className="hero-loading">{t('common.loading')}</div>;
  }

  return (
    <section id="home" className="hero">
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
                    <img src="/images/zalo.jpg" alt="Zalo QR Code" />
                    <span>{t('hero.info.scanToConnect')}</span>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-label">{t('hero.info.telegram')}:</span>
                <div className="info-value-with-qr">
                  <span className="info-value">{t('hero.info.telegramValue')}</span>
                  <div className="qr-code-popup">
                    <img src="/images/tele.jpg" alt="Telegram QR Code" />
                    <span>{t('hero.info.scanToConnect')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
                <div className="avatar-image">
                  <img src="/images/muadong.jpg" alt="thanh-ly" />
              </div>
            </div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {profile.social && profile.social.github && (
              <motion.a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              )}
              {profile.social && profile.social.linkedin && (
              <motion.a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              )}
              {/* Temporarily hidden social links */}
              {/* <motion.a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a> */}
              {/* <motion.a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a> */}
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
            className="scroll-button"
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowDown />
            <span>{t('hero.scroll')}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 