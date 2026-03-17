"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE, SOCIAL_LINKS } from "@/lib/constants";

export default function InstagramFeed() {
  useEffect(() => {
    // Dynamically inject the SociableKit script so it always runs after the
    // widget div is mounted in the DOM.
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    // Hide SociableKit branding link as soon as it appears.
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>("a.tutorial_link").forEach((el) => {
        el.style.setProperty("display", "none", "important");
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

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

        {/* SociableKit Instagram Feed */}
        <div className="sk-instagram-feed" data-embed-id="25664121" />

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
