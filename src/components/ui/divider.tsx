import * as React from "react"

import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 방향 */
  orientation?: "horizontal" | "vertical"
  /** 두께 */
  variant?: "default" | "thick"
  /** 라벨 (중앙 텍스트) */
  label?: string
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "default", label, ...props }, ref) => {
    const isHorizontal = orientation === "horizontal"

    // 라벨이 있는 경우
    if (label && isHorizontal) {
      return (
        <div
          ref={ref}
          role="separator"
          data-slot="divider"
          className={cn("flex items-center gap-4 my-4", className)}
          {...props}
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-[13px] text-muted-foreground shrink-0">
            {label}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        data-slot="divider"
        className={cn(
          // 토스 스타일 Divider
          "bg-border shrink-0",
          isHorizontal
            ? cn(
                "w-full",
                variant === "default" ? "h-px" : "h-2"
              )
            : cn(
                "h-full",
                variant === "default" ? "w-px" : "w-2"
              ),
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

// Spacer - 토스 스타일 여백 (thick divider 대용)
export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg" | "xl"
}

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClass = {
      sm: "h-2",
      default: "h-4",
      lg: "h-8",
      xl: "h-12",
    }

    return (
      <div
        ref={ref}
        data-slot="spacer"
        aria-hidden="true"
        className={cn("w-full bg-background", sizeClass[size], className)}
        {...props}
      />
    )
  }
)
Spacer.displayName = "Spacer"

export { Divider, Spacer }
