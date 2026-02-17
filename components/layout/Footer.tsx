import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { SHOP_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { formatPhoneForLink, getFullAddress } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 text-surface-100">
      {/* Decorative barber stripe */}
      <div className="h-2 barber-stripe" />

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shop Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              {SHOP_INFO.name}
            </h3>
            <p className="text-surface-400 mb-4">{SHOP_INFO.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${formatPhoneForLink(SHOP_INFO.phone)}`}
                className="flex items-center gap-2 text-surface-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                {SHOP_INFO.phone}
              </a>
              <div className="flex items-start gap-2 text-surface-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{getFullAddress(SHOP_INFO.address)}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-surface-800 rounded-full text-surface-300 hover:text-white hover:bg-surface-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-surface-800 rounded-full text-surface-300 hover:text-white hover:bg-surface-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              {/* Yelp icon - using text since Lucide doesn't have Yelp */}
              <a
                href={SOCIAL_LINKS.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-surface-800 rounded-full text-surface-300 hover:text-white hover:bg-surface-700 transition-colors text-sm font-bold"
                aria-label="Yelp"
              >
                Y!
              </a>
            </div>

            {/* Cash Only Notice */}
            <p className="mt-6 text-sm text-accent-light font-medium">
              💵 Cash Only
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-surface-800 text-center text-surface-500 text-sm">
          © {currentYear} {SHOP_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
