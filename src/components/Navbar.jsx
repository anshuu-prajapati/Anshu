import React, { useState, useEffect } from 'react';

const LINKS = [
    { href: '#about', label: 'Profile' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Capabilities' },
    { href: '#projects', label: 'Deployments' },
    { href: '#contact', label: 'Connect' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ids = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
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

    return (
        <nav className={`topbar ${isScrolled ? 'is-scrolled' : ''}`} id="navbar">
            <div className="topbar-inner">
                <a href="#hero" className="topbar-mark" onClick={() => setIsMenuOpen(false)}>
                    <span className="mark-node" />
                    <span className="mark-text">Anshu Prajapati</span>
                </a>

                <div className={`topbar-links ${isMenuOpen ? 'is-open' : ''}`}>
                    {LINKS.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`topbar-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="topbar-cta" onClick={() => setIsMenuOpen(false)}>
                        Get in touch
                    </a>
                </div>

                <button
                    className={`topbar-toggle ${isMenuOpen ? 'is-open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
