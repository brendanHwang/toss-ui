/**
 * @fileoverview TDS List Item Components
 * 토스 스타일의 리스트 아이템 컴포넌트
 * 
 * @example
 * // 기본 리스트 아이템
 * <ListItem
 *   leading={<Avatar fallback="토" />}
 *   title="토스뱅크"
 *   subtitle="123-456-7890"
 * />
 * 
 * // 컴팩트 리스트 아이템 (계좌 선택 등)
 * <ListItemCompact
 *   icon={<BankIcon />}
 *   title="토스뱅크"
 *   subtitle="1234-56-7890123"
 * />
 */

import * as React from "react"
import { ChevronRight, Check } from "lucide-react"

import { cn } from "@/lib/utils"

/* ========== ListItem (기본 - 큰 사이즈) ========== */

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 왼쪽 아이콘/이미지 영역 */
  leading?: React.ReactNode
  /** 제목 */
  title: string
  /** 부제목 */
  subtitle?: string
  /** 오른쪽 텍스트 (금액, 상태 등) */
  trailing?: React.ReactNode
  /** 화살표 표시 여부 */
  showArrow?: boolean
  /** 클릭 가능 여부 */
  clickable?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 배지 (NEW, HOT 등) */
  badge?: string
  /** 배지 색상 */
  badgeVariant?: "primary" | "success" | "warning" | "destructive"
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      className,
      leading,
      title,
      subtitle,
      trailing,
      showArrow = true,
      clickable = true,
      disabled = false,
      badge,
      badgeVariant = "primary",
      onClick,
      ...props
    },
    ref
  ) => {
    const badgeColors = {
      primary: "text-primary",
      success: "text-[#30C85E]",
      warning: "text-[#FF9500]",
      destructive: "text-destructive",
    }

    return (
      <div
        ref={ref}
        role={clickable ? "button" : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        data-slot="list-item"
        data-disabled={disabled || undefined}
        onClick={disabled ? undefined : onClick}
        onKeyDown={
          clickable && !disabled
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onClick?.(e as any)
                }
              }
            : undefined
        }
        className={cn(
          // 토스 스타일 List Item
          "flex items-center gap-3 p-3 bg-card rounded-xl",
          "transition-all duration-150",
          clickable && !disabled && [
            "cursor-pointer",
            "hover:bg-muted/50",
            "active:scale-[0.99]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
          ],
          disabled && "opacity-40 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Leading (아이콘/이미지) */}
        {leading && (
          <div className="shrink-0">{leading}</div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-semibold text-foreground truncate">
              {title}
            </p>
            {badge && (
              <span
                className={cn(
                  "text-[11px] font-bold shrink-0",
                  badgeColors[badgeVariant]
                )}
              >
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-[13px] text-muted-foreground truncate mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Trailing */}
        {trailing && (
          <div className="shrink-0 text-right">{trailing}</div>
        )}

        {/* Arrow */}
        {showArrow && clickable && (
          <ChevronRight className="size-5 text-muted-foreground shrink-0" />
        )}
      </div>
    )
  }
)
ListItem.displayName = "ListItem"

/* ========== ListItemCompact (작은 사이즈 - 계좌 선택 등) ========== */

export interface ListItemCompactProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 왼쪽 아이콘 (은행 로고 등, 32x32) */
  icon?: React.ReactNode
  /** 제목 */
  title: string
  /** 부제목 (계좌번호 등) */
  subtitle?: string
  /** 선택됨 표시 */
  selected?: boolean
  /** 클릭 가능 여부 */
  clickable?: boolean
  /** 비활성화 */
  disabled?: boolean
}

const ListItemCompact = React.forwardRef<HTMLDivElement, ListItemCompactProps>(
  (
    {
      className,
      icon,
      title,
      subtitle,
      selected = false,
      clickable = true,
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={clickable ? "button" : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        data-slot="list-item-compact"
        data-selected={selected || undefined}
        data-disabled={disabled || undefined}
        onClick={disabled ? undefined : onClick}
        onKeyDown={
          clickable && !disabled
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onClick?.(e as any)
                }
              }
            : undefined
        }
        className={cn(
          // 토스 계좌 선택 스타일 - 컴팩트
          "flex items-center gap-3 px-3 py-2.5",
          "transition-all duration-150",
          clickable && !disabled && [
            "cursor-pointer",
            "hover:bg-muted/30",
            "active:scale-[0.99]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
          ],
          // 선택 시 연한 파란 배경 + 둥근 모서리
          selected && "bg-secondary rounded-lg",
          disabled && "opacity-40 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Icon (은행 로고 등) - 32px 원형 */}
        {icon && (
          <div className="shrink-0 size-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-foreground truncate">
            {title}
          </p>
          {subtitle && (
            <p className="text-[12px] text-muted-foreground truncate">
              {subtitle}
            </p>
          )}
        </div>

        {/* Selected Check */}
        {selected && (
          <Check className="size-5 text-primary shrink-0" />
        )}
      </div>
    )
  }
)
ListItemCompact.displayName = "ListItemCompact"

/* ========== List 컨테이너 ========== */

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 아이템 간 간격 */
  gap?: "none" | "xs" | "sm" | "default"
  /** 구분선 표시 */
  divided?: boolean
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, gap = "default", divided = false, children, ...props }, ref) => {
    const gapClass = {
      none: "gap-0",
      xs: "gap-0.5",
      sm: "gap-1",
      default: "gap-2",
    }

    return (
      <div
        ref={ref}
        data-slot="list"
        className={cn(
          "flex flex-col",
          gapClass[gap],
          divided && "divide-y divide-border gap-0 [&>*]:rounded-none [&>*:first-child]:rounded-t-2xl [&>*:last-child]:rounded-b-2xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
List.displayName = "List"

export { ListItem, ListItemCompact, List }
