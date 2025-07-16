import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/images/thanh-ly.png';
import './Loading.css';

const Loading = () => {
  const { t } = useTranslation();
  
  return (
    <div className="loading-container">
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loading-logo"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src={profileImage} alt="Ly Huu Thanh" />
        </motion.div>
        
        <motion.h2
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t('hero.name')}
        </motion.h2>
        
        <motion.p
          className="loading-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('common.loadingPortfolio')}
        </motion.p>
        
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading; 