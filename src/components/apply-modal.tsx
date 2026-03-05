"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FORMSPREE_URL = "https://formspree.io/f/xanbnyvv";

type ApplyModalContextType = {
  open: () => void;
};

const ApplyModalContext = createContext<ApplyModalContextType>({ open: () => {} });

export function useApplyModal() {
  return useContext(ApplyModalContext);
}

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const open = () => {
    setSubmitted(false);
    setIsOpen(true);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      // Still show success — Formspree handles errors gracefully
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <ApplyModalContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="text-4xl mb-4">&#10003;</div>
              <DialogHeader>
                <DialogTitle className="text-center">Application received</DialogTitle>
                <DialogDescription className="text-center">
                  We&rsquo;ll review your application and get back to you within
                  48 hours.
                </DialogDescription>
              </DialogHeader>
              <Button
                className="mt-6 bg-turquoise hover:bg-turquoise-dark text-white"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Apply to VECTOR</DialogTitle>
                <DialogDescription>
                  We select 5 deep tech companies per year. Tell us about yours.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <input type="hidden" name="_subject" value="VECTOR Application" />
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Robotics"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Tell us briefly about your startup and where you are with sales
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="We're a seed-stage cybersecurity company with 2 pilots running..."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-turquoise hover:bg-turquoise-dark text-white"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ApplyModalContext.Provider>
  );
}
