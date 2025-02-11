"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Check, Settings, User, Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface PopoverDemo {
  name: string;
  code: string;
  component: React.ReactNode;
}

export default function PopoverPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const popoverDemos: PopoverDemo[] = [
    {
      name: "default",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button>Click me</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Default Popover</h4>
      <p className="text-sm text-muted-foreground">
        A basic popover with default styling and animations.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Click me</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Default Popover</h4>
              <p className="text-sm text-muted-foreground">
                A basic popover with default styling and animations.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "float",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Float Animation</Button>
  </PopoverTrigger>
  <PopoverContent variant="float">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Floating Effect</h4>
      <p className="text-sm text-muted-foreground">
        Smooth floating animation on entry and exit.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Float Animation</Button>
          </PopoverTrigger>
          <PopoverContent variant="float">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Floating Effect</h4>
              <p className="text-sm text-muted-foreground">
                Smooth floating animation on entry and exit.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "scale",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Scale</Button>
  </PopoverTrigger>
  <PopoverContent variant="scale">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Scale Animation</h4>
      <p className="text-sm text-muted-foreground">
        Smooth scale animation from the trigger point.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Scale</Button>
          </PopoverTrigger>
          <PopoverContent variant="scale">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Scale Animation</h4>
              <p className="text-sm text-muted-foreground">
                Smooth scale animation from the trigger point.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "glow",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Glow Effect</Button>
  </PopoverTrigger>
  <PopoverContent variant="glow">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Glow Effect</h4>
      <p className="text-sm text-muted-foreground">
        Subtle glow effect with backdrop blur.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Glow Effect</Button>
          </PopoverTrigger>
          <PopoverContent variant="glow">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Glow Effect</h4>
              <p className="text-sm text-muted-foreground">
                Subtle glow effect with backdrop blur.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "drawer",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button>Drawer Style</Button>
  </PopoverTrigger>
  <PopoverContent variant="drawer">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Drawer Animation</h4>
      <p className="text-sm text-muted-foreground">
        Slides in like a drawer from the edge.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Drawer Style</Button>
          </PopoverTrigger>
          <PopoverContent variant="drawer">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Drawer Animation</h4>
              <p className="text-sm text-muted-foreground">
                Slides in like a drawer from the edge.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "command",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Command Style</Button>
  </PopoverTrigger>
  <PopoverContent variant="command">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Command Style</h4>
      <p className="text-sm text-muted-foreground">
        Terminal-inspired command style popover.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Command Style</Button>
          </PopoverTrigger>
          <PopoverContent variant="command">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Command Style</h4>
              <p className="text-sm text-muted-foreground">
                Terminal-inspired command style popover.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "glass",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Glass Effect</Button>
  </PopoverTrigger>
  <PopoverContent variant="glass">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Glass Effect</h4>
      <p className="text-sm text-muted-foreground">
        Modern glassmorphism effect with blur.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Glass Effect</Button>
          </PopoverTrigger>
          <PopoverContent variant="glass">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Glass Effect</h4>
              <p className="text-sm text-muted-foreground">
                Modern glassmorphism effect with blur.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "spotlight",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button>Spotlight</Button>
  </PopoverTrigger>
  <PopoverContent variant="spotlight">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Spotlight Effect</h4>
      <p className="text-sm text-muted-foreground">
        Animated spotlight gradient on hover.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Spotlight</Button>
          </PopoverTrigger>
          <PopoverContent variant="spotlight">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Spotlight Effect</h4>
              <p className="text-sm text-muted-foreground">
                Animated spotlight gradient on hover.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "elastic",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Elastic</Button>
  </PopoverTrigger>
  <PopoverContent variant="elastic">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Elastic Animation</h4>
      <p className="text-sm text-muted-foreground">
        Playful elastic animation on entry and exit.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Elastic</Button>
          </PopoverTrigger>
          <PopoverContent variant="elastic">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Elastic Animation</h4>
              <p className="text-sm text-muted-foreground">
                Playful elastic animation on entry and exit.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "reveal",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button>Reveal</Button>
  </PopoverTrigger>
  <PopoverContent variant="reveal">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Reveal Effect</h4>
      <p className="text-sm text-muted-foreground">
        Smooth reveal animation with gradient.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Reveal</Button>
          </PopoverTrigger>
          <PopoverContent variant="reveal">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Reveal Effect</h4>
              <p className="text-sm text-muted-foreground">
                Smooth reveal animation with gradient.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "sizes",
      code: `<div className="flex items-center gap-4">
  <Popover>
    <PopoverTrigger asChild>
      <Button>Small</Button>
    </PopoverTrigger>
    <PopoverContent size="sm">
      <p className="text-sm">Small size popover content.</p>
    </PopoverContent>
  </Popover>
  <Popover>
    <PopoverTrigger asChild>
      <Button>Large</Button>
    </PopoverTrigger>
    <PopoverContent size="lg">
      <p className="text-sm">Large size popover with more content space.</p>
    </PopoverContent>
  </Popover>
</div>`,
      component: (
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Small</Button>
            </PopoverTrigger>
            <PopoverContent size="sm">
              <p className="text-sm">Small size popover content.</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Large</Button>
            </PopoverTrigger>
            <PopoverContent size="lg">
              <p className="text-sm">
                Large size popover with more content space.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      ),
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
            <h1 className="text-3xl font-bold tracking-tight">Popover</h1>
            <p className="text-lg text-muted-foreground">
              A floating element that displays additional content when
              triggered.
            </p>
          </div>
        </div>

        {/* Popover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {popoverDemos.map((demo) => (
            <div
              key={demo.name}
              className="group relative flex flex-col gap-4 rounded-lg border bg-background p-6 hover:border-foreground/10 transition-colors"
            >
              <div className="flex min-h-[80px] w-full items-center justify-center">
                {demo.component}
              </div>
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
