import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // 토스 스타일 Badge 기본
  "inline-flex items-center justify-center font-semibold transition-colors select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-primary",
        outline: "border-2 border-border bg-transparent text-foreground",
        destructive: "bg-[#FFEBEE] text-destructive",
        success: "bg-[#E5F9ED] text-[#30C85E]",
        warning: "bg-[#FFF3E0] text-[#FF9500]",
        info: "bg-[#E8F3FF] text-primary",
        muted: "bg-muted text-muted-foreground",
      },
      size: {
        default: "h-6 px-2.5 text-[11px] rounded-md",
        sm: "h-5 px-2 text-[10px] rounded",
        lg: "h-7 px-3 text-[13px] rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

// Chip - 토스 스타일 칩 (선택 가능)
const chipVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-150 select-none cursor-pointer active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground hover:bg-[#E5E8EB]",
        selected: "bg-primary text-primary-foreground",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted",
      },
      size: {
        default: "h-8 px-3 text-[13px] rounded-full",
        sm: "h-7 px-2.5 text-[12px] rounded-full",
        lg: "h-10 px-4 text-[15px] rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  selected?: boolean
  onSelect?: () => void
}

function Chip({ 
  className, 
  variant, 
  size, 
  selected = false, 
  onSelect,
  children,
  ...props 
}: ChipProps) {
  return (
    <button
      type="button"
      data-slot="chip"
      data-selected={selected}
      onClick={onSelect}
      className={cn(
        chipVariants({ 
          variant: selected ? "selected" : variant, 
          size 
        }), 
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Badge, badgeVariants, Chip, chipVariants }
