"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface BadgeDemo {
  name: string;
  code: string;
  component: React.ReactNode;
}

export default function BadgePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const badgeDemos: BadgeDemo[] = [
    {
      name: "default",
      code: `<Badge>Default</Badge>`,
      component: <Badge>Default</Badge>,
    },
    {
      name: "secondary",
      code: `<Badge variant="secondary">Secondary</Badge>`,
      component: <Badge variant="secondary">Secondary</Badge>,
    },
    {
      name: "destructive",
      code: `<Badge variant="destructive">Destructive</Badge>`,
      component: <Badge variant="destructive">Destructive</Badge>,
    },
    {
      name: "outline",
      code: `<Badge variant="outline">Outline</Badge>`,
      component: <Badge variant="outline">Outline</Badge>,
    },
    {
      name: "success",
      code: `<Badge variant="success">Success</Badge>`,
      component: <Badge variant="success">Success</Badge>,
    },
    {
      name: "warning",
      code: `<Badge variant="warning">Warning</Badge>`,
      component: <Badge variant="warning">Warning</Badge>,
    },
    {
      name: "info",
      code: `<Badge variant="info">Info</Badge>`,
      component: <Badge variant="info">Info</Badge>,
    },
    {
      name: "gradient",
      code: `<Badge variant="gradient">Gradient</Badge>`,
      component: <Badge variant="gradient">Gradient</Badge>,
    },
    {
      name: "ghost",
      code: `<Badge variant="ghost">Ghost</Badge>`,
      component: <Badge variant="ghost">Ghost</Badge>,
    },
    {
      name: "glow",
      code: `<Badge variant="glow">Glow</Badge>`,
      component: <Badge variant="glow">Glow</Badge>,
    },
    {
      name: "sizes",
      code: `<div className="flex items-center gap-4">
  <Badge size="sm">Small</Badge>
  <Badge size="default">Default</Badge>
  <Badge size="lg">Large</Badge>
  <Badge size="pill">Pill</Badge>
</div>`,
      component: (
        <div className="flex items-center gap-4">
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
          <Badge size="pill">Pill</Badge>
        </div>
      ),
    },
    {
      name: "with-dot",
      code: `<div className="flex items-center gap-4">
  <Badge withDot dotColor="#22c55e">Online</Badge>
  <Badge withDot dotColor="#ef4444">Offline</Badge>
  <Badge withDot dotColor="#eab308">Away</Badge>
</div>`,
      component: (
        <div className="flex items-center gap-4">
          <Badge withDot dotColor="#22c55e">
            Online
          </Badge>
          <Badge withDot dotColor="#ef4444">
            Offline
          </Badge>
          <Badge withDot dotColor="#eab308">
            Away
          </Badge>
        </div>
      ),
    },
    {
      name: "animations-pulse",
      code: `<Badge animation="pulse">Pulse</Badge>`,
      component: <Badge animation="pulse">Pulse</Badge>,
    },
    {
      name: "animations-bounce",
      code: `<Badge animation="bounce">Bounce</Badge>`,
      component: <Badge animation="bounce">Bounce</Badge>,
    },
    {
      name: "animations-ping",
      code: `<Badge animation="ping">Ping</Badge>`,
      component: <Badge animation="ping">Ping</Badge>,
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
            <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
            <p className="text-lg text-muted-foreground">
              Status indicators and labels for your content.
            </p>
          </div>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {badgeDemos.map((demo) => (
            <div
              key={demo.name}
              className="group relative flex flex-col gap-2 rounded-lg border bg-background p-6 hover:border-foreground/10 transition-colors"
            >
              <div className="flex h-10 items-center justify-center">
                {demo.component}
              </div>
              <button
                onClick={() => copyCode(demo.code, demo.name)}
                className="absolute right-3 top-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
              >
                {copiedId === demo.name ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
