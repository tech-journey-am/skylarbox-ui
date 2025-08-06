"use client";

import React from "react";
import { motion } from "framer-motion";
import { playlists, subscriptionPlans } from "@/data/spotify";
import Button from "@/components/ui/button";
import Link from "next/link";

const SpotifySubscriptionSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-brand-cream to-brand-sky/20"
      style={{ padding: "5vw 0" }}
    >
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        {/* Spotify Playlists Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "5vw" }}
        >
          <div className="grid md:grid-cols-2" style={{ gap: "3vw" }}>
            <div>
              <h2
                className="font-bold mb-6"
                style={{
                  fontSize: "clamp(22px, 2vw, 2.5rem)",
                  marginBottom: "1.5vw",
                }}
              >
                Playlist chữa lành độc quyền
              </h2>
              <p
                className="text-brand-gray mb-8"
                style={{
                  fontSize: "clamp(16px, 1vw, 1.25rem)",
                  marginBottom: "2vw",
                }}
              >
                Khám phá những playlist được chọn lọc đặc biệt cho thành viên
                Skylarbox. Âm nhạc có khả năng chữa lành tâm hồn và mang lại
                bình yên.
              </p>

              <div
                className="space-y-4 mb-8"
                style={{ gap: "1vw", marginBottom: "2vw" }}
              >
                {playlists.map((playlist: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    style={{ padding: "1vw" }}
                  >
                    <div
                      className="flex items-center gap-3"
                      style={{ gap: "0.75vw" }}
                    >
                      <div
                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                        style={{
                          width: "2.5vw",
                          height: "2.5vw",
                          minWidth: "40px",
                          minHeight: "40px",
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          style={{
                            width: "1.25vw",
                            height: "1.25vw",
                            minWidth: "20px",
                            minHeight: "20px",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5v10l8-5-8-5z" />
                        </svg>
                      </div>
                      <div>
                        <h3
                          className="font-medium"
                          style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                        >
                          {playlist}
                        </h3>
                        <p
                          className="text-sm text-brand-gray"
                          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                        >
                          Playlist chữa lành
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                className="bg-green-500 hover:bg-green-600"
                style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
              >
                Nghe trên Spotify
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white"
              style={{ padding: "2vw", height: "24vw", minHeight: "384px" }}
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    width: "6vw",
                    height: "6vw",
                    minWidth: "96px",
                    minHeight: "96px",
                    marginBottom: "1.5vw",
                  }}
                >
                  <svg
                    className="w-12 h-12 text-white"
                    style={{
                      width: "3vw",
                      height: "3vw",
                      minWidth: "48px",
                      minHeight: "48px",
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm4.5 14.5l-6-3.5V5h12v9l-6 3.5z" />
                  </svg>
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                >
                  Spotify Premium
                </h3>
                <p
                  className="text-white/80"
                  style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                >
                  Tận hưởng âm nhạc không quảng cáo với chất lượng cao
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Subscription Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center" style={{ marginBottom: "4vw" }}>
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(22px, 2vw, 2.5rem)",
                marginBottom: "1vw",
              }}
            >
              Gói subscription
            </h2>
            <p
              className="text-brand-gray"
              style={{
                maxWidth: "50vw",
                margin: "0 auto",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              Chọn gói phù hợp với nhu cầu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: "2vw" }}>
            {subscriptionPlans.map((plan: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 p-6 text-center"
                  style={{ padding: "1.5vw" }}
                >
                  <h3
                    className="font-bold"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    {plan.period}
                  </p>
                </div>

                <div className="p-6" style={{ padding: "1.5vw" }}>
                  <div className="text-center mb-6">
                    <span
                      className="text-4xl font-bold text-brand-lavender"
                      style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-brand-gray"
                      style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                    >
                      /{plan.period}
                    </span>
                  </div>

                  <ul
                    className="space-y-4 mb-6"
                    style={{ gap: "0.5vw", marginBottom: "1.5vw" }}
                  >
                    {plan.features.map(
                      (feature: string, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                          style={{ gap: "0.5vw" }}
                        >
                          <div
                            className="w-2 h-2 bg-brand-lavender rounded-full"
                            style={{
                              width: "0.5vw",
                              height: "0.5vw",
                              minWidth: "8px",
                              minHeight: "8px",
                            }}
                          />
                          <span
                            className="text-brand-gray"
                            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                          >
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <Button
                    className="w-full"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Chọn gói này
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifySubscriptionSection;

