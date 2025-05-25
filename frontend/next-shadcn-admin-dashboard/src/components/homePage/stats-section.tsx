import { Card, CardContent } from "@/components/ui/card"

const stats = [
    { number: "50M+", label: "Links created monthly", description: "Trusted by millions worldwide" },
    { number: "99.9%", label: "Uptime guarantee", description: "Always available when you need it" },
    { number: "180+", label: "Countries served", description: "Global reach and reliability" },
    { number: "5B+", label: "Clicks tracked", description: "Comprehensive analytics and insights" },
]

export function StatsSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Trusted by millions
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            {" "}
                            worldwide
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join the community of creators, marketers, and businesses who trust us with their links
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
                            <CardContent className="p-8">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.description}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
