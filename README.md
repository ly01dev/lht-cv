# Website CV Chuyên Nghiệp

Website CV/Portfolio hiện đại được xây dựng bằng React, Node.js và Express. Hoàn hảo cho các chuyên gia IT và Digital Marketing.

## 📁 Cấu Trúc Dự Án

```
cv/
├── backend/          # Backend API (Node.js + Express)
│   ├── server.js     # File chính của server
│   ├── package.json  # Dependencies của backend
│   └── node_modules/ # Thư viện backend
├── frontend/         # Frontend (React)
│   ├── public/       # File tĩnh
│   ├── src/          # Mã nguồn React
│   ├── package.json  # Dependencies của frontend
│   └── node_modules/ # Thư viện frontend
├── package.json      # Quản lý toàn bộ dự án
└── README.md         # Hướng dẫn này
```

## ✨ Tính Năng

- 🎨 **Thiết Kế Hiện Đại**: Giao diện sạch sẽ, chuyên nghiệp với hiệu ứng mượt mà
- 📱 **Responsive**: Hoạt động tốt trên mọi thiết bị
- 🌙 **Chế Độ Tối**: Chuyển đổi giữa giao diện sáng và tối
- ⚡ **Hiệu Suất Cao**: Tối ưu hóa tốc độ và hiệu suất
- 🎯 **SEO Friendly**: Tuân thủ các tiêu chuẩn SEO
- 📊 **Tương Tác**: Cuộn mượt, hiệu ứng hover, và animation
- 📝 **Form Liên Hệ**: Form liên hệ hoạt động với validation
- 🔧 **Dễ Tùy Chỉnh**: Đơn giản để thay đổi nội dung

## 🛠️ Công Nghệ Sử Dụng

### Backend

- **Node.js** - Môi trường chạy JavaScript
- **Express.js** - Framework web
- **CORS** - Cho phép truy cập từ domain khác
- **Helmet** - Bảo mật middleware
- **Compression** - Nén dữ liệu

### Frontend

- **React 18** - Thư viện JavaScript hiện đại
- **Framer Motion** - Animation mượt mà
- **React Icons** - Thư viện icon đẹp
- **CSS3** - Styling hiện đại với Grid/Flexbox

## 📋 Các Phần Chính

1. **Hero** - Giới thiệu với nút call-to-action
2. **About** - Thông tin cá nhân và đặc điểm nổi bật
3. **Experience** - Lịch sử làm việc với timeline
4. **Skills** - Kỹ năng kỹ thuật, marketing và mềm với thanh tiến trình
5. **Projects** - Showcase portfolio với project cards
6. **Education** - Học vấn và chứng chỉ
7. **Contact** - Form liên hệ và thông tin
8. **Footer** - Liên kết mạng xã hội và thông tin bổ sung

## 🚀 Hướng Dẫn Cài Đặt

### Yêu Cầu Hệ Thống

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Cài Đặt

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd cv
   ```

2. **Cài đặt tất cả dependencies**

   ```bash
   npm run install-all
   ```

3. **Khởi động development servers**

   ```bash
   npm run dev
   ```

4. **Mở trình duyệt**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Chạy Riêng Lẻ

```bash
# Chỉ chạy backend
npm run backend

# Chỉ chạy frontend
npm run frontend
```

## 🔧 Tùy Chỉnh

### Cập Nhật Thông Tin Cá Nhân

1. **Backend API** (`backend/server.js`):

   - Cập nhật thông tin profile trong `/api/profile`
   - Cập nhật kinh nghiệm trong `/api/experience`
   - Cập nhật kỹ năng trong `/api/skills`
   - Cập nhật dự án trong `/api/projects`
   - Cập nhật học vấn trong `/api/education`

2. **Frontend Components**:
   - Cập nhật liên kết mạng xã hội trong `Header.js`, `Hero.js`, và `Footer.js`
   - Cập nhật thông tin liên hệ trong `Contact.js`

### Tùy Chỉnh Giao Diện

- Màu sắc và theme được định nghĩa trong CSS custom properties ở `frontend/src/index.css`
- Style riêng cho từng component trong file `.css` tương ứng
- Hỗ trợ dark mode có sẵn

## 📡 API Endpoints

- `GET /api/profile` - Thông tin cá nhân
- `GET /api/experience` - Dữ liệu kinh nghiệm làm việc
- `GET /api/skills` - Dữ liệu kỹ năng và chuyên môn
- `GET /api/projects` - Dữ liệu dự án portfolio
- `GET /api/education` - Dữ liệu học vấn và chứng chỉ
- `GET /api/health` - Kiểm tra trạng thái server

## 🚀 Triển Khai

### Heroku

1. Tạo tài khoản Heroku và cài đặt Heroku CLI
2. Khởi tạo git repository và push lên Heroku
3. Ứng dụng sẽ tự động build và deploy

### Vercel/Netlify

1. Kết nối GitHub repository
2. Đặt build command: `npm run build`
3. Đặt output directory: `frontend/build`
4. Deploy

### Server Tùy Chỉnh

1. Build React app: `cd frontend && npm run build`
2. Các file build sẽ được serve bởi Express server
3. Deploy lên hosting platform ưa thích

## 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch
3. Thực hiện thay đổi
4. Test kỹ lưỡng
5. Submit pull request

## 📄 Giấy Phép

Dự án này được cấp phép theo MIT License.

## 🆘 Hỗ Trợ

Nếu bạn có câu hỏi hoặc cần giúp đỡ tùy chỉnh website, vui lòng tạo issue trên GitHub.

---

**Được tạo với ❤️ bằng React & Node.js**
