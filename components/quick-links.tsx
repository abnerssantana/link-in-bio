import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

interface QuickLink {
  title: string
  url: string
  icon?: React.ReactNode
  isExternal?: boolean
}

interface QuickLinksProps {
  links: QuickLink[]
  className?: string
  showLinkIcon?: boolean
}

export function QuickLinks({ links, className, showLinkIcon = false }: QuickLinksProps) {
  return (
    <Card className={cn("bg-white/80 border-0 shadow-md", className)}>
      <CardHeader>
        <SectionHeader title="Links Rápidos" />
      </CardHeader>
      <CardContent className="grid gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className="group"
          >
            <Button 
              variant="outline" 
              className="w-full justify-between border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 cursor-pointer transition-all duration-200"
            >
              <span className="flex items-center gap-2 text-emerald-600 group-hover:text-emerald-500 transition-colors">
                {link.icon}
                <span className="text-zinc-800">{link.title}</span>
              </span>
              {link.isExternal ? (
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              ) : (
                showLinkIcon && <LinkIcon className="h-4 w-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              )}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}