import type { Metadata } from "next";
import "./globals.css";
import SimpleFooter from "./layouts/SimpleFooter";

export const metadata: Metadata = {
  title: "MansuWallet - The Future of Digital Payments",
  description: "Experience seamless, secure, and smart financial transactions. Join thousands waiting for the next generation digital wallet solution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-gilroy antialiased">
        {children}
        <SimpleFooter />
      </body>
    </html>
  );
}
