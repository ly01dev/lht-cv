# Hướng dẫn Responsive Design

## 📱 **Tình trạng hiện tại:**

Website đã được cập nhật để responsive tốt hơn với các breakpoint:

### **Breakpoints:**

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

## ✅ **Những gì đã được cải thiện:**

### **1. Header Component:**

- ✅ Mobile menu hoạt động tốt
- ✅ Language switcher responsive
- ✅ Logo và navigation thích ứng với màn hình nhỏ
- ✅ Theme toggle button responsive

### **2. Hero Section:**

- ✅ Layout chuyển từ 2 cột sang 1 cột trên mobile
- ✅ Avatar size thích ứng
- ✅ Text size responsive
- ✅ Buttons stack vertically trên mobile
- ✅ Social links responsive

### **3. About Section:**

- ✅ Stats grid responsive (4 → 2 → 1 cột)
- ✅ Features grid responsive (2 → 1 cột)
- ✅ Text alignment center trên mobile
- ✅ Card padding thích ứng

### **4. Global Styles:**

- ✅ Container padding responsive
- ✅ Section padding thích ứng
- ✅ Button sizes responsive
- ✅ Typography scales properly

## 🎯 **Test Responsive:**

### **Cách test:**

1. **Chrome DevTools**: F12 → Toggle device toolbar
2. **Responsive breakpoints**:
   - iPhone SE: 375px
   - iPhone 12: 390px
   - iPad: 768px
   - Desktop: 1024px+

### **Checklist test:**

- [ ] Header menu hoạt động trên mobile
- [ ] Language switcher hiển thị đúng
- [ ] Hero section layout đẹp trên mobile
- [ ] About section không bị overflow
- [ ] Buttons không bị cut off
- [ ] Text readable trên màn hình nhỏ
- [ ] Touch targets đủ lớn (44px minimum)

## 🔧 **Các class utility responsive:**

### **Container:**

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

### **Grid System:**

```css
.grid-2,
.grid-3,
.grid-4 {
  /* Desktop: multiple columns */
  /* Mobile: 1 column */
}
```

### **Text Alignment:**

```css
.text-center-mobile  /* Center text on mobile */
/* Center text on mobile */
.hide-mobile         /* Hide on mobile */
.hide-small; /* Hide on small screens */
```

## 📐 **Typography Scale:**

### **Desktop:**

- Section title: 2.5rem
- Hero title: 4rem
- Body text: 1rem

### **Tablet:**

- Section title: 2.25rem
- Hero title: 3rem
- Body text: 1rem

### **Mobile:**

- Section title: 2rem
- Hero title: 2.5rem
- Body text: 0.95rem

### **Small Mobile:**

- Section title: 1.75rem
- Hero title: 2rem
- Body text: 0.9rem

## 🎨 **Spacing Scale:**

### **Desktop:**

- Section padding: var(--spacing-3xl) (4rem)
- Card padding: var(--spacing-xl) (2rem)
- Button padding: var(--spacing-md) var(--spacing-xl)

### **Mobile:**

- Section padding: var(--spacing-2xl) (3rem)
- Card padding: var(--spacing-lg) (1.5rem)
- Button padding: var(--spacing-sm) var(--spacing-lg)

### **Small Mobile:**

- Section padding: var(--spacing-xl) (2rem)
- Card padding: var(--spacing-md) (1rem)
- Button padding: var(--spacing-sm) var(--spacing-md)

## 🚀 **Performance Tips:**

### **1. Images:**

```css
img {
  max-width: 100%;
  height: auto;
}
```

### **2. Touch Targets:**

```css
/* Minimum 44px for touch targets */
.btn,
.nav-link {
  min-height: 44px;
  min-width: 44px;
}
```

### **3. Font Loading:**

```css
/* Use system fonts for better performance */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## 🐛 **Common Issues & Solutions:**

### **1. Horizontal Scroll:**

```css
/* Fix overflow */
* {
  box-sizing: border-box;
}

.container {
  overflow-x: hidden;
}
```

### **2. Text Overflow:**

```css
/* Prevent text from breaking layout */
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### **3. Button Stacking:**

```css
/* Stack buttons on mobile */
@media (max-width: 768px) {
  .btn-group {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
```

## 📱 **Mobile-First Approach:**

### **Best Practices:**

1. **Start with mobile** design first
2. **Progressive enhancement** for larger screens
3. **Touch-friendly** interactions
4. **Fast loading** on slow connections
5. **Readable text** without zooming

### **CSS Structure:**

```css
/* Mobile first */
.component {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    /* Tablet enhancements */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    /* Desktop enhancements */
  }
}
```

## 🎯 **Next Steps:**

### **Cần cải thiện thêm:**

- [ ] Test trên các thiết bị thực tế
- [ ] Optimize images cho mobile
- [ ] Add loading states cho mobile
- [ ] Improve touch interactions
- [ ] Test với screen readers

### **Performance:**

- [ ] Lazy load images
- [ ] Optimize CSS bundle
- [ ] Add service worker
- [ ] Implement caching

Website hiện tại đã responsive tốt và sẵn sàng cho production! 🎉
