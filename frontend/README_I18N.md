# Hướng dẫn sử dụng tính năng đa ngôn ngữ (i18next)

## Tổng quan

Dự án CV/Portfolio này đã được tích hợp tính năng đa ngôn ngữ sử dụng thư viện **i18next** và **react-i18next**. Hiện tại hỗ trợ 2 ngôn ngữ:

- **Tiếng Việt (vi)**
- **Tiếng Anh (en)**

## Cấu trúc thư mục

```
src/
├── i18n.js                    # Cấu hình i18next
├── locales/
│   ├── en/
│   │   └── translation.json   # Bản dịch tiếng Anh
│   └── vi/
│       └── translation.json   # Bản dịch tiếng Việt
└── components/
    ├── LanguageSwitcher.js    # Component chuyển đổi ngôn ngữ
    └── LanguageSwitcher.css   # CSS cho language switcher
```

## Cách sử dụng

### 1. Chuyển đổi ngôn ngữ

Người dùng có thể chuyển đổi ngôn ngữ bằng cách:

- Click vào nút **VI** hoặc **EN** trong header
- Ngôn ngữ sẽ được lưu vào localStorage và tự động áp dụng cho lần truy cập tiếp theo

### 2. Sử dụng translation trong component

```javascript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("header.title")}</h1>
      <p>{t("about.description")}</p>
    </div>
  );
};
```

### 3. Thêm ngôn ngữ mới

Để thêm ngôn ngữ mới (ví dụ: tiếng Pháp):

1. Tạo file translation mới:

```bash
mkdir src/locales/fr
touch src/locales/fr/translation.json
```

2. Thêm vào `src/i18n.js`:

```javascript
import translationFR from "./locales/fr/translation.json";

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  fr: { translation: translationFR }, // Thêm dòng này
};
```

3. Cập nhật `LanguageSwitcher.js`:

```javascript
<button onClick={() => changeLanguage("fr")}>FR</button>
```

### 4. Cấu trúc translation key

Translation keys được tổ chức theo cấu trúc phân cấp:

```json
{
  "header": {
    "home": "Trang chủ",
    "about": "Giới thiệu"
  },
  "hero": {
    "greeting": "Xin chào, tôi là",
    "title": "Lập trình viên Full Stack"
  }
}
```

### 5. Sử dụng interpolation

```javascript
// Trong translation.json
{
  "welcome": "Xin chào {{name}}!"
}

// Trong component
const { t } = useTranslation();
return <p>{t('welcome', { name: 'John' })}</p>;
```

### 6. Sử dụng pluralization

```javascript
// Trong translation.json
{
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}

// Trong component
const { t } = useTranslation();
return <p>{t('items', { count: 5 })}</p>; // "5 items"
```

## Tính năng đã được tích hợp

### ✅ Đã hoàn thành:

- [x] Cấu hình i18next cơ bản
- [x] Language switcher trong header
- [x] Translation cho tất cả các section chính
- [x] Lưu trữ ngôn ngữ trong localStorage
- [x] Responsive design cho language switcher
- [x] Fallback language (tiếng Anh)

### 🔄 Cần cập nhật:

- [ ] Thêm translation cho tất cả các component còn lại
- [ ] Cập nhật backend API để hỗ trợ đa ngôn ngữ
- [ ] Thêm loading state cho translation
- [ ] SEO optimization cho đa ngôn ngữ

## Lưu ý quan trọng

1. **Performance**: i18next sẽ lazy load translation files để tối ưu performance
2. **SEO**: Cân nhắc sử dụng `react-helmet` để cập nhật meta tags theo ngôn ngữ
3. **Accessibility**: Language switcher đã được thiết kế với ARIA labels
4. **Testing**: Đảm bảo test tất cả các ngôn ngữ được hỗ trợ

## Troubleshooting

### Lỗi thường gặp:

1. **Translation không hiển thị**: Kiểm tra key có đúng không
2. **Language switcher không hoạt động**: Kiểm tra localStorage có bị disable không
3. **Fallback không hoạt động**: Kiểm tra cấu hình fallbackLng trong i18n.js

### Debug mode:

Để bật debug mode, thay đổi trong `src/i18n.js`:

```javascript
debug: true, // Thay vì false
```

## Tài liệu tham khảo

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Browser Language Detector](https://github.com/i18next/i18next-browser-languagedetector)
- [i18next HTTP Backend](https://github.com/i18next/i18next-http-backend)
