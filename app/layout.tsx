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
                  brand: "2eca291d-c7cb-4ebb-a05d-bacc2d939908",
                  inline: false
                });
              `,
            }}
          />
        </body>
    </html>
  );
}
