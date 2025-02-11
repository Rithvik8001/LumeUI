'use strict';

var React4 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var lucideReact = require('lucide-react');
var PopoverPrimitive = require('@radix-ui/react-popover');
var TabsPrimitive = require('@radix-ui/react-tabs');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React4__namespace = /*#__PURE__*/_interopNamespace(React4);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:opacity-90",
        glow: "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.65)]",
        neon: "bg-black text-[#39FF14] border-[#39FF14] border hover:bg-[#39FF14]/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro: "bg-primary text-primary-foreground border-2 border-b-4 border-r-4 border-black active:translate-y-1 active:border-b-2 active:border-r-2 rounded-none",
        glassmorphic: "backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:bg-white/20",
        morphing: "relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-indigo-500 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out [&>span]:relative [&>span]:z-10",
        cyber: "bg-black text-[#00ff00] border border-[#00ff00] font-mono uppercase tracking-wider hover:bg-[#00ff00] hover:text-black hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 before:content-['>>'] before:mr-2 after:content-['<<'] after:ml-2",
        liquid: "relative bg-gradient-to-r from-blue-400 to-blue-600 text-white overflow-hidden hover:before:translate-x-[150%] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 before:ease-in-out before:skew-x-12",
        paper: "bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-gray-100 transition-all",
        threed: "bg-gradient-to-b from-blue-500 to-blue-600 text-white transform-gpu hover:-translate-y-1 hover:shadow-[0_10px_0_rgb(37,99,235)] active:translate-y-0 active:shadow-[0_0_0_rgb(37,99,235)] transition-all",
        minimal: "bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/10 underline-offset-4 hover:underline transition-colors",
        magnetic: "relative overflow-hidden bg-black text-white before:absolute before:inset-0 before:bg-white before:mix-blend-difference hover:before:animate-[magnetic_0.5s_ease-in-out] before:-translate-x-full before:translate-y-full"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        pill: "h-10 px-6 rounded-full"
      },
      animation: {
        none: "",
        shine: "overflow-hidden group-hover:[&>div]:translate-x-[100%]",
        pulse: "motion-safe:animate-pulse",
        gradient: "before:animate-gradient-xy hover:before:animate-none",
        bounce: "hover:animate-bounce",
        shake: "hover:animate-[shake_0.5s_ease-in-out]",
        spin: "hover:animate-[spin_1s_linear_infinite]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none"
    }
  }
);
var Button = React4__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      animation,
      asChild = false,
      icon,
      badge,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "animation",
      "asChild",
      "icon",
      "badge",
      "children"
    ]);
    const Comp = asChild ? reactSlot.Slot : "button";
    const content = variant === "morphing" ? /* @__PURE__ */ jsxRuntime.jsx("span", { children }) : children;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Comp,
      __spreadProps(__spreadValues({
        className: cn(buttonVariants({ variant, size, animation, className })),
        ref
      }, props), {
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2", children: icon }),
          content,
          animation === "shine" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 ease-in-out" }),
          badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white", children: badge })
        ]
      })
    );
  }
);
Button.displayName = "Button";
var inputVariants = classVarianceAuthority.cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        ghost: "border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0",
        underline: "rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary",
        pill: "rounded-full",
        modern: "border-0 bg-secondary/50 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-secondary",
        material: "border-0 border-b-2 border-muted bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition-colors",
        glassmorphic: "border-0 bg-white/10 backdrop-blur-md focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-white/20",
        neon: "border-2 border-[#39FF14] bg-black text-[#39FF14] placeholder:text-[#39FF14]/50 focus-visible:ring-[#39FF14] focus-visible:ring-offset-0 focus-visible:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro: "rounded-none border-2 border-b-4 border-r-4 border-black focus-visible:ring-0 focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:border-b-2 focus-visible:border-r-2 transition-all",
        cyber: "border-[#00ff00] bg-black text-[#00ff00] placeholder:text-[#00ff00]/50 font-mono tracking-wider focus-visible:ring-[#00ff00] focus-visible:shadow-[0_0_10px_#00ff00]",
        minimal: "border-0 border-b border-border bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary hover:border-foreground",
        paper: "border-2 border-black bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] focus-visible:ring-0 focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:shadow-none"
      },
      inputSize: {
        default: "h-10",
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-2 text-xs",
        lg: "h-12 px-4 text-base",
        xl: "h-14 px-6 text-lg"
      },
      validation: {
        none: "",
        error: "border-destructive focus-visible:ring-destructive text-destructive placeholder:text-destructive/60",
        success: "border-green-500 focus-visible:ring-green-500 text-green-500 placeholder:text-green-500/60",
        warning: "border-yellow-500 focus-visible:ring-yellow-500 text-yellow-500 placeholder:text-yellow-500/60"
      },
      isLoading: {
        true: "pr-10",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      validation: "none",
      isLoading: false
    }
  }
);
var iconVariants = classVarianceAuthority.cva("absolute top-1/2 -translate-y-1/2", {
  variants: {
    position: {
      left: "left-3",
      right: "right-3"
    }
  },
  defaultVariants: {
    position: "left"
  }
});
var Input = React4__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      type = "text",
      variant,
      inputSize,
      validation,
      icon,
      iconPosition = "left",
      clearable,
      onClear,
      showPasswordToggle,
      isLoading,
      prefix,
      suffix
    } = _b, props = __objRest(_b, [
      "className",
      "type",
      "variant",
      "inputSize",
      "validation",
      "icon",
      "iconPosition",
      "clearable",
      "onClear",
      "showPasswordToggle",
      "isLoading",
      "prefix",
      "suffix"
    ]);
    const [showPassword, setShowPassword] = React4__namespace.useState(false);
    const hasLeftIcon = icon && iconPosition === "left" || prefix;
    const hasRightIcon = icon && iconPosition === "right" || clearable || showPasswordToggle || isLoading || suffix;
    const inputType = showPasswordToggle ? showPassword ? "text" : "password" : type;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
      prefix && /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: cn(
            iconVariants({ position: "left" }),
            "text-muted-foreground text-sm"
          ),
          children: prefix
        }
      ),
      hasLeftIcon && !prefix && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            iconVariants({ position: "left" }),
            "text-muted-foreground"
          ),
          children: icon
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        __spreadValues({
          type: inputType,
          className: cn(
            inputVariants({ variant, inputSize, validation, isLoading }),
            hasLeftIcon && "pl-10",
            hasRightIcon && "pr-10",
            className
          ),
          ref
        }, props)
      ),
      hasRightIcon && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            iconVariants({ position: "right" }),
            "flex items-center gap-1.5"
          ),
          children: [
            suffix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground text-sm", children: suffix }),
            icon && iconPosition === "right" && !suffix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: icon }),
            isLoading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
            clearable && props.value && /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                onClick: onClear,
                className: "rounded-full p-1 hover:bg-secondary text-muted-foreground",
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
              }
            ),
            showPasswordToggle && /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "rounded-full p-1 hover:bg-secondary text-muted-foreground",
                children: showPassword ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Eye, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] });
  }
);
Input.displayName = "Input";
var dropdownVariants = classVarianceAuthority.cva(
  "relative w-full rounded-md border border-input bg-background text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        floating: "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-lg [&>div]:rounded-lg hover:[&>div]:border-primary/50",
        command: "border-none bg-secondary/50 backdrop-blur-sm focus-within:ring-0 focus-within:ring-offset-0 [&>div]:px-4 [&>div]:py-3 [&>div]:font-mono [&>div:before]:content-['>'] [&>div:before]:mr-2 [&>div:before]:text-primary/50",
        scale: "overflow-hidden border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm [&>div]:transition-transform hover:[&>div]:scale-[1.02] active:[&>div]:scale-[0.98]",
        magnetic: "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm [&>div]:transition-all hover:[&>div]:translate-x-0.5 hover:[&>div]:translate-y-0.5",
        gooey: "border-none bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px] focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-gradient-xy before:opacity-0 hover:before:opacity-100",
        reveal: "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm [&>div]:transition-all [&>div]:delay-150 hover:[&>div]:translate-y-[-2px] hover:[&>div]:shadow-lg",
        neo: "border-2 border-foreground bg-background shadow-[4px_4px_0px_0px] shadow-foreground focus-within:ring-0 focus-within:ring-offset-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all",
        glass: "bg-background/30 backdrop-blur-md border-white/20 shadow-lg focus-within:ring-0 focus-within:ring-offset-0 hover:bg-background/40 transition-colors [&>div]:text-foreground",
        portal: "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] [&>div]:transition-all hover:[&>div]:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
        pulse: "border-none bg-transparent shadow-none focus-within:ring-0 focus-within:ring-offset-0 [&>div]:bg-background [&>div]:border [&>div]:shadow-sm hover:[&>div]:animate-[pulse_1s_ease-in-out]"
      },
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-base",
        xl: "h-14 text-lg"
      },
      validation: {
        none: "",
        error: "border-destructive focus-within:ring-destructive text-destructive",
        success: "border-green-500 focus-within:ring-green-500 text-green-500",
        warning: "border-yellow-500 focus-within:ring-yellow-500 text-yellow-500"
      },
      isSearchable: {
        true: "",
        false: ""
      },
      isMulti: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      validation: "none",
      isSearchable: false,
      isMulti: false
    }
  }
);
var Dropdown = React4__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
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
      noOptionsMessage = "No options available"
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "validation",
      "options",
      "value",
      "onChange",
      "placeholder",
      "isLoading",
      "isClearable",
      "isDisabled",
      "isSearchable",
      "isMulti",
      "onSearch",
      "noOptionsMessage"
    ]);
    var _a2, _b2;
    const [isOpen, setIsOpen] = React4__namespace.useState(false);
    const [searchQuery, setSearchQuery] = React4__namespace.useState("");
    const [selectedValues, setSelectedValues] = React4__namespace.useState(
      Array.isArray(value) ? value : value ? [value] : []
    );
    const filteredOptions = options.filter(
      (option) => option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleOptionClick = (optionValue) => {
      if (isMulti) {
        const newValues = selectedValues.includes(optionValue) ? selectedValues.filter((v) => v !== optionValue) : [...selectedValues, optionValue];
        setSelectedValues(newValues);
        onChange == null ? void 0 : onChange(newValues);
      } else {
        setSelectedValues([optionValue]);
        onChange == null ? void 0 : onChange(optionValue);
        setIsOpen(false);
      }
    };
    const handleClear = () => {
      setSelectedValues([]);
      onChange == null ? void 0 : onChange(isMulti ? [] : "");
    };
    const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch == null ? void 0 : onSearch(query);
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      __spreadProps(__spreadValues({
        className: cn(
          dropdownVariants({ variant, size, validation }),
          className
        ),
        ref
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                "relative flex h-full w-full items-center justify-between gap-2 px-3 py-2",
                isDisabled && "cursor-not-allowed opacity-50"
              ),
              onClick: () => !isDisabled && setIsOpen(!isOpen),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-1 flex-wrap gap-1", children: selectedValues.length > 0 ? isMulti ? selectedValues.map((val) => {
                  const option = options.find((opt) => opt.value === val);
                  return /* @__PURE__ */ jsxRuntime.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-xs",
                      children: [
                        option == null ? void 0 : option.icon,
                        option == null ? void 0 : option.label,
                        /* @__PURE__ */ jsxRuntime.jsx(
                          "button",
                          {
                            onClick: (e) => {
                              e.stopPropagation();
                              handleOptionClick(val);
                            },
                            className: "ml-1 rounded-full hover:bg-secondary-foreground/20",
                            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3 w-3" })
                          }
                        )
                      ]
                    },
                    val
                  );
                }) : /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-2", children: [
                  (_a2 = options.find((opt) => opt.value === selectedValues[0])) == null ? void 0 : _a2.icon,
                  (_b2 = options.find((opt) => opt.value === selectedValues[0])) == null ? void 0 : _b2.label
                ] }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: placeholder }) }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
                  isLoading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
                  isClearable && selectedValues.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        handleClear();
                      },
                      className: "rounded-full p-1 hover:bg-secondary text-muted-foreground",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    lucideReact.ChevronDown,
                    {
                      className: cn(
                        "h-4 w-4 text-muted-foreground transition-transform",
                        isOpen && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          isOpen && !isDisabled && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-md border bg-popover shadow-md", children: [
            isSearchable && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-b p-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "input",
                {
                  type: "text",
                  value: searchQuery,
                  onChange: handleSearch,
                  placeholder: "Search...",
                  className: "w-full rounded-md bg-transparent py-2 pl-8 pr-2 text-sm outline-none placeholder:text-muted-foreground focus:outline-none"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "max-h-60 overflow-y-auto p-1", children: filteredOptions.length > 0 ? filteredOptions.map((option) => /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                className: cn(
                  "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus:bg-accent focus:text-accent-foreground",
                  option.disabled && "pointer-events-none opacity-50",
                  selectedValues.includes(option.value) && "bg-accent text-accent-foreground"
                ),
                onClick: () => handleOptionClick(option.value),
                disabled: option.disabled,
                children: [
                  option.icon,
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-1 flex-col items-start", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("span", { children: option.label }),
                    option.description && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground", children: option.description })
                  ] }),
                  selectedValues.includes(option.value) && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" })
                ]
              },
              option.value
            )) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-2 py-4 text-center text-sm text-muted-foreground", children: noOptionsMessage }) })
          ] })
        ]
      })
    );
  }
);
Dropdown.displayName = "Dropdown";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var popoverVariants = classVarianceAuthority.cva(
  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      variant: {
        default: "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
        float: "data-[side=bottom]:animate-float-up data-[side=top]:animate-float-down data-[side=left]:animate-float-right data-[side=right]:animate-float-left shadow-lg",
        scale: "origin-[var(--radix-popover-content-transform-origin)] transition-all duration-300 data-[state=open]:scale-100 data-[state=closed]:scale-0 shadow-lg hover:scale-105 bg-gradient-to-br from-background to-muted border-primary/20",
        glow: "bg-background/95 backdrop-blur-md border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.3)] data-[state=open]:animate-glow hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-shadow duration-300",
        drawer: "data-[side=bottom]:slide-in-from-bottom-full data-[side=top]:slide-in-from-top-full data-[side=left]:slide-in-from-left-full data-[side=right]:slide-in-from-right-full shadow-2xl bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-lg border-primary/10",
        flip: "data-[state=open]:animate-flip-in data-[state=closed]:animate-flip-out shadow-xl perspective-[1000px]",
        command: "bg-secondary/50 backdrop-blur-sm border-none font-mono before:content-['>'] before:absolute before:left-2 before:top-2 before:text-primary/50 shadow-lg",
        glass: "bg-background/20 backdrop-blur-xl border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-background/30 transition-all duration-300 border-2",
        spotlight: "overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:animate-spotlight shadow-xl bg-gradient-to-br from-background to-background/90",
        elastic: "data-[state=open]:animate-elastic-in data-[state=closed]:animate-elastic-out shadow-lg bg-gradient-to-r from-background via-background/95 to-background",
        reveal: "data-[state=open]:animate-reveal-in data-[state=closed]:animate-reveal-out border-none bg-gradient-to-b from-background to-background/80 backdrop-blur shadow-2xl hover:-translate-y-0.5 transition-transform duration-300"
      },
      size: {
        default: "w-72",
        sm: "w-48",
        lg: "w-96",
        full: "w-screen max-w-3xl",
        auto: "w-auto"
      },
      align: {
        center: "data-[align=center]",
        start: "data-[align=start]",
        end: "data-[align=end]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      align: "center"
    }
  }
);
var PopoverContent = React4__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, align = "center", sideOffset = 4, variant, size } = _b, props = __objRest(_b, ["className", "align", "sideOffset", "variant", "size"]);
    return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
      PopoverPrimitive__namespace.Content,
      __spreadValues({
        ref,
        align: align === null ? void 0 : align,
        sideOffset,
        className: cn(popoverVariants({ variant, size, align }), className)
      }, props)
    ) });
  }
);
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var Tabs = TabsPrimitive__namespace.Root;
var tabsListVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted",
        pills: "bg-transparent gap-2",
        underline: "bg-transparent p-0 w-full justify-start gap-4",
        cards: "bg-transparent gap-2",
        minimal: "bg-transparent p-0 gap-4",
        gradient: "bg-gradient-to-br from-muted/50 to-muted backdrop-blur-sm",
        glass: "bg-background/20 backdrop-blur-md border border-white/20",
        floating: "bg-background shadow-lg hover:shadow-xl transition-shadow",
        neon: "bg-black border border-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.3)]",
        retro: "bg-background border-2 border-black rounded-none"
      },
      size: {
        default: "h-10",
        sm: "h-8 text-sm",
        lg: "h-12 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var TabsList = React4__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.List,
    __spreadValues({
      ref,
      className: cn(tabsListVariants({ variant, size }), className)
    }, props)
  );
});
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var tabsTriggerVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        pills: "rounded-full bg-muted hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        underline: "rounded-none border-b-2 border-transparent px-0 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
        cards: "rounded-lg border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        minimal: "rounded-none text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-semibold",
        gradient: "bg-gradient-to-r from-muted to-muted/80 hover:from-muted/80 hover:to-muted data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground",
        glass: "backdrop-blur-md bg-background/20 hover:bg-background/30 data-[state=active]:bg-background/40 data-[state=active]:text-foreground",
        floating: "shadow-sm hover:-translate-y-0.5 hover:shadow-md data-[state=active]:translate-y-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all",
        neon: "text-[#39FF14] hover:bg-[#39FF14]/10 data-[state=active]:bg-[#39FF14] data-[state=active]:text-black data-[state=active]:shadow-[0_0_20px_rgba(57,255,20,0.5)]",
        retro: "border-2 border-black bg-background active:translate-y-0.5 data-[state=active]:border-b-4 data-[state=active]:border-r-4 data-[state=active]:translate-x-[-2px] data-[state=active]:translate-y-[-2px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsTrigger = React4__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn(tabsTriggerVariants({ variant }), className)
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var tabsContentVariants = classVarianceAuthority.cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        pills: "mt-4",
        underline: "mt-4",
        cards: "mt-4",
        minimal: "mt-4",
        gradient: "mt-4",
        glass: "mt-4 p-4 rounded-lg backdrop-blur-md bg-background/20 border border-white/20",
        floating: "mt-4 p-4 rounded-lg shadow-lg bg-background",
        neon: "mt-4 p-4 rounded-lg border border-[#39FF14] text-[#39FF14]",
        retro: "mt-4 p-4 border-2 border-black bg-background"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsContent = React4__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "data-[state=active]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=active]:fade-in-0 data-[state=hidden]:zoom-out-95 data-[state=active]:zoom-in-95 data-[state=active]:slide-in-from-left-1/4",
        tabsContentVariants({ variant }),
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;

exports.Button = Button;
exports.Dropdown = Dropdown;
exports.Input = Input;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.buttonVariants = buttonVariants;
exports.dropdownVariants = dropdownVariants;
exports.inputVariants = inputVariants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map