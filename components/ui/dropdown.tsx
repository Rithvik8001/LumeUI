"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDown, Check, Search, X, Loader2 } from "lucide-react";

const dropdownVariants = cva(
  "relative w-full rounded-md border border-input bg-background text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        ghost:
          "border-none shadow-none focus-within:ring-0 focus-within:ring-offset-0",
        underline:
          "rounded-none border-0 border-b border-input bg-transparent focus-within:ring-0 focus-within:ring-offset-0 focus-within:border-primary",
        pill: "rounded-full",
        modern:
          "border-0 bg-secondary/50 focus-within:ring-0 focus-within:ring-offset-0 focus-within:bg-secondary",
        material:
          "border-0 border-b-2 border-muted bg-transparent focus-within:ring-0 focus-within:ring-offset-0 focus-within:border-primary transition-colors",
        glassmorphic:
          "border-0 bg-white/10 backdrop-blur-md focus-within:ring-0 focus-within:ring-offset-0 focus-within:bg-white/20",
        neon: "border-2 border-[#39FF14] bg-black text-[#39FF14] focus-within:ring-[#39FF14] focus-within:ring-offset-0 focus-within:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro:
          "rounded-none border-2 border-b-4 border-r-4 border-black focus-within:ring-0 focus-within:translate-x-[2px] focus-within:translate-y-[2px] focus-within:border-b-2 focus-within:border-r-2 transition-all",
        cyber:
          "border-[#00ff00] bg-black text-[#00ff00] font-mono tracking-wider focus-within:ring-[#00ff00] focus-within:shadow-[0_0_10px_#00ff00]",
        minimal:
          "border-0 border-b border-border bg-transparent rounded-none focus-within:ring-0 focus-within:border-primary hover:border-foreground",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-base",
        xl: "h-14 text-lg",
      },
      validation: {
        none: "",
        error:
          "border-destructive focus-within:ring-destructive text-destructive",
        success: "border-green-500 focus-within:ring-green-500 text-green-500",
        warning:
          "border-yellow-500 focus-within:ring-yellow-500 text-yellow-500",
      },
      isSearchable: {
        true: "",
        false: "",
      },
      isMulti: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      validation: "none",
      isSearchable: false,
      isMulti: false,
    },
  }
);

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange">,
    VariantProps<typeof dropdownVariants> {
  options: DropdownOption[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  isLoading?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  onSearch?: (query: string) => void;
  noOptionsMessage?: string;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      variant,
      size,
      validation,
      options,
      value,
      onChange,
      placeholder = "Select an option",
      isLoading,
      isClearable,
      isDisabled,
      isSearchable,
      isMulti,
      onSearch,
      noOptionsMessage = "No options available",
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [selectedValues, setSelectedValues] = React.useState<string[]>(
      Array.isArray(value) ? value : value ? [value] : []
    );

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOptionClick = (optionValue: string) => {
      if (isMulti) {
        const newValues = selectedValues.includes(optionValue)
          ? selectedValues.filter((v) => v !== optionValue)
          : [...selectedValues, optionValue];
        setSelectedValues(newValues);
        onChange?.(newValues);
      } else {
        setSelectedValues([optionValue]);
        onChange?.(optionValue);
        setIsOpen(false);
      }
    };

    const handleClear = () => {
      setSelectedValues([]);
      onChange?.(isMulti ? [] : "");
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch?.(query);
    };

    return (
      <div
        className={cn(
          dropdownVariants({ variant, size, validation }),
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-between gap-2 px-3 py-2",
            isDisabled && "cursor-not-allowed opacity-50"
          )}
          onClick={() => !isDisabled && setIsOpen(!isOpen)}
        >
          <div className="flex flex-1 flex-wrap gap-1">
            {selectedValues.length > 0 ? (
              isMulti ? (
                selectedValues.map((val) => {
                  const option = options.find((opt) => opt.value === val);
                  return (
                    <span
                      key={val}
                      className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-xs"
                    >
                      {option?.icon}
                      {option?.label}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionClick(val);
                        }}
                        className="ml-1 rounded-full hover:bg-secondary-foreground/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  );
                })
              ) : (
                <span className="flex items-center gap-2">
                  {options.find((opt) => opt.value === selectedValues[0])?.icon}
                  {
                    options.find((opt) => opt.value === selectedValues[0])
                      ?.label
                  }
                </span>
              )
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {isLoading && (
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            )}
            {isClearable && selectedValues.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClear();
                }}
                className="rounded-full p-1 hover:bg-secondary text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </div>

        {isOpen && !isDisabled && (
          <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-md border bg-popover shadow-md">
            {isSearchable && (
              <div className="border-b p-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="w-full rounded-md bg-transparent py-2 pl-8 pr-2 text-sm outline-none placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </div>
            )}
            <div className="max-h-60 overflow-y-auto p-1">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground",
                      option.disabled && "pointer-events-none opacity-50",
                      selectedValues.includes(option.value) &&
                        "bg-accent text-accent-foreground"
                    )}
                    onClick={() => handleOptionClick(option.value)}
                    disabled={option.disabled}
                  >
                    {option.icon}
                    <div className="flex flex-1 flex-col items-start">
                      <span>{option.label}</span>
                      {option.description && (
                        <span className="text-xs text-muted-foreground">
                          {option.description}
                        </span>
                      )}
                    </div>
                    {selectedValues.includes(option.value) && (
                      <Check className="h-4 w-4" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-2 py-4 text-center text-sm text-muted-foreground">
                  {noOptionsMessage}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export { Dropdown, dropdownVariants };
