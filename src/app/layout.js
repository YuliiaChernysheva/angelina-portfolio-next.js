import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Portfolio",
  description: "UX/UI Designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
