import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, MoreHorizontal, BarChart3 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const recentLinks = [
    {
        id: 1,
        originalUrl: "https://www.example.com/very-long-url-that-needs-shortening",
        shortUrl: "bit.ly/3xY9Kp2",
        title: "Example Landing Page",
        clicks: 1247,
        created: "2 days ago",
        status: "active",
    },
    {
        id: 2,
        originalUrl: "https://docs.google.com/presentation/d/1234567890",
        shortUrl: "bit.ly/2mN8Qr1",
        title: "Q4 Presentation",
        clicks: 892,
        created: "1 week ago",
        status: "active",
    },
    {
        id: 3,
        originalUrl: "https://github.com/user/repository-name",
        shortUrl: "bit.ly/4aB7Cd9",
        title: "GitHub Repository",
        clicks: 456,
        created: "2 weeks ago",
        status: "active",
    },
]

export function RecentLinks() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Recent Links</span>
                        <Button variant="outline" size="sm">
                            View All
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentLinks.map((link) => (
                            <div key={link.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-medium text-gray-900 truncate">{link.title}</h3>
                                        <Badge variant="secondary" className="text-xs">
                                            {link.status}
                                        </Badge>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-blue-600">{link.shortUrl}</span>
                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                <Copy className="h-3 w-3" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                <ExternalLink className="h-3 w-3" />
                                            </Button>
                                        </div>
                                        <p className="text-sm text-gray-500 truncate">{link.originalUrl}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 ml-4">
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                                            <BarChart3 className="h-4 w-4" />
                                            {link.clicks.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-gray-500">{link.created}</div>
                                    </div>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Analytics</DropdownMenuItem>
                                            <DropdownMenuItem>QR Code</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
