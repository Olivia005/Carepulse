"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Activity, WaypointsIcon, ActivityIcon, ArrowBigRight } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white">
              CarePulse Medical Center
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden md:flex items-center space-x-8"
          >
            <Link href="#services" passHref>
              <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer">
                Services
              </span>
            </Link>
            <Link href="#features" passHref>
              <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer">
                Features
              </span>
            </Link>
            <Link href="/doctors" passHref>
              <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer">
                Doctors
              </span>
            </Link>
            <Link href="#contact" passHref>
              <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer">
                Contact
              </span>
            </Link>
            <Link href="/laboratorytest" passHref>
              <span className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer">
                Lab Test Suggestions
              </span>
            </Link>
          
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/wayout" className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium border-1 rounded-lg border-emerald-400">
              Directions
            </Link>
            <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-200 font-medium">
              Emergency
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-500/20 py-4 animate-in slide-in-from-top duration-200">
            <nav
              className="flex flex-col space-y-4"
              aria-label="Mobile navigation"
            >
              <Link href="#services" passHref>
                <span
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Services
                </span>
              </Link>
              <Link href="#departments" passHref>
                <span
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Departments
                </span>
              </Link>
              <Link href="#doctors" passHref>
                <span
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Doctors
                </span>
              </Link>
              <Link href="#contact" passHref>
                <span
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Contact
                </span>
              </Link>
            </nav>
            <div className="mt-4 space-y-4">
              <button className="w-full text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium">
                Patient Portal
              </button>
              <button className="w-full bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-200 font-medium">
                Emergency
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
