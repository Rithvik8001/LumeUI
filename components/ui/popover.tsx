"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const popoverVariants = cva(
  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      variant: {
        default:
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
        float:
          "data-[side=bottom]:animate-float-up data-[side=top]:animate-float-down data-[side=left]:animate-float-right data-[side=right]:animate-float-left shadow-lg",
        scale:
          "origin-[var(--radix-popover-content-transform-origin)] transition-all duration-300 data-[state=open]:scale-100 data-[state=closed]:scale-0 shadow-lg hover:scale-105 bg-gradient-to-br from-background to-muted border-primary/20",
        glow: "bg-background/95 backdrop-blur-md border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.3)] data-[state=open]:animate-glow hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-shadow duration-300",
        drawer:
          "data-[side=bottom]:slide-in-from-bottom-full data-[side=top]:slide-in-from-top-full data-[side=left]:slide-in-from-left-full data-[side=right]:slide-in-from-right-full shadow-2xl bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-lg border-primary/10",
        flip: "data-[state=open]:animate-flip-in data-[state=closed]:animate-flip-out shadow-xl perspective-[1000px]",
        command:
          "bg-secondary/50 backdrop-blur-sm border-none font-mono before:content-['>'] before:absolute before:left-2 before:top-2 before:text-primary/50 shadow-lg",
        glass:
          "bg-background/20 backdrop-blur-xl border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-background/30 transition-all duration-300 border-2",
        spotlight:
          "overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:animate-spotlight shadow-xl bg-gradient-to-br from-background to-background/90",
        elastic:
          "data-[state=open]:animate-elastic-in data-[state=closed]:animate-elastic-out shadow-lg bg-gradient-to-r from-background via-background/95 to-background",
        reveal:
          "data-[state=open]:animate-reveal-in data-[state=closed]:animate-reveal-out border-none bg-gradient-to-b from-background to-background/80 backdrop-blur shadow-2xl hover:-translate-y-0.5 transition-transform duration-300",
      },
      size: {
        default: "w-72",
        sm: "w-48",
        lg: "w-96",
        full: "w-screen max-w-3xl",
        auto: "w-auto",
      },
      align: {
        center: "data-[align=center]",
        start: "data-[align=start]",
        end: "data-[align=end]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      align: "center",
    },
  }
);

export interface PopoverContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
      keyof VariantProps<typeof popoverVariants>
    >,
    VariantProps<typeof popoverVariants> {
  container?: HTMLElement;
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    { className, align = "center", sideOffset = 4, variant, size, ...props },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align === null ? undefined : align}
        sideOffset={sideOffset}
        className={cn(popoverVariants({ variant, size, align }), className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
