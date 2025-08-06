"use client";

import { useState } from "react";
import ProductImageCard from "./ProductImageCard";
import { demoProducts } from "@/data/demoProducts";

export default function ProductImageCardDemo() {
  const [selectedMode, setSelectedMode] = useState<"hover" | "click" | "auto">(
    "hover"
  );
  const [showIndicators, setShowIndicators] = useState(true);

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>
            ProductImageCard Demo
          </h1>
          <p className='text-gray-600 mb-6'>
            Demo các tính năng của ProductImageCard component
          </p>

          {/* Controls */}
          <div className='flex flex-wrap gap-4 justify-center mb-8'>
            <div className='flex items-center gap-2'>
              <label className='text-sm font-medium'>Mode:</label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value as any)}
                className='px-3 py-1 border rounded-md text-sm'
              >
                <option value='hover'>Hover</option>
                <option value='click'>Click</option>
                <option value='auto'>Auto Play</option>
              </select>
            </div>

            <div className='flex items-center gap-2'>
              <label className='text-sm font-medium'>Indicators:</label>
              <input
                type='checkbox'
                checked={showIndicators}
                onChange={(e) => setShowIndicators(e.target.checked)}
                className='w-4 h-4'
              />
            </div>
          </div>
        </div>

        {/* Demo Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {demoProducts.map((product) => (
            <div key={product.id} className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-lg font-semibold mb-4 text-center'>
                {product.name}
              </h3>
              <div className='h-64 mb-4'>
                <ProductImageCard
                  giftImage={product.giftImage}
                  productImage={product.productImage}
                  giftIcon={product.giftIcon}
                  alt={product.name}
                  className='w-full h-full'
                  autoPlay={selectedMode === "auto"}
                  autoPlayDuration={4000}
                  showIndicator={showIndicators}
                  giftTitle={product.giftTitle}
                  productTitle={product.productTitle}
                  giftSubtitle={product.giftSubtitle}
                  productSubtitle={product.productSubtitle}
                  onImageChange={(isProduct) => {
                    console.log(
                      `${product.name}: ${isProduct ? "Product" : "Gift"} view`
                    );
                  }}
                />
              </div>

              <div className='text-center text-sm text-gray-600'>
                <p>Mode: {selectedMode}</p>
                <p>Indicators: {showIndicators ? "On" : "Off"}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className='mt-12 bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-4'>Hướng dẫn sử dụng</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-medium mb-2'>Các chế độ:</h3>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>
                  • <strong>Hover:</strong> Thay đổi hình khi hover chuột
                </li>
                <li>
                  • <strong>Click:</strong> Thay đổi hình khi click
                </li>
                <li>
                  • <strong>Auto Play:</strong> Tự động thay đổi hình
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-medium mb-2'>Tính năng:</h3>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>• Animation mượt mà với Framer Motion</li>
                <li>• Hỗ trợ tùy chỉnh icon và text</li>
                <li>• Callback khi thay đổi hình</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
