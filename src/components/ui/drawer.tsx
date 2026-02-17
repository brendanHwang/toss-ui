import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Drawer = DialogPrimitive.Root

const DrawerTrigger = DialogPrimitive.Trigger

const DrawerClose = DialogPrimitive.Close

const DrawerPortal = DialogPrimitive.Portal

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="drawer-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-black/50",
      // 애니메이션
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DrawerOverlay.displayName = "DrawerOverlay"

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /** 드로어 방향 */
  side?: "left" | "right"
}

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ className, children, side = "left", ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="drawer-content"
      className={cn(
        // 토스 스타일 Drawer
        "fixed inset-y-0 z-50",
        "w-[280px] max-w-[85vw]",
        "bg-card flex flex-col",
        "shadow-xl",
        // 방향별 위치
        side === "left" && "left-0 rounded-r-3xl",
        side === "right" && "right-0 rounded-l-3xl",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        side === "left" && [
          "data-[state=closed]:slide-out-to-left",
          "data-[state=open]:slide-in-from-left",
        ],
        side === "right" && [
          "data-[state=closed]:slide-out-to-right",
          "data-[state=open]:slide-in-from-right",
        ],
        "duration-300",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-header"
    className={cn(
      "flex items-center justify-between",
      "px-5 pt-[max(20px,env(safe-area-inset-top))] pb-4",
      "border-b border-border",
      className
    )}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="drawer-title"
    className={cn("text-[17px] font-bold text-foreground", className)}
    {...props}
  />
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-body"
    className={cn("flex-1 overflow-auto px-5 py-4", className)}
    {...props}
  />
)
DrawerBody.displayName = "DrawerBody"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-footer"
    className={cn(
      "px-5 py-4 border-t border-border",
      "pb-[max(16px,env(safe-area-inset-bottom))]",
      className
    )}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

// DrawerCloseButton - 닫기 버튼
const DrawerCloseButton = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "p-1.5 rounded-full",
      "text-muted-foreground hover:text-foreground hover:bg-muted",
      "transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-primary/30",
      className
    )}
    {...props}
  >
    <X className="size-5" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
))
DrawerCloseButton.displayName = "DrawerCloseButton"

// DrawerMenuItem - 드로어 메뉴 아이템
export interface DrawerMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  label: string
  active?: boolean
  badge?: string
}

const DrawerMenuItem = React.forwardRef<HTMLButtonElement, DrawerMenuItemProps>(
  ({ className, icon, label, active = false, badge, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          "flex items-center gap-3 w-full px-4 py-3 rounded-xl",
          "text-left transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-primary/30",
          active
            ? "bg-secondary text-primary font-semibold"
            : "text-foreground hover:bg-muted",
          className
        )}
        {...props}
      >
        {icon && (
          <span className={cn("size-6 flex items-center justify-center", active && "text-primary")}>
            {icon}
          </span>
        )}
        <span className="flex-1 text-[15px]">{label}</span>
        {badge && (
          <span className="text-[11px] font-bold text-primary">{badge}</span>
        )}
      </button>
    )
  }
)
DrawerMenuItem.displayName = "DrawerMenuItem"

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  DrawerMenuItem,
}
