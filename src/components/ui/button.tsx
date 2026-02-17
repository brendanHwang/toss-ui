/**
 * @fileoverview TDS Button Component
 * 토스 디자인 시스템의 버튼 컴포넌트
 * 
 * @example
 * // Primary 버튼
 * <Button>확인</Button>
 * 
 * // Secondary 버튼
 * <Button variant="secondary">취소</Button>
 * 
 * // 로딩 상태
 * <Button loading>처리 중...</Button>
 * 
 * // 전체 너비
 * <Button fullWidth size="xl">다음</Button>
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * 버튼 스타일 variants
 * 토스 앱의 실제 버튼 사이즈와 스타일을 반영
 */
const buttonVariants = cva(
  // 기본 스타일: 토스 특유의 부드러운 터치 피드백
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-150 outline-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        /** Primary - 토스 블루 (#3182F6) */
        default: 
          "bg-primary text-primary-foreground hover:bg-[#1B64DA] focus-visible:ring-2 focus-visible:ring-primary/30",
        
        /** Secondary - 연한 파랑 배경 */
        secondary:
          "bg-secondary text-primary hover:bg-[#C7DCFF] focus-visible:ring-2 focus-visible:ring-primary/30",
        
        /** Outline - 테두리만 */
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/30",
        
        /** Ghost - 배경 없음, 호버시 배경 */
        ghost:
          "bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/30",
        
        /** Destructive - 경고/삭제 액션용 빨강 */
        destructive:
          "bg-destructive text-white hover:bg-[#D63B48] focus-visible:ring-2 focus-visible:ring-destructive/30",
        
        /** Link - 텍스트 링크 스타일 */
        link: 
          "text-primary underline-offset-4 hover:underline active:scale-100",

        /** Muted - 회색 배경, 덜 강조되는 액션 */
        muted:
          "bg-muted text-muted-foreground hover:bg-[#E5E8EB] focus-visible:ring-2 focus-visible:ring-muted-foreground/30",
      },
      size: {
        /** Small - 보조 버튼, 칩 스타일 (32px) */
        sm: "h-8 px-3 rounded-lg text-[13px] [&_svg:not([class*='size-'])]:size-4",
        
        /** Default - 기본 버튼 (44px) */
        default: "h-11 px-5 rounded-xl text-[15px]",
        
        /** Large - 주요 CTA, Dialog 버튼 (48px) */
        lg: "h-12 px-6 rounded-xl text-[16px]",
        
        /** Extra Large - 하단 고정 CTA (52px) */
        xl: "h-[52px] px-6 rounded-xl text-[17px]",
        
        /** 아이콘 버튼들 */
        icon: "size-11 rounded-xl",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12 rounded-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Radix UI Slot으로 렌더링 (asChild 패턴) */
  asChild?: boolean
  /** 로딩 상태 표시 */
  loading?: boolean
}

/**
 * TDS Button 컴포넌트
 * 
 * 토스 디자인 시스템의 버튼. 다양한 variant와 size를 지원하며,
 * 로딩 상태와 비활성화 상태를 자동으로 처리합니다.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    
    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>로딩 중...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
