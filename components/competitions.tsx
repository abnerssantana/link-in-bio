"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Flag, Clock, ChevronDown, Medal, Trophy, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import competitionsData from "@/competitions.json"

interface Competition {
  title: string
  distance: string
  result: string
  time: string
  date: string
}

interface CompetitionsProps {
  className?: string
  limit?: number
}

export function Competitions({ className }: CompetitionsProps) {
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 6
  
  // Sort competitions by date (most recent first)
  const sortedCompetitions = [...competitionsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  // Get the competitions to display based on showAll flag
  const displayedCompetitions = showAll ? sortedCompetitions : sortedCompetitions.slice(0, initialDisplayCount)
  
  // Check if there are more competitions to load
  const hasMoreCompetitions = sortedCompetitions.length > initialDisplayCount

  const getResultIcon = (result: string) => {
    if (result.includes("1º")) {
      return <Trophy className="h-5 w-5 text-yellow-500" />
    } else if (result.includes("2º")) {
      return <Medal className="h-5 w-5 text-gray-400" />
    } else if (result.includes("3º")) {
      return <Award className="h-5 w-5 text-orange-500" />
    } else {
      return <Flag className="h-5 w-5 text-blue-500" />
    }
  }

  const getResultTextColor = (result: string) => {
    if (result.includes("1º")) {
      return "text-yellow-500"
    } else if (result.includes("2º")) {
      return "text-gray-400"
    } else if (result.includes("3º")) {
      return "text-orange-500"
    } else {
      return "text-blue-500"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  }

  // Extract year for grouping
  const getYear = (dateString: string) => {
    return new Date(dateString).getFullYear();
  }

  // Group competitions by year
  const groupedCompetitions = displayedCompetitions.reduce((acc, competition) => {
    const year = getYear(competition.date);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(competition);
    return acc;
  }, {} as Record<number, Competition[]>);

  // Get sorted years
  const years = Object.keys(groupedCompetitions).map(Number).sort((a, b) => b - a);

  return (
    <Card
      className={cn("border-0 bg-white/80 shadow-md", className)}
    >
      <CardHeader>
        <SectionHeader title="Histórico de Competições" />
      </CardHeader>
      <CardContent className="space-y-6">
        {displayedCompetitions.length === 0 ? (
          <p className="text-zinc-500 text-center py-4">Nenhuma competição registrada.</p>
        ) : (
          <>
            <AnimatePresence>
              {years.map((year) => (
                <motion.div 
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <div className="mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0">
                      {year}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedCompetitions[year].map((competition, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="overflow-hidden"
                      >
                        <div className="border border-zinc-200 rounded-lg p-5 hover:shadow-md transition-all duration-200">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-medium text-zinc-800">{competition.title}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge
                                  variant="outline"
                                  className="bg-zinc-50 border-zinc-200 px-2 py-1 text-xs font-normal text-zinc-600"
                                >
                                  <Flag className="h-3 w-3 mr-1 text-emerald-500" />
                                  {competition.distance}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="bg-zinc-50 border-zinc-200 px-2 py-1 text-xs font-normal text-zinc-600"
                                >
                                  <Clock className="h-3 w-3 mr-1 text-blue-500" />
                                  {competition.time}
                                </Badge>
                              </div>
                            </div>
                            <div className="ml-4">
                              {getResultIcon(competition.result)}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <div className="text-sm text-zinc-500">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-zinc-400" />
                                <span>{formatDate(competition.date)}</span>
                              </div>
                            </div>
                            <div className={cn("text-sm font-medium", getResultTextColor(competition.result))}>
                              {competition.result}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {hasMoreCompetitions && (
              <motion.div 
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  variant="outline" 
                  className="border-emerald-200 bg-white hover:bg-emerald-50 hover:text-emerald-700 text-zinc-700 shadow-sm"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Mostrar menos" : "Carregar mais"}
                  <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", showAll && "rotate-180")} />
                </Button>
              </motion.div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}