import React from "react";
import Marquee from "react-fast-marquee";
import { Flame, Star, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";

const PartnerSection = () => {
  const getPackageStyle = (packageType: string) => {
    switch (packageType) {
      case "diamond":
        return {
          containerClass:
            "border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-2",
          imageClass: "filter-none",
          badge: (
            <div className='flex items-center gap-1'>
              <span>💎</span>
              <span>Kim Cương</span>
            </div>
          ),
          badgeClass:
            "bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full",
        };
      case "silver":
        return {
          containerClass:
            "border border-gray-300 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-1",
          imageClass: "filter-none",
          badge: (
            <div className='flex items-center gap-1'>
              <Star className='w-3 h-3' />
              <span>Bạc</span>
            </div>
          ),
          badgeClass:
            "bg-gradient-to-r from-gray-400 to-slate-400 text-white text-xs px-2 py-1 rounded-full",
        };
      case "bronze":
      case "brozen": // Handle typo in data
        return {
          containerClass:
            "border border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-1",
          imageClass: "filter-none",
          badge: (
            <div className='flex items-center gap-1'>
              <Award className='w-3 h-3' />
              <span>Đồng</span>
            </div>
          ),
          badgeClass:
            "bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full",
        };
      default:
        return {
          containerClass: "",
          imageClass:
            "filter grayscale hover:grayscale-0 transition-all duration-300",
          badge: "",
          badgeClass: "",
        };
    }
  };

  return (
    <section className='w-full py-6 bg-gray-50 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='space-y-6'
      >
        <Marquee
          speed={50}
          gradient={true}
          gradientColor='rgb(249, 250, 251)'
          gradientWidth={100}
          pauseOnHover={true}
          direction='right'
          autoFill
        >
          <div className='flex items-center space-x-16 mx-8'>
            <div className='flex gap-16 items-center lg:filter lg:grayscale hover:grayscale-0 transition-all duration-300'>
              <Flame className='size-6 text-mainColor' />
            </div>
            <div className='flex gap-16 items-center lg:filter lg:grayscale hover:grayscale-0 transition-all duration-300'>
              <span className='text-xl font-bold text-mainColor'>
                Nhà tài trợ dự án Thắp Sáng
              </span>
            </div>

            <div className='flex gap-16 items-center lg:filter lg:grayscale hover:grayscale-0 transition-all duration-300'>
              <Flame className='size-6 text-mainColor' />
            </div>
            <div className='flex gap-16 items-center lg:filter lg:grayscale hover:grayscale-0 transition-all duration-300'>
              <span className='text-xl font-bold text-mainColor text-outline-thin'>
                Cảm ơn các đối tác
              </span>
            </div>
          </div>
        </Marquee>

        <Marquee
          speed={50}
          gradient={true}
          gradientColor='rgb(249, 250, 251)'
          gradientWidth={100}
          pauseOnHover={true}
          autoFill
        >
          <div className='flex items-center space-x-12 mx-8'>
            {partners.map((partner, index) => {
              const style = getPackageStyle(partner.package);
              return (
                <div
                  key={partner.id || index}
                  className='flex-shrink-0 relative group'
                >
                  <div
                    className={`w-40 h-24 flex items-center justify-center relative transition-all duration-300 hover:scale-105`}
                  >
                    <div className='w-full h-full relative overflow-hidden rounded'>
                      <Image
                        src={partner.logo}
                        alt={
                          partner.shortName || partner.companyName || "Partner"
                        }
                        fill
                        className={`object-contain transition-all duration-300 `}
                      />
                    </div>
                    {/* {style.badge && (
                      <div className='absolute -top-2 -right-2 z-10'>
                        <span className={style.badgeClass}>{style.badge}</span>
                      </div>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </motion.div>
    </section>
  );
};

export default PartnerSection;
