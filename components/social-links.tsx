import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Github,
  Medal as Strava,
  AtSign,
  LinkIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

export interface SocialLink {
  platform: string
  url: string
  username: string
  color: string
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "twitter":
      case "x":
        return <Twitter className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "github":
        return <Github className="h-5 w-5" />
      case "strava":
        return <Strava className="h-5 w-5" />
      case "email":
        return <AtSign className="h-5 w-5" />
      default:
        return <LinkIcon className="h-5 w-5" />
    }
  }

  // Platform specific styling
  const getIconStyles = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return "text-pink-500 group-hover:text-pink-400"
      case "twitter":
      case "x":
        return "text-blue-400 group-hover:text-blue-300"
      case "facebook":
        return "text-blue-600 group-hover:text-blue-500"
      case "youtube":
        return "text-red-500 group-hover:text-red-400"
      case "linkedin":
        return "text-blue-600 group-hover:text-blue-500"
      case "github":
        return "text-slate-700 group-hover:text-slate-600"
      case "strava":
        return "text-orange-500 group-hover:text-orange-400"
      case "email":
        return "text-emerald-600 group-hover:text-emerald-500"
      default:
        return "text-blue-500 group-hover:text-blue-400"
    }
  }

  return (
    <Card className={cn("bg-white/80 border-0 shadow-md", className)}>
      <CardHeader>
        <SectionHeader title="Redes Sociais" />
      </CardHeader>
      <CardContent className="grid gap-3">
        {links.map((link) => (
          <Link 
            href={link.url} 
            key={link.platform} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <Button
              variant="outline"
              className="w-full justify-start gap-3 border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 cursor-pointer transition-all duration-200"
            >
              <span className={cn("transition-colors", getIconStyles(link.platform))}>
                {getIcon(link.platform)}
              </span>
              <span>{link.username}</span>
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}