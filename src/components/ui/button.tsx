"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90":
          variant === "default",
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
          variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
      },
      {
        "h-10 px-4 py-2": size === "default",
        "h-9 rounded-md px-3": size === "sm",
        "h-11 rounded-md px-8": size === "lg",
      },
      className
    );

    if (asChild) {
      // When rendering as a div, narrow prop/ref types to motion's HTMLMotionProps<'div'> (without ref)
      const divProps = props as Omit<HTMLMotionProps<"div">, "ref">;
      return (
        <motion.div
          className={classes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          ref={ref as React.Ref<HTMLDivElement>}
          {...divProps}
        />
      );
    }

    const buttonProps = props as Omit<HTMLMotionProps<"button">, "ref">;
    return (
      <motion.button
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
