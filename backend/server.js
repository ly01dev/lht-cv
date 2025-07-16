const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Các phần mềm trung gian
app.use(helmet()); // Bảo mật cho ứng dụng
app.use(compression()); // Nén dữ liệu để tăng tốc độ
app.use(cors()); // Cho phép truy cập từ các domain khác
app.use(express.json()); // Xử lý dữ liệu JSON

// API Routes - Các đường dẫn API
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Ly Huu Thanh',
    title: 'Full Stack Developer & Digital Marketing',
    email: 'lyhuuthanhtv@gmail.com',
    phone: '+84 372 917 006',
    location: 'Ho Chi Minh City, Vietnam',
    about: '',
    avatar: '/images/avatar.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/thanh-ly-40a763215/',
      github: 'https://github.com/ly01dev',
      // twitter: 'https://twitter.com/yourhandle',
      // facebook: 'https://facebook.com/yourprofile'
    }
  });
});

app.get('/api/experience', (req, res) => {
  res.json([
    {
      id: 1,
      company: 'Pantech Company',
      position: 'Fullstack Web Developer',
      period: '2025 - Present',
      description: 'Currently working as a Fullstack Web Developer, combining educational background, marketing experience, management skills, and programming expertise to create technology products with real value.',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Git']
    },
    {
      id: 2,
      company: 'OKVIP (formerly Taipei101)',
      position: 'SEO Website Specialist & Lead Trainer',
      period: '2022 - 2024',
      description: 'Served as Lead Trainer for SEO team and assistant to SEO manager. Responsible for training team members, monitoring work effectiveness, and detecting fraudulent behaviors during website optimization. Required deep understanding of search algorithms and logical analysis.',
      technologies: ['SEO', 'Google Analytics', 'Search Console', 'Content Marketing', 'Technical SEO']
    },
    {
      id: 3,
      company: 'Winner Company',
      position: 'Advertising Team Leader',
      period: '2021 - 2022',
      description: 'Led advertising team responsible for implementing communication campaigns, recruitment, and training new personnel. Developed strong leadership skills and effective organizational thinking.',
      technologies: ['Digital Marketing', 'Team Management', 'Campaign Planning', 'Recruitment', 'Training']
    },
    {
      id: 4,
      company: 'Digital Marketing Agency',
      position: 'Digital Marketing Specialist',
      period: '2020 - 2021',
      description: 'Transitioned from education to digital marketing, exploring the power of technology and strategic thinking. Developed skills in various digital marketing channels and strategies.',
      technologies: ['Social Media Marketing', 'Google Ads', 'Facebook Ads', 'Content Strategy', 'Analytics']
    },
    {
      id: 5,
      company: 'Education Institution',
      position: 'Teacher',
      period: '2018 - 2020',
      description: 'Started career as a teacher, developing communication skills, patience, and high sense of responsibility in supporting others\' growth. This foundation has been valuable throughout my career journey.',
      technologies: ['Communication', 'Leadership', 'Education', 'Mentoring', 'Curriculum Development']
    }
  ]);
});

app.get('/api/skills', (req, res) => {
  res.json({
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
  });
});

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'TodoList Web Application',
      description: 'A modern and responsive todo list application with full CRUD operations, user-friendly interface, and local storage functionality. Features include adding, editing, deleting tasks, marking as complete, and filtering options.',
      image: '/images/project1.jpg',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Local Storage', 'Responsive Design'],
      link: 'https://github.com/ly01dev/web-to-do-list',
      demo: 'https://todo-frontend-fz9h.onrender.com/'
    },
    {
      id: 2,
      title: 'Digital Marketing Dashboard',
      description: 'Analytics dashboard for tracking marketing campaigns, ROI, and customer engagement metrics.',
      image: '/images/project2.jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      link: 'https://github.com/yourusername/marketing-dashboard',
      demo: 'https://marketing-dashboard.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design and smooth animations.',
      image: '/images/project3.jpg',
      technologies: ['React', 'Framer Motion', 'SCSS'],
      link: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com'
    }
  ]);
});

app.get('/api/education', (req, res) => {
  res.json([
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      id: 2,
      degree: 'Digital Marketing Certification',
      school: 'Google Digital Garage',
      period: '2019',
      description: 'Certified in Google Analytics, Ads, and Digital Marketing Fundamentals'
    }
  ]);
});

// Health check endpoint - Kiểm tra trạng thái server
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}/api`);
}); 