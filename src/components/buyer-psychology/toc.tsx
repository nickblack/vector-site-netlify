"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    group: "Understand",
    items: [
      { id: "supply-demand", label: "Supply vs Demand" },
      { id: "jtbd", label: "Jobs to Be Done" },
      { id: "outcomes", label: "Three Outcomes" },
      { id: "buyer-vs-user", label: "Buyer vs User" },
      { id: "four-forces", label: "Four Forces" },
    ],
  },
  {
    group: "Practice",
    items: [
      { id: "discovery-interviews", label: "Discovery Interviews" },
      { id: "three-rules", label: "Three Rules" },
    ],
  },
  {
    group: "Act",
    items: [
      { id: "first-10", label: "First 10 Framework" },
      { id: "sourcing", label: "Finding People" },
      { id: "outreach-template", label: "Outreach Template" },
      { id: "resources", label: "Resources" },
    ],
  },
];

export function TOC() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = sections.flatMap((s) => s.items.map((i) => i.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tocContent = (
    <nav className="space-y-6">
      {sections.map((section) => (
        <div key={section.group}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {section.group}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block text-sm py-1 pl-3 border-l-2 transition-colors",
                    activeId === item.id
                      ? "border-turquoise text-turquoise font-medium"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block sticky top-24">
        {tocContent}
      </div>

      {/* Mobile: collapsible */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-xl text-sm font-medium"
        >
          <span>On this page</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform",
              mobileOpen && "rotate-180"
            )}
          />
        </button>
        {mobileOpen && (
          <div className="mt-2 p-4 bg-muted/50 rounded-xl">
            {tocContent}
          </div>
        )}
      </div>
    </>
  );
}
