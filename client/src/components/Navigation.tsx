/**
 * Tactical Brutalism Design: Functional navigation with geometric precision
 * - Sharp angles and clean lines
 * - Military-grade organization with clear hierarchy
 * - Minimal but purposeful interactions
 */

import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.png" 
                alt="Elears Logo" 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`font-display text-sm uppercase tracking-wider transition-colors relative
                    ${location === item.path 
                      ? "text-accent" 
                      : "text-foreground hover:text-accent"
                    }
                  `}
                >
                  {item.label}
                  {location === item.path && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`font-display text-sm uppercase tracking-wider block py-2 transition-colors
                      ${location === item.path 
                        ? "text-accent border-l-2 border-accent pl-4" 
                        : "text-foreground hover:text-accent pl-4"
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
