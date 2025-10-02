import React from 'react';
import Image from 'next/image';

interface IPhoneMockupProps {
  screenImage: string;
  alt: string;
  className?: string;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ screenImage, alt, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div className="relative mx-auto" style={{ width: '300px', height: '600px' }}>
        {/* iPhone Body */}
        <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl">
          {/* Screen Bezel */}
          <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
            
            {/* App Screenshot */}
            <div className="absolute inset-0 rounded-[2.3rem] overflow-hidden">
              <Image
                src={screenImage}
                alt={alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Side Buttons */}
          <div className="absolute -left-0.5 top-20 w-1 h-8 bg-gray-700 rounded-r"></div>
          <div className="absolute -left-0.5 top-32 w-1 h-6 bg-gray-700 rounded-r"></div>
          <div className="absolute -left-0.5 top-40 w-1 h-6 bg-gray-700 rounded-r"></div>
          <div className="absolute -right-0.5 top-24 w-1 h-12 bg-gray-700 rounded-l"></div>
        </div>
        
        {/* iPhone Glow Effect */}
        <div className="absolute inset-0 rounded-[3rem] shadow-[0_0_50px_rgba(255,255,255,0.1)] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
