import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Importing Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Trackify",
  description:
    "Trackify - Your ultimate project management and issue tracking platform. Organize, collaborate, and succeed with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
