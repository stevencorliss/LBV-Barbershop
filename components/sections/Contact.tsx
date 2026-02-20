"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import {
  SHOP_INFO,
  SOCIAL_LINKS,
  GOOGLE_MAPS_EMBED_URL,
} from "@/lib/constants";
import {
  formatPhoneForLink,
  getFullAddress,
  getDirectionsUrl,
} from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-surface-900 mb-4">
                {SHOP_INFO.name}
              </h3>
            </div>

            {/* Address */}
            <a
              href={getDirectionsUrl(SHOP_INFO.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-surface-600 hover:text-accent transition-colors group"
            >
              <MapPin
                size={20}
                className="mt-1 flex-shrink-0 group-hover:text-accent"
              />
              <div>
                <p>{SHOP_INFO.address.street}</p>
                <p>
                  {SHOP_INFO.address.city}, {SHOP_INFO.address.state}{" "}
                  {SHOP_INFO.address.zip}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${formatPhoneForLink(SHOP_INFO.phone)}`}
              className="flex items-center gap-3 text-surface-600 hover:text-accent transition-colors"
            >
              <Phone size={20} className="flex-shrink-0" />
              <span className="text-lg">{SHOP_INFO.phone}</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-100 rounded-full text-surface-600 hover:bg-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-100 rounded-full text-surface-600 hover:bg-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-100 rounded-full text-surface-600 hover:bg-accent hover:text-white transition-colors font-bold"
                aria-label="Yelp"
              >
                Y!
              </a>
            </div>

            {/* Book Button */}
            <div className="pt-4">
                <Link href="/booking" className="btn-primary">
                  Book an Appointment
                </Link>
            </div>

            {/* Cash Only Notice */}
            <p className="text-accent font-semibold">Cash Only</p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-80 md:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg"
          >
            {/* Replace with actual Google Maps embed URL */}
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${SHOP_INFO.name}`}
            />

            {/* Fallback if embed URL not configured */}
            {!GOOGLE_MAPS_EMBED_URL.includes("!1m18") && (
              <div className="w-full h-full bg-surface-200 flex items-center justify-center">
                <div className="text-center text-surface-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Map embed goes here</p>
                  <a
                    href={getDirectionsUrl(SHOP_INFO.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
