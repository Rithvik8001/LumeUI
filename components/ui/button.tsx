"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:opacity-90",
        glow: "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.65)]",
        neon: "bg-black text-[#39FF14] border-[#39FF14] border hover:bg-[#39FF14]/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro:
          "bg-primary text-primary-foreground border-2 border-b-4 border-r-4 border-black active:translate-y-1 active:border-b-2 active:border-r-2 rounded-none",
        glassmorphic:
          "backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/20",
        morphing:
          "relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-indigo-500 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out [&>span]:relative [&>span]:z-10",
        cyber:
          "bg-black text-[#00ff00] border border-[#00ff00] font-mono uppercase tracking-wider hover:bg-[#00ff00] hover:text-black hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 before:content-['>>'] before:mr-2 after:content-['<<'] after:ml-2",
        liquid:
          "relative bg-gradient-to-r from-blue-400 to-blue-600 text-white overflow-hidden hover:before:translate-x-[150%] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 before:ease-in-out before:skew-x-12",
        paper:
          "bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-gray-100 transition-all",
        threed:
          "bg-gradient-to-b from-blue-500 to-blue-600 text-white transform-gpu hover:-translate-y-1 hover:shadow-[0_10px_0_rgb(37,99,235)] active:translate-y-0 active:shadow-[0_0_0_rgb(37,99,235)] transition-all",
        minimal:
          "bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/10 underline-offset-4 hover:underline transition-colors",
        magnetic:
          "relative overflow-hidden bg-black text-white before:absolute before:inset-0 before:bg-white before:mix-blend-difference hover:before:animate-[magnetic_0.5s_ease-in-out] before:-translate-x-full before:translate-y-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        pill: "h-10 px-6 rounded-full",
      },
      animation: {
        none: "",
        shine: "overflow-hidden group-hover:[&>div]:translate-x-[100%]",
        pulse: "motion-safe:animate-pulse",
        gradient: "before:animate-gradient-xy hover:before:animate-none",
        bounce: "hover:animate-bounce",
        shake: "hover:animate-[shake_0.5s_ease-in-out]",
        spin: "hover:animate-[spin_1s_linear_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      animation,
      asChild = false,
      icon,
      badge,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const content = variant === "morphing" ? <span>{children}</span> : children;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {content}
        {animation === "shine" && (
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 ease-in-out" />
        )}
        {badge && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            {badge}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
