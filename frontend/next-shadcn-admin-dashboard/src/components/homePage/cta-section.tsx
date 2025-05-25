import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-48 translate-y-48 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="font-medium text-white">Start your journey today</span>
          </div>

          <h2 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">Ready to amplify your reach?</h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
            Join millions of users who trust Snipr to shorten, share, and track their links. Get started in seconds, no
            credit card required.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white px-8 py-6 text-lg font-semibold text-gray-900 hover:bg-gray-100">
              Start for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white px-8 py-6 text-lg font-semibold text-gray-900 hover:bg-gray-100"
            >
              Contact sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/80">Free forever • No credit card required • Setup in 30 seconds</p>
        </div>
      </div>
    </section>
  );
}
