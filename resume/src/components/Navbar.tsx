"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Create Resume", href: "/create-resume" },
    { name: "Analyze Resume", href: "/analyze-resume" },
    {name:"Resources", href:"/resources"},
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
              AI
            </div>

            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
              Resume Analyzer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 font-medium hover:text-sky-600 transition duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-xl border border-sky-500 text-sky-600 font-medium hover:bg-sky-50 transition">
              Login
            </button>

            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 py-5">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-sky-600"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-3 rounded-xl border border-sky-500 text-sky-600 font-medium">
                Login
              </button>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;