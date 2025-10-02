import React from "react";

interface TextInputProps {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`border-b border-black/45 w-full pb-5 
	  placeholder-[#2E2E2E]/75 text-gray-900 focus-visible:outline-none
	  disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  );
};

export default TextInput;
