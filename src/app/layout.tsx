import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Bricolage_Grotesque({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reformasvendrell.es"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Reformas en El Vendrell · Cocinas, Baños, Pisos y Locales | CRV",
    template: "%s | Clima Reformas Vendrell",
  },
  description:
    "Empresa de reformas integrales en El Vendrell y Baix Penedès. Pisos costeros, casas de pueblo, segundas residencias en Coma-ruga y Sant Salvador. Llama: 877 278 163.",
  authors: [{ name: "Clima Reformas Vendrell" }],
  creator: "Clima Reformas Vendrell",
  publisher: "Clima Reformas Vendrell",
  category: "Reformas y construcción",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://reformasvendrell.es",
    siteName: "Clima Reformas Vendrell",
    title: "Reformas en El Vendrell · Cocinas, Baños, Pisos y Locales | CRV",
    description:
      "Reformas integrales en El Vendrell, Coma-ruga y Sant Salvador. Cocinas, baños y pisos llave en mano en el Baix Penedès.",
    images: [
      {
        url: "/images/hero-reforma-luminosa-vendrell.webp",
        width: 1200,
        height: 630,
        alt: "Reformas integrales en El Vendrell - Clima Reformas Vendrell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformas en El Vendrell · Clima Reformas",
    description:
      "Reformas integrales, cocinas y baños en El Vendrell y el Baix Penedès. Presupuesto sin compromiso.",
    images: ["/images/hero-reforma-luminosa-vendrell.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: añadir cuando tengas los códigos de Google Search Console y Bing Webmaster
  // verification: {
  //   google: "TU_CODIGO_GSC",
  //   other: { "msvalidate.01": "TU_CODIGO_BING" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/images/hero-reforma-luminosa-vendrell.webp" as="image" type="image/webp" />
      </head>
      <body
        className={`${inter.variable} ${display.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
