// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-wide">
          Mayesha.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-600 hover:underline font-semibold duration-300 text-sm">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-600 hover:underline font-semibold duration-300 text-sm">
            About
          </Link>
          <Link href="/projects" className="hover:text-yellow-600 hover:underline font-semibold duration-300 text-sm">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-yellow-600 hover:underline font-semibold duration-300 text-sm">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-blue-700">
          <Link href="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
