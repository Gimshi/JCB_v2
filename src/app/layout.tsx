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
  title: "Gereja Mawar Sharon • Apostolic & Prophetic Generation",
  description: "Gereja yang hidup, relevan, dinamis, dan berakar teguh di dalam kuasa Firman serta hadirat Roh Kudus.",
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
