import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    className={cn(
      // 토스 스타일 Switch - 컴팩트
      "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:cursor-not-allowed disabled:opacity-40",
      // 상태별 색상
      "data-[state=unchecked]:bg-[#D1D6DB]",
      "data-[state=checked]:bg-primary",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        // 토스 스타일 Thumb - 컴팩트
        "pointer-events-none block size-5 rounded-full bg-white shadow-md",
        "ring-0 transition-transform duration-200",
        "data-[state=unchecked]:translate-x-0.5",
        "data-[state=checked]:translate-x-[18px]"
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

// Toggle - 텍스트 포함 토글 버튼
export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, pressed = false, onPressedChange, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={pressed}
        data-state={pressed ? "on" : "off"}
        onClick={() => onPressedChange?.(!pressed)}
        className={cn(
          // 토스 스타일 Toggle - 컴팩트
          "inline-flex items-center justify-center gap-1.5 px-3 h-8 rounded-lg",
          "font-semibold text-[13px] transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "active:scale-[0.97]",
          // 상태별 스타일
          pressed 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-foreground hover:bg-[#E5E8EB]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Toggle.displayName = "Toggle"

export { Switch, Toggle }
