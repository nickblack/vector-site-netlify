"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ApplyButton } from "@/components/apply-button";
import { Menu, X, ChevronDown } from "lucide-react";

const resources = [
  { label: "Buyer Psychology", href: "/buyer-psychology" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
          {/* Resources dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors"
            >
              Resources
              <ChevronDown className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-dark border border-white/10 rounded-lg shadow-xl py-1">
                {resources.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href={`${prefix}#how-it-works`} className="text-white/70 hover:text-white text-sm transition-colors">
            How It Works
          </a>
          <a href={`${prefix}#results`} className="text-white/70 hover:text-white text-sm transition-colors">
            Results
          </a>
          <a href={`${prefix}#faq`} className="text-white/70 hover:text-white text-sm transition-colors">
            FAQ
          </a>
          <a href={`${prefix}#pricing`} className="text-white/70 hover:text-white text-sm transition-colors">
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
          {/* Resources group */}
          <div>
            <span className="text-white/40 text-xs uppercase tracking-wider">Resources</span>
            <div className="mt-2 flex flex-col gap-2 pl-3 border-l border-white/10">
              {resources.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/70 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <a href={`${prefix}#how-it-works`} className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>
          <a href={`${prefix}#results`} className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            Results
          </a>
          <a href={`${prefix}#faq`} className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            FAQ
          </a>
          <a href={`${prefix}#pricing`} className="text-white/70 text-sm" onClick={() => setMobileOpen(false)}>
            Pricing
          </a>
          <ApplyButton size="sm" className="w-fit">Apply</ApplyButton>
        </nav>
      )}
    </header>
  );
}
