"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, BarChart3 } from "lucide-react"
import { useState } from "react"

interface CustomLink {
  id: string
  title: string
  description?: string
  url: string
  icon?: string
  isActive: boolean
  clickCount?: number
}

interface CustomLinksProps {
  links: CustomLink[]
}

export function CustomLinks({ links }: CustomLinksProps) {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>(
    links.reduce((acc, link) => ({ ...acc, [link.id]: link.clickCount || 0 }), {})
  )

  const handleLinkClick = (link: CustomLink) => {
    // Update click count
    setClickCounts(prev => ({
      ...prev,
      [link.id]: prev[link.id] + 1
    }))
    
    // Analytics tracking
    console.log(`Custom link clicked: ${link.title}`)
    
    // Open link
    window.open(link.url, '_blank', 'noopener,noreferrer')
  }

  const activeLinks = links.filter(link => link.isActive)

  return (
    <section className="px-6 py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Quick Links</h2>
          <p className="text-muted-foreground">Explore my latest projects and content</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {activeLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    onClick={() => handleLinkClick(link)}
                    className="w-full h-auto p-6 text-left justify-start hover:bg-transparent"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-lg">{link.title}</h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                        {link.description && (
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        )}
                      </div>
                      
                      {clickCounts[link.id] > 0 && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded-full px-2 py-1">
                          <BarChart3 className="w-3 h-3" />
                          {clickCounts[link.id]}
                        </div>
                      )}
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {activeLinks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No links available at the moment.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}