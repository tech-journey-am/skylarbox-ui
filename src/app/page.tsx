import HeroBanner from "@/components/sections/HeroBanner";
import ProductsSection from "@/components/sections/ProductsSection";
import BlogSection from "@/components/sections/BlogSection";
import CommunitySection from "@/components/sections/CommunitySection";
import SubscriptionSection from "@/components/sections/SubscriptionSection";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#F8F6F3] to-[#F2F0ED]'>
      {/* Hero Banner Section - Full responsive */}
      <HeroBanner />

      {/* Products Section - Responsive grid */}
      <ProductsSection />

      {/* Subscription Section - Mobile-first */}
      <SubscriptionSection />

      {/* Main Content Area with Two-Column Layout */}
      <div className='px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Main Content - Left Column */}
          <div className='lg:col-span-3 space-y-12'>
            {/* Blog Section - Main Content Only */}
            <section className='bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl md:text-4xl font-display font-bold text-[#6B5B4F] mb-4'>
                  Blog & Cảm hứng
                </h2>
                <p className='text-[#8B7355] max-w-2xl mx-auto'>
                  Khám phá những bài viết về self-care, mindfulness và chữa
                  lành. Mỗi câu chuyện là một hành trình, mỗi bài viết là một
                  món quà cho tâm hồn.
                </p>
              </div>

              <div className='space-y-8'>
                {[
                  {
                    title: "Mindfulness trong cuộc sống hiện đại",
                    excerpt:
                      "Làm thế nào để duy trì sự tỉnh thức và bình an giữa nhịp sống bận rộn? Cùng tìm hiểu những phương pháp thực tế và dễ áp dụng.",
                    author: "Dr. Minh Anh",
                    date: "12 Tháng 12, 2024",
                    readTime: "7 phút đọc",
                  },
                  {
                    title:
                      "Chữa lành bằng nghệ thuật: Kintsugi và triết lý sống",
                    excerpt:
                      "Khám phá nghệ thuật Kintsugi Nhật Bản và cách áp dụng triết lý 'vẻ đẹp trong khuyết tật' để chữa lành những tổn thương trong tâm hồn.",
                    author: "Thanh Hương",
                    date: "10 Tháng 12, 2024",
                    readTime: "6 phút đọc",
                  },
                ].map((post, index) => (
                  <article
                    key={index}
                    className='bg-white/40 rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300'
                  >
                    <div className='flex items-center gap-4 text-[#8B7355] text-sm mb-3'>
                      <span>👤 {post.author}</span>
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <h3 className='text-xl font-display font-bold text-[#6B5B4F] mb-3'>
                      {post.title}
                    </h3>
                    <p className='text-[#8B7355] leading-relaxed mb-4'>
                      {post.excerpt}
                    </p>
                    <a
                      href='#'
                      className='text-[#A67C5A] font-semibold hover:text-[#8B7355] transition-colors'
                    >
                      Đọc thêm →
                    </a>
                  </article>
                ))}
              </div>

              <div className='text-center mt-8'>
                <a
                  href='/blog'
                  className='inline-flex items-center px-6 py-3 bg-[#A67C5A] text-white rounded-full font-semibold hover:bg-[#8B7355] transition-colors'
                >
                  Xem tất cả bài viết →
                </a>
              </div>
            </section>

            {/* Community & Testimonials Section */}
            <section className='bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl md:text-4xl font-display font-bold text-[#6B5B4F] mb-4'>
                  Cộng đồng & Testimonials
                </h2>
                <p className='text-[#8B7355] max-w-2xl mx-auto'>
                  Hãy lắng nghe những câu chuyện chân thật từ cộng đồng
                  Skylarbox - nơi mỗi người đều tìm thấy sự bình yên theo cách
                  riêng của mình.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {[
                  {
                    name: "Minh Thu, 28",
                    role: "Marketing Manager",
                    product: "Hộp 'Ngày dịu dàng'",
                    joined: "Thành viên từ 2023",
                    text: "Tôi đã tìm thấy sự bình an trong những chiếc hộp Skylarbox. Mỗi món quà đều như một lời nhắc nhở dịu dàng rằng mình cần dừng lại và chăm sóc bản thân.",
                  },
                  {
                    name: "Lan Anh, 24",
                    role: "Graphic Designer",
                    product: "Gói subscription 6 tháng",
                    joined: "Thành viên từ 2024",
                    text: "Cộng đồng Skylarbox thật sự đặc biệt. Ở đây tôi không chỉ nhận được những món quà ý nghĩa mà còn được chia sẻ hành trình chữa lành cùng những người bạn đồng điệu.",
                  },
                  {
                    name: "Quỳnh Như, 31",
                    role: "Teacher",
                    product: "Workshop 'Tự yêu thương'",
                    joined: "Thành viên từ 2023",
                    text: "Những buổi workshop của Skylarbox đã giúp tôi hiểu rõ hơn về bản thân. Tôi học được cách yêu thương và tha thứ cho chính mình một cách chân thành.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className='bg-white/40 rounded-2xl p-6 border border-white/30'
                  >
                    <div className='flex items-center mb-3'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-4 h-4 text-[#E8C4A0] fill-current'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                        </svg>
                      ))}
                    </div>
                    <p className='text-[#8B7355] italic mb-4 text-sm leading-relaxed'>
                      "{testimonial.text}"
                    </p>
                    <div className='space-y-1'>
                      <p className='font-semibold text-[#6B5B4F] text-sm'>
                        {testimonial.name}
                      </p>
                      <p className='text-[#8B7355] text-xs'>
                        {testimonial.role}
                      </p>
                      <p className='text-[#A67C5A] text-xs font-medium'>
                        {testimonial.product}
                      </p>
                      <p className='text-[#8B7355] text-xs'>
                        {testimonial.joined}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Connect and Grow Together Section */}
            <section className='bg-gradient-to-r from-[#A67C5A]/20 to-[#A8B39A]/20 rounded-3xl p-8 border border-white/20 shadow-lg'>
              <div className='text-center'>
                <h2 className='text-2xl md:text-3xl font-display font-bold text-[#6B5B4F] mb-4'>
                  Kết nối và phát triển cùng nhau
                </h2>
                <p className='text-[#8B7355] mb-6 max-w-2xl mx-auto'>
                  Tham gia cộng đồng Skylarbox để trải nghiệm những hoạt động ý
                  nghĩa và kết nối với những người cùng chung hành trình.
                </p>
                <div className='flex justify-center space-x-8'>
                  <div className='text-3xl'>📱</div>
                  <div className='text-3xl'>📷</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Right Column */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Newsletter Subscription */}
            <div className='bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg'>
              <h3 className='font-display font-bold text-[#6B5B4F] mb-3'>
                Đăng ký nhận bài viết mới
              </h3>
              <p className='text-[#8B7355] text-sm mb-4'>
                Nhận những bài viết mới nhất về chữa lành và phát triển bản
                thân.
              </p>
              <div className='space-y-3'>
                <input
                  type='email'
                  placeholder='Email của bạn'
                  className='w-full px-4 py-2 bg-white/60 border border-[#A67C5A]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A67C5A]/50 text-sm'
                />
                <button className='w-full bg-[#A67C5A] text-white py-2 rounded-xl font-semibold hover:bg-[#8B7355] transition-colors text-sm'>
                  Đăng ký
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className='bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg'>
              <h3 className='font-display font-bold text-[#6B5B4F] mb-4'>
                Tags phổ biến
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  "meditation",
                  "yoga",
                  "tự yêu thương",
                  "cân bằng",
                  "healing",
                  "mindfulness",
                  "wellness",
                  "peace",
                ].map((tag) => (
                  <a
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className='px-3 py-1 bg-[#A8B39A]/20 text-[#6B5B4F] text-sm rounded-full hover:bg-[#A8B39A]/30 transition-colors'
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className='bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg'>
              <h3 className='font-display font-bold text-[#6B5B4F] mb-4'>
                Chủ đề
              </h3>
              <div className='space-y-3'>
                {[
                  { name: "Self-Care", count: 12 },
                  { name: "Mindfulness", count: 8 },
                  { name: "Chữa lành", count: 15 },
                  { name: "Phát triển bản thân", count: 10 },
                ].map((category) => (
                  <a
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase()}`}
                    className='flex items-center justify-between p-2 rounded-lg hover:bg-[#A8B39A]/10 transition-colors group'
                  >
                    <span className='text-[#6B5B4F] group-hover:text-[#A67C5A] transition-colors text-sm'>
                      {category.name}
                    </span>
                    <span className='text-[#8B7355] text-xs'>
                      {category.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section - Enhanced responsive */}
      <section className='py-12 sm:py-16 md:py-20 lg:py-24 bg-white'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            {/* Section Header */}
            <div className='text-center mb-8 sm:mb-12 md:mb-16'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#6B5B4F] mb-2 sm:mb-4'>
                Giá trị cốt lõi của chúng tôi
              </h2>
              <div className='w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#A67C5A] to-[#D4B996] mx-auto mb-4 sm:mb-6'></div>
              <p className='text-base sm:text-lg text-[#8B7355] leading-relaxed max-w-2xl mx-auto px-4'>
                Chúng tôi tin rằng mỗi sản phẩm đều mang trong mình năng lượng
                chữa lành, giúp bạn kết nối với chính mình theo cách tự nhiên
                nhất.
              </p>
            </div>

            {/* Values Grid - Responsive breakpoints */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
              {[
                {
                  icon: "🌿",
                  title: "Tự nhiên",
                  description: "Sản phẩm từ thiên nhiên, an toàn cho sức khỏe",
                  color: "bg-[#A67C5A]",
                },
                {
                  icon: "💖",
                  title: "Chữa lành",
                  description: "Hỗ trợ hành trình chữa lành tâm hồn",
                  color: "bg-[#A8B39A]",
                },
                {
                  icon: "✨",
                  title: "Tinh tế",
                  description: "Thiết kế tinh tế, ý nghĩa sâu sắc",
                  color: "bg-[#E8C4A0]",
                },
                {
                  icon: "🤝",
                  title: "Cộng đồng",
                  description: "Xây dựng cộng đồng yêu thương và chia sẻ",
                  color: "bg-[#D4B996]",
                },
              ].map((value, index) => (
                <div key={index} className='text-center group'>
                  {/* Icon - Responsive sizing */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {value.icon}
                  </div>

                  {/* Title - Responsive text */}
                  <h3 className='text-base sm:text-lg md:text-xl font-bold text-[#6B5B4F] mb-2'>
                    {value.title}
                  </h3>

                  {/* Description - Hidden on mobile, shown on larger screens */}
                  <p className='hidden sm:block text-[#8B7355] leading-relaxed text-sm md:text-base px-2'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Unboxing Experience - Mobile optimized */}
            <div className='mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-[#F0E6D6]/60 to-[#E8DCC0]/40 rounded-xl sm:rounded-2xl p-6 sm:p-8'>
              <div className='flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8'>
                <div className='text-3xl sm:text-4xl md:text-6xl'>📦</div>
                <div className='text-2xl sm:text-3xl md:text-4xl'>→</div>
                <div className='text-3xl sm:text-4xl md:text-6xl'>✨</div>
                <div className='text-2xl sm:text-3xl md:text-4xl'>→</div>
                <div className='text-3xl sm:text-4xl md:text-6xl'>💝</div>
              </div>
              <p className='text-center mt-3 sm:mt-4 text-[#8B7355] font-medium text-sm sm:text-base'>
                Trải nghiệm mở hộp quà đầy cảm xúc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Full responsive */}
      <section className='py-12 sm:py-16 bg-gradient-to-r from-[#A67C5A] to-[#A8B39A]'>
        <div className='px-4 sm:px-6 lg:px-8 text-center'>
          <div className='max-w-2xl mx-auto space-y-4 sm:space-y-6'>
            {/* Heading - Responsive typography */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white'>
              Nhận ưu đãi 10% cho đơn hàng đầu tiên
            </h2>

            {/* Description - Responsive text */}
            <p className='text-white/90 text-base sm:text-lg leading-relaxed px-4'>
              Đăng ký nhận bản tin để cập nhật sản phẩm mới và tips chữa lành
            </p>

            {/* Email Form - Mobile-first design */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Địa chỉ email của bạn'
                className='flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base'
              />
              <button className='px-6 py-3 bg-white text-[#A67C5A] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap'>
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
