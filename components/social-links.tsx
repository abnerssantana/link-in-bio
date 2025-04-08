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

interface SocialLink {
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

  return (
    <Card className="bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-xs border-zinc-800/50">
      <CardHeader>
        <SectionHeader title="Redes Sociais" />
      </CardHeader>
      <CardContent className="grid gap-3">
        {links.map((link) => (
          <Link href={link.url} key={link.platform} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className={cn("w-full justify-start gap-3 border-zinc-700 hover:bg-zinc-800 cursor-pointer", link.color)}
            >
              {getIcon(link.platform)}
              <span>{link.username}</span>
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}

