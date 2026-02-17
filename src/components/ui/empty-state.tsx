import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

// Empty State - 빈 상태 표시
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 아이콘 또는 이미지 */
  icon?: React.ReactNode
  /** 제목 */
  title: string
  /** 설명 */
  description?: string
  /** 액션 버튼 */
  action?: {
    label: string
    onClick: () => void
  }
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty-state"
        className={cn(
          "flex flex-col items-center justify-center py-16 px-8 text-center",
          className
        )}
        {...props}
      >
        {/* 아이콘 */}
        {icon && (
          <div className="mb-4 text-5xl text-muted-foreground/50">{icon}</div>
        )}

        {/* 제목 */}
        <h3 className="text-[17px] font-semibold text-foreground">{title}</h3>

        {/* 설명 */}
        {description && (
          <p className="mt-2 text-[15px] text-muted-foreground max-w-xs">
            {description}
          </p>
        )}

        {/* 액션 버튼 */}
        {action && (
          <Button onClick={action.onClick} className="mt-6">
            {action.label}
          </Button>
        )}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

export { EmptyState }
