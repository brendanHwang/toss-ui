import * as React from "react"
import { X, Search } from "lucide-react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  /** 클리어 버튼 표시 */
  clearable?: boolean
  /** 클리어 콜백 */
  onClear?: () => void
  /** 왼쪽 아이콘/요소 */
  leftElement?: React.ReactNode
  /** 오른쪽 아이콘/요소 */
  rightElement?: React.ReactNode
  /** 에러 상태 */
  error?: boolean
  /** 성공 상태 */
  success?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      clearable,
      onClear,
      leftElement,
      rightElement,
      error,
      success,
      value,
      ...props
    },
    ref
  ) => {
    const hasValue = value !== undefined && value !== ""

    // 래퍼가 필요한 경우
    if (leftElement || rightElement || clearable) {
      return (
        <div className="relative">
          {/* Left Element */}
          {leftElement && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftElement}
            </div>
          )}

          <input
            type={type}
            ref={ref}
            data-slot="input"
            value={value}
            className={cn(
              // 토스 스타일 Input
              "w-full h-10 rounded-lg",
              "bg-muted border-0",
              "text-[15px] text-foreground placeholder:text-muted-foreground",
              "transition-all duration-150",
              "outline-none",
              "focus:ring-2 focus:ring-primary/30 focus:bg-background",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              // 패딩 조정
              leftElement ? "pl-11" : "px-4",
              (rightElement || clearable) ? "pr-11" : "px-4",
              // 상태별 스타일
              error && "ring-2 ring-destructive/30 bg-[#FFEBEE]/30",
              success && "ring-2 ring-[#30C85E]/30 bg-[#E5F9ED]/30",
              className
            )}
            {...props}
          />

          {/* Right Element or Clear Button */}
          {(clearable && hasValue) || rightElement ? (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {clearable && hasValue && (
                <button
                  type="button"
                  onClick={onClear}
                  className="p-1 rounded-full bg-[#B0B8C1] text-white hover:bg-[#8B95A1] transition-colors"
                >
                  <X className="size-3.5" strokeWidth={2.5} />
                </button>
              )}
              {rightElement && !clearable && (
                <div className="text-muted-foreground">{rightElement}</div>
              )}
            </div>
          ) : null}
        </div>
      )
    }

    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        value={value}
        className={cn(
          // 토스 스타일 Input
          "w-full h-10 px-3.5 rounded-lg",
          "bg-muted border-0",
          "text-[15px] text-foreground placeholder:text-muted-foreground",
          "transition-all duration-150",
          "outline-none",
          "focus:ring-2 focus:ring-primary/30 focus:bg-background",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          // 상태별 스타일
          error && "ring-2 ring-destructive/30 bg-[#FFEBEE]/30",
          success && "ring-2 ring-[#30C85E]/30 bg-[#E5F9ED]/30",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Search Input - 토스 스타일 검색 입력
export interface SearchInputProps extends Omit<InputProps, "leftElement"> {
  onClear?: () => void
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, onClear, ...props }, ref) => {
    const hasValue = value !== undefined && value !== ""
    
    return (
      <div className="relative">
        {/* 검색 아이콘 */}
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Search className="size-5" />
        </div>
        
        <input
          ref={ref}
          type="search"
          value={value}
          data-slot="search-input"
          className={cn(
            // 토스 스타일 검색 Input - h-10으로 통일
            "w-full h-10 rounded-lg",
            "bg-muted border-0",
            "text-[15px] text-foreground placeholder:text-muted-foreground",
            "transition-all duration-150",
            "outline-none pl-11",
            hasValue ? "pr-11" : "pr-4",
            "focus:ring-2 focus:ring-primary/30 focus:bg-background",
            // 기본 search input 스타일 제거
            "[&::-webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-decoration]:hidden",
            className
          )}
          {...props}
        />
        
        {/* X 버튼 - 값이 있을 때만 */}
        {hasValue && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-[#B0B8C1] text-white hover:bg-[#8B95A1] transition-colors"
          >
            <X className="size-3.5" strokeWidth={2.5} />
          </button>
        )}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { Input, SearchInput }
