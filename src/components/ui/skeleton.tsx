import * as React from "react"

import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 애니메이션 타입 */
  animation?: "shimmer" | "pulse" | "none"
}

// 토스 스타일 Skeleton (쉬머/펄스 효과)
function Skeleton({
  className,
  animation = "shimmer",
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        // 기본 스타일
        "rounded-lg bg-muted",
        // 애니메이션
        animation === "shimmer" && [
          "relative overflow-hidden",
          "after:absolute after:inset-0",
          "after:translate-x-[-100%]",
          "after:animate-[shimmer_1.5s_infinite]",
          "after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
        ],
        animation === "pulse" && "animate-pulse",
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
  animation,
  ...props
}: SkeletonProps & {
  size?: "xs" | "sm" | "default" | "lg" | "xl"
}) {
  const sizeClass = {
    xs: "size-6",
    sm: "size-8",
    default: "size-10",
    lg: "size-12",
    xl: "size-16",
  }

  return (
    <Skeleton
      animation={animation}
      className={cn("rounded-full", sizeClass[size], className)}
      {...props}
    />
  )
}

// Skeleton Text
function SkeletonText({
  className,
  lines = 1,
  animation,
  lastLineWidth = "75%",
  ...props
}: SkeletonProps & {
  lines?: number
  lastLineWidth?: string
}) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          animation={animation}
          className="h-4"
          style={i === lines - 1 && lines > 1 ? { width: lastLineWidth } : undefined}
        />
      ))}
    </div>
  )
}

// Skeleton Card
function SkeletonCard({
  className,
  animation,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn("p-4 rounded-2xl bg-card space-y-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <SkeletonCircle size="lg" animation={animation} />
        <div className="flex-1 space-y-2">
          <Skeleton animation={animation} className="h-4 w-24" />
          <Skeleton animation={animation} className="h-3 w-16" />
        </div>
      </div>
      <SkeletonText lines={2} animation={animation} />
    </div>
  )
}

// Skeleton ListItem
function SkeletonListItem({
  className,
  animation,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl bg-card",
        className
      )}
      {...props}
    >
      <SkeletonCircle size="lg" animation={animation} />
      <div className="flex-1 space-y-2">
        <Skeleton animation={animation} className="h-4 w-32" />
        <Skeleton animation={animation} className="h-3 w-20" />
      </div>
      <Skeleton animation={animation} className="h-4 w-16" />
    </div>
  )
}

// Skeleton Button
function SkeletonButton({
  className,
  animation,
  size = "default",
  ...props
}: SkeletonProps & {
  size?: "sm" | "default" | "lg"
}) {
  const sizeClass = {
    sm: "h-8 w-20",
    default: "h-10 w-24",
    lg: "h-12 w-32",
  }

  return (
    <Skeleton
      animation={animation}
      className={cn("rounded-lg", sizeClass[size], className)}
      {...props}
    />
  )
}

// Skeleton Image
function SkeletonImage({
  className,
  animation,
  aspectRatio = "video",
  ...props
}: SkeletonProps & {
  aspectRatio?: "square" | "video" | "wide"
}) {
  const ratioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  }

  return (
    <Skeleton
      animation={animation}
      className={cn("w-full rounded-xl", ratioClass[aspectRatio], className)}
      {...props}
    />
  )
}

// Skeleton Avatar Group
function SkeletonAvatarGroup({
  className,
  count = 3,
  animation,
  ...props
}: SkeletonProps & {
  count?: number
}) {
  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCircle 
          key={i} 
          size="sm" 
          animation={animation}
          className="border-2 border-background"
        />
      ))}
    </div>
  )
}

// Skeleton Input
function SkeletonInput({
  className,
  animation,
  ...props
}: SkeletonProps) {
  return (
    <Skeleton
      animation={animation}
      className={cn("h-10 w-full rounded-lg", className)}
      {...props}
    />
  )
}

export { 
  Skeleton, 
  SkeletonCircle, 
  SkeletonText, 
  SkeletonCard, 
  SkeletonListItem,
  SkeletonButton,
  SkeletonImage,
  SkeletonAvatarGroup,
  SkeletonInput,
}
