import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Achievement {
  distance: string;
  time: string;
}

interface HeroSectionProps {
  author: { name: string };
  achievements: Achievement[];
}

export default function HeroSection({ author, achievements }: HeroSectionProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl mb-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
        <div className="flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/80 text-emerald-600 border-0 px-3 py-1">
              Corredor Profissional
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
              {author.name}
            </h1>
            
            <p className="text-lg text-zinc-600 mb-6 max-w-md">
              Compartilhando conhecimento sobre corrida de rua, treinos e experiências para ajudar você a alcançar seus objetivos.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="bg-white/80 text-emerald-700 border-emerald-100 px-3 py-1.5">
                    {`${achievement.distance} - ${achievement.time}`}
                  </Badge>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-zinc-800">
                <Link href="#videos" className="flex items-center">
                  Ver vídeos
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              
              <Button variant="outline" className="border-zinc-200 bg-white/80 hover:bg-zinc-50">
                <Link href="#recursos" className="flex items-center">
                  Acessar recursos
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 blur-md opacity-30" />
            <Image
              src="/avatar.jpg"
              alt={author.name}
              fill
              className="rounded-full border-4 border-white object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}