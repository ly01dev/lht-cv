# Quick Customization Guide

## 🚀 Quick Start - Update Your Information

### 1. Update Personal Information (Backend)

Edit `server.js` and update the following sections:

#### Profile Information

```javascript
app.get("/api/profile", (req, res) => {
  res.json({
    name: "YOUR NAME HERE", // ← Change this
    title: "YOUR TITLE HERE", // ← Change this
    email: "your.email@example.com", // ← Change this
    phone: "+84 123 456 789", // ← Change this
    location: "Your City, Country", // ← Change this
    about: "Your description here...", // ← Change this
    social: {
      linkedin: "https://linkedin.com/in/yourprofile", // ← Change this
      github: "https://github.com/yourusername", // ← Change this
      twitter: "https://twitter.com/yourhandle", // ← Change this
      facebook: "https://facebook.com/yourprofile", // ← Change this
    },
  });
});
```

#### Experience

```javascript
app.get("/api/experience", (req, res) => {
  res.json([
    {
      company: "Your Company Name", // ← Change this
      position: "Your Position", // ← Change this
      period: "2022 - Present", // ← Change this
      description: "Your job description...", // ← Change this
      technologies: ["React", "Node.js", "Your Skills"], // ← Change this
    },
    // Add more experiences...
  ]);
});
```

#### Skills

```javascript
app.get("/api/skills", (req, res) => {
  res.json({
    technical: [
      { name: "Your Skill", level: 95 }, // ← Change this
      // Add more skills...
    ],
    marketing: [
      { name: "Your Marketing Skill", level: 90 }, // ← Change this
      // Add more skills...
    ],
    soft: [
      { name: "Your Soft Skill", level: 85 }, // ← Change this
      // Add more skills...
    ],
  });
});
```

#### Projects

```javascript
app.get("/api/projects", (req, res) => {
  res.json([
    {
      title: "Your Project Name", // ← Change this
      description: "Your project description...", // ← Change this
      technologies: ["React", "Node.js"], // ← Change this
      link: "https://github.com/yourusername/project", // ← Change this
      demo: "https://your-demo.com", // ← Change this
    },
    // Add more projects...
  ]);
});
```

#### Education

```javascript
app.get("/api/education", (req, res) => {
  res.json([
    {
      degree: "Your Degree", // ← Change this
      school: "Your School", // ← Change this
      period: "2014 - 2018", // ← Change this
      description: "Your education description...", // ← Change this
    },
    // Add more education...
  ]);
});
```

### 2. Update Frontend Components

#### Header Logo

Edit `client/src/components/Header.js`:

```javascript
<span className="gradient-text">YOUR NAME</span> // ← Change this
```

#### Contact Information

Edit `client/src/components/Contact.js`:

```javascript
const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "your.email@example.com", // ← Change this
    link: "mailto:your.email@example.com", // ← Change this
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+84 123 456 789", // ← Change this
    link: "tel:+84123456789", // ← Change this
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Your City, Country", // ← Change this
    link: null,
  },
];
```

#### Footer

Edit `client/src/components/Footer.js`:

```javascript
const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
    label: "GitHub",
  }, // ← Change this
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
  }, // ← Change this
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/yourhandle",
    label: "Twitter",
  }, // ← Change this
  {
    icon: <FaFacebook />,
    url: "https://facebook.com/yourprofile",
    label: "Facebook",
  }, // ← Change this
];
```

### 3. Update Page Title

Edit `client/public/index.html`:

```html
<title>YOUR NAME - Professional CV</title>
<!-- ← Change this -->
```

### 4. Customize Colors (Optional)

Edit `client/src/index.css` and update the CSS custom properties:

```css
:root {
  --primary-color: #2563eb; /* ← Change main color */
  --secondary-color: #f59e0b; /* ← Change accent color */
  --accent-color: #10b981; /* ← Change success color */
  /* ... other colors */
}
```

## 🎨 Design Customization

### Change Fonts

Edit `client/public/index.html` and update Google Fonts link:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Then update `client/src/index.css`:

```css
:root {
  --font-primary: "YOUR_FONT", sans-serif;
  --font-heading: "YOUR_FONT", sans-serif;
}
```

### Add Your Photo

1. Add your photo to `client/public/images/`
2. Update the avatar path in the API response
3. Or replace the emoji placeholder in `Hero.js`

## 📱 Mobile Optimization

The website is already responsive, but you can:

- Test on different devices
- Adjust breakpoints in CSS if needed
- Optimize images for mobile

## 🚀 Deployment

### Quick Deploy to Heroku

1. Create Heroku account
2. Install Heroku CLI
3. Run these commands:

```bash
heroku create your-app-name
git add .
git commit -m "Initial commit"
git push heroku main
```

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `client/build`
4. Deploy

## 🔧 Advanced Customization

### Add New Sections

1. Create new component in `client/src/components/`
2. Add CSS file for the component
3. Import and add to `App.js`
4. Add navigation link in `Header.js`

### Add Animations

Use Framer Motion for custom animations:

```javascript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>;
```

### Add Contact Form Functionality

1. Set up email service (SendGrid, Nodemailer)
2. Update contact form handler in `Contact.js`
3. Add backend endpoint for form submission

## 📝 Content Tips

### Writing Your Bio

- Keep it concise but engaging
- Highlight your unique value proposition
- Include relevant keywords for SEO
- Show personality while staying professional

### Project Descriptions

- Focus on impact and results
- Include metrics when possible
- Explain the technologies used
- Provide live demos when available

### Skills Assessment

- Be honest about your skill levels
- Focus on relevant skills for your target role
- Include both technical and soft skills
- Update regularly as you learn new things

## 🎯 SEO Optimization

### Meta Tags

Update `client/public/index.html`:

```html
<meta name="description" content="Your professional description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
```

### Social Media

Add Open Graph tags for better social sharing:

```html
<meta property="og:title" content="Your Name - Professional CV" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="your-image-url" />
```

## 🆘 Need Help?

1. Check the main README.md for detailed instructions
2. Look at the component files for examples
3. Test changes locally before deploying
4. Use browser developer tools to debug

---

**Happy Customizing! 🎉**
