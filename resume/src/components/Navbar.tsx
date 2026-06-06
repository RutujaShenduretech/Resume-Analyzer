"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resume Builder", href: "/builder" },
    { name: "ATS Checker", href: "/ats-checker" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className=" h-10 w-10 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            R
          </div>

          <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            ResumeAI
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-md">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-700 font-medium transition-all duration-300 hover:text-sky-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          <Show when="signed-out">

            <SignInButton mode="modal">
              <button className="px-5 py-2 rounded-full border border-sky-500 text-sky-600 font-medium hover:bg-sky-50 transition duration-300">
                Login
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                Get Started
              </button>
            </SignUpButton>

          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-5 shadow-xl">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-lg text-gray-700 hover:text-sky-600"
            >
              {item.name}
            </Link>
          ))}

          <Show when="signed-out">

            <SignInButton mode="modal">
              <button className="w-full py-3 rounded-full border border-sky-500 text-sky-600">
                Login
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg">
                Get Started
              </button>
            </SignUpButton>

          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>

        </div>
      )}
    </header>
  );
}
