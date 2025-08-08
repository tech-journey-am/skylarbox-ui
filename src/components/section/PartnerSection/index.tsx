import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";

const PartnerSection = () => {
  // Take only first 6 partners
  const displayPartners = partners.slice(0, 6);

  return (
    <section className='w-full py-8 md:py-vw-4 bg-gradient-to-br from-brand-cream to-brand-sky/10'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-6 md:mb-vw-2'>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className='text-brand-gray text-2xl md:text-[3vw]  text-center font-bold uppercase'
          >
            Đồng hành cùng{" "}
            <span className='text-brand-lavender text-xl md:text-[2vw]'>
              Skylarbox
            </span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex items-center justify-center'
        >
          <div className='grid grid-cols-6 gap-6 md:gap-vw-4'>
            {displayPartners.map((partner, index) => (
              <motion.div
                key={partner.id || index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className='flex-shrink-0 relative group cursor-pointer'
              >
                <div className='w-10 h-10 md:w-vw-4 md:h-vw-4 flex items-center justify-center relative transition-all duration-300 hover:scale-110'>
                  <div className='w-full h-full relative overflow-hidden rounded'>
                    <Image
                      src={partner.logo}
                      alt={
                        partner.shortName || partner.companyName || "Partner"
                      }
                      fill
                      className='object-contain transition-all duration-300'
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
