# 🗺️ Mini Map: Hệ thống Quản lý theo Agency

## Đề xuất

- Bộ phận đề xuất
  - Hậu đãi (Agency)
- Người đề xuất
- Tên tài nguyên
- Mô tả (description)
- Ghi chú (note) | Null
- Đơn giá
- Số lượng
- Phí
  - default: 0
- Tổng tiền (amount)
- Thông tin đối tác | Null
- Mục đích sử dụng | Null
- Thông tin thanh toán (chargeInfo)
- Trạng thái
- Ngày đề xuất

## Thành viên

- username
- nhượng quyền
  - agency
- Tiền thắng (profit)
- Tổng nạp (deposit)
- Tổng rút (withdraw)
  - Rút lần cuối (withdraw_at)
- Tham gia (join_at)
- Đăng nhập (login_at)
- Cập nhật (updated_at)

## Agency

- username
- Trạng thái (status)

## Doanh Thu

- Bộ phận
  - Gồm danh sách các agency
- Lấy danh sách thành viên theo cột agency
- Phân biệt doanh thu theo key `agency`

> 💡 Ghi chú: "Hậu đãi" chính là `agency` đại diện cho bộ phận.

