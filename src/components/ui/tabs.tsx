import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    className={cn(
      // 토스 스타일 Tabs List - 컴팩트
      "inline-flex items-center gap-0.5 p-0.5 rounded-lg bg-muted",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="tabs-trigger"
    className={cn(
      // 토스 스타일 Tabs Trigger - 컴팩트
      "inline-flex items-center justify-center whitespace-nowrap",
      "px-3 py-1.5 rounded-md",
      "text-[13px] font-semibold text-muted-foreground",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      "disabled:pointer-events-none disabled:opacity-40",
      // 선택됨
      "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot="tabs-content"
    className={cn(
      "mt-4",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Underline Tabs - 토스 스타일 밑줄 탭
const UnderlineTabs = TabsPrimitive.Root

const UnderlineTabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="underline-tabs-list"
    className={cn(
      // 토스 스타일 밑줄 Tabs
      "flex border-b border-border",
      className
    )}
    {...props}
  />
))
UnderlineTabsList.displayName = "UnderlineTabsList"

const UnderlineTabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="underline-tabs-trigger"
    className={cn(
      // 토스 스타일 밑줄 Tabs Trigger - 컴팩트
      "relative flex-1 py-2",
      "text-[13px] font-semibold text-muted-foreground",
      "transition-colors",
      "focus-visible:outline-none",
      "disabled:pointer-events-none disabled:opacity-40",
      // 선택됨
      "data-[state=active]:text-foreground",
      // 밑줄
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
      "after:bg-transparent after:transition-colors",
      "data-[state=active]:after:bg-primary",
      className
    )}
    {...props}
  />
))
UnderlineTabsTrigger.displayName = "UnderlineTabsTrigger"

export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  UnderlineTabs,
  UnderlineTabsList,
  UnderlineTabsTrigger,
}
