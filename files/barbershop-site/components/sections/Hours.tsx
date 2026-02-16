"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { BUSINESS_HOURS, BOOKING_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Hours() {
  return (
    <section id="hours" className="section-padding bg-surface-100">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Shop Hours
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-6 text-accent">
              <Clock size={24} />
              <span className="font-display text-lg font-semibold">
                Open Hours
              </span>
            </div>

            <ul className="space-y-3">
              {BUSINESS_HOURS.map((item, index) => (
                <li
                  key={item.day}
                  className={cn(
                    "flex justify-between items-center py-2 border-b border-surface-100 last:border-0",
                    !item.isOpen && "text-surface-400"
                  )}
                >
                  <span className="font-medium">{item.day}</span>
                  <span
                    className={cn(
                      item.isOpen ? "text-surface-600" : "text-surface-400"
                    )}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
