import type { Metadata } from "next";
import { Poppins, Lato, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grace Life Church Vizag",
    template: "%s | Grace Life Church Vizag",
  },
  description:
    "Preaching the whole counsel of God. A Reformed church in Visakhapatnam, Andhra Pradesh. A church plant of Fullness of Joy Ministries.",
  metadataBase: new URL("https://gracelifevizag.org"),
  openGraph: {
    siteName: "Grace Life Church Vizag",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable} ${roboto.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
