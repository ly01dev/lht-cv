# Giải Thích Chi Tiết Code - Website CV

## 📁 Cấu Trúc Dự Án

### Backend (Node.js + Express)

#### `backend/server.js` - File Chính Của Server

```javascript
// Import các thư viện cần thiết
const express = require("express"); // Framework web Express
const cors = require("cors"); // Cho phép truy cập từ domain khác
const helmet = require("helmet"); // Bảo mật cho ứng dụng
const compression = require("compression"); // Nén dữ liệu để tăng tốc độ

const app = express(); // Tạo ứng dụng Express
const PORT = process.env.PORT || 5000; // Port mặc định là 5000

// Middleware - Các phần mềm trung gian
app.use(helmet()); // Bảo mật headers
app.use(compression()); // Nén response
app.use(cors()); // Cho phép CORS
app.use(express.json()); // Parse JSON data

// API Routes - Các đường dẫn API
app.get("/api/profile", (req, res) => {
  // Trả về thông tin cá nhân dưới dạng JSON
  res.json({
    name: "Your Name", // Tên của bạn
    title: "Full Stack Developer...", // Chức danh
    email: "your.email@example.com", // Email
    phone: "+84 123 456 789", // Số điện thoại
    location: "Ho Chi Minh City, Vietnam", // Địa chỉ
    about: "Passionate developer...", // Mô tả về bản thân
    social: {
      // Liên kết mạng xã hội
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
      twitter: "https://twitter.com/yourhandle",
      facebook: "https://facebook.com/yourprofile",
    },
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}/api`);
});
```

### Frontend (React)

#### `frontend/src/App.js` - Component Chính

```javascript
import React, { useState, useEffect } from "react"; // Import React hooks
import { motion, AnimatePresence } from "framer-motion"; // Import animation
import Header from "./components/Header"; // Import component Header
import Hero from "./components/Hero"; // Import component Hero
// ... các import khác

function App() {
  const [loading, setLoading] = useState(true); // State cho loading
  const [darkMode, setDarkMode] = useState(false); // State cho dark mode

  useEffect(() => {
    // Simulate loading time - Giả lập thời gian loading
    const timer = setTimeout(() => {
      setLoading(false); // Tắt loading sau 2 giây
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  useEffect(() => {
    // Check for saved dark mode preference - Kiểm tra cài đặt dark mode đã lưu
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode)); // Khôi phục cài đặt
    }
  }, []);

  useEffect(() => {
    // Save dark mode preference - Lưu cài đặt dark mode
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Apply dark mode class to body - Áp dụng class dark mode
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Chuyển đổi dark mode
  };

  if (loading) {
    return <Loading />; // Hiển thị loading
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} // Trạng thái ban đầu
          animate={{ opacity: 1 }} // Trạng thái sau animation
          transition={{ duration: 0.5 }} // Thời gian animation
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

#### `frontend/src/components/Header.js` - Component Header

```javascript
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import animation
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false); // State cho scroll
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State cho mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Kiểm tra scroll > 50px
    };

    window.addEventListener("scroll", handleScroll); // Thêm event listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const navItems = [
    // Danh sách menu
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href); // Tìm element
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll mượt đến section
    }
    setIsMobileMenuOpen(false); // Đóng mobile menu
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }} // Ban đầu ở trên cùng
      animate={{ y: 0 }} // Di chuyển xuống vị trí
      transition={{ duration: 0.5 }} // Thời gian animation
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }} // Phóng to khi hover
            whileTap={{ scale: 0.95 }} // Thu nhỏ khi click
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              <span className="gradient-text">YourName</span>
            </a>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }} // Ban đầu ẩn và ở trên
                  animate={{ opacity: 1, y: 0 }} // Hiện và di chuyển xuống
                  transition={{ delay: index * 0.1 }} // Delay tăng dần
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }} // Phóng to khi hover
              whileTap={{ scale: 0.9 }} // Thu nhỏ khi click
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />} // Icon thay đổi theo mode
            </motion.button>

            <motion.button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
```

#### `frontend/src/components/Hero.js` - Component Hero

```javascript
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  const [profile, setProfile] = useState(null); // State cho profile data

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile"); // Gọi API
        const data = await response.json(); // Parse JSON
        setProfile(data); // Cập nhật state
      } catch (error) {
        console.error("Error fetching profile:", error);
        // Fallback data - Dữ liệu dự phòng
        setProfile({
          name: "Your Name",
          title: "Full Stack Developer & Digital Marketing Specialist",
          // ... các thông tin khác
        });
      }
    };

    fetchProfile(); // Gọi function
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!profile) {
    return <div className="hero-loading">Loading...</div>; // Loading state
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -20, 0], // Di chuyển lên xuống
              rotate: [0, 5, 0], // Xoay nhẹ
            }}
            transition={{
              duration: 6, // Thời gian 6 giây
              repeat: Infinity, // Lặp vô hạn
              ease: "easeInOut", // Kiểu animation
            }}
          />
          {/* Các shape khác tương tự */}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }} // Ban đầu ẩn và ở dưới
            animate={{ opacity: 1, y: 0 }} // Hiện và di chuyển lên
            transition={{ duration: 0.8, delay: 0.2 }} // Animation với delay
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {profile.about}
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
                whileHover={{ scale: 1.05 }} // Phóng to khi hover
                whileTap={{ scale: 0.95 }} // Thu nhỏ khi click
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="#projects"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.querySelector("#projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{profile.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href={`mailto:${profile.email}`} className="info-value">
                  {profile.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <a href={`tel:${profile.phone}`} className="info-value">
                  {profile.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }} // Ban đầu ẩn và ở bên phải
            animate={{ opacity: 1, x: 0 }} // Hiện và di chuyển vào giữa
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>👨‍💻</span> // Emoji placeholder
              </div>
            </div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }} // Phóng to và di chuyển lên
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              {/* Các social link khác tương tự */}
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
            animate={{ y: [0, 10, 0] }} // Di chuyển lên xuống liên tục
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowDown />
            <span>Scroll Down</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
```

## 🎨 CSS Variables (Biến CSS)

#### `frontend/src/index.css` - CSS Toàn Cục

```css
:root {
  /* Colors - Màu sắc */
  --primary-color: #2563eb; /* Màu chính - xanh dương */
  --primary-dark: #1d4ed8; /* Màu chính tối hơn */
  --secondary-color: #f59e0b; /* Màu phụ - cam */
  --accent-color: #10b981; /* Màu nhấn - xanh lá */
  --text-primary: #1f2937; /* Màu chữ chính - xám đậm */
  --text-secondary: #6b7280; /* Màu chữ phụ - xám nhạt */
  --text-light: #9ca3af; /* Màu chữ nhạt - xám rất nhạt */
  --bg-primary: #ffffff; /* Màu nền chính - trắng */
  --bg-secondary: #f9fafb; /* Màu nền phụ - xám rất nhạt */
  --bg-dark: #111827; /* Màu nền tối - đen */
  --border-color: #e5e7eb; /* Màu viền - xám nhạt */

  /* Shadows - Bóng đổ */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05); /* Bóng nhỏ */
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1); /* Bóng vừa */
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1); /* Bóng lớn */
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1); /* Bóng rất lớn */

  /* Typography - Typography */
  --font-primary: "Inter", sans-serif; /* Font chính */
  --font-heading: "Poppins", sans-serif; /* Font tiêu đề */

  /* Spacing - Khoảng cách */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem; /* 8px */
  --spacing-md: 1rem; /* 16px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 2rem; /* 32px */
  --spacing-2xl: 3rem; /* 48px */
  --spacing-3xl: 4rem; /* 64px */

  /* Border Radius - Bo góc */
  --radius-sm: 0.25rem; /* 4px */
  --radius-md: 0.5rem; /* 8px */
  --radius-lg: 0.75rem; /* 12px */
  --radius-xl: 1rem; /* 16px */
  --radius-2xl: 1.5rem; /* 24px */

  /* Transitions - Chuyển động */
  --transition-fast: 0.15s ease-in-out; /* Chuyển động nhanh */
  --transition-normal: 0.3s ease-in-out; /* Chuyển động bình thường */
  --transition-slow: 0.5s ease-in-out; /* Chuyển động chậm */
}

/* Dark Mode - Chế độ tối */
.App.dark {
  --bg-primary: #111827; /* Nền chính tối */
  --bg-secondary: #1f2937; /* Nền phụ tối */
  --text-primary: #f9fafb; /* Chữ chính sáng */
  --text-secondary: #d1d5db; /* Chữ phụ sáng */
  --text-light: #9ca3af; /* Chữ nhạt */
  --border-color: #374151; /* Viền tối */
}

/* Global Reset - Reset toàn cầu */
* {
  margin: 0; /* Xóa margin */
  padding: 0; /* Xóa padding */
  box-sizing: border-box; /* Box model */
}

body {
  font-family: var(--font-primary); /* Font chính */
  line-height: 1.6; /* Chiều cao dòng */
  color: var(--text-primary); /* Màu chữ chính */
  background-color: var(--bg-primary); /* Màu nền chính */
  -webkit-font-smoothing: antialiased; /* Làm mịn font */
  -moz-osx-font-smoothing: grayscale; /* Làm mịn font */
}

/* Utility Classes - Lớp tiện ích */
.container {
  max-width: 1200px; /* Chiều rộng tối đa */
  margin: 0 auto; /* Căn giữa */
  padding: 0 var(--spacing-md); /* Padding hai bên */
}

.text-center {
  text-align: center;
} /* Căn giữa text */
.text-left {
  text-align: left;
} /* Căn trái text */
.text-right {
  text-align: right;
} /* Căn phải text */

/* Responsive - Đáp ứng */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-sm); /* Giảm padding trên mobile */
  }
}
```

## 🔧 Cách Hoạt Động

### 1. Khởi Động Dự Án

```bash
npm run dev                    # Chạy cả backend và frontend
npm run backend               # Chỉ chạy backend
npm run frontend              # Chỉ chạy frontend
```

### 2. Luồng Dữ Liệu

1. **Frontend** gọi API từ **Backend** thông qua proxy
2. **Backend** trả về dữ liệu JSON
3. **Frontend** hiển thị dữ liệu với animation

### 3. State Management

- Sử dụng React Hooks (`useState`, `useEffect`)
- Local Storage cho dark mode
- API calls với async/await

### 4. Animation

- Framer Motion cho smooth animations
- CSS transitions cho hover effects
- Scroll-triggered animations

---

**Lưu ý**: Đây là giải thích cơ bản. Mỗi component có thể có thêm logic phức tạp hơn tùy theo yêu cầu cụ thể.
