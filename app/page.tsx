import Link from "next/link";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const components = [
  {
    name: "Buttons",
    count: 10,
    description:
      "Trigger actions with our beautifully crafted button variants.",
    href: "/button",
    preview: (
      <div className="flex flex-wrap gap-2">
        <div className="h-9 w-20 rounded-md bg-secondary" />
        <div className="h-9 w-20 rounded-md bg-primary" />
      </div>
    ),
  },
  {
    name: "Badges",
    count: 10,
    description: "Status indicators and labels for your content.",
    href: "/badge",
    preview: (
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-full bg-secondary" />
        <div className="h-6 w-16 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    name: "Inputs",
    count: 10,
    description: "Form controls for capturing user input.",
    href: "/input",
    preview: (
      <div className="flex flex-col gap-2">
        <div className="h-9 w-full rounded-md bg-secondary" />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          {/* Logo - shown on all screens */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl">LumeUI</span>
          </Link>

          {/* Right side navigation */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center px-4 md:px-6">
            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Shining the way to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                better interfaces
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
              Beautiful, modern, and type-safe UI components for Next.js
              applications. Built with Radix UI and Tailwind CSS.
            </p>
          </div>
        </section>

        <section
          id="components"
          className="container space-y-6 py-8 md:py-12 lg:py-24 px-4 md:px-6"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">
              Components
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg">
              Beautifully designed components that you can copy and paste into
              your apps.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[64rem]">
            {components.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="group relative px-4 py-3 sm:px-6 sm:py-4"
              >
                <div className="absolute -inset-y-2 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <div className="relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {component.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {component.count} variants
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-lg border bg-background p-2 mt-4">
                    <div className="flex h-[140px] sm:h-[160px] lg:h-[180px] flex-col justify-between rounded-md p-4 sm:p-6">
                      <p className="text-sm text-muted-foreground">
                        {component.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {component.preview}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
