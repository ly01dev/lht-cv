// ========================================
// FILE CHÍNH CỦA ỨNG DỤNG REACT
// ========================================
// Đây là file khởi động chính của website CV
// Nó quản lý toàn bộ ứng dụng và các component con

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Thư viện tạo hiệu ứng animation
import Header from './components/Header';        // Component thanh điều hướng
import Hero from './components/Hero';            // Component phần giới thiệu chính
import About from './components/About';          // Component thông tin về tôi
import Experience from './components/Experience'; // Component kinh nghiệm làm việc
import Skills from './components/Skills';        // Component kỹ năng
import Projects from './components/Projects';    // Component dự án
import Education from './components/Education';  // Component học vấn
import Contact from './components/Contact';      // Component liên hệ
import Footer from './components/Footer';        // Component chân trang
import Loading from './components/Loading';      // Component màn hình loading
import './i18n';                                 // Cấu hình đa ngôn ngữ
import './App.css';                              // CSS cho App

function App() {
  // ========================================
  // QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)
  // ========================================
  
  // Trạng thái loading - hiển thị màn hình chờ khi khởi động
  const [loading, setLoading] = useState(true);
  
  // Trạng thái dark mode - chế độ tối/sáng
  const [darkMode, setDarkMode] = useState(false);

  // ========================================
  // SIDE EFFECTS - XỬ LÝ CÁC TÁC VỤ PHỤ
  // ========================================
  
  // Effect 1: Mô phỏng thời gian loading (2 giây)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Tắt loading sau 2 giây
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, []);

  // Effect 2: Kiểm tra và khôi phục cài đặt dark mode từ localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Effect 3: Lưu cài đặt dark mode và áp dụng vào body
  useEffect(() => {
    // Lưu cài đặt vào localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Áp dụng class dark-mode vào body element
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // ========================================
  // CÁC HÀM XỬ LÝ SỰ KIỆN
  // ========================================
  
  // Hàm chuyển đổi dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ========================================
  // RENDER LOGIC - LOGIC HIỂN THỊ
  // ========================================
  
  // Nếu đang loading thì hiển thị màn hình loading
  if (loading) {
    return <Loading />;
  }

  // ========================================
  // RENDER CHÍNH - HIỂN THỊ GIAO DIỆN
  // ========================================
  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* AnimatePresence: Quản lý animation khi component xuất hiện/biến mất */}
      <AnimatePresence>
        {/* motion.div: Tạo hiệu ứng fade in cho toàn bộ ứng dụng */}
        <motion.div
          initial={{ opacity: 0 }}      // Trạng thái ban đầu: trong suốt
          animate={{ opacity: 1 }}      // Trạng thái cuối: hiển thị đầy đủ
          transition={{ duration: 0.5 }} // Thời gian chuyển đổi: 0.5 giây
        >
          {/* HEADER - Thanh điều hướng */}
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          {/* MAIN CONTENT - Nội dung chính */}
          <main>
            {/* Các section được sắp xếp theo thứ tự hiển thị */}
            <Hero />           {/* 1. Giới thiệu chính */}
            <About />          {/* 2. Thông tin về tôi */}
            <Experience />     {/* 3. Kinh nghiệm làm việc */}
            <Skills />         {/* 4. Kỹ năng */}
            <Projects />       {/* 5. Dự án */}
            <Education />      {/* 6. Học vấn */}
            <Contact />        {/* 7. Liên hệ */}
          </main>
          
          {/* FOOTER - Chân trang */}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App; 