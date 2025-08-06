# ProductImageCard Component

Component hiển thị hình ảnh với hiệu ứng hover/click để thay đổi từ hộp quà sang hình sản phẩm với animation mượt mà.

## Tính năng

- ✅ Hiệu ứng hover/click để thay đổi hình ảnh
- ✅ Animation mượt mà với Framer Motion
- ✅ Auto play mode
- ✅ Tùy chỉnh icon và text
- ✅ Callback khi thay đổi hình
- ✅ Responsive design
- ✅ Hỗ trợ data từ API

## Cách sử dụng

### Basic Usage

```tsx
import ProductImageCard from "@/components/ui/ProductImageCard";

<ProductImageCard
  giftImage="/images/box/demo.png"
  productImage="/images/box/box_1.png"
  giftIcon="🌸"
  alt="Skylarbox Demo"
  className="w-full h-full"
/>
```

### Advanced Usage

```tsx
<ProductImageCard
  giftImage="/images/box/demo.png"
  productImage="/images/box/box_1.png"
  giftIcon="✨"
  alt="Vết nứt ánh sáng"
  className="w-full h-full"
  autoPlay={true}
  autoPlayDuration={4000}
  showIndicator={true}
  giftTitle="Hộp quà Kintsugi"
  productTitle="Vết nứt ánh sáng"
  giftSubtitle="Nghệ thuật chữa lành"
  productSubtitle="Chữa lành vết thương"
  onImageChange={(isProduct) => {
    console.log("Image changed to:", isProduct ? "product" : "gift");
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `giftImage` | `string` | - | URL hình ảnh hộp quà |
| `productImage` | `string` | - | URL hình ảnh sản phẩm |
| `giftIcon` | `string` | `"🎁"` | Icon hiển thị trên hộp quà |
| `alt` | `string` | - | Alt text cho hình ảnh |
| `className` | `string` | `""` | CSS classes bổ sung |
| `onImageChange` | `(isProduct: boolean) => void` | - | Callback khi thay đổi hình |
| `autoPlay` | `boolean` | `false` | Tự động thay đổi hình |
| `autoPlayDuration` | `number` | `3000` | Thời gian auto play (ms) |
| `showIndicator` | `boolean` | `true` | Hiển thị indicator |
| `giftTitle` | `string` | - | Tiêu đề hộp quà |
| `productTitle` | `string` | - | Tiêu đề sản phẩm |
| `giftSubtitle` | `string` | - | Phụ đề hộp quà |
| `productSubtitle` | `string` | - | Phụ đề sản phẩm |

## Các chế độ hoạt động

### 1. Hover Mode (Mặc định)
- Thay đổi hình khi hover chuột
- Trở về hình ban đầu khi rời chuột

### 2. Click Mode
- Click để thay đổi hình
- Click lần nữa để trở về

### 3. Auto Play Mode
- Tự động thay đổi hình theo thời gian
- Dừng khi click

## Sử dụng với API

```tsx
// Ví dụ với data từ API
const products = [
  {
    id: 1,
    name: "Vết nứt ánh sáng",
    giftImage: "/api/images/gift/1",
    productImage: "/api/images/product/1",
    giftIcon: "✨",
    giftTitle: "Hộp quà Kintsugi",
    productTitle: "Vết nứt ánh sáng",
  },
  // ...
];

{products.map((product) => (
  <ProductImageCard
    key={product.id}
    giftImage={product.giftImage}
    productImage={product.productImage}
    giftIcon={product.giftIcon}
    alt={product.name}
    giftTitle={product.giftTitle}
    productTitle={product.productTitle}
  />
))}
```

## Hook useProductImage

Sử dụng hook để quản lý trạng thái:

```tsx
import { useProductImage } from "@/hooks/useProductImage";

const {
  isHovered,
  isClicked,
  showProduct,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  reset,
  forceShowProduct,
} = useProductImage({
  autoPlay: true,
  autoPlayDuration: 4000,
  onImageChange: (isProduct) => {
    console.log("Image changed:", isProduct);
  },
});
```

## Demo

Truy cập `/demo` để xem demo đầy đủ các tính năng.

## Animation

Component sử dụng Framer Motion với các hiệu ứng:
- Scale và rotate animation
- Smooth transitions
- Hover effects
- Loading states

## Responsive

Component tự động responsive và hoạt động tốt trên:
- Desktop
- Tablet
- Mobile 