/**
 * @fileoverview TDS Asset Item Component
 * 토스 홈 화면의 계좌/자산 리스트 아이템
 * 
 * @example
 * <AssetItem
 *   icon={<BankLogo />}
 *   iconBg="#3182F6"
 *   amount="51,788,056원"
 *   label="토스증권 기본계좌"
 *   action={<Button size="sm">송금</Button>}
 * />
 * 
 * <AssetItem
 *   icon={<StockIcon />}
 *   iconBg="#FF6B6B"
 *   amount="66,218,836원"
 *   change="+5.6%"
 *   changeType="positive"
 *   label="투자 모아보기 · 7개"
 * />
 */

import * as React from "react"

import { cn } from "@/lib/utils"

export interface AssetItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 아이콘 (브랜드 로고 등) */
  icon?: React.ReactNode
  /** 아이콘 배경색 */
  iconBg?: string
  /** 금액 (큰 글씨) */
  amount: string
  /** 변동률 (+5.6%, -2.3% 등) */
  change?: string
  /** 변동 타입 (색상 결정) */
  changeType?: "positive" | "negative" | "neutral"
  /** 라벨/계좌명 (작은 글씨) */
  label?: string
  /** 오른쪽 액션 버튼 */
  action?: React.ReactNode
  /** 클릭 가능 여부 */
  clickable?: boolean
  /** 비활성화 */
  disabled?: boolean
}

const AssetItem = React.forwardRef<HTMLDivElement, AssetItemProps>(
  (
    {
      className,
      icon,
      iconBg = "#F2F4F6",
      amount,
      change,
      changeType = "neutral",
      label,
      action,
      clickable = true,
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const changeColors = {
      positive: "text-[#F04452]", // 토스는 상승이 빨간색
      negative: "text-[#3182F6]", // 하락이 파란색
      neutral: "text-muted-foreground",
    }

    return (
      <div
        ref={ref}
        role={clickable ? "button" : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        data-slot="asset-item"
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
          // 토스 홈 계좌 리스트 스타일
          "flex items-center gap-4 py-4 px-1",
          "transition-all duration-150",
          clickable && !disabled && [
            "cursor-pointer",
            "hover:opacity-80",
            "active:scale-[0.99]",
          ],
          disabled && "opacity-40 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Icon (브랜드 로고) - 48px 원형 */}
        {icon && (
          <div
            className="shrink-0 size-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* 금액 + 변동률 */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-[20px] font-bold text-foreground truncate">
              {amount}
            </span>
            {change && (
              <span className={cn("text-[15px] font-semibold shrink-0", changeColors[changeType])}>
                {change}
              </span>
            )}
          </div>
          {/* 라벨/계좌명 */}
          {label && (
            <p className="text-[13px] text-muted-foreground truncate mt-0.5">
              {label}
            </p>
          )}
        </div>

        {/* Action (송금 버튼 등) */}
        {action && (
          <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
            {action}
          </div>
        )}
      </div>
    )
  }
)
AssetItem.displayName = "AssetItem"

/* ========== AssetList 컨테이너 ========== */

export interface AssetListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 구분선 표시 */
  divided?: boolean
}

const AssetList = React.forwardRef<HTMLDivElement, AssetListProps>(
  ({ className, divided = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="asset-list"
        className={cn(
          "flex flex-col",
          divided && "divide-y divide-border",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AssetList.displayName = "AssetList"

export { AssetItem, AssetList }
