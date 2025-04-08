"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Flag, Clock, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
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

  return (
    <Card
      className={cn("bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-xs border-zinc-800/50", className)}
    >
      <CardHeader>
        <SectionHeader title="Histórico de Competições" />
      </CardHeader>
      <CardContent className="space-y-4">
        {displayedCompetitions.length === 0 ? (
          <p className="text-zinc-400 text-center py-4">Nenhuma competição registrada.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedCompetitions.map((competition, index) => (
                <div key={index} className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="font-medium">{competition.title}</h3>
                    <p className={cn("text-sm font-medium", getResultTextColor(competition.result))}>
                      {competition.result}
                    </p>
                  </div>
                  <div className="space-y-1 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(competition.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4" />
                      <span>{competition.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{competition.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {hasMoreCompetitions && (
              <div className="flex justify-center mt-4">
                <Button 
                  variant="outline" 
                  className="border-zinc-700 hover:bg-zinc-800 text-zinc-300"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Mostrar menos" : "Carregar mais"}
                  <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", showAll && "rotate-180")} />
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}