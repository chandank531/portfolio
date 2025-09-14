"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Linkedin, Github, Mail, Menu, X, Sun, Moon } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className={dark ? "dark" : ""}>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navbar */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-md bg-white/90 dark:bg-gray-800/90 shadow-md"
              : "backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-sm"
          }`}
        >
          <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition"
            >
              KC<span className="text-gray-600 dark:text-gray-300">.</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all ${
                    pathname === link.href
                      ? "text-blue-600 after:w-full"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Toggle Dark Mode"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Drawer */}
          {mobileOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://www.linkedin.com/in/chandank531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/chandank531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:chandank531@gmail.com"
                  className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="max-w-6xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/chandank531"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/chandank531"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:chandank531@gmail.com"
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Page Views Digital Counter Placeholder */}
            

            {/* Copyright */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Kumar Chandan · Built with Next.js & Tailwind
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
