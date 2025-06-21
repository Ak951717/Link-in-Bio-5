"use client"

import { motion } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight, Download, Calendar, Star } from "lucide-react"
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "primary";
interface CTAButton {
  text: string
  url: string
  icon: keyof typeof iconMap
  variant: ButtonVariant
  description?: string
}

interface CTASectionProps {
  title: string
  subtitle: string
  buttons: Array<CTAButton>
}

const iconMap: Record<string, React.ReactNode> = {
  arrow: <ArrowRight className="w-4 h-4" />,
  download: <Download className="w-4 h-4" />,
  calendar: <Calendar className="w-4 h-4" />,
  star: <Star className="w-4 h-4" />,
}

export function CTASection({ title, subtitle, buttons }: CTASectionProps) {
  const handleCTAClick = (text: string, url: string) => {
    // Analytics tracking
    console.log(`CTA clicked: ${text}`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="px-6 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/10 dark:to-indigo-950/10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {buttons.map((button, index) => (
            <motion.div
              key={button.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button
                variant={button.variant}
                size="lg"
                onClick={() => handleCTAClick(button.text, button.url)}
                className={`w-full h-16 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 ${
                  button.variant === "primary" 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 hover:shadow-xl" 
                    : button.variant === "secondary"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 hover:shadow-xl"
                    : "border-2 hover:shadow-xl"
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  {iconMap[button.icon]}
                  <div className="text-left">
                    <div>{button.text}</div>
                    {button.description && (
                      <div className="text-xs opacity-80 font-normal">
                        {button.description}
                      </div>
                    )}
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}