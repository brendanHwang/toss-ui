import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden bg-muted",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-[12px]",
        default: "size-10 text-[14px]",
        lg: "size-12 text-[16px]",
        xl: "size-16 text-[20px]",
        "2xl": "size-20 text-[24px]",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-xl",
      },
    },
    defaultVariants: {
      size: "default",
      shape: "circle",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, shape, src, alt, fallback, children, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    
    // fallback 문자 생성 (이름의 첫 글자)
    const fallbackText = React.useMemo(() => {
      if (fallback) return fallback.charAt(0).toUpperCase()
      if (alt) return alt.charAt(0).toUpperCase()
      return "?"
    }, [fallback, alt])

    return (
      <div
        ref={ref}
        data-slot="avatar"
        className={cn(avatarVariants({ size, shape }), className)}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            onError={() => setImageError(true)}
            className="aspect-square size-full object-cover"
          />
        ) : children ? (
          children
        ) : (
          <div className="flex size-full items-center justify-center bg-muted text-muted-foreground font-semibold">
            {fallbackText}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

// AvatarGroup - 여러 아바타를 겹쳐서 보여주기
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  children: React.ReactNode
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 4, children, ...props }, ref) => {
    const avatars = React.Children.toArray(children)
    const visibleAvatars = avatars.slice(0, max)
    const remainingCount = avatars.length - max

    return (
      <div
        ref={ref}
        data-slot="avatar-group"
        className={cn("flex -space-x-3", className)}
        {...props}
      >
        {visibleAvatars.map((avatar, index) => (
          <div
            key={index}
            className="ring-2 ring-background rounded-full"
            style={{ zIndex: visibleAvatars.length - index }}
          >
            {avatar}
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground text-[12px] font-semibold ring-2 ring-background"
            style={{ zIndex: 0 }}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup, avatarVariants }
