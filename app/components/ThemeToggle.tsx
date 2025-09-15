"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Github, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { getPageViews } from "../lib/api";

export default function RootClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [views, setViews] = useState<number | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newDark = !prev;
      if (newDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", newDark ? "dark" : "light");
      return newDark;
    });
  };

  useEffect(() => {
    async function fetchViews() {
      try {
        const pageName = pathname === "/" ? "home" : pathname.replace("/", "");
        const data = await getPageViews(pageName);
        setViews(data.views);
      } catch (err) {
        console.error("Failed to fetch views", err);
      }
    }
    fetchViews();
  }, [pathname]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/90 dark:bg-gray-800/90 shadow-md" : "backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-sm"}`}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition">KC<span className="text-gray-600 dark:text-gray-300">.</span></Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`relative text-sm font-medium transition ${pathname === link.href ? "text-blue-600 after:w-full" : "text-gray-700 dark:text-gray-200 hover:text-blue-600"}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>

      <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/chandank531" target="_blank" className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"><Linkedin size={20} /></a>
            <a href="https://github.com/chandank531" target="_blank" className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition"><Github size={20} /></a>
            <a href="mailto:chandank531@gmail.com" className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"><Mail size={20} /></a>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl font-mono text-blue-600 dark:text-blue-400">
            Page Views: {views !== null ? <span>{views}</span> : <span>Loading...</span>}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Kumar Chandan · Built with Next.js & Tailwind</p>
        </div>
      </footer>
    </>
  );
}
