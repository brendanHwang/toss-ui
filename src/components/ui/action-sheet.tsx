import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const ActionSheet = DialogPrimitive.Root

const ActionSheetTrigger = DialogPrimitive.Trigger

const ActionSheetPortal = DialogPrimitive.Portal

const ActionSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="action-sheet-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
ActionSheetOverlay.displayName = "ActionSheetOverlay"

const ActionSheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ActionSheetPortal>
    <ActionSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="action-sheet-content"
      className={cn(
        // 토스 스타일 ActionSheet
        "fixed inset-x-0 bottom-0 z-50",
        "p-3 pb-[max(12px,env(safe-area-inset-bottom))]",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        "duration-300",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </ActionSheetPortal>
))
ActionSheetContent.displayName = "ActionSheetContent"

// ActionSheet 그룹 (메인 액션들)
const ActionSheetGroup = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="action-sheet-group"
    className={cn(
      "bg-card rounded-2xl overflow-hidden",
      "divide-y divide-border",
      className
    )}
    {...props}
  />
)
ActionSheetGroup.displayName = "ActionSheetGroup"

// ActionSheet 타이틀
const ActionSheetTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="action-sheet-title"
    className={cn(
      "px-4 py-3 text-center",
      "text-[13px] text-muted-foreground",
      className
    )}
    {...props}
  />
)
ActionSheetTitle.displayName = "ActionSheetTitle"

// ActionSheet 아이템
export interface ActionSheetItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  destructive?: boolean
}

const ActionSheetItem = React.forwardRef<HTMLButtonElement, ActionSheetItemProps>(
  ({ className, destructive = false, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      data-slot="action-sheet-item"
      className={cn(
        "w-full px-4 py-4",
        "text-[17px] font-medium text-center",
        "transition-colors",
        "hover:bg-muted active:bg-muted",
        "focus:outline-none",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        destructive ? "text-destructive" : "text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
ActionSheetItem.displayName = "ActionSheetItem"

// ActionSheet 취소 버튼
const ActionSheetCancel = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, children = "취소", ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    data-slot="action-sheet-cancel"
    className={cn(
      "w-full mt-2 px-4 py-4",
      "bg-card rounded-2xl",
      "text-[17px] font-semibold text-primary text-center",
      "transition-colors",
      "hover:bg-muted active:bg-muted",
      "focus:outline-none",
      className
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Close>
))
ActionSheetCancel.displayName = "ActionSheetCancel"

export {
  ActionSheet,
  ActionSheetTrigger,
  ActionSheetPortal,
  ActionSheetOverlay,
  ActionSheetContent,
  ActionSheetGroup,
  ActionSheetTitle,
  ActionSheetItem,
  ActionSheetCancel,
}
