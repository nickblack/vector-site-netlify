"use client";

import { useState } from "react";
import { ApplyButton } from "@/components/apply-button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/Favicon_white.png"
            alt="Nick Black"
            className="h-7 w-auto"
          />
          <span className="text-white font-medium text-sm tracking-wide">
            VECTOR <span className="text-white/60 font-normal">by Nick Black</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-white/70 hover:text-white text-sm transition-colors">
            How It Works
          </a>
          <a href="#results" className="text-white/70 hover:text-white text-sm transition-colors">
            Results
          </a>
          <a href="#faq" className="text-white/70 hover:text-white text-sm transition-colors">
            FAQ
          </a>
          <a href="#pricing" className="text-white/70 hover:text-white text-sm transition-colors">
            Pricing
          </a>
          <ApplyButton size="sm">Apply</ApplyButton>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>
          <a href="#results" className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            Results
          </a>
          <a href="#faq" className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            FAQ
          </a>
          <a href="#pricing" className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            Pricing
          </a>
          <ApplyButton size="sm" className="w-fit">Apply</ApplyButton>
        </nav>
      )}
    </header>
  );
}
