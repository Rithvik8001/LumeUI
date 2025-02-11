"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground hover:bg-accent hover:text-accent-foreground",
        success:
          "border-transparent bg-green-500/20 text-green-500 hover:bg-green-500/30",
        warning:
          "border-transparent bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30",
        info: "border-transparent bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
        gradient:
          "border-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:opacity-80",
        ghost:
          "border-transparent bg-background hover:bg-muted hover:text-accent-foreground",
        glow: "border-transparent bg-primary/20 text-primary shadow-[0_0_10px_rgba(var(--primary),0.3)] hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.25 text-[10px]",
        lg: "px-3 py-0.75 text-sm",
        pill: "px-4 py-1 text-xs",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        ping: "animate-ping",
      },
      withDot: {
        true: "pl-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      withDot: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dotColor?: string;
}

function Badge({
  className,
  variant,
  size,
  animation,
  withDot,
  dotColor,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant, size, animation, withDot }),
        className
      )}
      {...props}
    >
      {withDot && (
        <div
          className="mr-1 h-2 w-2 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
