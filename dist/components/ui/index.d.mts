import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TabsPrimitive from '@radix-ui/react-tabs';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "glow" | "neon" | "retro" | "glassmorphic" | "morphing" | "cyber" | "liquid" | "paper" | "threed" | "minimal" | "magnetic" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "pill" | null | undefined;
    animation?: "gradient" | "none" | "shine" | "pulse" | "bounce" | "shake" | "spin" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    icon?: React.ReactNode;
    badge?: string | number;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const inputVariants: (props?: ({
    variant?: "default" | "ghost" | "neon" | "retro" | "glassmorphic" | "cyber" | "paper" | "minimal" | "pill" | "underline" | "modern" | "material" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | "xs" | "xl" | null | undefined;
    validation?: "none" | "error" | "success" | "warning" | null | undefined;
    isLoading?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    clearable?: boolean;
    onClear?: () => void;
    showPasswordToggle?: boolean;
    isLoading?: boolean;
    prefix?: string;
    suffix?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const dropdownVariants: (props?: ({
    variant?: "default" | "magnetic" | "pulse" | "scale" | "floating" | "command" | "gooey" | "reveal" | "neo" | "glass" | "portal" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
    validation?: "none" | "error" | "success" | "warning" | null | undefined;
    isSearchable?: boolean | null | undefined;
    isMulti?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface DropdownOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
    description?: string;
    disabled?: boolean;
}
interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange">, VariantProps<typeof dropdownVariants> {
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
declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const popoverVariants: (props?: ({
    variant?: "default" | "glow" | "scale" | "command" | "reveal" | "glass" | "float" | "drawer" | "flip" | "spotlight" | "elastic" | null | undefined;
    size?: "default" | "sm" | "lg" | "full" | "auto" | null | undefined;
    align?: "end" | "center" | "start" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface PopoverContentProps extends Omit<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, keyof VariantProps<typeof popoverVariants>>, VariantProps<typeof popoverVariants> {
    container?: HTMLElement;
}
declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;

declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "gradient" | "neon" | "retro" | "minimal" | "underline" | "floating" | "glass" | "pills" | "cards" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "gradient" | "neon" | "retro" | "minimal" | "underline" | "floating" | "glass" | "pills" | "cards" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "gradient" | "neon" | "retro" | "minimal" | "underline" | "floating" | "glass" | "pills" | "cards" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;

export { Button, type ButtonProps, Dropdown, type DropdownOption, type DropdownProps, Input, type InputProps, Popover, PopoverContent, type PopoverContentProps, PopoverTrigger, Tabs, TabsContent, TabsList, TabsTrigger, buttonVariants, dropdownVariants, inputVariants };
