import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const BottomSheet = DialogPrimitive.Root

const BottomSheetTrigger = DialogPrimitive.Trigger

const BottomSheetClose = DialogPrimitive.Close

const BottomSheetPortal = DialogPrimitive.Portal

const BottomSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="bottom-sheet-overlay"
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
BottomSheetOverlay.displayName = "BottomSheetOverlay"

export interface BottomSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  showHandle?: boolean
  showClose?: boolean
}

const BottomSheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  BottomSheetContentProps
>(({ className, children, showHandle = true, showClose = false, ...props }, ref) => (
  <BottomSheetPortal>
    <BottomSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="bottom-sheet-content"
      className={cn(
        // 토스 스타일 BottomSheet
        "fixed inset-x-0 bottom-0 z-50",
        "rounded-t-3xl bg-card",
        "max-h-[90vh] overflow-auto",
        // 애니메이션
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        "duration-300",
        className
      )}
      {...props}
    >
      {/* 드래그 핸들 */}
      {showHandle && (
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-[#D1D6DB]" />
        </div>
      )}
      
      {/* 닫기 버튼 */}
      {showClose && (
        <DialogPrimitive.Close
          className={cn(
            "absolute right-4 top-4 p-1 rounded-full",
            "text-muted-foreground hover:text-foreground hover:bg-muted",
            "transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary/30"
          )}
        >
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
      
      {children}
    </DialogPrimitive.Content>
  </BottomSheetPortal>
))
BottomSheetContent.displayName = "BottomSheetContent"

const BottomSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="bottom-sheet-header"
    className={cn("px-5 pt-2 pb-4", className)}
    {...props}
  />
)
BottomSheetHeader.displayName = "BottomSheetHeader"

const BottomSheetBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="bottom-sheet-body"
    className={cn("px-5 pb-6", className)}
    {...props}
  />
)
BottomSheetBody.displayName = "BottomSheetBody"

const BottomSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="bottom-sheet-footer"
    className={cn(
      "px-5 py-4 border-t border-border",
      "pb-[max(16px,env(safe-area-inset-bottom))]",
      className
    )}
    {...props}
  />
)
BottomSheetFooter.displayName = "BottomSheetFooter"

const BottomSheetTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="bottom-sheet-title"
    className={cn("text-[20px] font-bold text-foreground", className)}
    {...props}
  />
))
BottomSheetTitle.displayName = "BottomSheetTitle"

const BottomSheetDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="bottom-sheet-description"
    className={cn("text-[15px] text-muted-foreground mt-1", className)}
    {...props}
  />
))
BottomSheetDescription.displayName = "BottomSheetDescription"

export {
  BottomSheet,
  BottomSheetPortal,
  BottomSheetOverlay,
  BottomSheetTrigger,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetDescription,
}
