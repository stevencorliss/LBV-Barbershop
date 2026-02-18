"use client";

import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-end justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-surface-900">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-75"
          style={{
            backgroundImage: `url('/images/logo-bg.png')`,
          }}
        />
        {/* Gradient overlay - clear in middle/top, dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/20 via-transparent to-surface-900/95" />
      </div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 container-narrow text-center text-white pb-12">
        {/* Cash only notice */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-accent-light font-semibold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-lg tracking-wide"
          >
            We are operating <strong>cash only</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
