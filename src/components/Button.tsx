import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant = "primary", size = "md", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-[transform,background-color,color,opacity] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-primary text-primary-foreground hover:scale-[1.02] hover:opacity-95",
          variant === "outline" &&
            "border border-foreground/35 bg-transparent text-foreground hover:bg-foreground hover:text-background",
          variant === "ghost" && "bg-transparent text-foreground hover:bg-muted",
          variant === "icon" && "bg-transparent text-foreground hover:bg-muted",
          size === "sm" && "h-10 px-4",
          size === "md" && "h-12 px-6",
          size === "lg" && "h-14 px-8",
          size === "icon" && "size-12",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
