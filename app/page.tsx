import Image from "next/image";
import Link from "next/link";
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
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Medal as Strava,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export default function MinimalistBiolink() {
  // Map platform names to icons
  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "instagram": return <Instagram className="h-5 w-5" />;
      case "twitter": case "x": return <Twitter className="h-5 w-5" />;
      case "facebook": return <Facebook className="h-5 w-5" />;
      case "youtube": return <Youtube className="h-5 w-5" />;
      case "linkedin": return <Linkedin className="h-5 w-5" />;
      case "strava": return <Strava className="h-5 w-5" />;
      default: return <ExternalLink className="h-5 w-5" />;
    }
  };
  
  // Quick links with icons
  const quickLinksWithIcons = siteConfig.quickLinks.map(link => {
    const icons = {
      book: <BookOpen className="size-4" />,
      calendar: <Calendar className="size-4" />,
      'shopping-bag': <ShoppingBag className="size-4" />,
      trophy: <Trophy className="size-4" />,
      calculator: <Calculator className="size-4" />,
      wrench: <Wrench className="size-4" />
    };
    
    return {
      ...link,
      icon: icons[link.icon] || <ExternalLink className="size-4" />
    };
  });

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-zinc-200 shadow-sm bg-white">
              <CardHeader className="pb-0">
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/avatar.jpg"
                      alt={siteConfig.author.name}
                      width={150}
                      height={150}
                      className="rounded-full border-4 border-emerald-100 object-cover"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 text-center">
                <div className="mb-2 font-medium text-emerald-600">
                  Seu Alienígena Favorito 👽❤️✌️
                </div>
                <CardTitle className="mb-2 text-3xl font-bold text-zinc-800">
                  {siteConfig.author.name}
                </CardTitle>
                <CardDescription className="text-zinc-500">{siteConfig.description}</CardDescription>
              </CardContent>
            </Card>

            {/* Info Cards */}
            {[
              { icon: <Cake className="size-5 text-emerald-600" />, text: `Nascido em ${siteConfig.author.birthYear} | ${siteConfig.author.weight} | ${siteConfig.author.height}` },
              { icon: <MapPin className="size-5 text-emerald-600" />, text: siteConfig.author.location },
              { icon: <Mail className="size-5 text-emerald-600" />, text: siteConfig.links.email, link: `mailto:${siteConfig.links.email}` }
            ].map((item, index) => (
              <Card key={index} className="border-zinc-200 shadow-sm bg-white">
                <CardContent className="flex items-center gap-3 p-4">
                  {item.icon}
                  {item.link ? (
                    <Link href={item.link} className="transition-colors hover:text-emerald-600">
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-zinc-600">{item.text}</span>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="border-zinc-200 shadow-sm bg-white">
              <CardHeader>
                <SectionHeader title="Redes Sociais" className="mb-0" />
              </CardHeader>
              <CardContent className="grid gap-3 pt-2">
                {siteConfig.socialLinks.map((link) => (
                  <Link href={link.url} key={link.platform} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-zinc-200 hover:bg-zinc-100 hover:border-emerald-200 transition-colors"
                    >
                      {getIcon(link.platform)}
                      <span className="text-zinc-700">{link.username}</span>
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Center/Right Columns */}
          <div className="space-y-8 md:col-span-2">
            {/* YouTube Banner */}
            <Card className="overflow-hidden border-zinc-200 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Youtube className="size-8 text-red-500" />
                    <div>
                      <div className="text-lg font-medium text-zinc-800">YouTube</div>
                      <div className="text-sm text-zinc-500">
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
                <p className="text-sm text-zinc-600">
                  Dicas valiosas de treinamento, orientações práticas e insights sobre como melhorar seu desempenho na corrida.
                </p>
              </CardContent>
            </Card>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {siteConfig.features.map((feature, index) => (
                <Card key={index} className="h-full border-zinc-200 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {feature.icon === "calculator" ? (
                        <Calculator className="h-8 w-8 text-emerald-600" />
                      ) : (
                        <Wrench className="h-8 w-8 text-blue-600" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-zinc-800">{feature.title}</h3>
                    <p className="text-sm text-zinc-600 mb-4">{feature.description}</p>
                    <Button
                      className={feature.icon === "calculator" ? 
                        "bg-emerald-600 hover:bg-emerald-700 text-white mt-auto w-full sm:w-auto" : 
                        "bg-blue-600 hover:bg-blue-700 text-white mt-auto w-full sm:w-auto"
                      }
                      asChild
                    >
                      <Link href={feature.buttonUrl} className="flex items-center">
                        {feature.buttonText}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Videos */}
            <Card className="border-zinc-200 shadow-sm bg-white">
              <CardHeader className="flex flex-row items-center">
                <Youtube className="h-5 w-5 text-red-500 mr-2" />
                <CardTitle className="text-zinc-800">Vídeos em Destaque</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 mb-4">Os melhores conteúdos do canal para você começar</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {siteConfig.featuredVideos.slice(0, 6).map((video, index) => (
                    <Link 
                      key={index}
                      href={video.url || "#"}
                      className="group block"
                    >
                      <div className="bg-white rounded-lg overflow-hidden border border-zinc-200 hover:border-emerald-200 transition-colors duration-200">
                        <div className="relative aspect-video w-full">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                              <Youtube className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm line-clamp-2 text-zinc-800 group-hover:text-emerald-600 transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-xs text-zinc-500 mt-1">{video.views}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Links */}
            <Card className="border-zinc-200 shadow-sm bg-white">
              <CardHeader>
                <SectionHeader title="Links Rápidos" />
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickLinksWithIcons.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full justify-between border-zinc-200 hover:bg-zinc-50 cursor-pointer"
                    >
                      <span className="flex items-center gap-2 text-zinc-700">
                        {link.icon}
                        {link.title}
                      </span>
                      {link.isExternal ? (
                        <ExternalLink className="h-4 w-4 text-zinc-400" />
                      ) : (
                        <ArrowRight className="h-4 w-4 text-zinc-400" />
                      )}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
            
            {/* Personal Records */}
            <Card className="border-zinc-200 shadow-sm bg-white">
              <CardHeader>
                <SectionHeader title="Recordes Pessoais" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {siteConfig.achievements.map((achievement, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-3 py-1.5 border-zinc-200 bg-zinc-50 text-emerald-700"
                    >
                      <Trophy className="h-3 w-3 mr-1.5" />
                      {`${achievement.distance} - ${achievement.time}`}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Competitions */}
            <Card className="border-zinc-200 shadow-sm bg-white">
              <CardHeader>
                <SectionHeader title="Competições Recentes" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Display first 4 competitions */}
                  {[...Array(4)].map((_, index) => {
                    // This is just example data - you would use your actual competition data
                    const fakeCompetition = {
                      title: `Maratona Internacional ${index + 1}`,
                      result: index === 0 ? "1º geral" : index === 1 ? "2º colocado" : "Top 10",
                      date: "2024-03-15",
                      distance: "42 km",
                      time: "2:34:08"
                    };
                    
                    const getResultTextColor = (result) => {
                      if (result.includes("1º")) return "text-amber-600";
                      if (result.includes("2º")) return "text-zinc-500";
                      if (result.includes("3º")) return "text-amber-700";
                      return "text-emerald-600";
                    };
                    
                    return (
                      <div 
                        key={index} 
                        className="border border-zinc-200 rounded-lg p-4 hover:border-emerald-200 transition-colors bg-white"
                      >
                        <div className="flex flex-col gap-1 mb-2">
                          <h3 className="font-medium text-zinc-800">{fakeCompetition.title}</h3>
                          <p className={`text-sm font-medium ${getResultTextColor(fakeCompetition.result)}`}>
                            {fakeCompetition.result}
                          </p>
                        </div>
                        <div className="space-y-1 text-sm text-zinc-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-zinc-400" />
                            <span>15 de Março, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-zinc-400" />
                            <span>{fakeCompetition.distance}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Strava className="h-4 w-4 text-zinc-400" />
                            <span>{fakeCompetition.time}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="border-zinc-200 hover:bg-zinc-50 text-emerald-600"
                  >
                    Ver todas as competições
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} {siteConfig.name} - Todos os direitos reservados
            </div>
            <div className="text-xs text-zinc-400">
              Construído com Next.js e Tailwind CSS
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}