"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Cloud, Menu, X, Home, Users, Mail, ImageIcon, LogIn } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Ana Sayfa", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Vizyon", href: "/vizyon", icon: null },
    { name: "Misyon", href: "/misyon", icon: null },
    { name: "Takım", href: "/takim", icon: <Users className="h-4 w-4 mr-2" /> },
    { name: "İletişim", href: "/iletisim", icon: <Mail className="h-4 w-4 mr-2" /> },
    { name: "Galeri", href: "/galeri", icon: <ImageIcon className="h-4 w-4 mr-2" /> },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background/0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DertOps</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link href="/login" className="flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Log In
              </Link>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
