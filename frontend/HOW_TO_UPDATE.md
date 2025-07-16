# Hướng dẫn cập nhật thông tin trong hệ thống đa ngôn ngữ

## 📝 **Trả lời câu hỏi của bạn:**

**"Nếu tôi sửa thông tin bằng tiếng Việt thì bên tiếng Anh có tự sửa hay không?"**

**Trả lời: KHÔNG, bạn phải sửa cả 2 bên riêng biệt.**

## 🔄 **Cách hoạt động của hệ thống:**

Hệ thống đa ngôn ngữ hoạt động bằng cách:

1. **Lưu trữ riêng biệt**: Mỗi ngôn ngữ có file translation riêng
2. **Chuyển đổi động**: Khi người dùng chọn ngôn ngữ, hệ thống sẽ hiển thị nội dung từ file tương ứng
3. **Không tự động dịch**: Không có tính năng tự động dịch từ ngôn ngữ này sang ngôn ngữ khác

## 📁 **Cấu trúc file translation:**

```
src/locales/
├── en/
│   └── translation.json    # Nội dung tiếng Anh
└── vi/
    └── translation.json    # Nội dung tiếng Việt
```

## ✏️ **Cách cập nhật thông tin:**

### **1. Cập nhật thông tin cá nhân:**

**Bước 1: Sửa file tiếng Việt**

```json
// src/locales/vi/translation.json
{
  "hero": {
    "name": "Nguyễn Văn A", // ← Sửa tên ở đây
    "title": "Lập trình viên Full Stack"
  }
}
```

**Bước 2: Sửa file tiếng Anh**

```json
// src/locales/en/translation.json
{
  "hero": {
    "name": "Nguyen Van A", // ← Sửa tên tương ứng ở đây
    "title": "Full Stack Developer"
  }
}
```

### **2. Cập nhật thông tin liên hệ:**

**File tiếng Việt:**

```json
{
  "contact": {
    "info": {
      "email": "nguyenvana@gmail.com",
      "phone": "+84 123 456 789",
      "location": "Hà Nội, Việt Nam"
    }
  }
}
```

**File tiếng Anh:**

```json
{
  "contact": {
    "info": {
      "email": "nguyenvana@gmail.com", // Email giống nhau
      "phone": "+84 123 456 789", // Số điện thoại giống nhau
      "location": "Hanoi, Vietnam" // Địa chỉ có thể khác
    }
  }
}
```

### **3. Cập nhật mô tả dự án:**

**File tiếng Việt:**

```json
{
  "projects": {
    "title": "Dự án nổi bật",
    "subtitle": "Triển lãm các công việc gần đây của tôi"
  }
}
```

**File tiếng Anh:**

```json
{
  "projects": {
    "title": "Featured Projects",
    "subtitle": "Showcase of my recent work"
  }
}
```

## 🎯 **Best Practices khi cập nhật:**

### **1. Cập nhật đồng thời:**

- Luôn sửa cả 2 file cùng lúc
- Đảm bảo nội dung tương ứng giữa 2 ngôn ngữ
- Test cả 2 ngôn ngữ sau khi cập nhật

### **2. Giữ nguyên key:**

```json
// ✅ ĐÚNG - Chỉ sửa value, không sửa key
"hero.name": "Tên mới"

// ❌ SAI - Không sửa key
"hero.fullName": "Tên mới"  // Key thay đổi sẽ gây lỗi
```

### **3. Sử dụng interpolation cho thông tin động:**

```json
// Trong file tiếng Việt
"about.locationDescription": "Tôi hiện đang ở tại {{location}}"

// Trong file tiếng Anh
"about.locationDescription": "I'm currently located in {{location}}"
```

### **4. Từ chuyên môn IT:**

- **Giữ nguyên**: React, Node.js, JavaScript, TypeScript, MongoDB, AWS
- **Có thể dịch**: "Full Stack Developer" → "Lập trình viên Full Stack"
- **Tùy chọn**: "Frontend" → "Giao diện người dùng" hoặc giữ nguyên

## 🔧 **Công cụ hỗ trợ:**

### **1. Sử dụng VS Code:**

- Cài extension "i18n Ally" để quản lý translation dễ dàng
- Hiển thị preview của các ngôn ngữ song song

### **2. Tạo script tự động:**

```bash
# Script để đồng bộ thông tin cơ bản
node scripts/sync-translations.js
```

### **3. Validation:**

```bash
# Kiểm tra xem có key nào bị thiếu không
npm run validate-translations
```

## 📋 **Checklist khi cập nhật:**

- [ ] Sửa file `vi/translation.json`
- [ ] Sửa file `en/translation.json`
- [ ] Kiểm tra key có giống nhau không
- [ ] Test chuyển đổi ngôn ngữ
- [ ] Kiểm tra responsive trên mobile
- [ ] Backup file cũ trước khi sửa

## 🚨 **Lưu ý quan trọng:**

1. **Không xóa key**: Chỉ sửa value, không xóa hoặc đổi tên key
2. **Backup trước khi sửa**: Luôn backup file trước khi thay đổi lớn
3. **Test kỹ**: Test cả 2 ngôn ngữ sau mỗi lần cập nhật
4. **Commit riêng**: Commit thay đổi translation riêng biệt với code

## 💡 **Tips:**

- Sử dụng Google Translate để tham khảo, nhưng luôn review lại
- Giữ tone giọng nhất quán giữa 2 ngôn ngữ
- Ưu tiên sử dụng thuật ngữ phổ biến trong ngành
- Test với người dùng thực tế nếu có thể
