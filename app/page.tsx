import Image from "next/image"
import Link from "next/link"
import {
  Cake,
  Mail,
  MapPin,
  Youtube,
  BookOpen,
  Calendar,
  Trophy,
  Calculator,
  Wrench,
  ShoppingBag,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "@/components/feature-card"
import { SocialLinks } from "@/components/social-links"
import { Competitions } from "@/components/competitions"
import { QuickLinks } from "@/components/quick-links"
import { FeaturedVideosSection } from "@/components/featured-videos-section"
import { siteConfig } from "@/config/site"

export default function Home() {
  const quickLinksWithIcons = siteConfig.quickLinks.map(link => {
    const icons = {
      book: <BookOpen className="size-4" />,
      calendar: <Calendar className="size-4" />,
      'shopping-bag': <ShoppingBag className="size-4" />,
      trophy: <Trophy className="size-4" />,
      calculator: <Calculator className="size-4" />,
      wrench: <Wrench className="size-4" />
    }
    
    return {
      ...link,
      icon: icons[link.icon as keyof typeof icons] || <ExternalLink className="size-4" />
    }
  })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute right-0 top-0 size-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-1/3 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-border">
              <CardHeader className="pb-0">
                <div className="flex justify-center">
                  <Image
                    src="/avatar.jpg"
                    alt={siteConfig.author.name}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-primary object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-4 text-center">
                <div className="mb-2 font-medium text-primary">
                  Seu Alienígena Favorito 👽❤️✌️
                </div>
                <CardTitle className="mb-2 text-3xl font-bold">{siteConfig.author.name}</CardTitle>
                <CardDescription>{siteConfig.description}</CardDescription>
              </CardContent>
            </Card>

            {/* Cards de Informação */}
            {[
              { icon: <Cake className="size-5 text-primary" />, text: `Nascido em ${siteConfig.author.birthYear} | ${siteConfig.author.weight} | ${siteConfig.author.height}` },
              { icon: <MapPin className="size-5 text-primary" />, text: siteConfig.author.location },
              { icon: <Mail className="size-5 text-primary" />, text: siteConfig.links.email, link: `mailto:${siteConfig.links.email}` }
            ].map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="flex items-center gap-3 p-4">
                  {item.icon}
                  {item.link ? (
                    <Link href={item.link} className="transition-colors hover:text-primary">
                      {item.text}
                    </Link>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </CardContent>
              </Card>
            ))}

            <SocialLinks links={siteConfig.socialLinks} className="border-border" />
          </div>

          {/* Coluna Central */}
          <div className="space-y-6 md:col-span-2">
            <Card className="overflow-hidden border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Youtube className="size-8 text-red-500" />
                    <div>
                      <div className="text-lg font-medium">YouTube</div>
                      <div className="text-sm text-muted-foreground">
                        {siteConfig.socialLinks.find(link => link.platform === "youtube")?.username}
                      </div>
                    </div>
                  </div>
                  <Button asChild className="bg-red-500 text-white hover:bg-red-600" size="sm">
                    <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                      Inscreva-se <span className="ml-2 text-xs">5.6K</span>
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dicas valiosas de treinamento, orientações práticas e insights sobre como melhorar seu desempenho...
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {siteConfig.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                  buttonColor={feature.icon === "calculator" ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"}
                  className="border-border transition-colors hover:bg-accent/10"
                />
              ))}
            </div>

            <FeaturedVideosSection videos={siteConfig.featuredVideos} className="border-border" />
            
            <QuickLinks links={quickLinksWithIcons} className="border-border" />
            
            <Card className="border-border">
              <CardHeader>
                <SectionHeader title="Recordes Pessoais" />
              </CardHeader>
              <CardContent>
                <div className="-mt-4 flex flex-wrap gap-2">
                  {siteConfig.achievements.map((achievement, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-input bg-muted text-foreground hover:bg-muted/80"
                    >
                      {`${achievement.distance} - ${achievement.time}`}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Competitions className="border-border" limit={5} />
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name} - Todos os direitos reservados
        </footer>
      </div>
    </main>
  )
}