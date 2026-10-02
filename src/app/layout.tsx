import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gereja Kasih Anugerah JCB Permata • Kasih Karunia & Kebenaran",
  description: "Website resmi Gereja Kasih Anugerah JCB Permata. Menjangkau jiwa, memuridkan, dan bertumbuh bersama dalam hadirat Tuhan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
