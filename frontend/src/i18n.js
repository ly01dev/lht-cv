// ========================================
// CẤU HÌNH ĐA NGÔN NGỮ (INTERNATIONALIZATION)
// ========================================
// File này cấu hình hệ thống đa ngôn ngữ cho website
// Cho phép chuyển đổi giữa Tiếng Việt và Tiếng Anh

import i18n from 'i18next';                           // Thư viện chính cho đa ngôn ngữ
import { initReactI18next } from 'react-i18next';     // Plugin để React sử dụng i18next
import LanguageDetector from 'i18next-browser-languagedetector'; // Tự động phát hiện ngôn ngữ
import Backend from 'i18next-http-backend';           // Plugin để load translation từ server

// Import các file translation (nội dung đa ngôn ngữ)
import translationEN from './locales/en/translation.json';  // Nội dung tiếng Anh
import translationVI from './locales/vi/translation.json';  // Nội dung tiếng Việt

// ========================================
// CẤU HÌNH RESOURCES - TÀI NGUYÊN NGÔN NGỮ
// ========================================
const resources = {
  en: {
    translation: translationEN  // Gán nội dung tiếng Anh
  },
  vi: {
    translation: translationVI  // Gán nội dung tiếng Việt
  }
};

// ========================================
// KHỞI TẠO I18NEXT
// ========================================
i18n
  // Sử dụng Backend plugin để load translation từ server (nếu cần)
  .use(Backend)
  
  // Sử dụng LanguageDetector để tự động phát hiện ngôn ngữ
  .use(LanguageDetector)
  
  // Sử dụng React plugin để tích hợp với React
  .use(initReactI18next)
  
  // Khởi tạo với các cài đặt
  .init({
    // Tài nguyên ngôn ngữ
    resources,
    
    // Ngôn ngữ mặc định khi không tìm thấy
    fallbackLng: 'en',
    
    // Bật/tắt debug mode (hiển thị thông tin debug)
    debug: false,

    // Cấu hình interpolation (xử lý biến trong text)
    interpolation: {
      escapeValue: false, // Không escape HTML (React đã tự escape)
    },

    // Cấu hình phát hiện ngôn ngữ
    detection: {
      // Thứ tự ưu tiên phát hiện ngôn ngữ
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Lưu trữ ngôn ngữ đã chọn
      caches: ['localStorage'],
    },
  });

// ========================================
// GIẢI THÍCH CÁCH HOẠT ĐỘNG
// ========================================

/*
1. KHI NGƯỜI DÙNG VÀO WEBSITE:
   - LanguageDetector sẽ kiểm tra:
     + localStorage: Ngôn ngữ đã lưu trước đó
     + navigator: Ngôn ngữ của trình duyệt
     + htmlTag: Thẻ lang trong HTML

2. KHI SỬ DỤNG TRONG COMPONENT:
   const { t } = useTranslation();
   t('hero.greeting') → "Xin chào, tôi là" (nếu đang ở tiếng Việt)

3. KHI CHUYỂN ĐỔI NGÔN NGỮ:
   i18n.changeLanguage('en') → Chuyển sang tiếng Anh
   i18n.changeLanguage('vi') → Chuyển sang tiếng Việt

4. CẤU TRÚC TRANSLATION FILE:
   {
     "hero": {
       "greeting": "Xin chào, tôi là",
       "name": "Ly Huu Thanh"
     }
   }
*/

export default i18n; 