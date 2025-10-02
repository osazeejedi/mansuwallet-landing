import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex items-center relative justify-center font-medium shadow-drop hover:shadow-md rounded-lg  disabled:opacity-50  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "text-white bg-primary hover:bg-primary/50",
        danger: "bg-red-500 hover:bg-red-500/50 text-white",
        outline: "text-white bg-transparent border",

        white: "bg-white text-black hover:bg-white/50",
      },
      size: {
        default: "py-[11px] px-5",
        sm: "h-7 px-2 text-sm",
        xs: "h-6 px-1.5 text-[12px]",
        lg: "w-full h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, disabled, children, variant, isLoading, size, ...props },
    ref
  ) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        disabled={disabled ?? isLoading}
        {...props}
      >
        <span className={`${isLoading ? "opacity-0" : ""}`}>{children}</span>
        {isLoading && <span className="loading"></span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
