"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Check, Settings, User, Bell } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabsDemo {
  name: string;
  code: string;
  component: React.ReactNode;
}

export default function TabsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const tabsDemos: TabsDemo[] = [
    {
      name: "default",
      code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings</TabsContent>
  <TabsContent value="password">Password settings</TabsContent>
  <TabsContent value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account settings</TabsContent>
          <TabsContent value="password">Password settings</TabsContent>
          <TabsContent value="settings">Other settings</TabsContent>
        </Tabs>
      ),
    },
    {
      name: "pills",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="pills" className="w-full">
    <TabsTrigger variant="pills" value="account">Account</TabsTrigger>
    <TabsTrigger variant="pills" value="password">Password</TabsTrigger>
    <TabsTrigger variant="pills" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="pills" value="account">Account settings</TabsContent>
  <TabsContent variant="pills" value="password">Password settings</TabsContent>
  <TabsContent variant="pills" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="pills" className="w-full">
            <TabsTrigger variant="pills" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="pills" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="pills" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="pills" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="pills" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="pills" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "underline",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="account">Account</TabsTrigger>
    <TabsTrigger variant="underline" value="password">Password</TabsTrigger>
    <TabsTrigger variant="underline" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="underline" value="account">Account settings</TabsContent>
  <TabsContent variant="underline" value="password">Password settings</TabsContent>
  <TabsContent variant="underline" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="underline" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="underline" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="underline" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="underline" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="underline" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "cards",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="cards">
    <TabsTrigger variant="cards" value="account">Account</TabsTrigger>
    <TabsTrigger variant="cards" value="password">Password</TabsTrigger>
    <TabsTrigger variant="cards" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="cards" value="account">Account settings</TabsContent>
  <TabsContent variant="cards" value="password">Password settings</TabsContent>
  <TabsContent variant="cards" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="cards">
            <TabsTrigger variant="cards" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="cards" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="cards" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="cards" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="cards" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="cards" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "minimal",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="minimal">
    <TabsTrigger variant="minimal" value="account">Account</TabsTrigger>
    <TabsTrigger variant="minimal" value="password">Password</TabsTrigger>
    <TabsTrigger variant="minimal" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="minimal" value="account">Account settings</TabsContent>
  <TabsContent variant="minimal" value="password">Password settings</TabsContent>
  <TabsContent variant="minimal" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="minimal">
            <TabsTrigger variant="minimal" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="minimal" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="minimal" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="minimal" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="minimal" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="minimal" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "gradient",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="gradient">
    <TabsTrigger variant="gradient" value="account">Account</TabsTrigger>
    <TabsTrigger variant="gradient" value="password">Password</TabsTrigger>
    <TabsTrigger variant="gradient" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="gradient" value="account">Account settings</TabsContent>
  <TabsContent variant="gradient" value="password">Password settings</TabsContent>
  <TabsContent variant="gradient" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="gradient">
            <TabsTrigger variant="gradient" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="gradient" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="gradient" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="gradient" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="gradient" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="gradient" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "glass",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="glass">
    <TabsTrigger variant="glass" value="account">Account</TabsTrigger>
    <TabsTrigger variant="glass" value="password">Password</TabsTrigger>
    <TabsTrigger variant="glass" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="glass" value="account">Account settings</TabsContent>
  <TabsContent variant="glass" value="password">Password settings</TabsContent>
  <TabsContent variant="glass" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="glass">
            <TabsTrigger variant="glass" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="glass" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="glass" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="glass" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="glass" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="glass" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "floating",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="floating">
    <TabsTrigger variant="floating" value="account">Account</TabsTrigger>
    <TabsTrigger variant="floating" value="password">Password</TabsTrigger>
    <TabsTrigger variant="floating" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="floating" value="account">Account settings</TabsContent>
  <TabsContent variant="floating" value="password">Password settings</TabsContent>
  <TabsContent variant="floating" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="floating">
            <TabsTrigger variant="floating" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="floating" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="floating" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="floating" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="floating" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="floating" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "neon",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="neon">
    <TabsTrigger variant="neon" value="account">Account</TabsTrigger>
    <TabsTrigger variant="neon" value="password">Password</TabsTrigger>
    <TabsTrigger variant="neon" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="neon" value="account">Account settings</TabsContent>
  <TabsContent variant="neon" value="password">Password settings</TabsContent>
  <TabsContent variant="neon" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="neon">
            <TabsTrigger variant="neon" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="neon" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="neon" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="neon" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="neon" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="neon" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "retro",
      code: `<Tabs defaultValue="account" className="w-full">
  <TabsList variant="retro">
    <TabsTrigger variant="retro" value="account">Account</TabsTrigger>
    <TabsTrigger variant="retro" value="password">Password</TabsTrigger>
    <TabsTrigger variant="retro" value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent variant="retro" value="account">Account settings</TabsContent>
  <TabsContent variant="retro" value="password">Password settings</TabsContent>
  <TabsContent variant="retro" value="settings">Other settings</TabsContent>
</Tabs>`,
      component: (
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="retro">
            <TabsTrigger variant="retro" value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant="retro" value="password">
              Password
            </TabsTrigger>
            <TabsTrigger variant="retro" value="settings">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent variant="retro" value="account">
            Account settings
          </TabsContent>
          <TabsContent variant="retro" value="password">
            Password settings
          </TabsContent>
          <TabsContent variant="retro" value="settings">
            Other settings
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "sizes",
      code: `<div className="space-y-8">
  <Tabs defaultValue="sm" className="w-full">
    <TabsList size="sm">
      <TabsTrigger value="sm">Small</TabsTrigger>
      <TabsTrigger value="sm2">Tab</TabsTrigger>
      <TabsTrigger value="sm3">Tab</TabsTrigger>
    </TabsList>
    <TabsContent value="sm">Small size tabs</TabsContent>
    <TabsContent value="sm2">Content 2</TabsContent>
    <TabsContent value="sm3">Content 3</TabsContent>
  </Tabs>
  <Tabs defaultValue="default" className="w-full">
    <TabsList>
      <TabsTrigger value="default">Default</TabsTrigger>
      <TabsTrigger value="default2">Tab</TabsTrigger>
      <TabsTrigger value="default3">Tab</TabsTrigger>
    </TabsList>
    <TabsContent value="default">Default size tabs</TabsContent>
    <TabsContent value="default2">Content 2</TabsContent>
    <TabsContent value="default3">Content 3</TabsContent>
  </Tabs>
  <Tabs defaultValue="lg" className="w-full">
    <TabsList size="lg">
      <TabsTrigger value="lg">Large</TabsTrigger>
      <TabsTrigger value="lg2">Tab</TabsTrigger>
      <TabsTrigger value="lg3">Tab</TabsTrigger>
    </TabsList>
    <TabsContent value="lg">Large size tabs</TabsContent>
    <TabsContent value="lg2">Content 2</TabsContent>
    <TabsContent value="lg3">Content 3</TabsContent>
  </Tabs>
</div>`,
      component: (
        <div className="space-y-8">
          <Tabs defaultValue="sm" className="w-full">
            <TabsList size="sm">
              <TabsTrigger value="sm">Small</TabsTrigger>
              <TabsTrigger value="sm2">Tab</TabsTrigger>
              <TabsTrigger value="sm3">Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="sm">Small size tabs</TabsContent>
            <TabsContent value="sm2">Content 2</TabsContent>
            <TabsContent value="sm3">Content 3</TabsContent>
          </Tabs>
          <Tabs defaultValue="default" className="w-full">
            <TabsList>
              <TabsTrigger value="default">Default</TabsTrigger>
              <TabsTrigger value="default2">Tab</TabsTrigger>
              <TabsTrigger value="default3">Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="default">Default size tabs</TabsContent>
            <TabsContent value="default2">Content 2</TabsContent>
            <TabsContent value="default3">Content 3</TabsContent>
          </Tabs>
          <Tabs defaultValue="lg" className="w-full">
            <TabsList size="lg">
              <TabsTrigger value="lg">Large</TabsTrigger>
              <TabsTrigger value="lg2">Tab</TabsTrigger>
              <TabsTrigger value="lg3">Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="lg">Large size tabs</TabsContent>
            <TabsContent value="lg2">Content 2</TabsContent>
            <TabsContent value="lg3">Content 3</TabsContent>
          </Tabs>
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
            <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
            <p className="text-lg text-muted-foreground">
              A set of layered sections of content that display one panel at a
              time.
            </p>
          </div>
        </div>

        {/* Tabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tabsDemos.map((demo) => (
            <div
              key={demo.name}
              className="group relative flex flex-col gap-4 rounded-lg border bg-background p-6 hover:border-foreground/10 transition-colors"
            >
              <div className="flex min-h-[120px] w-full items-start justify-center">
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
