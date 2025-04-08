import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calculator, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: "calculator" | "wrench"
  buttonText: string
  buttonUrl: string
  color: string
  className?: string
  accentColor?: string
  buttonColor?: string
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  buttonText, 
  buttonUrl, 
  color, 
  className,
  accentColor,
  buttonColor
}: FeatureCardProps) {
  // Use as cores passadas como prop, ou definir padrões baseados no tipo de ícone
  const iconColor = accentColor || (icon === "calculator" ? "text-green-500" : "text-blue-500")
  const btnColor = buttonColor || (icon === "calculator" ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700")

  return (
    <Card className={cn("text-zinc-800 border-zinc-800", color, className)}>
      <CardContent className="p-6">
        <div className="mb-4">
          {icon === "calculator" ? (
            <Calculator className={cn("h-8 w-8", iconColor)} />
          ) : (
            <Wrench className={cn("h-8 w-8", iconColor)} />
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={buttonUrl} target="_blank" rel="noopener noreferrer">
          <Button
            className={cn(btnColor, "text-white cursor-pointer rounded-md")}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}