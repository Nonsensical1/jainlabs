"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pi", label: "PI" },
  { href: "/members", label: "Team" },
  {
    label: "Research",
    href: "/research",
    dropdown: [
      { href: "/publications", label: "Publications" },
      { href: "/grants", label: "Grants" },
      { href: "/patents", label: "Patents / Licenses" },
    ],
  },
  { href: "/outreach", label: "Outreach" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Check if any dropdown child is active
  const isResearchActive = (item: typeof navItems[number]) => {
    if ("dropdown" in item && item.dropdown) {
      return item.dropdown.some((child) => pathname === child.href)
    }
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-foreground">
            Jain Lab
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 md:mr-4 lg:mr-10">
            {navItems.slice(1).map((item) => {
              // Dropdown item
              if ("dropdown" in item && item.dropdown) {
                return (
                  <li
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
                      setDropdownOpen(true)
                    }}
                    onMouseLeave={() => {
                      closeTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 300)
                    }}
                  >
                    <Link
                      href={item.href || "/research"}
                      className={cn(
                        "text-sm transition-colors flex items-center gap-1",
                        isResearchActive(item) || pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <svg
                        className={cn("w-3.5 h-3.5 transition-transform", dropdownOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {dropdownOpen && (
                      <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                        {item.dropdown.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setDropdownOpen(false)}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                pathname === child.href
                                  ? "text-foreground bg-muted/50"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }

              // Regular item
              return (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    className={cn(
                      "text-sm transition-colors",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => {
              // Dropdown items rendered as flat list on mobile
              if ("dropdown" in item && item.dropdown) {
                return (
                  <li key={item.label}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    <ul className="pl-3 space-y-2">
                      {item.dropdown.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "block text-sm transition-colors",
                              pathname === child.href
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block text-sm transition-colors",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </nav>
    </header>
  )
}
