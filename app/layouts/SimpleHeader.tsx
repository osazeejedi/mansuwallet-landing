"use client";
import MansuLogo from "../components/Icons/MansuLogo";
import Link from "next/link";

const SimpleHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-auto md:h-16 lg:h-20">
              <MansuLogo />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
