import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <h3 className="footer-brand">Anshu Prajapati</h3>
                        <p className="footer-tagline">AI Engineer · GenAI · Computer Vision · Cloud</p>
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/anshuu-prajapati" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/anshuu-prajapati" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="mailto:anshuuprajapati01@gmail.com">
                            Email
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Anshu Prajapati. All rights reserved.
                    </p>
                    <p className="footer-credit">
                        Built with React &amp; Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
