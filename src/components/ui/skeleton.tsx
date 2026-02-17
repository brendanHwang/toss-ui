import * as React from "react"

import { cn } from "@/lib/utils"

// 토스 스타일 Skeleton (쉬머 효과)
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        // 토스 스타일 Skeleton
        "relative overflow-hidden rounded-lg bg-muted",
        // 쉬머 애니메이션
        "after:absolute after:inset-0",
        "after:translate-x-[-100%]",
        "after:animate-[shimmer_1.5s_infinite]",
        "after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
        className
      )}
      {...props}
    />
  )
}

// Skeleton Circle
function SkeletonCircle({
  className,
  size = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "default" | "lg" | "xl"
}) {
  const sizeClass = {
    sm: "size-8",
    default: "size-10",
    lg: "size-12",
    xl: "size-16",
  }

  return (
    <Skeleton
      className={cn("rounded-full", sizeClass[size], className)}
      {...props}
    />
  )
}

// Skeleton Text
function SkeletonText({
  className,
  lines = 1,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  lines?: number
}) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            // 마지막 줄은 짧게
            i === lines - 1 && lines > 1 && "w-3/4"
          )}
        />
      ))}
    </div>
  )
}

// Skeleton Card - 토스 스타일 카드 스켈레톤
function SkeletonCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-4 rounded-2xl bg-card space-y-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <SkeletonCircle size="lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <SkeletonText lines={2} />
    </div>
  )
}

// Skeleton ListItem - 토스 스타일 리스트 아이템 스켈레톤
function SkeletonListItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl bg-card",
        className
      )}
      {...props}
    >
      <SkeletonCircle size="lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
      <Skeleton className="h-4 w-16" />
    </div>
  )
}

export { Skeleton, SkeletonCircle, SkeletonText, SkeletonCard, SkeletonListItem }
