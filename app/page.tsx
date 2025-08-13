import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PackagesSection } from "@/components/packages-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <ContactSection />
      <FinalCtaSection />
      <WhatsAppButton />
    </main>
  )
}
