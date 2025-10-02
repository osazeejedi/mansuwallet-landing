import { Metadata } from "next";
import WalletHero from "./components/WalletHero";
import WalletFeatures from "./components/WalletFeatures";
import WalletCTA from "./components/WalletCTA";

export const metadata: Metadata = {
  title: "MansuWallet - The Future of Digital Payments",
  description: "Experience seamless, secure, and smart financial transactions. Join thousands waiting for the next generation digital wallet solution.",
  keywords: "digital wallet, payments, fintech, secure transactions, MansuWallet",
  openGraph: {
    title: "MansuWallet - The Future of Digital Payments",
    description: "Experience seamless, secure, and smart financial transactions. Join thousands waiting for the next generation digital wallet solution.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <WalletHero />
      <WalletFeatures />
      <WalletCTA />
    </main>
  );
}
