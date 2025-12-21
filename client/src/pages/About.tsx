/**
 * Tactical Brutalism Design: About page with team profiles
 * - Structured information blocks
 * - Military-grade organization
 * - Clear visual hierarchy for team members
 */

import { Shield, Award, Globe, Users, Linkedin, Mail } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Aleksander Kowalski",
      role: "Chief Executive Officer & Founder",
      specialty: "Strategic Intelligence",
      bio: "Former military intelligence officer with 20+ years of experience in tactical operations and strategic planning. Led numerous high-stakes intelligence operations across Europe and Asia.",
      expertise: ["Strategic Planning", "Intelligence Operations", "Risk Management", "Executive Leadership"],
      email: "a.kowalski@elears.com"
    },
    {
      name: "Dr. Maria Nowak",
      role: "Chief Technology Officer",
      specialty: "Cyber Intelligence & OSINT",
      bio: "PhD in Computer Science with specialization in digital forensics and open-source intelligence. Published researcher and recognized expert in advanced OSINT methodologies.",
      expertise: ["OSINT Techniques", "Digital Forensics", "Threat Intelligence", "Technical Research"],
      email: "m.nowak@elears.com"
    },
    {
      name: "Tomasz Wiśniewski",
      role: "Director of Red Team Operations",
      specialty: "Offensive Security",
      bio: "Veteran penetration tester and red team operator with extensive experience in adversary simulation and security assessment for Fortune 500 companies.",
      expertise: ["Red Teaming", "Penetration Testing", "Social Engineering", "Physical Security"],
      email: "t.wisniewski@elears.com"
    },
    {
      name: "Katarzyna Lewandowska",
      role: "Head of Training & Education",
      specialty: "Security Training",
      bio: "Certified instructor with background in both corporate training and military education. Designed and delivered security training programs for thousands of professionals worldwide.",
      expertise: ["Curriculum Development", "Technical Training", "Team Leadership", "Security Education"],
      email: "k.lewandowska@elears.com"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Tactical Excellence",
      description: "We apply military-grade precision and discipline to every engagement, ensuring the highest standards of operational excellence."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Our team consists of certified professionals with decades of combined experience in intelligence, security, and tactical operations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating worldwide with local expertise, we provide intelligence services across all major markets and regions."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, understanding your unique challenges and delivering tailored solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: "url(/images/about-bg.jpg)",
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
                About Elears
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-none">
              Who We Are
            </h1>
            <div className="h-1 w-32 bg-accent mb-8" />
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              A team of intelligence professionals and security experts dedicated to protecting organizations from evolving threats through tactical precision and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                The Elears Legacy
              </h2>
              <div className="h-1 w-24 bg-accent mb-8" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Named after the legendary <strong className="text-foreground">Lisowczycy</strong>—the elite Polish mercenary cavalry of the 17th century—Elears embodies the same principles that made these warriors legendary: tactical superiority, adaptability, and relentless effectiveness.
                </p>
                
                <p>
                  The Lisowczycy were known for their unconventional tactics, deep reconnaissance capabilities, and ability to operate independently in hostile territory. These same qualities define our approach to modern intelligence and security operations.
                </p>
                
                <p>
                  Founded by veterans of military intelligence and cybersecurity operations, Elears brings together decades of operational experience with cutting-edge technical capabilities. We serve Fortune 500 companies worldwide, providing the intelligence and security expertise needed to navigate today's complex threat landscape.
                </p>

                <p>
                  Our team operates with the precision of military special operations and the sophistication of advanced intelligence agencies, delivering results that protect our clients' most critical assets and operations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-6">
                <div className="font-mono text-sm text-accent mb-2">FOUNDED</div>
                <div className="font-display text-3xl font-bold mb-2">2008</div>
                <p className="text-muted-foreground">Established by intelligence veterans</p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <div className="font-mono text-sm text-accent mb-2">GLOBAL OPERATIONS</div>
                <div className="font-display text-3xl font-bold mb-2">50+ Countries</div>
                <p className="text-muted-foreground">Worldwide intelligence network</p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <div className="font-mono text-sm text-accent mb-2">TEAM SIZE</div>
                <div className="font-display text-3xl font-bold mb-2">100+ Specialists</div>
                <p className="text-muted-foreground">Expert operators and analysts</p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <div className="font-mono text-sm text-accent mb-2">CLIENT BASE</div>
                <div className="font-display text-3xl font-bold mb-2">Fortune 500</div>
                <p className="text-muted-foreground">Enterprise organizations worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Values
            </h2>
            <div className="h-1 w-24 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              The principles that guide our operations and define our commitment to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="border border-border p-6">
                  <div className="mb-4">
                    <Icon size={40} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Leadership Team
            </h2>
            <div className="h-1 w-24 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              Meet the experienced professionals leading Elears' intelligence and security operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="border border-border p-8 hover:border-accent transition-colors group"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <div className="font-display text-sm uppercase tracking-wider text-accent mb-1">
                        {member.role}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {member.specialty}
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-border mb-6" />
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <div className="font-display text-sm uppercase tracking-wider text-accent mb-3">
                    Core Expertise:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 text-xs font-mono text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're always looking for talented professionals to join our team. If you have experience in intelligence, security, or related fields, we want to hear from you.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-display uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
