# 📚 HƯỚNG DẪN CODE WEBSITE CV - CHO NGƯỜI MỚI HỌC

## 🎯 **MỤC TIÊU**

File này giải thích cấu trúc và quy trình hoạt động của website CV để bạn dễ hiểu và học hỏi.

## 📁 **CẤU TRÚC THƯ MỤC**

```
frontend/
├── src/
│   ├── App.js              # 🏠 FILE CHÍNH - Khởi động ứng dụng
│   ├── index.js            # 🚀 Điểm khởi đầu React
│   ├── index.css           # 🎨 CSS toàn cục và biến màu sắc
│   ├── App.css             # 🎨 CSS cho App component
│   ├── i18n.js             # 🌐 Cấu hình đa ngôn ngữ
│   ├── components/         # 🧩 Các thành phần giao diện
│   │   ├── Header.js       # 📱 Thanh điều hướng
│   │   ├── Hero.js         # 🎭 Phần giới thiệu chính
│   │   ├── About.js        # 👤 Thông tin về tôi
│   │   ├── Experience.js   # 💼 Kinh nghiệm làm việc
│   │   ├── Skills.js       # 🛠️ Kỹ năng
│   │   ├── Projects.js     # 📂 Dự án
│   │   ├── Education.js    # 🎓 Học vấn
│   │   ├── Contact.js      # 📞 Liên hệ
│   │   ├── Footer.js       # 🦶 Chân trang
│   │   └── Loading.js      # ⏳ Màn hình chờ
│   └── locales/            # 🌍 Nội dung đa ngôn ngữ
│       ├── en/             # 🇺🇸 Tiếng Anh
│       └── vi/             # 🇻🇳 Tiếng Việt
```

## 🔄 **QUY TRÌNH HOẠT ĐỘNG**

### **BƯỚC 1: Khởi động ứng dụng**

1. **index.js** → Khởi động React
2. **App.js** → Component chính được render
3. **Loading** → Hiển thị màn hình chờ (2 giây)

### **BƯỚC 2: Tải cấu hình**

1. **i18n.js** → Cấu hình đa ngôn ngữ
2. **index.css** → Tải CSS toàn cục
3. **App.css** → Tải CSS cho App

### **BƯỚC 3: Hiển thị giao diện**

1. **Header** → Thanh điều hướng (cố định)
2. **Hero** → Phần giới thiệu chính
3. **About** → Thông tin cá nhân
4. **Experience** → Kinh nghiệm làm việc
5. **Skills** → Kỹ năng và chuyên môn
6. **Projects** → Các dự án đã làm
7. **Education** → Học vấn và chứng chỉ
8. **Contact** → Form liên hệ
9. **Footer** → Chân trang

## 🧩 **GIẢI THÍCH TỪNG COMPONENT**

### **1. App.js - Component Chính**

- **Chức năng**: Quản lý toàn bộ ứng dụng
- **Quản lý**: Loading, Dark Mode, Animation
- **Render**: Tất cả các component con

### **2. Header.js - Thanh Điều Hướng**

- **Chức năng**: Menu navigation, chuyển đổi ngôn ngữ, dark mode
- **Tính năng**: Responsive, smooth scroll, mobile menu

### **3. Hero.js - Phần Giới Thiệu**

- **Chức năng**: Giới thiệu cá nhân, ảnh profile, social links
- **Tính năng**: Animation, QR code popup, call-to-action buttons

### **4. About.js - Thông Tin Cá Nhân**

- **Chức năng**: Mô tả chi tiết về bản thân, thống kê, đặc điểm
- **Tính năng**: Animated stats, feature cards

### **5. Experience.js - Kinh Nghiệm**

- **Chức năng**: Timeline kinh nghiệm làm việc
- **Tính năng**: Timeline animation, responsive design

### **6. Skills.js - Kỹ Năng**

- **Chức năng**: Hiển thị kỹ năng với progress bars
- **Tính năng**: Animated progress bars, skill categories

### **7. Projects.js - Dự Án**

- **Chức năng**: Showcase các dự án đã làm
- **Tính năng**: Project cards, hover effects, external links

### **8. Education.js - Học Vấn**

- **Chức năng**: Thông tin học vấn và chứng chỉ
- **Tính năng**: Education cards, responsive layout

### **9. Contact.js - Liên Hệ**

- **Chức năng**: Form liên hệ và thông tin contact
- **Tính năng**: EmailJS integration, QR code popup, form validation

### **10. Footer.js - Chân Trang**

- **Chức năng**: Social links, quick navigation, copyright
- **Tính năng**: Social icons, responsive layout

## 🎨 **HỆ THỐNG CSS**

### **CSS Variables (Biến CSS)**

```css
:root {
  --primary-color: #2563eb; /* Màu chính */
  --secondary-color: #f59e0b; /* Màu phụ */
  --accent-color: #10b981; /* Màu nhấn */
  --text-primary: #1f2937; /* Màu chữ chính */
  --bg-primary: #ffffff; /* Màu nền chính */
}
```

### **Responsive Breakpoints**

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌐 **HỆ THỐNG ĐA NGÔN NGỮ**

### **Cấu trúc Translation**

```json
{
  "hero": {
    "greeting": "Xin chào, tôi là",
    "name": "Ly Huu Thanh",
    "title": "Lập trình viên Full Stack"
  }
}
```

### **Cách sử dụng**

```javascript
const { t } = useTranslation();
t("hero.greeting"); // → "Xin chào, tôi là"
```

## 🚀 **CÁCH CHẠY VÀ PHÁT TRIỂN**

### **Chạy Development**

```bash
npm start          # Chạy development server
npm run build      # Build cho production
npm run deploy     # Deploy lên GitHub Pages
```

### **Cấu trúc Development**

1. **Code** → Viết code trong `src/`
2. **Test** → Kiểm tra trên localhost:3000
3. **Build** → Tạo file production
4. **Deploy** → Đẩy lên hosting

## 📝 **QUY TẮC CODE**

### **1. Đặt tên file**

- **Component**: PascalCase (Header.js, Hero.js)
- **CSS**: Kebab-case (header.css, hero.css)
- **Constants**: UPPER_SNAKE_CASE

### **2. Cấu trúc Component**

```javascript
// 1. Imports
import React from "react";

// 2. Component function
const ComponentName = () => {
  // 3. State management
  const [state, setState] = useState();

  // 4. Effects
  useEffect(() => {}, []);

  // 5. Event handlers
  const handleClick = () => {};

  // 6. Render
  return <div>Content</div>;
};

// 7. Export
export default ComponentName;
```

### **3. CSS Organization**

- **Global**: index.css
- **Component**: component.css
- **Responsive**: Media queries trong mỗi file

## 🎯 **HỌC TẬP THEO THỨ TỰ**

### **Bước 1: Hiểu cấu trúc**

1. Đọc `App.js` để hiểu luồng chính
2. Xem `index.css` để hiểu design system
3. Kiểm tra `i18n.js` để hiểu đa ngôn ngữ

### **Bước 2: Học từng component**

1. **Header** → Navigation và state management
2. **Hero** → Animation và responsive design
3. **About** → Data display và layout
4. **Experience** → Timeline và data mapping
5. **Skills** → Progress bars và categories
6. **Projects** → Cards và external links
7. **Education** → Simple layout
8. **Contact** → Forms và API integration
9. **Footer** → Simple component

### **Bước 3: Thực hành**

1. Thay đổi nội dung trong translation files
2. Sửa màu sắc trong CSS variables
3. Thêm component mới
4. Tùy chỉnh animation

## 🔧 **CÔNG CỤ SỬ DỤNG**

### **Frontend Libraries**

- **React 18**: Framework chính
- **Framer Motion**: Animation
- **React Icons**: Icon library
- **i18next**: Đa ngôn ngữ
- **EmailJS**: Form handling

### **Development Tools**

- **VS Code**: Code editor
- **Git**: Version control
- **GitHub Pages**: Hosting
- **Chrome DevTools**: Debugging

## 📚 **TÀI LIỆU THAM KHẢO**

### **React Basics**

- [React Documentation](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)
- [JSX](https://react.dev/learn/writing-markup-with-jsx)

### **CSS & Styling**

- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### **Animation**

- [Framer Motion](https://www.framer.com/motion/)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)

---

## 🎉 **KẾT LUẬN**

Website CV này được thiết kế để:

- ✅ **Dễ hiểu** cho người mới học
- ✅ **Dễ tùy chỉnh** nội dung và giao diện
- ✅ **Responsive** trên mọi thiết bị
- ✅ **Hiện đại** với animation và UX tốt
- ✅ **SEO friendly** và performance cao

**Chúc bạn học tập hiệu quả! 🚀**
