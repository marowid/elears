/**
 * Tactical Brutalism Design: Functional footer with geometric precision
 * - Clean separation of information blocks
 * - Military-grade organization
 * - Minimal decoration, maximum clarity
 */

import { Link } from "wouter";
import { Shield, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Elears Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern intelligence, OSINT, and red teaming experts providing services and training to Fortune 500 companies globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-accent">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>contact@elears.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Elears (Lisowczycy). All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield size={16} />
              <span className="font-mono">Tactical Intelligence Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
