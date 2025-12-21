/**
 * Tactical Brutalism Design: Contact page with functional form
 * - Clear information hierarchy
 * - Structured contact methods
 * - Military-grade organization
 */

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully. Our team will contact you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@elears.com", "operations@elears.com"],
      description: "Primary communication channel"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+48 22 123 4567"],
      description: "24/7 emergency hotline available"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Warsaw, Poland", "Global Operations"],
      description: "Offices in major cities worldwide"
    },
    {
      icon: Clock,
      title: "Availability",
      details: ["24/7 Operations", "Global Coverage"],
      description: "Round-the-clock support"
    }
  ];

  const offices = [
    {
      city: "Warsaw",
      country: "Poland",
      address: "ul. Marszałkowska 123, 00-001 Warsaw",
      type: "Headquarters"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "10 Downing Street, London SW1A 2AA",
      type: "European Operations"
    },
    {
      city: "New York",
      country: "United States",
      address: "350 Fifth Avenue, New York, NY 10118",
      type: "Americas Operations"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, Singapore 048616",
      type: "Asia-Pacific Operations"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: "url(/images/contact-bg.jpg)",
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
                Get In Touch
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-none">
              Contact Us
            </h1>
            <div className="h-1 w-32 bg-accent mb-8" />
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reach out to discuss your security requirements. Our team is available 24/7 to respond to urgent matters and consultation requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="border border-border p-6 hover:border-accent transition-colors"
                >
                  <div className="mb-4">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="font-mono text-sm text-foreground">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Send a Message
              </h2>
              <div className="h-1 w-24 bg-accent mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-sm uppercase tracking-wider mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-sm uppercase tracking-wider mb-2 text-foreground">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-sm uppercase tracking-wider mb-2 text-foreground">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-card border-border"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-sm uppercase tracking-wider mb-2 text-foreground">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-card border-border"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-display text-sm uppercase tracking-wider mb-2 text-foreground">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block font-display text-sm uppercase tracking-wider mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-display uppercase tracking-wider"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2" size={18} />}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Global Offices
              </h2>
              <div className="h-1 w-24 bg-accent mb-8" />

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div 
                    key={index}
                    className="border border-border p-6 hover:border-accent transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold mb-1">
                          {office.city}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          {office.country}
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-accent/10 border border-accent/30">
                        <span className="font-mono text-xs text-accent">
                          {office.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 border border-accent/30">
                <div className="flex items-start gap-3">
                  <Shield size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      Secure Communications
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For sensitive matters requiring encrypted communication channels, please contact us directly and we will provide secure communication protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Worldwide Presence
            </h2>
            <div className="h-1 w-24 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              With offices and operations across major global markets, Elears provides local expertise backed by worldwide resources.
            </p>
          </div>

          <div className="border border-border p-4 bg-background">
            <div 
              className="w-full h-[500px] bg-muted flex items-center justify-center"
              style={{
                backgroundImage: "url(/images/pattern-grid.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center">
                <MapPin size={48} className="text-accent mx-auto mb-4" />
                <div className="font-display text-2xl font-bold mb-2">Global Operations</div>
                <div className="text-muted-foreground">Offices in 50+ countries worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
