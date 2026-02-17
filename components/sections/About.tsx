"use client";

import { motion } from "framer-motion";
import { SHOP_INFO } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface-50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-6">
            About
          </h2>

          <p className="text-lg md:text-xl text-surface-600 max-w-3xl mx-auto leading-relaxed">
            Experience top-tier men&apos;s grooming in{" "}
            {SHOP_INFO.address.city}, {SHOP_INFO.address.state} at{" "}
            <span className="text-surface-900 font-semibold">
              {SHOP_INFO.name}
            </span>
            —offering precision haircuts, expert beard trims, and classic hot
            towel shaves. Book your appointment today!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
