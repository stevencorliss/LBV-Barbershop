"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE, SOCIAL_LINKS } from "@/lib/constants";

/**
 * Instagram Feed Section
 *
 * For a real implementation, you have a few options:
 *
 * 1. SQUIRE WIDGET (Easiest)
 *    - If using Squire for booking, they often provide an Instagram widget
 *
 * 2. ELFSIGHT EMBED (Simple, Paid)
 *    - Create account at elfsight.com
 *    - Add Instagram Feed widget
 *    - Copy embed code and paste here
 *
 * 3. INSTAGRAM BASIC DISPLAY API (Free, Complex)
 *    - Requires Facebook Developer account
 *    - Need to set up app and get access tokens
 *    - Tokens expire and need refreshing
 *
 * 4. STATIC APPROACH (Simplest)
 *    - Just link to Instagram with preview images
 *    - Update images manually when needed
 */

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-padding bg-surface-50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-surface-600 hover:text-accent transition-colors"
          >
            <Instagram size={24} />
            <span className="font-display text-xl font-semibold">
              @{INSTAGRAM_HANDLE}
            </span>
          </a>
          <p className="text-surface-500 mt-2">
            Tag your haircut photos <strong>#LaBuonaVita</strong>
          </p>
        </motion.div>

        {/* Instagram Grid Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {/* Placeholder cards - replace with actual Instagram embed */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a
              key={i}
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-surface-200 rounded-lg overflow-hidden group relative"
            >
              {/* Replace this div with actual Instagram images */}
              <div className="absolute inset-0 bg-surface-300 flex items-center justify-center">
                <Instagram size={32} className="text-surface-400" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-surface-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Alternative: Embed Elfsight or similar widget here */}
        {/* 
        <div className="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
