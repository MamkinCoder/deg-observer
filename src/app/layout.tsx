import type { Metadata } from "next";
import { Ruda } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";

const font = Ruda({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Наблюдение ДЭГ",
  description: "Анализ федерального ДЭГа 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
