# Website Template Nhôm Đúc Mỹ Nghệ Cao Cấp

Bộ template website doanh nghiệp sản xuất, gia công và thi công **Cổng nhôm đúc, Cầu thang, Hàng rào, Ban công lan can biệt thự**.
Dự án được thiết kế chuẩn SEO, tối ưu tốc độ tải trang, tương thích 100% trên cả Máy tính (Desktop) và Điện thoại (Mobile) theo cấu trúc chuẩn của trang [nhomductienthanh.com](https://nhomductienthanh.com/).

---

## 📁 Cấu Trúc Thư Mục

```
nhomduc-website/
├── index.html          # Trang chủ với đầy đủ banner, danh mục, bảng giá, quy trình 5 bước
├── gioi-thieu.html     # Trang giới thiệu năng lực nhà máy, công nghệ hút chân không
├── san-pham.html       # Bộ sưu tập sản phẩm với bộ lọc thông minh (Cổng, Cầu thang, Lan can...)
├── lien-he.html        # Trang liên hệ, thông tin showroom, nhà xưởng và form khảo sát
├── css/
│   ├── style.css       # Toàn bộ CSS phong cách hoàng gia, tông vàng đồng sang trọng
│   └── responsive.css  # CSS tối ưu cho điện thoại và máy tính bảng
├── js/
│   ├── config.js       # FILE CẤU HÌNH TRUNG TÂM (Chỉnh tên cty, SĐT, Zalo, địa chỉ tại đây!)
│   └── main.js         # Xử lý tự động đồng bộ config, menu mobile, slider, modal báo giá
└── README.md           # Hướng dẫn sử dụng chi tiết
```

---

## ⚡ Hướng Dẫn Sử Dụng Nhanh

### 1. Xem thử website trên máy tính
Bạn không cần cài đặt bất kỳ phần mềm server hay cơ sở dữ liệu nào. Chỉ cần:
- Mở thư mục `/home/tuanexodus/.gemini/antigravity/scratch/nhomduc-website/`
- Nhấp đúp chuột vào file `index.html` để mở ngay trên trình duyệt Chrome, Cốc Cốc, Edge hoặc Firefox.

### 2. Cách đổi thông tin thương hiệu & số điện thoại
Mọi thông tin thương hiệu được quản lý tập trung trong file `js/config.js`. Bạn chỉ cần mở file này và thay đổi các giá trị:

```javascript
const SITE_CONFIG = {
  brand: {
    name: "Tên Thương Hiệu Của Bạn",
    companyFullName: "Công Ty TNHH Sản Xuất Nhôm Đúc...",
    slogan: "Slogan công ty của bạn...",
  },
  contact: {
    hotline: "09xx xxx xxx",      // Số hotline hiển thị và bấm gọi trực tiếp
    zalo: "09xx xxx xxx",         // Số Zalo nhận tin nhắn của khách
    email: "email@cuaban.vn",
    headquarters: "Địa chỉ trụ sở chính...",
    factory: "Địa chỉ nhà máy sản xuất...",
    showroomHanoi: "Địa chỉ văn phòng / showroom...",
  }
};
```
Ngay sau khi bạn lưu file `config.js`, toàn bộ các trang (`index.html`, `gioi-thieu.html`, `san-pham.html`, `lien-he.html`) sẽ **tự động cập nhật số điện thoại, link Zalo và tên thương hiệu mới**!

---

## 🌟 Các Tính Năng Nổi Bật

1. **Thanh điều hướng di động (Mobile Bottom Action Bar):**
   - Giống hệt trang gốc với 4 nút cố định dưới chân màn hình điện thoại: **Liên Hệ**, **Gọi Điện** (hiệu ứng sóng tỏa xanh lá), **Chat Zalo** (hiệu ứng rung lắc xanh dương), **Báo Giá**.
2. **Khảo sát & Báo giá nhanh (Popup Modal):**
   - Khách hàng bấm vào bất kỳ sản phẩm nào cũng có thể mở popup để gửi lại số điện thoại và kích thước cần tư vấn.
3. **Xem ảnh chi tiết (Lightbox Preview):**
   - Bấm vào biểu tượng kính lúp trên từng sản phẩm để phóng to ảnh xem chi tiết hoa văn sắc nét.
4. **Bộ lọc sản phẩm thông minh:**
   - Lọc nhanh các danh mục: Cổng nhôm đúc, Cầu thang, Lan can ban công, Hàng rào biệt thự.
5. **Bảng báo giá xưởng trực quan:**
   - Được đồng bộ trực tiếp từ danh sách cấu hình, trình bày rõ quy cách độ dày nhôm và khoảng giá/m².

---

## 🚀 Đưa Lên Mạng Internet (Hosting / Domain)

Template này là mã nguồn tĩnh thuần túy (HTML/CSS/JS), do đó:
- **Đưa lên Hosting cPanel / DirectAdmin:** Chỉ cần nén zip toàn bộ thư mục và giải nén vào thư mục `public_html`.
- **Đưa lên Netlify / Vercel / GitHub Pages:** Kéo thả thư mục dự án lên Netlify là website sẽ hoạt động online miễn phí 100% trong 30 giây.
