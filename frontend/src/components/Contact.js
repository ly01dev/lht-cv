import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS service ID
        'YOUR_TEMPLATE_ID', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'lyhuuthanhtv@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: t('contact.info.email'),
      value: 'lyhuuthanhtv@gmail.com',
      link: 'mailto:lyhuuthanhtv@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: t('contact.info.phone'),
      value: '+84 372 917 006',
      link: 'tel:+84372917006'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t('contact.info.location'),
      value: 'Ho Chi Minh City, Vietnam',
      link: null
    },
    {
      icon: <FaWhatsapp />,
      title: t('contact.info.zalo'),
      value: t('hero.info.zaloValue'),
      link: null,
      qrCode: '/images/zalo.jpg'
    },
    {
      icon: <FaTelegram />,
      title: t('contact.info.telegram'),
      value: t('hero.info.telegramValue'),
      link: null,
      qrCode: '/images/tele.jpg'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{t('contact.letsConnect')}</h3>
            <p>
              {t('contact.description')}
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.qrCode ? (
                      <div className="contact-value-with-qr">
                        <span className="contact-value">{info.value}</span>
                        <div className="contact-qr-popup">
                          <img src={info.qrCode} alt={`${info.title} QR Code`} />
                          <span>{t('hero.info.scanToConnect')}</span>
                        </div>
                      </div>
                    ) : info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={t('contact.form.subject')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <p>{t('contact.form.successMessage')}</p>
                  ) : (
                    <p>{t('contact.form.errorMessage')}</p>
                  )}
                </div>
              )}
              
              <motion.button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                <FaPaperPlane />
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 