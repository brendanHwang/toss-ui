/**
 * @fileoverview TDS Pagination Component
 * 토스 스타일 페이지네이션 컴포넌트
 * 
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => setPage(page)}
 * />
 */

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface PaginationProps {
  /** 현재 페이지 (1부터 시작) */
  currentPage: number
  /** 전체 페이지 수 */
  totalPages: number
  /** 페이지 변경 콜백 */
  onPageChange: (page: number) => void
  /** 표시할 페이지 버튼 수 (기본: 5) */
  siblingCount?: number
  /** 클래스명 */
  className?: string
}

/**
 * 페이지 범위 계산
 */
function getPageNumbers(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | "...")[] {
  const totalNumbers = siblingCount * 2 + 3 // siblings + current + 2 edges
  const totalBlocks = totalNumbers + 2 // + 2 for "..."

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const showLeftDots = leftSiblingIndex > 2
  const showRightDots = rightSiblingIndex < totalPages - 1

  if (!showLeftDots && showRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, "...", totalPages]
  }

  if (showLeftDots && !showRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    )
    return [1, "...", ...rightRange]
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  )
  return [1, "...", ...middleRange, "...", totalPages]
}

/**
 * TDS Pagination 컴포넌트
 */
const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    { currentPage, totalPages, onPageChange, siblingCount = 1, className },
    ref
  ) => {
    const pages = getPageNumbers(currentPage, totalPages, siblingCount)

    const handlePrev = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1)
      }
    }

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1)
      }
    }

    if (totalPages <= 1) return null

    return (
      <nav
        ref={ref}
        data-slot="pagination"
        role="navigation"
        aria-label="페이지네이션"
        className={cn("flex items-center justify-center gap-1", className)}
      >
        {/* 이전 버튼 */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="이전 페이지"
        >
          <ChevronLeft className="size-4" />
        </Button>

        {/* 페이지 번호들 */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="flex items-center justify-center size-8 text-muted-foreground text-[13px]"
              >
                ···
              </span>
            )
          }

          const isActive = page === currentPage

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                // 기본 스타일
                "flex items-center justify-center",
                "size-8 rounded-lg",
                "text-[13px] font-medium",
                "transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                // 상태별 스타일
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {page}
            </button>
          )
        })}

        {/* 다음 버튼 */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="다음 페이지"
        >
          <ChevronRight className="size-4" />
        </Button>
      </nav>
    )
  }
)
Pagination.displayName = "Pagination"

/**
 * 간단한 이전/다음 페이지네이션
 */
export interface SimplePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

const SimplePagination = React.forwardRef<HTMLDivElement, SimplePaginationProps>(
  ({ currentPage, totalPages, onPageChange, className }, ref) => {
    if (totalPages <= 1) return null

    return (
      <nav
        ref={ref}
        data-slot="simple-pagination"
        role="navigation"
        aria-label="페이지네이션"
        className={cn("flex items-center justify-center gap-4", className)}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="size-4 mr-1" />
          이전
        </Button>

        <span className="text-[13px] text-muted-foreground tabular-nums">
          {currentPage} / {totalPages}
        </span>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
          <ChevronRight className="size-4 ml-1" />
        </Button>
      </nav>
    )
  }
)
SimplePagination.displayName = "SimplePagination"

export { Pagination, SimplePagination }
