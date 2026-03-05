"use client";

import { useApplyModal } from "@/components/apply-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ApplyButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

export function ApplyButton({
  children = "Apply to VECTOR",
  className,
  size = "lg",
  variant = "default",
}: ApplyButtonProps) {
  const { open } = useApplyModal();

  return (
    <Button
      size={size}
      variant={variant}
      onClick={open}
      className={cn(
        variant === "default" && "bg-turquoise hover:bg-turquoise-dark text-white",
        className
      )}
    >
      {children}
    </Button>
  );
}
