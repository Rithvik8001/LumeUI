"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva(
  "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted",
        pills: "bg-transparent gap-2",
        underline: "bg-transparent p-0 w-full justify-start gap-4",
        cards: "bg-transparent gap-2",
        minimal: "bg-transparent p-0 gap-4",
        gradient: "bg-gradient-to-br from-muted/50 to-muted backdrop-blur-sm",
        glass: "bg-background/20 backdrop-blur-md border border-white/20",
        floating: "bg-background shadow-lg hover:shadow-xl transition-shadow",
        neon: "bg-black border border-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.3)]",
        retro: "bg-background border-2 border-black rounded-none",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-sm",
        lg: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        pills:
          "rounded-full bg-muted hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        underline:
          "rounded-none border-b-2 border-transparent px-0 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
        cards:
          "rounded-lg border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        minimal:
          "rounded-none text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-semibold",
        gradient:
          "bg-gradient-to-r from-muted to-muted/80 hover:from-muted/80 hover:to-muted data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground",
        glass:
          "backdrop-blur-md bg-background/20 hover:bg-background/30 data-[state=active]:bg-background/40 data-[state=active]:text-foreground",
        floating:
          "shadow-sm hover:-translate-y-0.5 hover:shadow-md data-[state=active]:translate-y-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all",
        neon: "text-[#39FF14] hover:bg-[#39FF14]/10 data-[state=active]:bg-[#39FF14] data-[state=active]:text-black data-[state=active]:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro:
          "border-2 border-black bg-background active:translate-y-0.5 data-[state=active]:border-b-4 data-[state=active]:border-r-4 data-[state=active]:translate-x-[-2px] data-[state=active]:translate-y-[-2px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        pills: "mt-4",
        underline: "mt-4",
        cards: "mt-4",
        minimal: "mt-4",
        gradient: "mt-4",
        glass:
          "mt-4 p-4 rounded-lg backdrop-blur-md bg-background/20 border border-white/20",
        floating: "mt-4 p-4 rounded-lg shadow-lg bg-background",
        neon: "mt-4 p-4 rounded-lg border border-[#39FF14] text-[#39FF14]",
        retro: "mt-4 p-4 border-2 border-black bg-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    VariantProps<typeof tabsContentVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=active]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=active]:fade-in-0 data-[state=hidden]:zoom-out-95 data-[state=active]:zoom-in-95 data-[state=active]:slide-in-from-left-1/4",
      tabsContentVariants({ variant }),
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
