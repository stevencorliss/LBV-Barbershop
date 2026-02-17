"use client";

import { motion } from "framer-motion";
import { SHOP_INFO, BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-surface-900">
        {/* Replace with actual hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-900/50 via-surface-900/30 to-surface-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
        >
          {SHOP_INFO.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-surface-200 mb-4 max-w-2xl mx-auto"
        >
          {SHOP_INFO.description}
        </motion.p>

        {/* Cash only notice */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-light font-medium mb-8"
        >
          We are operating <strong>cash only</strong> for the moment. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Book An Appointment
          </a>
        </motion.div>
      </div>

      {/* Decorative bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 barber-stripe" />
    </section>
  );
}
