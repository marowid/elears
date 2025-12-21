/**
 * Tactical Brutalism Design: Landing page with asymmetric grid layout
 * - Diagonal section dividers mimicking tactical maps
 * - Large typography blocks anchoring the design
 * - Layered intelligence gathering aesthetic
 * - Sharp angular transitions between sections
 */

import { Link } from "wouter";
import { Shield, Eye, Target, Users, ChevronRight, Lock, Network, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-main.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80" />
        
        {/* Tactical Grid Overlay */}
        <div className="absolute inset-0 tactical-grid opacity-30" />

        {/* Content */}
        <div className="container relative z-10 py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 mb-8">
              <Shield size={16} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                Tactical Intelligence Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
              ELEARS
            </h1>
            <div className="h-1 w-32 bg-accent mb-8" />
            
            <h2 className="font-display text-2xl md:text-4xl font-semibold mb-6 text-accent">
              Modern Intelligence & Red Teaming
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Providing advanced OSINT, intelligence operations, and red teaming services to Fortune 500 companies worldwide. Where tactical precision meets digital expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="font-display uppercase tracking-wider group"
                >
                  Explore Services
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-display uppercase tracking-wider bg-transparent"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Fortune 500 Clients</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Global Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative bg-card diagonal-cut-top">
        <div className="container py-24">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Capabilities
            </h2>
            <div className="h-1 w-24 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* OSINT */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="mb-6">
                <Search size={40} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                OSINT Operations
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Advanced open-source intelligence gathering and analysis. We uncover critical information from publicly available sources using cutting-edge methodologies.
              </p>
              <Link href="/services">
                <span className="text-accent font-display text-sm uppercase tracking-wider hover:underline inline-flex items-center gap-2">
                  Learn More
                  <ChevronRight size={16} />
                </span>
              </Link>
            </div>

            {/* Red Teaming */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="mb-6">
                <Target size={40} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                Red Teaming
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Simulated adversarial attacks to test your organization's defenses. Real-world scenarios executed by experienced operators.
              </p>
              <Link href="/services">
                <span className="text-accent font-display text-sm uppercase tracking-wider hover:underline inline-flex items-center gap-2">
                  Learn More
                  <ChevronRight size={16} />
                </span>
              </Link>
            </div>

            {/* Training */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="mb-6">
                <Users size={40} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                Training Programs
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive training programs designed for enterprise security teams. From fundamentals to advanced tactical operations.
              </p>
              <Link href="/services">
                <span className="text-accent font-display text-sm uppercase tracking-wider hover:underline inline-flex items-center gap-2">
                  Learn More
                  <ChevronRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-background diagonal-cut-top">
        <div className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Tactical Excellence
              </h2>
              <div className="h-1 w-24 bg-accent mb-8" />
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Named after the legendary Polish mercenary cavalry Lisowczycy, we embody their spirit of tactical superiority, adaptability, and relentless effectiveness. Our team combines historical military wisdom with cutting-edge cyber intelligence capabilities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-accent flex items-center justify-center">
                    <Lock size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Proven Methodology</h3>
                    <p className="text-muted-foreground">Battle-tested frameworks refined through years of real-world operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-accent flex items-center justify-center">
                    <Network size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Worldwide intelligence network with local expertise in every major market.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-accent flex items-center justify-center">
                    <Eye size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Absolute Discretion</h3>
                    <p className="text-muted-foreground">Military-grade operational security protecting your sensitive operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="relative h-[600px] border border-border"
              style={{
                backgroundImage: "url(/images/services-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-background/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-card diagonal-cut-top">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Enhance Your Security Posture?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact our team to discuss how Elears can provide tactical intelligence solutions tailored to your organization's needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-display uppercase tracking-wider">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
