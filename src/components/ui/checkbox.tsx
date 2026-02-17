import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    data-slot="checkbox"
    className={cn(
      // 토스 스타일 Checkbox
      "peer size-6 shrink-0 rounded-lg",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:cursor-not-allowed disabled:opacity-40",
      // 상태별 스타일
      "border-2 border-[#D1D6DB]",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-primary-foreground")}
    >
      {props.checked === "indeterminate" ? (
        <Minus className="size-4 stroke-[3]" />
      ) : (
        <Check className="size-4 stroke-[3]" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

// CheckboxWithLabel - 라벨과 함께 사용
export interface CheckboxWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string
  description?: string
}

const CheckboxWithLabel = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxWithLabelProps
>(({ className, label, description, id, ...props }, ref) => {
  const generatedId = React.useId()
  const checkboxId = id || generatedId

  return (
    <div className="flex items-start gap-3">
      <Checkbox ref={ref} id={checkboxId} className={className} {...props} />
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={checkboxId}
          className="text-[15px] font-medium text-foreground cursor-pointer select-none leading-6"
        >
          {label}
        </label>
        {description && (
          <p className="text-[13px] text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
})
CheckboxWithLabel.displayName = "CheckboxWithLabel"

export { Checkbox, CheckboxWithLabel }
