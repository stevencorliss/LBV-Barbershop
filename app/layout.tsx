import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import "@/styles/globals.css";
import { SEO, SHOP_INFO } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Display font - elegant serif for headings
const displayFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

// Body font - clean sans-serif for readability
const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: SEO.title,
    template: `%s | ${SHOP_INFO.name}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: SHOP_INFO.name }],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
        <body className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
            <Footer />
            {/* Hidden Squire trigger — widget.js hooks into .squire-booking-button */}
              <button
                id="squire-trigger"
                className="squire-booking-button"
                style={{ position: "fixed", opacity: 0, pointerEvents: "none", bottom: 0, left: 0, width: 0, height: 0, overflow: "hidden" }}
                aria-hidden="true"
              />
            <Script
            id="squire-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  !function(e, t) {
                    var i = e.createElement("script"), sa = "setAttribute";
                    i.src = "https://widget.getsquire.com/widget.js?" + Date.now(),
                    i[sa]("defer", ""),
                    i[sa]("type", "text/javascript"),
                    i[sa]("brand", t.brand),
                    i[sa]("x-squire-inline-enabled", t.inline || false),
                    e.head.appendChild(i)
                  }(document, {
                    brand: "e01b5897-bd1a-4e3b-a512-ef0c66860f59",
                    inline: false
                  });
              `,
            }}
          />
          </body>
    </html>
  );
}
