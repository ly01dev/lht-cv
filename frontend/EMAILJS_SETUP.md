# EmailJS Setup Guide

## Bước 1: Đăng ký tài khoản EmailJS

1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

## Bước 2: Tạo Email Service

1. Vào Dashboard → Email Services
2. Click "Add New Service"
3. Chọn "Gmail" hoặc "Outlook"
4. Đăng nhập với email của bạn (lyhuuthanhtv@gmail.com)
5. Đặt tên service (ví dụ: "gmail")

## Bước 3: Tạo Email Template

1. Vào Dashboard → Email Templates
2. Click "Create New Template"
3. Đặt tên template (ví dụ: "contact_form")
4. Thiết kế template với các biến:
   - {{from_name}} - Tên người gửi
   - {{from_email}} - Email người gửi
   - {{subject}} - Tiêu đề
   - {{message}} - Nội dung tin nhắn

### Template mẫu:

```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

## Bước 4: Lấy thông tin cần thiết

Sau khi tạo service và template, bạn sẽ có:

- **Service ID**: ID của email service (ví dụ: "service_abc123")
- **Template ID**: ID của email template (ví dụ: "template_xyz789")
- **Public Key**: Public key của tài khoản EmailJS

## Bước 5: Cập nhật code

Thay thế các giá trị trong file `frontend/src/components/Contact.js`:

```javascript
// Thay thế YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Thay thế trong handleSubmit function
const result = await emailjs.send(
  "YOUR_SERVICE_ID", // Thay bằng Service ID thực
  "YOUR_TEMPLATE_ID", // Thay bằng Template ID thực
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: "lyhuuthanhtv@gmail.com",
  },
  "YOUR_PUBLIC_KEY" // Thay bằng Public Key thực
);
```

## Bước 6: Test

1. Chạy ứng dụng: `npm start`
2. Điền form contact
3. Gửi tin nhắn test
4. Kiểm tra email của bạn

## Lưu ý:

- Tài khoản miễn phí EmailJS cho phép 200 email/tháng
- Đảm bảo email service (Gmail/Outlook) đã bật "Less secure app access" hoặc sử dụng App Password
- Nếu gặp lỗi, kiểm tra console browser để debug

## Troubleshooting:

- **Lỗi 400**: Kiểm tra Service ID và Template ID
- **Lỗi 401**: Kiểm tra Public Key
- **Lỗi 403**: Kiểm tra cấu hình email service
