"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Check, Search, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface InputDemo {
  name: string;
  code: string;
  component: React.ReactNode;
}

export default function InputPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const inputDemos: InputDemo[] = [
    {
      name: "default",
      code: `<Input placeholder="Default input" />`,
      component: <Input placeholder="Default input" />,
    },
    {
      name: "ghost",
      code: `<Input variant="ghost" placeholder="Ghost input" />`,
      component: <Input variant="ghost" placeholder="Ghost input" />,
    },
    {
      name: "underline",
      code: `<Input variant="underline" placeholder="Underline input" />`,
      component: <Input variant="underline" placeholder="Underline input" />,
    },
    {
      name: "pill",
      code: `<Input variant="pill" placeholder="Pill input" />`,
      component: <Input variant="pill" placeholder="Pill input" />,
    },
    {
      name: "modern",
      code: `<Input variant="modern" placeholder="Modern input" />`,
      component: <Input variant="modern" placeholder="Modern input" />,
    },
    {
      name: "material",
      code: `<Input variant="material" placeholder="Material input" />`,
      component: <Input variant="material" placeholder="Material input" />,
    },
    {
      name: "with-icon",
      code: `<Input icon={<Search className="h-4 w-4" />} placeholder="Search..." />`,
      component: (
        <Input
          icon={<Search className="h-4 w-4" />}
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      ),
    },
    {
      name: "clearable",
      code: `<Input
  icon={<Mail className="h-4 w-4" />}
  placeholder="Email"
  clearable
  onClear={() => setEmailValue("")}
  value={emailValue}
  onChange={(e) => setEmailValue(e.target.value)}
/>`,
      component: (
        <Input
          icon={<Mail className="h-4 w-4" />}
          placeholder="Email"
          clearable
          onClear={() => setEmailValue("")}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      ),
    },
    {
      name: "password",
      code: `<Input
  icon={<Lock className="h-4 w-4" />}
  type="password"
  placeholder="Password"
  showPasswordToggle
/>`,
      component: (
        <Input
          icon={<Lock className="h-4 w-4" />}
          type="password"
          placeholder="Password"
          showPasswordToggle
        />
      ),
    },
    {
      name: "sizes",
      code: `<div className="flex flex-col gap-4">
  <Input inputSize="sm" placeholder="Small input" />
  <Input inputSize="default" placeholder="Default input" />
  <Input inputSize="lg" placeholder="Large input" />
</div>`,
      component: (
        <div className="flex flex-col gap-4">
          <Input inputSize="sm" placeholder="Small input" />
          <Input inputSize="default" placeholder="Default input" />
          <Input inputSize="lg" placeholder="Large input" />
        </div>
      ),
    },
    {
      name: "validation",
      code: `<div className="flex flex-col gap-4">
  <Input validation="error" placeholder="Error input" />
  <Input validation="success" placeholder="Success input" />
  <Input validation="warning" placeholder="Warning input" />
</div>`,
      component: (
        <div className="flex flex-col gap-4">
          <Input validation="error" placeholder="Error input" />
          <Input validation="success" placeholder="Success input" />
          <Input validation="warning" placeholder="Warning input" />
        </div>
      ),
    },
    {
      name: "disabled",
      code: `<Input disabled placeholder="Disabled input" />`,
      component: <Input disabled placeholder="Disabled input" />,
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
            <h1 className="text-3xl font-bold tracking-tight">Input</h1>
            <p className="text-lg text-muted-foreground">
              Form controls for capturing user input with various styles and
              features.
            </p>
          </div>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inputDemos.map((demo) => (
            <div
              key={demo.name}
              className="group relative flex flex-col gap-4 rounded-lg border bg-background p-8 hover:border-foreground/10 transition-colors"
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
