"use client"

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/hero-section'
import { SocialLinks } from '@/components/social-links'
import { CTASection } from '@/components/cta-section'
import { AboutSection } from '@/components/about-section'
import { CustomLinks } from '@/components/custom-links'
import { Footer } from '@/components/footer'

// Mock data - in a real app, this would come from a CMS or API
const profileData = {
  name: "Alex Johnson",
  tagline: "Digital Creator & Entrepreneur",
  bio: "Passionate about creating engaging content and building meaningful connections with my community.",
  profileImage: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
  isVerified: true,
  shortBio: "Hi there! I'm Alex, a digital creator passionate about technology, entrepreneurship, and community building. I love sharing my journey and connecting with like-minded individuals.",
  fullBio: "With over 5 years of experience in digital content creation, I've built a community of engaged followers across multiple platforms. My mission is to inspire others to pursue their passions and build authentic connections in the digital space. When I'm not creating content, you'll find me exploring new technologies, reading business books, or spending time in nature.",
  achievements: [
    "Built a community of 100K+ followers across platforms",
    "Featured in TechCrunch and Forbes for innovative content",
    "Launched successful digital products generating 6-figure revenue",
    "Spoken at 15+ conferences on digital marketing and entrepreneurship",
    "Mentored 500+ aspiring creators through online programs"
  ]
}

const socialLinks = [
  { platform: "instagram", url: "https://instagram.com/alexjohnson", username: "@alexjohnson" },
  { platform: "twitter", url: "https://twitter.com/alexjohnson", username: "@alexjohnson" },
  { platform: "youtube", url: "https://youtube.com/alexjohnson", username: "Alex Johnson" },
  { platform: "linkedin", url: "https://linkedin.com/in/alexjohnson", username: "Alex Johnson" },
  { platform: "github", url: "https://github.com/alexjohnson", username: "alexjohnson" },
  { platform: "email", url: "mailto:hello@alexjohnson.com", username: "hello@alexjohnson.com" }
]

const ctaButtons = [
  {
    text: "Join My Newsletter",
    url: "https://newsletter.alexjohnson.com",
    icon: "star",
    variant: "primary" as const,
    description: "Weekly insights on entrepreneurship"
  },
  {
    text: "Book a Consultation",
    url: "https://cal.com/alexjohnson",
    icon: "calendar",
    variant: "secondary" as const,
    description: "1-on-1 strategy session"
  },
  {
    text: "Download My Guide",
    url: "https://guide.alexjohnson.com",
    icon: "download",
    variant: "outline" as const,
    description: "Free 50-page digital marketing guide"
  }
]

const customLinks = [
  {
    id: "1",
    title: "Latest YouTube Video",
    description: "How I Built My First Million-Dollar Business",
    url: "https://youtube.com/watch?v=example1",
    isActive: true,
    clickCount: 127
  },
  {
    id: "2",
    title: "My Podcast",
    description: "The Entrepreneur's Journey - Weekly Episodes",
    url: "https://podcast.alexjohnson.com",
    isActive: true,
    clickCount: 89
  },
  {
    id: "3",
    title: "Online Course",
    description: "Digital Marketing Mastery - Complete Guide",
    url: "https://course.alexjohnson.com",
    isActive: true,
    clickCount: 256
  },
  {
    id: "4",
    title: "Blog",
    description: "Weekly insights on entrepreneurship and growth",
    url: "https://blog.alexjohnson.com",
    isActive: true,
    clickCount: 34
  },
  {
    id: "5",
    title: "Merchandise Store",
    description: "Premium apparel and accessories",
    url: "https://shop.alexjohnson.com",
    isActive: true,
    clickCount: 67
  }
]

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <HeroSection
        name={profileData.name}
        tagline={profileData.tagline}
        bio={profileData.bio}
        profileImage={profileData.profileImage}
        isVerified={profileData.isVerified}
      />
      
      <SocialLinks links={socialLinks} />
      
      <CTASection
        title="Let's Work Together"
        subtitle="Ready to take your business to the next level? Explore my services and resources."
        buttons={ctaButtons}
      />
      
      <AboutSection
        shortBio={profileData.shortBio}
        fullBio={profileData.fullBio}
        achievements={profileData.achievements}
      />
      
      <CustomLinks links={customLinks} />
      
      <Footer />
    </motion.main>
  )
}