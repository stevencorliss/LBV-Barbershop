import Link from "next/link";
import { SHOP_INFO } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy | ${SHOP_INFO.name}`,
  description: `Privacy policy for ${SHOP_INFO.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-surface-900 text-surface-100 min-h-screen">
      <div className="container-wide py-16 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-surface-400 text-sm mb-10">Last updated: February 2026</p>

        <div className="space-y-8 text-surface-300 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Overview</h2>
            <p>
              {SHOP_INFO.name} ("we", "us", or "our") operates this website to provide information
              about our barbershop services and allow customers to book appointments. We are
              committed to protecting your privacy. This policy explains what information we collect,
              how we use it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-surface-200">Booking information</strong> — name, phone
                number, and appointment preferences submitted through our booking partner (Squire).
              </li>
              <li>
                <strong className="text-surface-200">Contact information</strong> — if you contact
                us directly by phone or email.
              </li>
              <li>
                <strong className="text-surface-200">Usage data</strong> — pages visited, browser
                type, and referring URLs, collected automatically via standard web analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Third-Party Services</h2>
            <p className="mb-3">This website uses the following third-party services, each with their own privacy policies:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-surface-200">Squire</strong> — appointment booking platform.
                Data submitted during booking is governed by{" "}
                <a
                  href="https://getsquire.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light underline hover:text-white transition-colors"
                >
                  Squire's Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-surface-200">Google Maps</strong> — embedded map for our
                location. Governed by{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light underline hover:text-white transition-colors"
                >
                  Google's Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-surface-200">Instagram</strong> — social media links and
                optional feed. Governed by{" "}
                <a
                  href="https://privacycenter.instagram.com/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light underline hover:text-white transition-colors"
                >
                  Instagram's Privacy Policy
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To confirm and manage your appointments</li>
              <li>To respond to inquiries</li>
              <li>To improve the website experience</li>
              <li>We do not sell or share your personal information with third parties for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Cookies</h2>
            <p>
              This website may use basic cookies for functionality and analytics. By using this
              site, you consent to the use of cookies in accordance with this policy. You can
              disable cookies in your browser settings, though some features may not function
              correctly.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Data Security</h2>
            <p>
              We take reasonable precautions to protect your information. However, no method of
              transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Children's Privacy</h2>
            <p>
              This website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{" "}
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
