"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { ArrowRight, Sparkles, Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";

const components = [
  {
    name: "Buttons",
    count: 27,
    description:
      "Trigger actions with our beautifully crafted button variants.",
    href: "/button",
    preview: (
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <div className="h-9 w-full rounded-md bg-primary" />
          <div className="h-9 w-full rounded-md bg-secondary" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-9 w-full rounded-md border-2 border-primary bg-transparent" />
          <div className="h-9 w-full rounded-md bg-muted" />
        </div>
      </div>
    ),
  },
  {
    name: "Badges",
    count: 13,
    description: "Status indicators and labels for your content.",
    href: "/badge",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="h-6 w-full rounded-full bg-primary" />
          <div className="h-6 w-2/3 rounded-full bg-secondary" />
        </div>
        <div className="space-y-2">
          <div className="h-6 w-2/3 rounded-full bg-muted" />
          <div className="h-6 w-full rounded-full border-2 border-primary bg-transparent" />
        </div>
      </div>
    ),
  },
  {
    name: "Inputs",
    count: 12,
    description: "Form controls for capturing user input.",
    href: "/input",
    preview: (
      <div className="space-y-4 w-full">
        <div className="h-10 w-full rounded-md bg-secondary/50 backdrop-blur" />
        <div className="flex gap-2">
          <div className="h-10 flex-1 rounded-md border-2 border-muted bg-transparent" />
          <div className="h-10 w-10 rounded-md bg-primary" />
        </div>
      </div>
    ),
  },
  {
    name: "Dropdowns",
    count: 11,
    description:
      "Versatile selection menus with multiple variants and features.",
    href: "/dropdown",
    preview: (
      <div className="space-y-4 w-full">
        <div className="h-10 w-full rounded-md bg-background border" />
        <div className="space-y-2">
          <div className="h-8 w-full rounded-md bg-accent/50" />
          <div className="h-8 w-2/3 rounded-md bg-accent/30" />
        </div>
      </div>
    ),
  },
  {
    name: "Popovers",
    count: 11,
    description: "Floating panels with various animations and styles.",
    href: "/popover",
    preview: (
      <div className="flex h-full w-full items-center justify-center rounded-lg border bg-background p-6">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-24 rounded-md bg-primary/10" />
          <div className="h-20 w-48 rounded-lg bg-muted shadow-lg" />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const installCommand = "npm install lume-ui";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Grid Background */}
      <div className="pointer-events-none fixed inset-0 select-none bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          {/* Logo - shown on all screens */}
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold text-xl">LumeUI</span>
          </Link>

          <div className="hidden md:flex items-center">
            <ModeToggle />
          </div>

          <div className="md:hidden">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="container relative">
            <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center">
              <div className="relative z-10 max-w-3xl px-4">
                <div className="absolute -left-4 top-16 h-32 w-32 bg-primary/10 blur-3xl" />
                <div className="absolute -right-4 bottom-16 h-32 w-32 bg-primary/10 blur-3xl" />

                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                    <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                    Now in beta
                  </div>
                  <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Shining the way to{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      better interfaces
                    </span>
                  </h1>
                  <p className="mx-auto max-w-[42rem] text-muted-foreground sm:text-xl">
                    Beautiful, modern, and type-safe UI components for Next.js
                    applications. Built with Radix UI and Tailwind CSS.
                  </p>
                  <div className="flex items-center justify-center gap-2 rounded-lg border bg-muted/50 px-4 py-2">
                    <Terminal className="h-4 w-4 text-muted-foreground" />
                    <code className="text-sm font-mono text-muted-foreground">
                      {installCommand}
                    </code>
                    <button
                      onClick={copyToClipboard}
                      className="ml-2 rounded-full p-1.5 hover:bg-muted-foreground/10 transition-colors"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="border-t">
          <div className="container py-20">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
                Components
              </h2>
              <p className="max-w-[85%] text-muted-foreground sm:text-lg">
                Beautifully designed components that you can copy and paste into
                your apps.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <Link
                  key={component.name}
                  href={component.href}
                  className="group relative flex flex-col"
                >
                  <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border bg-background/80 p-6 transition-all hover:shadow-lg backdrop-blur-sm">
                    {/* Card Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {component.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {component.count} variants
                        </p>
                      </div>
                      <div className="rounded-full bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Preview Area */}
                    <div className="relative flex-1 overflow-hidden rounded-lg border bg-muted/40 p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative h-full">{component.preview}</div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
