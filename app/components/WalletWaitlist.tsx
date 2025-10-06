"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/TextInput";

interface WalletWaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const WalletWaitlist: React.FC<WalletWaitlistProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[\d\s\-\(\)]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (7-20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const requestData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      };

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        const responseText = await response.text();
        throw new Error(`Invalid response format: ${responseText.substring(0, 100)}...`);
      }

      if (response.ok && result.success) {
        setIsSuccess(true);
        // Auto close after 3 seconds
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        const errorMessage = result.message || `Server error: ${response.status}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setErrors({ email: `Failed to join waitlist: ${errorMessage}` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ fullName: "", email: "", phone: "" });
    setErrors({});
    setIsLoading(false);
    setIsSuccess(false);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close modal"
        >
          ×
        </button>

        {isSuccess ? (
          // Success state
          <div className="text-center py-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Welcome to Mansu Wallet!</h2>
            <p className="text-gray-600">
              You&apos;re now on the waitlist for Mansu Wallet. We&apos;ll notify you as soon as we launch with exclusive early access!
            </p>
          </div>
        ) : (
          // Form state
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Join MansuWallet Waitlist</h2>
              <p className="text-gray-600">
                Be among the first to experience the future of digital payments. Get early access and exclusive benefits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <TextInput
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <TextInput
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <TextInput
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Mansu Wallet Waitlist"}
              </Button>
            </form>

            <div className="mt-4 text-xs text-gray-500 text-center">
              By joining, you agree to receive updates about Mansu Wallet launch and features.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WalletWaitlist;
