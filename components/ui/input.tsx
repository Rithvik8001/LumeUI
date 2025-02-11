"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
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
        glassmorphic:
          "border-0 bg-white/10 backdrop-blur-md focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-white/20",
        neon: "border-2 border-[#39FF14] bg-black text-[#39FF14] placeholder:text-[#39FF14]/50 focus-visible:ring-[#39FF14] focus-visible:ring-offset-0 focus-visible:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro:
          "rounded-none border-2 border-b-4 border-r-4 border-black focus-visible:ring-0 focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:border-b-2 focus-visible:border-r-2 transition-all",
        cyber:
          "border-[#00ff00] bg-black text-[#00ff00] placeholder:text-[#00ff00]/50 font-mono tracking-wider focus-visible:ring-[#00ff00] focus-visible:shadow-[0_0_10px_#00ff00]",
        minimal:
          "border-0 border-b border-border bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary hover:border-foreground",
        paper:
          "border-2 border-black bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] focus-visible:ring-0 focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:shadow-none",
      },
      inputSize: {
        default: "h-10",
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-2 text-xs",
        lg: "h-12 px-4 text-base",
        xl: "h-14 px-6 text-lg",
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
      isLoading: {
        true: "pr-10",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      validation: "none",
      isLoading: false,
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
  isLoading?: boolean;
  prefix?: string;
  suffix?: string;
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
      isLoading,
      prefix,
      suffix,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const hasLeftIcon = (icon && iconPosition === "left") || prefix;
    const hasRightIcon =
      (icon && iconPosition === "right") ||
      clearable ||
      showPasswordToggle ||
      isLoading ||
      suffix;

    const inputType = showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <div className="relative">
        {prefix && (
          <span
            className={cn(
              iconVariants({ position: "left" }),
              "text-muted-foreground text-sm"
            )}
          >
            {prefix}
          </span>
        )}
        {hasLeftIcon && !prefix && (
          <div
            className={cn(
              iconVariants({ position: "left" }),
              "text-muted-foreground"
            )}
          >
            {icon}
          </div>
        )}
        <input
          type={inputType}
          className={cn(
            inputVariants({ variant, inputSize, validation, isLoading }),
            hasLeftIcon && "pl-10",
            hasRightIcon && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {hasRightIcon && (
          <div
            className={cn(
              iconVariants({ position: "right" }),
              "flex items-center gap-1.5"
            )}
          >
            {suffix && (
              <span className="text-muted-foreground text-sm">{suffix}</span>
            )}
            {icon && iconPosition === "right" && !suffix && (
              <span className="text-muted-foreground">{icon}</span>
            )}
            {isLoading && (
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            )}
            {clearable && props.value && (
              <button
                type="button"
                onClick={onClear}
                className="rounded-full p-1 hover:bg-secondary text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="rounded-full p-1 hover:bg-secondary text-muted-foreground"
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
