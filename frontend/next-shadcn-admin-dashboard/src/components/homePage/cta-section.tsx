import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
    return (
        <section
            id="cta"
            className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                        <Sparkles className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Start your journey today</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to amplify your reach?</h2>

                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Join millions of users who trust Snipr to shorten, share, and track their links. Get started in seconds, no
                        credit card required.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                            Start for free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6"
                        >
                            Contact sales
                        </Button>
                    </div>

                    <p className="text-white/80 text-sm mt-6">Free forever • No credit card required • Setup in 30 seconds</p>
                </div>
            </div>
        </section>
    )
}
