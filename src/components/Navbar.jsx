"use client";
import { useState, useEffect } from "react";
import ResBtn from "./ResBtn";

const NAV_ITEMS = ["About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 50) {
        setActive("About");
        return;
      }
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(item);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (item) => {
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 font-serif transition-all duration-500
          ${
            scrolled
              ? "bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#c9a86c]/15"
              : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-300 mx-auto px-6 md:px-12 flex items-center justify-between h-18">
          {/* Logo */}
          <div className="relative">
            <span className="text-[22px] font-bold tracking-[0.12em] text-[#f0ece4] uppercase">
              A<span className="text-[#c9a86c]">S</span>C
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-[#c9a86c] to-transparent" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-4 py-2 text-[10px] tracking-[0.25em] uppercase transition-colors duration-300
                  ${active === item ? "text-[#c9a86c]" : "text-[#f0ece4]/45 hover:text-[#f0ece4]/80"}`}
              >
                {item}
                {active === item && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[#c9a86c] animate-[slideIn_0.3s_ease_forwards]" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <ResBtn />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.25 p-2 text-[#f0ece4]/60 hover:text-[#c9a86c] transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a86c]/10
          ${menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-left px-3 py-3 text-[10px] tracking-[0.25em] uppercase transition-colors border-b border-[#f0ece4]/05 last:border-0
                  ${active === item ? "text-[#c9a86c]" : "text-[#f0ece4]/45"}`}
              >
                {item}
              </button>
            ))}
            <div className="mt-3">
              <ResBtn />
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}
