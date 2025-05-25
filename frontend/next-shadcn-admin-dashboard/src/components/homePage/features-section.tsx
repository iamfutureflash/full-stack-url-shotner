import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link2, QrCode, BarChart3, Shield, Zap, Globe, Users, Smartphone, Target } from "lucide-react"

const features = [
    {
        icon: Link2,
        title: "Smart Link Shortening",
        description: "Create short, memorable links that are perfect for sharing across all platforms and channels.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: QrCode,
        title: "Dynamic QR Codes",
        description: "Generate customizable QR codes that can be updated anytime without reprinting.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Get detailed insights on clicks, geographic data, referrers, and audience behavior.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security with SSL encryption, spam protection, and malware detection.",
        color: "from-red-500 to-orange-500",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Global CDN ensures your links redirect instantly from anywhere in the world.",
        color: "from-yellow-500 to-orange-500",
    },
    {
        icon: Globe,
        title: "Custom Domains",
        description: "Use your own branded domain to build trust and reinforce your brand identity.",
        color: "from-indigo-500 to-purple-500",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Share links across your team with role-based permissions and workspace management.",
        color: "from-teal-500 to-cyan-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Optimized",
        description: "Perfect experience across all devices with responsive design and mobile apps.",
        color: "from-pink-500 to-rose-500",
    },
    {
        icon: Target,
        title: "Smart Targeting",
        description: "Route users to different destinations based on device, location, or other criteria.",
        color: "from-violet-500 to-purple-500",
    },
]

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">Features</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everything you need to
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> succeed</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Powerful tools and insights to help you build stronger connections with your audience using Snipr
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                        >
                            <CardContent className="p-8">
                                <div
                                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                                >
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
