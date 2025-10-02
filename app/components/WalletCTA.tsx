"use client";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import WalletWaitlist from "./WalletWaitlist";
import React, { useState } from "react";

const WalletCTA = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);


  return (
    <>
      <section 
        className="py-20 bg-primary text-white relative overflow-hidden"
        style={{ backgroundImage: `url(/assets/images/heroBg.png)` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-primary/90"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl xl:mx-auto 2xl:mx-auto">
          <Reveal className="w-full text-center" width="100%">
            <div className="mb-12 xl:mb-16">
              <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 xl:mb-8">
                {"Don't Miss Out on the Future"}
              </h2>
              <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-pink-light mb-8 xl:mb-12 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed">
                Join thousands of early adopters who are already waiting for Mansu Wallet. 
                Be part of the financial revolution.
              </p>
            </div>
          </Reveal>


          <Reveal className="w-full text-center" width="100%">
            <div className="flex flex-col items-center mb-16 xl:mb-20">
              <Button 
                variant="white"
                className="px-12 xl:px-16 py-4 xl:py-6 text-lg xl:text-xl 2xl:text-2xl font-semibold hover:bg-pink-light hover:text-white transition-all duration-300 mx-auto"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join the Waitlist Now
              </Button>
              <p className="mt-4 xl:mt-6 text-sm xl:text-base 2xl:text-lg text-secondary text-center">
                Free to join • No commitment • Early access guaranteed
              </p>
            </div>
          </Reveal>

          {/* Benefits Section */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-12 max-w-6xl mx-auto">
              <div className="text-center px-4 xl:px-6">
                <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6">🎁</div>
                <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2 xl:mb-4">Early Access</h3>
                <p className="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed">
                  Be among the first to use Mansu Wallet when we launch
                </p>
              </div>
              <div className="text-center px-4 xl:px-6">
                <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6">💎</div>
                <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2 xl:mb-4">Exclusive Benefits</h3>
                <p className="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed">
                  Special rewards and features reserved for early adopters
                </p>
              </div>
              <div className="text-center px-4 xl:px-6">
                <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6">📢</div>
                <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2 xl:mb-4">First to Know</h3>
                <p className="text-secondary text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed">
                  Get updates on launch date and new features before anyone else
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 xl:py-20 bg-grey-medium">
        <div className="container mx-auto px-4 max-w-6xl xl:mx-auto 2xl:mx-auto">
          <Reveal className="w-full text-center" width="100%">
            <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary mb-4 xl:mb-6">
                Stay Updated
              </h3>
              <p className="text-gray-600 xl:text-lg 2xl:text-xl mb-8 xl:mb-12 leading-relaxed">
                Follow our journey as we build the future of digital payments. 
                Get behind-the-scenes updates, feature previews, and launch announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 justify-center">
                <Button 
                  className="px-8 xl:px-12 py-3 xl:py-4 xl:text-lg"
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join Waitlist
                </Button>
                {/*<Button 
                  variant="outline" 
                  className="px-8 xl:px-12 py-3 xl:py-4 xl:text-lg border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Follow Updates
                </Button>*/}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WalletWaitlist 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default WalletCTA;
