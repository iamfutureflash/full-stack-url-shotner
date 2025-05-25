import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Link2, Sparkles } from "lucide-react"

export function UrlShortener() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shorten your loooong links :)</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Bitly is a comprehensive platform for every part of your marketing funnel
                </p>
            </div>

            <Card className="mb-8">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <Input placeholder="Enter your long URL here" className="h-12 text-lg" defaultValue="" />
                        </div>
                        <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">Shorten Now!</Button>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                        By clicking "Shorten Now!" you agree to Bitly's Terms of Service and Privacy Policy
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Link2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shorten</h3>
                    <p className="text-gray-600 text-sm">Create short links that are easy to share</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Optimize</h3>
                    <p className="text-gray-600 text-sm">Track and optimize your marketing campaigns</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Connect</h3>
                    <p className="text-gray-600 text-sm">Connect your audience to the right information</p>
                </div>
            </div>
        </div>
    )
}
