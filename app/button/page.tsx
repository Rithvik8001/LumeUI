"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Check,
  Github,
  Calendar,
  Plus,
  Share2,
  Bell,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ButtonDemo {
  name: string;
  code: string;
  component: React.ReactNode;
}

export default function ButtonPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const buttonDemos: ButtonDemo[] = [
    {
      name: "primary",
      code: `<Button>Primary</Button>`,
      component: <Button>Primary</Button>,
    },
    {
      name: "secondary",
      code: `<Button variant="secondary">Secondary</Button>`,
      component: <Button variant="secondary">Secondary</Button>,
    },
    {
      name: "outline",
      code: `<Button variant="outline">Outline</Button>`,
      component: <Button variant="outline">Outline</Button>,
    },
    {
      name: "ghost",
      code: `<Button variant="ghost">Ghost</Button>`,
      component: <Button variant="ghost">Ghost</Button>,
    },
    {
      name: "destructive",
      code: `<Button variant="destructive">Delete</Button>`,
      component: <Button variant="destructive">Delete</Button>,
    },
    {
      name: "link",
      code: `<Button variant="link">Link</Button>`,
      component: <Button variant="link">Link</Button>,
    },
    {
      name: "gradient",
      code: `<Button variant="gradient">Gradient</Button>`,
      component: <Button variant="gradient">Gradient</Button>,
    },
    {
      name: "loading",
      code: `<Button disabled><span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /><span className="ml-2">Loading</span></Button>`,
      component: (
        <Button disabled>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span className="ml-2">Loading</span>
        </Button>
      ),
    },
    {
      name: "icon-only",
      code: `<Button size="icon"><Plus className="h-4 w-4" /></Button>`,
      component: (
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      ),
    },
    {
      name: "with-icon",
      code: `<Button icon={<Calendar className="h-4 w-4" />}>Schedule</Button>`,
      component: (
        <Button icon={<Calendar className="h-4 w-4" />}>Schedule</Button>
      ),
    },
    {
      name: "pill",
      code: `<Button size="pill">Pill Button</Button>`,
      component: <Button size="pill">Pill Button</Button>,
    },
    {
      name: "glow",
      code: `<Button variant="glow" animation="pulse">Glow Effect</Button>`,
      component: (
        <Button variant="glow" animation="pulse">
          Glow Effect
        </Button>
      ),
    },
    {
      name: "neon",
      code: `<Button variant="neon">Neon</Button>`,
      component: <Button variant="neon">Neon</Button>,
    },
    {
      name: "retro",
      code: `<Button variant="retro">Retro Style</Button>`,
      component: <Button variant="retro">Retro Style</Button>,
    },
    {
      name: "shine",
      code: `<Button animation="shine">Shine Effect</Button>`,
      component: <Button animation="shine">Shine Effect</Button>,
    },
    {
      name: "social-share",
      code: `<Button icon={<Share2 className="h-4 w-4" />} variant="secondary">Share</Button>`,
      component: (
        <Button icon={<Share2 className="h-4 w-4" />} variant="secondary">
          Share
        </Button>
      ),
    },
    {
      name: "notification",
      code: `<Button size="icon" badge="3"><Bell className="h-4 w-4" /></Button>`,
      component: (
        <Button size="icon" badge="3">
          <Bell className="h-4 w-4" />
        </Button>
      ),
    },
    {
      name: "favorite",
      code: `<Button variant="outline" icon={<Heart className="h-4 w-4 transition-colors group-hover:fill-red-500 group-hover:text-red-500" />}>Favorite</Button>`,
      component: (
        <Button
          variant="outline"
          icon={
            <Heart className="h-4 w-4 transition-colors group-hover:fill-red-500 group-hover:text-red-500" />
          }
        >
          Favorite
        </Button>
      ),
    },
    {
      name: "glassmorphic",
      code: `<Button variant="glassmorphic">Glassmorphic</Button>`,
      component: <Button variant="glassmorphic">Glassmorphic</Button>,
    },
    {
      name: "morphing",
      code: `<Button variant="morphing">Morphing Colors</Button>`,
      component: <Button variant="morphing">Morphing Colors</Button>,
    },
    {
      name: "cyber",
      code: `<Button variant="cyber">Access Granted</Button>`,
      component: <Button variant="cyber">Access Granted</Button>,
    },
    {
      name: "liquid",
      code: `<Button variant="liquid">Liquid Effect</Button>`,
      component: <Button variant="liquid">Liquid Effect</Button>,
    },
    {
      name: "paper",
      code: `<Button variant="paper">Paper Style</Button>`,
      component: <Button variant="paper">Paper Style</Button>,
    },
    {
      name: "threed",
      code: `<Button variant="threed">3D Button</Button>`,
      component: <Button variant="threed">3D Button</Button>,
    },
    {
      name: "minimal",
      code: `<Button variant="minimal">Minimal</Button>`,
      component: <Button variant="minimal">Minimal</Button>,
    },
    {
      name: "magnetic",
      code: `<Button variant="magnetic">Magnetic</Button>`,
      component: <Button variant="magnetic">Magnetic</Button>,
    },
    {
      name: "bounce-animation",
      code: `<Button animation="bounce">Bounce</Button>`,
      component: <Button animation="bounce">Bounce</Button>,
    },
    {
      name: "shake-animation",
      code: `<Button animation="shake">Shake</Button>`,
      component: <Button animation="shake">Shake</Button>,
    },
    {
      name: "spin-animation",
      code: `<Button animation="spin">Spin</Button>`,
      component: <Button animation="spin">Spin</Button>,
    },
  ];

  return (
    <div className="container max-w-[85rem] py-6 lg:py-10">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to components
          </Link>
          <div className="space-y-0.5">
            <h1 className="text-3xl font-bold tracking-tight">Button</h1>
            <p className="text-lg text-muted-foreground">
              Trigger actions with our beautifully crafted button variants.
            </p>
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buttonDemos.map((demo) => (
            <div
              key={demo.name}
              className="group relative flex flex-col items-center gap-4 rounded-lg border bg-background p-8 hover:border-foreground/10 transition-colors"
            >
              {demo.component}
              <button
                onClick={() => copyCode(demo.code, demo.name)}
                className="absolute right-4 top-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
              >
                {copiedId === demo.name ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
