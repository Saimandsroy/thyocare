'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-lg py-2'
                : 'bg-white/95 backdrop-blur-sm py-3'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo with Powered by */}
                    <div className="flex items-center space-x-2">
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] text-gray-500 leading-none">Powered by Thyrocare</span>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/rhm-logo.png"
                                    alt="RHM India Logo"
                                    width={140}
                                    height={40}
                                    className="h-8 sm:h-10 w-auto"
                                    priority
                                />
                                <span className="font-bold text-gray-800 text-sm sm:text-xl">
                                    RHM India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            Home
                        </a>
                        <a href="#packages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            Packages
                        </a>
                    </nav>

                    {/* Contact Info */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:9323400152"
                            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            <Phone size={18} />
                            <span className="font-medium">9323400152</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <a
                            href="tel:9323400152"
                            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full"
                        >
                            <Phone size={18} />
                        </a>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
                        <nav className="flex flex-col space-y-3 pt-4">
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="#packages"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Packages
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
