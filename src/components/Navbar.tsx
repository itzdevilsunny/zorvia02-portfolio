"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const menuItems = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Founders", id: "founders" },
        { label: "Team", id: "team" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string, label: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust for navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setSelected(label);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[1298px] h-[70px] sm:h-[80px] lg:h-[86px] bg-[#171717]/90 text-white px-10 lg:px-4 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white/20 mx-auto flex items-center justify-between z-[100]">
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-1">
                {menuItems.slice(0, 3).map((item) => (
                    <button
                        key={item.label}
                        className={`px-6 h-[66px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold shadow-lg shadow-[#FD853A]/20' : 'bg-transparent hover:bg-white/5'}`}
                        onClick={() => scrollToSection(item.id, item.label)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Logo */}
            <div 
                className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection('home', 'Home')}
            >
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                    <span className="font-bold text-white text-xs">ZD</span>
                </div>
                <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wide">ZORVIA</span>
            </div>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end gap-1">
                {menuItems.slice(3).map((item) => (
                    <button
                        key={item.label}
                        className={`px-6 h-[66px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold shadow-lg shadow-[#FD853A]/20' : 'bg-transparent hover:bg-white/5'}`}
                        onClick={() => scrollToSection(item.id, item.label)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[110%] left-0 right-0 bg-[#171717]/95 rounded-[30px] border border-white/10 backdrop-blur-[20px] lg:hidden z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                className={`w-full h-[60px] flex items-center justify-center rounded-[20px] text-lg font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-white/5'}`}
                                onClick={() => scrollToSection(item.id, item.label)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
