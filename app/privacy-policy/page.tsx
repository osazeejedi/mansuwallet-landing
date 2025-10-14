import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - MansuWallet",
  description: "MansuWallet Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-primary hover:text-pink-dark transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-grey-light border-l-4 border-primary p-6 mb-8 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              Mansu Technologies Ltd ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect the information you provide when you sign up for the Mansu Wallet waitlist.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              When you join the Mansu Wallet waitlist, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We will use the information you provide solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To notify you when Mansu Wallet is available for download.</li>
              <li>To send you updates, announcements, or promotional content related to Mansu Wallet.</li>
              <li>To respond to your inquiries or requests.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We will not use your information for any purpose unrelated to the above without your consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Lawful Basis for Processing
            </h2>
            <p className="text-gray-700">
              We collect and process your personal information based on your consent. By joining the waitlist and providing your details, you consent to us contacting you for the purposes outlined above.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Data Storage and Security
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your information will be stored securely and protected against unauthorized access, disclosure, or alteration.</li>
              <li>We use appropriate technical and organizational measures in line with Ghana's Data Protection Act, 2012 (Act 843).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Sharing of Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We will not sell, rent, or trade your personal data to third parties.</li>
              <li>We may share your information with trusted service providers who assist us in delivering email or SMS updates, strictly for the purposes listed in this policy.</li>
              <li>Where required by law, we may disclose your information to regulatory or government authorities.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Under Ghana's Data Protection Act, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of any inaccurate or incomplete information.</li>
              <li>Withdraw your consent at any time, after which we will stop contacting you.</li>
              <li>Request deletion of your information from our records.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise any of these rights, please contact us using the details at the end of this privacy policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Retention of Information
            </h2>
            <p className="text-gray-700">
              We will keep your personal data only for as long as you remain on our waitlist or until the official launch of Mansu Wallet, after which you may opt out at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Cookies and Tracking
            </h2>
            <p className="text-gray-700">
              At this stage, our waitlist website does not use cookies for tracking. If this changes, we will update this policy accordingly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary/30 pb-2">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or how your information is handled, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Mansu Technologies Ltd</p>
              <p className="text-gray-700">
                Email: <a href="mailto:info@mansu.io" className="text-primary hover:text-pink-dark underline">info@mansu.io</a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-pink-dark transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
