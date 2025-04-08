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
    <Card
    >
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
          >
            <Button variant="outline" className="w-full justify-between border-zinc-700 hover:bg-zinc-800 cursor-pointer">
              <span className="flex items-center gap-2">
                {link.icon}
                {link.title}
              </span>
              {link.isExternal ? (
                <ExternalLink className="h-4 w-4" />
              ) : (
                showLinkIcon && <LinkIcon className="h-4 w-4" />
              )}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}