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
        floating:
          "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-lg [&>div]:rounded-lg hover:[&>div]:border-primary/50",
        command:
          "border-none bg-secondary/50 backdrop-blur-sm focus-within:ring-0 focus-within:ring-offset-0 [&>div]:px-4 [&>div]:py-3 [&>div]:font-mono [&>div:before]:content-['>'] [&>div:before]:mr-2 [&>div:before]:text-primary/50",
        scale:
          "overflow-hidden border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm [&>div]:transition-transform hover:[&>div]:scale-[1.02] active:[&>div]:scale-[0.98]",
        magnetic:
          "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm [&>div]:transition-all hover:[&>div]:translate-x-0.5 hover:[&>div]:translate-y-0.5",
        gooey:
          "border-none bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px] focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-gradient-xy before:opacity-0 hover:before:opacity-100",
        reveal:
          "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm [&>div]:transition-all [&>div]:delay-150 hover:[&>div]:translate-y-[-2px] hover:[&>div]:shadow-lg",
        neo: "border-2 border-foreground bg-background shadow-[4px_4px_0px_0px] shadow-foreground focus-within:ring-0 focus-within:ring-offset-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all",
        glass:
          "bg-background/30 backdrop-blur-md border-white/20 shadow-lg focus-within:ring-0 focus-within:ring-offset-0 hover:bg-background/40 transition-colors [&>div]:text-foreground",
        portal:
          "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] [&>div]:transition-all hover:[&>div]:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
        pulse:
          "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm hover:[&>div]:animate-[pulse_1s_ease-in-out]",
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
