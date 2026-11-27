import type { Metadata } from "next";
import Script from "next/script";
import AttributionTracker from "@/components/AttributionTracker";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tostemlitech.com"),
  title: "TOSTEM Studio Alam Sutera | Pintu & Jendela Aluminium",
  description:
    "Authorized Dealer TOSTEM Indonesia (PT Litech Alglassindo Jaya). Temukan pintu & jendela aluminium bergaransi resmi di Studio Alam Sutera untuk area Jabodetabek.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "TOSTEM Studio Alam Sutera",
    description: "Ruang yang lebih terbuka. Hidup yang lebih dekat.",
    url: "https://tostemlitech.com/",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/alam-sutera-4.webp",
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOSTEM Studio Alam Sutera",
    description: "Ruang yang lebih terbuka. Hidup yang lebih dekat.",
    images: [
      {
        url: "/images/alam-sutera-4.webp",
        width: 1200,
        height: 800,
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo({top:0,left:0,behavior:'instant'});",
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        <ScrollToTop />
        <AttributionTracker />
        {children}
        <FloatingWhatsApp />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PXJ373Z3"
        strategy="afterInteractive"
      />
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
    </html>
  );
}
