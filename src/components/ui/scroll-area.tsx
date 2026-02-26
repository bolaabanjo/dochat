import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-3xl border border-border bg-card",
          className
        )}
        {...props}
      >
        <div className="h-full w-full overflow-y-auto px-4 py-4 scroll-smooth">
          {children}
        </div>
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";

