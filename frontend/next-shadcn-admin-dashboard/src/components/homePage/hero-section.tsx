import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star } from "lucide-react"

export function HeroSection() {
    return (
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 translate-y-48 -translate-x-48"></div>

            <div className="container mx-auto px-4 py-20 md:py-32 relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Trusted by 50M+ users worldwide
                    </Badge>

                    {/* Main headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Shorten links,
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> amplify </span>
                        results
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Build stronger connections between your content and your audience with branded links, QR codes, and a
                        comprehensive link-in-bio solution.
                    </p>

                    {/* URL shortener form */}
                    <Card className="max-w-2xl mx-auto mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <Input
                                    placeholder="Paste your long URL here"
                                    className="h-14 text-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                />
                                <Button className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg font-semibold">
                                    Shorten for free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                By clicking "Shorten for free" you agree to Snipr's Terms of Service and Privacy Policy
                            </p>
                        </CardContent>
                    </Card>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6"
                        >
                            Get started free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300 hover:border-gray-400">
                            <Play className="mr-2 h-5 w-5" />
                            Watch demo
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 text-center">
                        <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                            <div className="text-2xl font-bold text-gray-400">Spotify</div>
                            <div className="text-2xl font-bold text-gray-400">Adobe</div>
                            <div className="text-2xl font-bold text-gray-400">Nike</div>
                            <div className="text-2xl font-bold text-gray-400">Shopify</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
