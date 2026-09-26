import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenResume }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`floating-nav ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-inner">
                <div className="nav-brand">ANSHU</div>
                <div className={`nav-links-wrap ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
                    <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
                    <a href="#certificates" className="nav-link" onClick={closeMenu}>Certificates</a>
                    <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
                    <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
                    <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
                    <a
                        href="#resume"
                        className="nav-link nav-resume"
                        onClick={(e) => {
                            e.preventDefault();
                            onOpenResume();
                            closeMenu();
                        }}
                    >
                        Resume
                    </a>
                </div>
                <button
                    className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
