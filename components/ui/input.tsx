"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Search, X } from "lucide-react";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        ghost:
          "border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0",
        underline:
          "rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary",
        pill: "rounded-full",
        modern:
          "border-0 bg-secondary/50 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-secondary",
        material:
          "border-0 border-b-2 border-muted bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition-colors",
      },
      inputSize: {
        default: "h-10",
        sm: "h-8 px-2 text-xs",
        lg: "h-12 px-4 text-base",
      },
      validation: {
        none: "",
        error:
          "border-destructive focus-visible:ring-destructive text-destructive placeholder:text-destructive/60",
        success:
          "border-green-500 focus-visible:ring-green-500 text-green-500 placeholder:text-green-500/60",
        warning:
          "border-yellow-500 focus-visible:ring-yellow-500 text-yellow-500 placeholder:text-yellow-500/60",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      validation: "none",
    },
  }
);

const iconVariants = cva("absolute top-1/2 -translate-y-1/2", {
  variants: {
    position: {
      left: "left-3",
      right: "right-3",
    },
  },
  defaultVariants: {
    position: "left",
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  clearable?: boolean;
  onClear?: () => void;
  showPasswordToggle?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant,
      inputSize,
      validation,
      icon,
      iconPosition = "left",
      clearable,
      onClear,
      showPasswordToggle,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const hasLeftIcon = icon && iconPosition === "left";
    const hasRightIcon =
      (icon && iconPosition === "right") || clearable || showPasswordToggle;

    const inputType = showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <div className="relative">
        {hasLeftIcon && (
          <div className={cn(iconVariants({ position: "left" }))}>{icon}</div>
        )}
        <input
          type={inputType}
          className={cn(
            inputVariants({ variant, inputSize, validation }),
            hasLeftIcon && "pl-10",
            hasRightIcon && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {hasRightIcon && (
          <div
            className={cn(iconVariants({ position: "right" }), "flex gap-1")}
          >
            {icon && iconPosition === "right" && icon}
            {clearable && props.value && (
              <button
                type="button"
                onClick={onClear}
                className="rounded-full p-1 hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="rounded-full p-1 hover:bg-secondary"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
