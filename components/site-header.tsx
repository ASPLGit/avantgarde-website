"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#comparison", label: "Our Edge" },
  { href: "#team", label: "Our Leadership" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Detect active hash on scroll
  useEffect(() => {
    const sections = navLinks
      .map(link => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);



  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`
    fixed left-1/2 -translate-x-1/2 z-50 w-full
    transition-all duration-500 ease-in-out
    ${isScrolled
          ? "2xl:top-4 lg:top-3 top-1"
          : "2xl:top-10 lg:top-6 top-2"}
  `}
    >
      <div className="container-custom w-[95%]!">
        <div
          className={`
    mx-auto sm:rounded-2xl rounded-lg px-6 lg:px-8
    transition-all duration-500 ease-in-out
    ${isScrolled
              ? "bg-white shadow-lg"
              : "lg:bg-transparent bg-white sm:shadow-none shadow-lg"
            }
  `}
        >
          <div className="flex items-center justify-between sm:h-16 h-14 2xl:h-24">

            {/* Logo */}
            {isScrolled ? (
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo-text.svg"
                  alt="logo with text"
                  width={234}
                  height={50}
                  className="2xl:h-12 h-9 w-auto"
                />
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-3">
                <div className="lg:block hidden">
                  <Image
                    src="/logo-text-white.svg"
                    alt="logo with text"
                    width={234}
                    height={50}
                    className="2xl:h-12 h-9 w-auto"
                  />
                </div>
                <div className="lg:hidden block">
                  <Image
                    src="/logo-text.svg"
                    alt="logo with text"
                    width={234}
                    height={50}
                    className="2xl:h-12 h-9 w-auto"
                  />
                </div>
              </Link>
            )}

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(link.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`
        relative text-sm 2xl:text-base font-medium transition-colors duration-300
        ${isScrolled
                      ? "text-black hover:text-black after:bg-black"
                      : "lg:text-white text-black lg:hover:text-white lg:after:bg-white after:bg-black"}
        
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:transition-all after:duration-300
        hover:after:w-full
      `}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">

              <a
                href="#consultation"
                className="hidden sm:inline-flex px-5 py-3 2xl:py-4 rounded-full bg-black text-white text-sm 2xl:text-base font-medium hover:bg-gray-800 transition"
              >
                Free consultation
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
          >
            <nav className="flex flex-col gap-6 border-t pt-4">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                    relative text-sm font-medium transition-colors text-center mx-auto w-fit
                    ${isActive ? "text-black" : "text-gray-700 hover:text-black"}
                    
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-black
                    after:transition-all after:duration-300
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                Free Operations Health Check
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
