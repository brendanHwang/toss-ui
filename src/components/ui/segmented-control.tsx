/**
 * @fileoverview TDS SegmentedControl Component
 * 토스 스타일의 세그먼트 컨트롤 (지도/리스트 토글 등)
 * 
 * @example
 * <SegmentedControl
 *   value={viewMode}
 *   onValueChange={setViewMode}
 *   options={[
 *     { value: 'list', icon: <ListIcon /> },
 *     { value: 'map', icon: <MapIcon /> },
 *   ]}
 * />
 */

import * as React from "react"

import { cn } from "@/lib/utils"

export interface SegmentOption {
  /** 옵션 값 */
  value: string
  /** 레이블 텍스트 */
  label?: string
  /** 아이콘 */
  icon?: React.ReactNode
  /** 비활성화 */
  disabled?: boolean
}

export interface SegmentedControlProps {
  /** 현재 선택된 값 */
  value: string
  /** 값 변경 콜백 */
  onValueChange: (value: string) => void
  /** 옵션 배열 */
  options: SegmentOption[]
  /** 사이즈 */
  size?: "sm" | "default" | "lg"
  /** 전체 너비 */
  fullWidth?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 추가 클래스 */
  className?: string
}

/**
 * TDS SegmentedControl 컴포넌트
 * 
 * 토스 스타일의 세그먼트 컨트롤.
 * 지도/리스트 토글, 탭 전환 등에 사용.
 */
export function SegmentedControl({
  value,
  onValueChange,
  options,
  size = "default",
  fullWidth = false,
  disabled = false,
  className,
}: SegmentedControlProps) {
  const sizeStyles = {
    sm: {
      container: "h-8 p-0.5 gap-0.5 rounded-lg",
      button: "px-2 text-[12px] rounded-md",
      iconOnly: "w-7",
    },
    default: {
      container: "h-10 p-1 gap-1 rounded-lg",
      button: "px-3 text-[13px] rounded-md",
      iconOnly: "w-9",
    },
    lg: {
      container: "h-12 p-1 gap-1 rounded-xl",
      button: "px-4 text-[14px] rounded-lg",
      iconOnly: "w-11",
    },
  }

  const styles = sizeStyles[size]

  return (
    <div
      role="tablist"
      className={cn(
        // 컨테이너 - 연한 회색 배경
        "inline-flex items-center bg-muted",
        styles.container,
        fullWidth && "w-full",
        disabled && "opacity-40 pointer-events-none",
        className
      )}
    >
      {options.map((option) => {
        const isSelected = value === option.value
        const isIconOnly = option.icon && !option.label

        return (
          <button
            key={option.value}
            role="tab"
            type="button"
            aria-selected={isSelected}
            aria-disabled={option.disabled || disabled}
            onClick={() => {
              if (!option.disabled && !disabled) {
                onValueChange(option.value)
              }
            }}
            className={cn(
              // 기본 버튼 스타일
              "flex items-center justify-center gap-1.5 h-full font-medium",
              "transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
              styles.button,
              isIconOnly ? styles.iconOnly : "",
              fullWidth && "flex-1",
              // 선택 상태
              isSelected
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
              // 비활성화
              (option.disabled || disabled) && "cursor-not-allowed opacity-40"
            )}
          >
            {option.icon && (
              <span className={cn(
                "[&>svg]:size-4",
                size === "sm" && "[&>svg]:size-3.5",
                size === "lg" && "[&>svg]:size-5",
              )}>
                {option.icon}
              </span>
            )}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

/**
 * 아이콘 전용 세그먼트 컨트롤 (간편 버전)
 */
export interface IconSegmentedControlProps {
  /** 현재 선택된 값 */
  value: string
  /** 값 변경 콜백 */
  onValueChange: (value: string) => void
  /** 옵션 배열: [value, icon] */
  options: [string, React.ReactNode][]
  /** 사이즈 */
  size?: "sm" | "default" | "lg"
  /** 비활성화 */
  disabled?: boolean
  /** 추가 클래스 */
  className?: string
}

export function IconSegmentedControl({
  value,
  onValueChange,
  options,
  size = "default",
  disabled = false,
  className,
}: IconSegmentedControlProps) {
  return (
    <SegmentedControl
      value={value}
      onValueChange={onValueChange}
      options={options.map(([val, icon]) => ({ value: val, icon }))}
      size={size}
      disabled={disabled}
      className={className}
    />
  )
}
