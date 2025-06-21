"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AboutSectionProps {
  shortBio: string
  fullBio: string
  achievements?: string[]
}

export function AboutSection({ shortBio, fullBio, achievements = [] }: AboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="backdrop-blur-sm bg-card/50 border border-border/50 shadow-lg">
            <CardContent className="p-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  {shortBio}
                </p>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {fullBio}
                    </p>
                    
                    {achievements.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <ul className="space-y-2">
                          {achievements.map((achievement, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex justify-center mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm font-medium hover:bg-accent/50 transition-all duration-200"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}