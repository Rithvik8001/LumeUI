"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Check,
  User,
  Mail,
  Settings,
  Bell,
} from "lucide-react";
import { useState } from "react";
import { Dropdown } from "@/components/ui/dropdown";

interface DropdownDemo {
  name: string;
  code: string;
  component: React.ReactNode;
}

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const iconOptions = [
  { value: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
  { value: "email", label: "Email", icon: <Mail className="h-4 w-4" /> },
  {
    value: "settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
  },
];

const optionsWithDescription = [
  {
    value: "light",
    label: "Light",
    description: "Clean and minimalist interface",
  },
  {
    value: "dark",
    label: "Dark",
    description: "Easy on the eyes in low-light",
  },
  {
    value: "system",
    label: "System",
    description: "Follows your system preferences",
  },
];

export default function DropdownPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const dropdownDemos: DropdownDemo[] = [
    {
      name: "default",
      code: `<Dropdown options={defaultOptions} placeholder="Select option" />`,
      component: (
        <Dropdown options={defaultOptions} placeholder="Select option" />
      ),
    },
    {
      name: "with-icons",
      code: `<Dropdown options={iconOptions} placeholder="Select option" />`,
      component: <Dropdown options={iconOptions} placeholder="Select option" />,
    },
    {
      name: "with-descriptions",
      code: `<Dropdown options={optionsWithDescription} placeholder="Select theme" />`,
      component: (
        <Dropdown options={optionsWithDescription} placeholder="Select theme" />
      ),
    },
    {
      name: "searchable",
      code: `<Dropdown
  options={defaultOptions}
  placeholder="Search options"
  isSearchable
/>`,
      component: (
        <Dropdown
          options={defaultOptions}
          placeholder="Search options"
          isSearchable
        />
      ),
    },
    {
      name: "multi-select",
      code: `<Dropdown
  options={defaultOptions}
  placeholder="Select multiple"
  isMulti
/>`,
      component: (
        <Dropdown
          options={defaultOptions}
          placeholder="Select multiple"
          isMulti
        />
      ),
    },
    {
      name: "clearable",
      code: `<Dropdown
  options={defaultOptions}
  placeholder="Clearable selection"
  isClearable
/>`,
      component: (
        <Dropdown
          options={defaultOptions}
          placeholder="Clearable selection"
          isClearable
        />
      ),
    },
    {
      name: "loading",
      code: `<Dropdown
  options={defaultOptions}
  placeholder="Loading..."
  isLoading
/>`,
      component: (
        <Dropdown options={defaultOptions} placeholder="Loading..." isLoading />
      ),
    },
    {
      name: "disabled",
      code: `<Dropdown
  options={defaultOptions}
  placeholder="Disabled"
  isDisabled
/>`,
      component: (
        <Dropdown options={defaultOptions} placeholder="Disabled" isDisabled />
      ),
    },
    {
      name: "validation",
      code: `<div className="flex flex-col gap-4">
  <Dropdown options={defaultOptions} validation="error" placeholder="Error" />
  <Dropdown options={defaultOptions} validation="success" placeholder="Success" />
  <Dropdown options={defaultOptions} validation="warning" placeholder="Warning" />
</div>`,
      component: (
        <div className="flex flex-col gap-4">
          <Dropdown
            options={defaultOptions}
            validation="error"
            placeholder="Error"
          />
          <Dropdown
            options={defaultOptions}
            validation="success"
            placeholder="Success"
          />
          <Dropdown
            options={defaultOptions}
            validation="warning"
            placeholder="Warning"
          />
        </div>
      ),
    },
    {
      name: "sizes",
      code: `<div className="flex flex-col gap-4">
  <Dropdown options={defaultOptions} size="sm" placeholder="Small" />
  <Dropdown options={defaultOptions} size="default" placeholder="Default" />
  <Dropdown options={defaultOptions} size="lg" placeholder="Large" />
  <Dropdown options={defaultOptions} size="xl" placeholder="Extra Large" />
</div>`,
      component: (
        <div className="flex flex-col gap-4">
          <Dropdown options={defaultOptions} size="sm" placeholder="Small" />
          <Dropdown
            options={defaultOptions}
            size="default"
            placeholder="Default"
          />
          <Dropdown options={defaultOptions} size="lg" placeholder="Large" />
          <Dropdown
            options={defaultOptions}
            size="xl"
            placeholder="Extra Large"
          />
        </div>
      ),
    },
    {
      name: "variants",
      code: `<div className="flex flex-col gap-4">
  <Dropdown options={defaultOptions} variant="floating" placeholder="Floating" />
  <Dropdown options={defaultOptions} variant="command" placeholder="Command" />
  <Dropdown options={defaultOptions} variant="scale" placeholder="Scale" />
  <Dropdown options={defaultOptions} variant="magnetic" placeholder="Magnetic" />
  <Dropdown options={defaultOptions} variant="gooey" placeholder="Gooey" />
  <Dropdown options={defaultOptions} variant="reveal" placeholder="Reveal" />
  <Dropdown options={defaultOptions} variant="neo" placeholder="Neomorphism" />
  <Dropdown options={defaultOptions} variant="glass" placeholder="Glass" />
  <Dropdown options={defaultOptions} variant="portal" placeholder="Portal" />
  <Dropdown options={defaultOptions} variant="pulse" placeholder="Pulse" />
</div>`,
      component: (
        <div className="flex flex-col gap-4">
          <Dropdown
            options={defaultOptions}
            variant="floating"
            placeholder="Floating"
          />
          <Dropdown
            options={defaultOptions}
            variant="command"
            placeholder="Command"
          />
          <Dropdown
            options={defaultOptions}
            variant="scale"
            placeholder="Scale"
          />
          <Dropdown
            options={defaultOptions}
            variant="magnetic"
            placeholder="Magnetic"
          />
          <Dropdown
            options={defaultOptions}
            variant="gooey"
            placeholder="Gooey"
          />
          <Dropdown
            options={defaultOptions}
            variant="reveal"
            placeholder="Reveal"
          />
          <Dropdown
            options={defaultOptions}
            variant="neo"
            placeholder="Neomorphism"
          />
          <Dropdown
            options={defaultOptions}
            variant="glass"
            placeholder="Glass"
          />
          <Dropdown
            options={defaultOptions}
            variant="portal"
            placeholder="Portal"
          />
          <Dropdown
            options={defaultOptions}
            variant="pulse"
            placeholder="Pulse"
          />
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
            <h1 className="text-3xl font-bold tracking-tight">Dropdown</h1>
            <p className="text-lg text-muted-foreground">
              A versatile dropdown component for selecting single or multiple
              options.
            </p>
          </div>
        </div>

        {/* Dropdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dropdownDemos.map((demo) => (
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
