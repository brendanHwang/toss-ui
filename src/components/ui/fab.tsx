import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Floating Action Button (FAB)
const fabVariants = cva(
  // 토스 스타일 FAB 기본
  cn(
    "inline-flex items-center justify-center",
    "rounded-full shadow-lg",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-95"
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#1B64DA]",
        secondary: "bg-card text-foreground hover:bg-muted border border-border",
      },
      size: {
        default: "size-14 text-[24px]",
        sm: "size-12 text-[20px]",
        lg: "size-16 text-[28px]",
      },
      extended: {
        true: "px-5 gap-2 text-[15px] font-semibold",
        false: "",
      },
    },
    compoundVariants: [
      {
        extended: true,
        size: "default",
        className: "h-14 w-auto rounded-full",
      },
      {
        extended: true,
        size: "sm",
        className: "h-12 w-auto rounded-full",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      extended: false,
    },
  }
)

export interface FABProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {
  icon?: React.ReactNode
  label?: string
}

const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
  ({ className, variant, size, icon, label, children, ...props }, ref) => {
    const isExtended = !!label

    return (
      <button
        ref={ref}
        type="button"
        data-slot="fab"
        className={cn(fabVariants({ variant, size, extended: isExtended }), className)}
        {...props}
      >
        {icon}
        {label && <span>{label}</span>}
        {!icon && !label && children}
      </button>
    )
  }
)
FAB.displayName = "FAB"

// FAB Container - 화면 우측 하단에 FAB 배치
export interface FABContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "bottom-right" | "bottom-left" | "bottom-center"
}

const FABContainer = React.forwardRef<HTMLDivElement, FABContainerProps>(
  ({ className, position = "bottom-right", children, ...props }, ref) => {
    const positionClass = {
      "bottom-right": "right-4",
      "bottom-left": "left-4",
      "bottom-center": "left-1/2 -translate-x-1/2",
    }

    return (
      <div
        ref={ref}
        data-slot="fab-container"
        className={cn(
          "fixed bottom-0 z-40",
          "pb-[max(20px,calc(env(safe-area-inset-bottom)+70px))]",
          positionClass[position],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FABContainer.displayName = "FABContainer"

export { FAB, FABContainer, fabVariants }
