"use client"

import { Button } from "@/components/ui/button"
import { Link2, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function LandingHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    const navItems = [
        { href: "#features", label: "Features" },
        { href: "#stats", label: "Stats" },
        { href: "#pricing", label: "Pricing" },
        { href: "#contact", label: "Contact" },
    ]

    const smoothScrollTo = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (element) {
            const headerOffset = 80 // Account for sticky header
            const elementPosition = element.offsetTop - headerOffset

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            })
        }
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "features", "stats", "cta"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Set initial active section

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <button
                    onClick={() => smoothScrollTo("hero")}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-r from-orange-500 to-red-500">
                        <Link2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">Snipr</span>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => smoothScrollTo(item.href.slice(1))}
                            className={`text-sm font-medium transition-colors relative ${activeSection === item.href.slice(1) ? "text-orange-600" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {item.label}
                            {activeSection === item.href.slice(1) && (
                                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hidden sm:flex">
                        Log in
                    </Button>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hidden sm:flex">
                        Sign up free
                    </Button>

                    {/* Mobile menu button */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
                    <nav className="container mx-auto px-4 py-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => smoothScrollTo(item.href.slice(1))}
                                className={`block w-full text-left text-sm font-medium transition-colors ${activeSection === item.href.slice(1) ? "text-orange-600" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="pt-4 border-t space-y-2">
                            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                                Log in
                            </Button>
                            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                                Sign up free
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
