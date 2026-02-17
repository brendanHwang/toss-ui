import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(
          // 토스 스타일 Textarea
          "w-full min-h-[120px] px-4 py-3 rounded-xl",
          "bg-muted border-0 text-foreground",
          "text-[15px] leading-relaxed placeholder:text-muted-foreground",
          "resize-none outline-none",
          "transition-shadow duration-150",
          "focus:ring-2 focus:ring-primary/30 focus:bg-background",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
