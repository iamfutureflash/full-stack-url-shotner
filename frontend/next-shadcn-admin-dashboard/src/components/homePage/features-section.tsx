import { BarChart3, Globe, Link2, QrCode, Shield, Smartphone, Target, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-4 border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white">Features</Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything you need to<span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> succeed</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Powerful tools and insights to help you build stronger connections with your audience using Snipr
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-8">
                <div
                  className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.color} mb-6 flex items-center justify-center`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
