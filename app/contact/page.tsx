"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import {
  SHOP_INFO,
  BUSINESS_HOURS,
  GOOGLE_MAPS_EMBED_URL,
} from "@/lib/constants";
import { formatPhoneForLink, getDirectionsUrl, cn } from "@/lib/utils";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement form submission
    // Options:
    // 1. Formspree (easy, free tier available)
    // 2. Netlify Forms (if hosting on Netlify)
    // 3. Custom API route with email service (SendGrid, Resend, etc.)

    // Simulated submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-surface-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-surface-600">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-surface-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-surface-600 mb-6">
                  We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-surface-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-surface-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-surface-700 mb-2"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                    placeholder="(555) 555-0100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-surface-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary w-full",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-surface-100 rounded-xl p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-surface-900 mb-6">
                Shop Information
              </h3>

              <div className="space-y-4">
                <a
                  href={getDirectionsUrl(SHOP_INFO.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-surface-600 hover:text-accent transition-colors"
                >
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{SHOP_INFO.address.street}</p>
                    <p>
                      {SHOP_INFO.address.city}, {SHOP_INFO.address.state}{" "}
                      {SHOP_INFO.address.zip}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${formatPhoneForLink(SHOP_INFO.phone)}`}
                  className="flex items-center gap-3 text-surface-600 hover:text-accent transition-colors"
                >
                  <Phone size={20} />
                  <span className="font-medium">{SHOP_INFO.phone}</span>
                </a>

                <div className="flex items-start gap-3 text-surface-600">
                  <Clock size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    {BUSINESS_HOURS.map((item) => (
                      <div
                        key={item.day}
                        className={cn(
                          "flex gap-4 text-sm",
                          !item.isOpen && "text-surface-400"
                        )}
                      >
                        <span className="w-24">{item.day}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-200">
                  <Link href="/booking" className="btn-primary w-full text-center">
                    Book an Appointment
                  </Link>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
