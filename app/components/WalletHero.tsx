"use client";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import WalletWaitlist from "./WalletWaitlist";
import Image from "next/image";
import React, { useState } from "react";

const WalletHero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(/assets/images/heroBg.png)` }}
        className="relative text-white flex flex-col justify-center items-center min-h-[600px] bg-black bg-center bg-cover bg-no-repeat"
      >
        <div className="container mx-auto px-4 py-20 xl:py-24">
          {/* Logo */}
          {/*<div className="absolute top-6 left-6 z-10 pl-16">
            <div className="h-12 w-auto md:h-16">
              <Image
                src="/logo-white.png"
                alt="Mansu Wallet Logo"
                width={200}
                height={80}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>*/}
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
            {/* Text Content */}
            <Reveal className="w-full text-center lg:text-left" width="100%">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 xl:mb-8 font-bold">
                  Mansu Wallet
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 xl:mb-8 font-medium text-pink-light">
                  The Future of Digital Payments
                </h2>
                <p className="text-lg md:text-xl xl:text-2xl text-secondary mb-8 xl:mb-12 leading-relaxed">
                  Experience seamless, secure, and smart financial transactions. 
                  Join thousands waiting for the next generation digital wallet solution.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    className="w-full sm:w-auto px-8 xl:px-12 py-4 xl:py-5 text-lg xl:text-xl min-w-[160px] xl:min-w-[200px]"
                    onClick={() => setIsWaitlistOpen(true)}
                  >
                    Join Waitlist
                  </Button>
                </div>
                <div className="mt-8 xl:mt-12 text-sm md:text-base xl:text-lg text-secondary">
                  <p className="flex flex-wrap justify-center lg:justify-start items-center gap-2 md:gap-4 xl:gap-6">
                    <span>🚀 Coming Soon</span>
                    <span className="hidden sm:inline">•</span>
                    <span>💳 Early Access Available</span>
                    <span className="hidden sm:inline">•</span>
                    <span>🔒 Secure & Trusted</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Hero iPhone Image */}
            <Reveal className="w-full flex justify-center lg:justify-end" width="100%">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <Image
                  src="/assets/images/hero.png"
                  alt="MansuWallet App Interface"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 -z-10"></div>
      </div>

      <WalletWaitlist 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default WalletHero;
