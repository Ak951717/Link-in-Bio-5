"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Github, 
  Mail,
  Globe,
  Music,
  MessageCircle
} from "lucide-react"

interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
  color: string
}

interface SocialLinksProps {
  links: Array<{
    platform: string
    url: string
    username?: string
  }>
}

const socialIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  instagram: { icon: <Instagram className="w-5 h-5" />, color: "hover:bg-pink-500" },
  twitter: { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-blue-500" },
  youtube: { icon: <Youtube className="w-5 h-5" />, color: "hover:bg-red-500" },
  linkedin: { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-blue-700" },
  github: { icon: <Github className="w-5 h-5" />, color: "hover:bg-gray-700" },
  email: { icon: <Mail className="w-5 h-5" />, color: "hover:bg-green-600" },
  website: { icon: <Globe className="w-5 h-5" />, color: "hover:bg-indigo-600" },
  spotify: { icon: <Music className="w-5 h-5" />, color: "hover:bg-green-500" },
  discord: { icon: <MessageCircle className="w-5 h-5" />, color: "hover:bg-indigo-500" },
}

export function SocialLinks({ links }: SocialLinksProps) {
  const handleClick = (platform: string, url: string) => {
    // Analytics tracking would go here
    console.log(`Clicked ${platform}: ${url}`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold mb-2">Connect With Me</h2>
          <p className="text-muted-foreground">Follow me on social media for updates</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link, index) => {
            const socialConfig = socialIcons[link.platform.toLowerCase()]
            if (!socialConfig) return null

            return (
              <motion.div
                key={link.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleClick(link.platform, link.url)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${socialConfig.color} hover:text-white hover:border-transparent shadow-lg hover:shadow-xl`}
                >
                  {socialConfig.icon}
                  <span className="sr-only">{link.platform}</span>
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}