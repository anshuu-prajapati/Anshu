import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <span>&copy; {new Date().getFullYear()} Anshu Prajapati</span>
                <span className="footer-sep">&middot;</span>
                <span>Built with React &amp; Framer Motion</span>
            </div>
        </footer>
    );
};

export default Footer;
