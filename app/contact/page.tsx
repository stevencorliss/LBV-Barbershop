"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import {
  SHOP_INFO,
  BUSINESS_HOURS,
  BOOKING_URL,
  GOOGLE_MAPS_EMBED_URL,
} from "@/lib/constants";
import { formatPhoneForLink, getDirectionsUrl, cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-surface-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-surface-600">
            Come see us or give us a call.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
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
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 lg:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg">
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
  );
}
