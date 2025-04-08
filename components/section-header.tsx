import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="h-px flex-1 bg-zinc-800 dark:bg-zinc-700"></div>
    </div>
  )
}

