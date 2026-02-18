import Link from "next/link";
import { SHOP_INFO } from "@/lib/constants";

export const metadata = {
  title: `Terms of Service | ${SHOP_INFO.name}`,
  description: `Terms of service for ${SHOP_INFO.name}`,
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-surface-900 text-surface-100 min-h-screen">
      <div className="container-wide py-16 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-surface-400 text-sm mb-10">Last updated: February 2026</p>

        <div className="space-y-8 text-surface-300 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms
              of Service. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Use of This Website</h2>
            <p className="mb-3">This website is provided for informational purposes and to facilitate appointment bookings at {SHOP_INFO.name}. You agree to use this site only for lawful purposes and you must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Transmit any unsolicited or unauthorized advertising material</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Appointments & Bookings</h2>
            <p className="mb-3">
              Appointments are booked through our third-party booking partner, Squire. By booking
              an appointment, you also agree to Squire's terms of service. Please note:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>All services are <strong className="text-surface-200">cash only</strong> — we do not accept credit or debit cards</li>
              <li>Please arrive on time for your appointment</li>
              <li>We reserve the right to refuse service at our discretion</li>
              <li>Cancellations should be made as early as possible as a courtesy to your barber</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including the {SHOP_INFO.name} logo, text, graphics, and
              design, is the property of {SHOP_INFO.name} and may not be reproduced, distributed,
              or used without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Third-Party Links</h2>
            <p>
              This website contains links to third-party services including Squire (booking),
              Google Maps (location), Instagram, Facebook, and Yelp. We are not responsible for
              the content or privacy practices of these external sites. Use them at your own
              discretion.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Disclaimer of Warranties</h2>
            <p>
              This website is provided "as is" without any warranties of any kind, express or
              implied. We do not warrant that the site will be uninterrupted, error-free, or free
              of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {SHOP_INFO.name} shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of this
              website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the website
              after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Commonwealth of Massachusetts. Any
              disputes shall be subject to the exclusive jurisdiction of the courts of Massachusetts.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">10. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="text-accent-light underline hover:text-white transition-colors"
              >
                {SHOP_INFO.phone}
              </a>{" "}
              or visit us at {SHOP_INFO.address.street}, {SHOP_INFO.address.city},{" "}
              {SHOP_INFO.address.state} {SHOP_INFO.address.zip}.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-800">
          <Link href="/" className="text-accent-light hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
