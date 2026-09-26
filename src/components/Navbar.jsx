import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const LINKS = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certs' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ids = ['hero', 'impact', 'about', 'education', 'experience', 'certificates', 'skills', 'projects', 'contact'];
        const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`topbar ${isScrolled ? 'is-scrolled' : ''}`} id="navbar">
            <div className="topbar-inner">
                <a href="#hero" className="topbar-mark" onClick={handleLinkClick}>
                    <span className="mark-node" />
                    <span className="mark-text">ANSHU</span>
                </a>

                <div className={`topbar-links ${isMenuOpen ? 'is-open' : ''}`}>
                    {LINKS.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`topbar-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="topbar-cta-mobile" onClick={handleLinkClick}>
                        Let's Talk
                    </a>
                </div>

                <a href="#contact" className="topbar-cta" onClick={handleLinkClick}>
                    Let's Talk
                </a>

                <button
                    className={`topbar-toggle ${isMenuOpen ? 'is-open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <HiOutlineX size={24} />
                    ) : (
                        <HiOutlineMenu size={24} />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
