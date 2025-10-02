"use client";
import { Reveal } from "@/app/components/ui/Reveal";
import React from "react";

const WalletFeatures = () => {
  const features = [
    {
      icon: "💳",
      title: "Instant Payments",
      description: "Send and receive money instantly with zero delays. Experience lightning-fast transactions across multiple currencies."
    },
    {
      icon: "🔒",
      title: "Bank-Level Security",
      description: "Your funds are protected with military-grade encryption and multi-layer security protocols."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Make payments anywhere in the world. Support for multiple currencies and cryptocurrencies"
    },
    {
      icon: "📱",
      title: "Smart Interface",
      description: "Intuitive design that makes managing your assets effortless."
    },
    {
      icon: "💰",
      title: "Low Fees",
      description: "Enjoy transparent pricing with some of the lowest fees in the industry. More money stays in your pocket."
    },
    {
      icon: "🎯",
      title: "Rewards Program",
      description: "Earn rewards on every transaction. Get cashback and exclusive offers."
    }
  ];

  return (
    <section className="py-20 bg-grey-light">
      <div className="container mx-auto px-4">
        <Reveal className="w-full text-center" width="100%">
          <div className="mb-16 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary mb-6">
              Why Choose Mansu Wallet?
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Built for the modern world, Mansu Wallet combines cutting-edge technology
              with user-friendly design to revolutionize how you handle money.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Reveal key={index}>
              <div className="bg-white rounded-lg p-6 xl:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="text-4xl xl:text-5xl mb-4 xl:mb-6 text-center">{feature.icon}</div>
                <h3 className="text-xl xl:text-2xl font-semibold text-primary mb-3 xl:mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 xl:text-lg leading-relaxed text-center flex-grow">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="w-full text-center" width="100%">
          <div className="mt-16 xl:mt-20">
            <div className="bg-white rounded-lg p-8 xl:p-12 shadow-lg max-w-4xl xl:max-w-5xl mx-auto">
              <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary mb-4 xl:mb-6">
                Coming Soon to Your Device
              </h3>
              <p className="text-gray-600 xl:text-lg 2xl:text-xl mb-6 xl:mb-8 max-w-2xl mx-auto leading-relaxed">
                Mansu Wallet will be available on all major platforms. Join our waitlist 
                to be notified when we launch and get exclusive early access.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 xl:gap-12 text-gray-400">
                <div className="flex items-center space-x-2 xl:space-x-3">
                  <span className="text-2xl xl:text-3xl">📱</span>
                  <span className="text-sm md:text-base xl:text-lg font-medium">iOS</span>
                </div>
                <div className="flex items-center space-x-2 xl:space-x-3">
                  <span className="text-2xl xl:text-3xl">🤖</span>
                  <span className="text-sm md:text-base xl:text-lg font-medium">Android</span>
                </div>
                <div className="flex items-center space-x-2 xl:space-x-3">
                  <span className="text-2xl xl:text-3xl">💻</span>
                  <span className="text-sm md:text-base xl:text-lg font-medium">Web</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WalletFeatures;
