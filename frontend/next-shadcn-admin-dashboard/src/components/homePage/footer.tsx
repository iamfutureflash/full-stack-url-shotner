"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

import { SniprLogo } from "./snipr-logo";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-40 h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transition-all duration-300 hover:scale-110 hover:from-orange-600 hover:to-red-600"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <button
                onClick={() => smoothScrollTo("hero")}
                className="mb-6 flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-r from-orange-500 to-red-500">
                  <SniprLogo className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Snipr</span>
              </button>
              <p className="mb-6 max-w-md text-gray-400">
                The world&apos;s leading link management platform. Shorten, customize, and share your links with
                confidence using Snipr.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button
                    onClick={() => smoothScrollTo("features")}
                    className="text-left transition-colors hover:text-white"
                  >
                    URL Shortener
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => smoothScrollTo("features")}
                    className="text-left transition-colors hover:text-white"
                  >
                    QR Codes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => smoothScrollTo("features")}
                    className="text-left transition-colors hover:text-white"
                  >
                    Analytics
                  </button>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Custom Domains
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">© 2024 Snipr. All rights reserved.</p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
