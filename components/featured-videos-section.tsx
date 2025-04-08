import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Video {
  title: string
  thumbnail: string
  views: string
  url?: string
}

interface FeaturedVideosSectionProps {
  videos: Video[]
  className?: string
}

export function FeaturedVideosSection({ videos, className }: FeaturedVideosSectionProps) {
  return (
    <Card className={cn("bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-xs border-zinc-800/50", className)}>
      <CardHeader className="flex flex-row items-center">
        <Play className="h-5 w-5 text-red-600 mr-2" />
        <CardTitle>Vídeos em Destaque</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400 mb-4">Os melhores conteúdos do canal para você começar</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <Link 
              key={index}
              href={video.url || "#"}
              className="group block"
            >
              <div className="bg-zinc-800/50 rounded-lg overflow-hidden hover:bg-zinc-700/50 transition-colors duration-200">
                <div className="relative aspect-video w-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">{video.views}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}