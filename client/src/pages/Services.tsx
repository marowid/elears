/**
 * Tactical Brutalism Design: Services page with modular block system
 * - Clear separation of service categories
 * - Military-grade information hierarchy
 * - Functional layout with geometric precision
 */

import { Search, Target, Users, Shield, Lock, Eye, Network, Zap, FileSearch, AlertTriangle, BookOpen, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "OSINT Operations",
      description: "Advanced open-source intelligence gathering and analysis for comprehensive threat assessment and competitive intelligence.",
      features: [
        "Social Media Intelligence (SOCMINT)",
        "Deep Web & Dark Web Monitoring",
        "Digital Footprint Analysis",
        "Threat Actor Profiling",
        "Brand & Reputation Monitoring",
        "Geospatial Intelligence (GEOINT)"
      ]
    },
    {
      icon: Target,
      title: "Red Team Operations",
      description: "Simulated adversarial attacks designed to test and improve your organization's security defenses through real-world scenarios.",
      features: [
        "Physical Security Testing",
        "Social Engineering Campaigns",
        "Network Penetration Testing",
        "Application Security Assessment",
        "Adversary Simulation",
        "Purple Team Exercises"
      ]
    },
    {
      icon: Shield,
      title: "Threat Intelligence",
      description: "Proactive threat intelligence services providing actionable insights to protect your organization from emerging threats.",
      features: [
        "Threat Actor Tracking",
        "Vulnerability Intelligence",
        "Indicator of Compromise (IOC) Analysis",
        "Threat Landscape Reports",
        "Strategic Intelligence Briefings",
        "Tactical Threat Feeds"
      ]
    },
    {
      icon: Lock,
      title: "Security Assessments",
      description: "Comprehensive security evaluations identifying vulnerabilities and providing actionable remediation strategies.",
      features: [
        "Infrastructure Security Review",
        "Cloud Security Assessment",
        "Mobile Application Testing",
        "API Security Analysis",
        "Compliance Gap Analysis",
        "Security Architecture Review"
      ]
    },
    {
      icon: Eye,
      title: "Digital Forensics",
      description: "Expert investigation and analysis of digital evidence for incident response and legal proceedings.",
      features: [
        "Incident Response Support",
        "Malware Analysis",
        "Data Recovery Services",
        "Chain of Custody Management",
        "Expert Witness Testimony",
        "Forensic Reporting"
      ]
    },
    {
      icon: Users,
      title: "Training & Education",
      description: "Comprehensive training programs designed to elevate your team's security capabilities and operational readiness.",
      features: [
        "OSINT Fundamentals & Advanced Techniques",
        "Red Team Operator Training",
        "Threat Intelligence Analysis",
        "Security Operations Center (SOC) Training",
        "Incident Response Procedures",
        "Custom Enterprise Workshops"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Network,
      title: "Cyber Intelligence",
      description: "Strategic cyber intelligence gathering and analysis for executive decision-making."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 emergency response team for critical security incidents and breaches."
    },
    {
      icon: FileSearch,
      title: "Due Diligence",
      description: "Comprehensive background investigations for mergers, acquisitions, and partnerships."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Enterprise-wide risk analysis and mitigation strategy development."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: "url(/images/services-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 tactical-grid opacity-20" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 mb-8">
              <Shield size={16} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                Our Services
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-none">
              What We Do
            </h1>
            <div className="h-1 w-32 bg-accent mb-8" />
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive intelligence and security services designed for enterprise organizations facing complex threats in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Core Services
            </h2>
            <div className="h-1 w-24 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our primary service offerings represent years of operational experience and tactical expertise in intelligence and security operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="border border-border p-8 hover:border-accent transition-colors group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 border border-accent flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon size={32} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="font-display text-sm uppercase tracking-wider text-accent mb-3">
                          Key Capabilities:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-1">▸</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Additional Capabilities
            </h2>
            <div className="h-1 w-24 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              Specialized services to address specific security challenges and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="border border-border p-6 hover:border-accent transition-colors group"
                >
                  <div className="mb-4">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 mb-8">
                <BookOpen size={16} className="text-accent" />
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Training Excellence
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Enterprise Training Programs
              </h2>
              <div className="h-1 w-24 bg-accent mb-8" />
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our training programs are designed by operators for operators. We combine theoretical knowledge with practical, hands-on exercises that simulate real-world scenarios.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-accent flex items-center justify-center">
                    <Award size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Certified Instructors</h3>
                    <p className="text-muted-foreground">Industry-recognized experts with decades of combined operational experience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-accent flex items-center justify-center">
                    <Target size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Hands-On Labs</h3>
                    <p className="text-muted-foreground">Realistic training environments with enterprise-grade infrastructure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-accent flex items-center justify-center">
                    <Users size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Custom Curriculum</h3>
                    <p className="text-muted-foreground">Tailored programs addressing your organization's specific needs and threat landscape.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-border p-6">
                <div className="font-mono text-sm text-accent mb-2">PROGRAM TYPE</div>
                <h3 className="font-display text-2xl font-bold mb-3">Foundation Courses</h3>
                <p className="text-muted-foreground mb-4">3-5 day intensive programs covering fundamental concepts and methodologies.</p>
                <div className="font-mono text-sm text-muted-foreground">Duration: 3-5 Days</div>
              </div>

              <div className="border border-border p-6">
                <div className="font-mono text-sm text-accent mb-2">PROGRAM TYPE</div>
                <h3 className="font-display text-2xl font-bold mb-3">Advanced Operations</h3>
                <p className="text-muted-foreground mb-4">1-2 week advanced training for experienced security professionals.</p>
                <div className="font-mono text-sm text-muted-foreground">Duration: 1-2 Weeks</div>
              </div>

              <div className="border border-border p-6">
                <div className="font-mono text-sm text-accent mb-2">PROGRAM TYPE</div>
                <h3 className="font-display text-2xl font-bold mb-3">Custom Workshops</h3>
                <p className="text-muted-foreground mb-4">Tailored training programs designed for your organization's specific requirements.</p>
                <div className="font-mono text-sm text-muted-foreground">Duration: Flexible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Discuss Your Requirements
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every organization faces unique security challenges. Contact us to discuss how our services can be tailored to your specific needs.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-display uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
