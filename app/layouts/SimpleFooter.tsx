"use client";
import Link from "next/link";
import MansuLogo from "../components/Icons/MansuLogo";

const SimpleFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-6 w-auto">
            <MansuLogo />
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
            <Link 
              href="/privacy-policy" 
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} MansuWallet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
