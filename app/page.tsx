"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
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
  ArrowRight,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FeaturedVideosSection } from "@/components/featured-videos-section";
import { SocialLinks } from "@/components/social-links";
import { QuickLinks } from "@/components/quick-links";
import { Competitions } from "@/components/competitions";

export default function Page() {
  const controls = useAnimation();
  
  // Map platform names to icons for quick links
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
  
  useEffect(() => {
    controls.start({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1 
      } 
    });
  }, [controls]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div 
          className="space-y-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {/* Hero Section */}
          <motion.div 
            className="text-center"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.div 
              className="relative mx-auto mb-8 h-32 w-32"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/avatar.jpg"
                alt={siteConfig.author.name}
                width={128}
                height={128}
                className="rounded-full object-cover ring-4 ring-white shadow-xl"
              />
            </motion.div>
            
            <motion.div 
              className="mb-2 text-sm font-medium text-emerald-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Seu Alienígena Favorito 👽❤️✌️
            </motion.div>
            
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {siteConfig.author.name}
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              {siteConfig.description}
            </p>

            {/* Basic Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{siteConfig.author.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{siteConfig.author.birthYear} | {siteConfig.author.weight} | {siteConfig.author.height}</span>
              </div>
              <Link href={`mailto:${siteConfig.links.email}`} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.links.email}</span>
              </Link>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <SocialLinks 
              links={siteConfig.socialLinks} 
              className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg" 
            />
          </motion.div>

          {/* Personal Records */}
          <motion.div 
            className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg p-8"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Recordes Pessoais</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {siteConfig.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-lg font-bold text-gray-900">{achievement.time}</div>
                  <div className="text-sm text-gray-600">{achievement.distance}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* YouTube Section */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 shadow-lg p-8"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-500">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">YouTube</h3>
                  <p className="text-gray-600">{siteConfig.socialLinks.find(link => link.platform === "youtube")?.username}</p>
                </div>
              </div>
              <Button asChild className="bg-red-500 text-white hover:bg-red-600 rounded-xl px-6 py-3">
                <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  Inscreva-se
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">6.3K</span>
                </Link>
              </Button>
            </div>
            <p className="text-gray-700">
              Dicas valiosas de treinamento, orientações práticas e insights sobre como melhorar seu desempenho na corrida.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {siteConfig.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg p-8"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  {feature.icon === "calculator" ? (
                    <Calculator className="h-8 w-8 text-emerald-500" />
                  ) : (
                    <Wrench className="h-8 w-8 text-blue-500" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="mb-6 text-gray-600">{feature.description}</p>
                <Button asChild className={`w-full rounded-xl ${
                  feature.icon === "calculator" 
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700" 
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                }`}>
                  <Link href={feature.buttonUrl} target="_blank" rel="noopener noreferrer">
                    {feature.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div 
            className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg p-8"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <QuickLinks 
              links={quickLinksWithIcons}
              className="border-0"
              showLinkIcon={true}
            />
          </motion.div>

          {/* Featured Videos */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <FeaturedVideosSection 
              videos={[...siteConfig.featuredVideos]}
              className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg"
            />
          </motion.div>
          
          {/* Competitions */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Competitions className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}