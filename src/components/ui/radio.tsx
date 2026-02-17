import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      data-slot="radio-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="radio-group-item"
      className={cn(
        // 토스 스타일 Radio - 24px 크기
        "aspect-square size-[22px] shrink-0 rounded-full",
        "border-2 border-[#D1D6DB]",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        "disabled:cursor-not-allowed disabled:opacity-40",
        // 선택됨 - 파란 테두리 + 내부 원
        "data-[state=checked]:border-primary",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center size-full">
        {/* 내부 채워진 원 */}
        <div className="size-3 rounded-full bg-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// RadioCard - 토스 스타일 카드형 라디오
export interface RadioCardProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string
  description?: string
}

const RadioCard = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioCardProps
>(({ className, label, description, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="radio-card"
      className={cn(
        // 토스 스타일 카드형 라디오
        "group flex items-center gap-4 p-4 rounded-2xl bg-card",
        "border-2 border-transparent",
        "transition-all duration-150 cursor-pointer",
        "hover:bg-muted/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        "disabled:cursor-not-allowed disabled:opacity-40",
        // 선택됨
        "data-[state=checked]:border-primary data-[state=checked]:bg-[#E8F3FF]/50",
        className
      )}
      {...props}
    >
      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold text-foreground">{label}</p>
        {description && (
          <p className="text-[13px] text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      
      {/* 라디오 인디케이터 */}
      <div
        className={cn(
          "size-[22px] shrink-0 rounded-full border-2 border-[#D1D6DB]",
          "flex items-center justify-center",
          "transition-all duration-150",
          // 선택됨 상태
          "group-data-[state=checked]:border-primary"
        )}
      >
        {/* 내부 원 - 선택 시에만 표시 */}
        <div className="size-3 rounded-full bg-primary scale-0 transition-transform duration-150 group-data-[state=checked]:scale-100" />
      </div>
    </RadioGroupPrimitive.Item>
  )
})
RadioCard.displayName = "RadioCard"

export { RadioGroup, RadioGroupItem, RadioCard }
