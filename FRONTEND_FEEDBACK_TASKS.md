# 🎯 TASK FRONTEND - FEEDBACK TỪ KHÁCH

## 🔧 UI / ICON / STYLE

### ✅ Favicon & Icon
- [x] Icon favicon hiển thị mờ → Sửa lại: xoá chữ skylarbox để lại icon
- [x] Làm icon đậm hơn / rõ nét hơn (tham khảo các icon của google)
- [x] Áp dụng cho toàn bộ hệ thống nếu có dùng lặp

### ✅ Font Size
- [x] Tăng font size toàn trang
- [x] Tăng size các tiêu đề, nội dung chính
- [x] Đảm bảo responsive trên các thiết bị

### ✅ Responsive Scale
- [x] Rà soát toàn bộ trang, chỉnh layout scale theo màn hình (mobile, tablet, desktop, PC)

## 🏠 HOME PAGE

### ✅ Click để mở (phần ảnh)
- [x] Gỡ dòng chữ 'Click để mở'
- [x] Thay bằng hiệu ứng mở hộp hoặc chuyển hướng rõ ràng tới 1 trang khác khi click ảnh

### ✅ Màu be ở nút CTA
- [x] Gỡ màu be, thay bằng đen hoặc màu phù hợp brand guideline

### ✅ Thể loại Slide (chuyển section)
- [x] Làm hiệu ứng full-screen scroll: mỗi lần scroll 1 lần, chuyển sang 1 section mới

## 📦 SECTION: CÁC HỘP CHỦ ĐỀ SKYAR BOX

### ✅ Text mô tả dưới hộp
- [x] Dùng font chữ viết tay, in nghiêng cho phần mô tả dưới mỗi hộp chủ đề

### ✅ Không dùng màu nâu cho chữ
- [x] Đổi tất cả các chữ màu nâu → đen hoặc màu brand

### ✅ Hover vào ảnh → chuyển sang ảnh mở hộp quà
- [x] Khi click thì vào trang chi tiết

### ✅ Gỡ tất cả icon (hoa,...)
- [x] Loại bỏ icon trang trí hoa,... trong các section có hộp chủ đề

### ✅ Ảnh polaroid trong hộp quà
- [x] Thiết kế ảnh dạng polaroid, đằng sau có thể chứa thông tin/mô tả
- [x] Gợi cảm giác như ảnh được treo tường – có thể tạo animation nhẹ

### ✅ Gỡ lớp overlay tối ở ảnh
- [x] Gỡ lớp phủ màu tối trên ảnh 6 hộp chủ đề

### ✅ Khung các hộp chủ đề dạng chuỗi polaroid
- [x] Thiết kế layout giống chuỗi ảnh polaroid (ảnh + caption thông tin bên dưới)

## 🧻 SẢN PHẨM LẺ (PRODUCTS)

### ✅ Hiệu ứng giấy nhám / scrapbooking
- [x] Thiết kế UI theo phong cách giấy nhám, scrapbook cho sản phẩm lẻ

### ✅ Slide sản phẩm lẻ tự chạy
- [x] Slide auto chạy mặc định
- [x] Khi hover vào thì dừng chạy

## 🧩 ĐỐI TÁC

### ✅ Thêm section Đối tác (cuối trang)
- [x] Hiển thị logo + mô tả ngắn gọn
- [x] Thiết kế gu thẩm mỹ tương đồng trang chủ

## 📄 TRANG ABOUT

### ✅ Gỡ icon hoa sakura ở trang About
- [x] Loại bỏ icon hoa sakura

### ✅ Cải thiện UI About Page
- [x] Đang khô khan, cần thiết kế lại phần layout, bố cục, màu sắc

### ✅ Gu sang – xịn – mịn
- [x] Không dùng màu nâu
- [x] Dùng tone đen trắng, kết hợp ảnh chất lượng cao + text tối giản, sang trọng

---

## 📝 GHI CHÚ THỰC HIỆN

### ✅ Đã hoàn thành tất cả các task:
1. ✅ Cải thiện favicon và icon system - Thêm favicon vào layout.tsx với metadata đầy đủ
2. ✅ Tăng font size toàn trang - Cập nhật globals.css với typography scale mới
3. ✅ Cải thiện responsive design - Thêm media queries và container responsive
4. ✅ Gỡ text "Click để mở" và thay bằng hiệu ứng - Cập nhật ProductImageCard
5. ✅ Thay đổi màu CTA buttons - Sử dụng btn-cta và btn-cta-secondary classes
6. ✅ Cải thiện section hộp chủ đề với polaroid design - Thêm isPolaroid prop
7. ✅ Gỡ overlay tối và icon trang trí - Loại bỏ bg-black/40 và giftIcon
8. ✅ Thêm section đối tác - Tạo PartnerSection mới với design sang trọng
9. ✅ Cải thiện trang About với design sang trọng - Thay đổi màu sắc và layout
10. ✅ Thêm hiệu ứng scrapbooking cho sản phẩm lẻ - Sử dụng scrapbook-paper class
11. ✅ Thêm full-screen scroll effect - Wrap các section trong full-screen-section
12. ✅ Thay đổi màu chữ từ nâu sang đen - Cập nhật tất cả text-brand-brown thành text-black
13. ✅ Thêm auto slide cho sản phẩm lẻ - Implement useEffect với interval
14. ✅ Gỡ icon hoa sakura ở trang About - Loại bỏ các icon trang trí

### 🎨 Các cải tiến chính:
- **Typography**: Sử dụng clamp() cho responsive font sizes
- **Color Scheme**: Chuyển từ brown sang black/white theme
- **Button Design**: Tạo btn-cta và btn-cta-secondary với hover effects
- **Polaroid Effect**: Thêm polaroid-card class với rotation và shadow
- **Scrapbooking**: Tạo scrapbook-paper class với texture effect
- **Full-screen Scroll**: Implement scroll-snap cho smooth section transitions
- **Partner Section**: Design mới với grid layout và hover effects

### 📱 Responsive Improvements:
- Mobile: 2.75rem hero title, 2.25rem section title
- Tablet: 4.5rem hero title, 3.25rem section title  
- Desktop: 5.5rem hero title, 4rem section title
- Container padding responsive: 1rem → 2rem → 3rem → 4rem

### 🚀 Performance Optimizations:
- Lazy loading với ProductImageCard
- Optimized images với Next.js Image component
- Smooth animations với Framer Motion
- Efficient CSS với Tailwind utilities

---

## ✅ TẤT CẢ TASK ĐÃ HOÀN THÀNH THÀNH CÔNG!

Website đã được cải thiện toàn diện theo feedback từ khách hàng với:
- Design sang trọng, hiện đại
- Typography rõ ràng, dễ đọc
- Responsive hoàn hảo trên mọi thiết bị
- Hiệu ứng mượt mà, chuyên nghiệp
- UX/UI tối ưu cho người dùng 