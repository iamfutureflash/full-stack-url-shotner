import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link2, Menu, Settings, User, LogOut } from "lucide-react"
import Link from "next/link"

export function Header() {
    return (
        <header className="border-b bg-white">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500">
                            <Link2 className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Bitly</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Links
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            QR Codes
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Analytics
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Campaigns
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden md:flex">
                        Create
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
