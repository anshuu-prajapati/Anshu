import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-main">
                        <h3 className="footer-brand">ANSHU PRAJAPATI</h3>
                        <p className="footer-tagline">AI Engineer · LLMs · Computer Vision · Full-Stack</p>
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/anshuu-prajapati" target="_blank" rel="noopener noreferrer" className="footer-link">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/anshuu-prajapati" target="_blank" rel="noopener noreferrer" className="footer-link">
                            LinkedIn
                        </a>
                        <a href="mailto:anshuuprajapati01@gmail.com" className="footer-link">
                            Email
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Anshu Prajapati. All rights reserved.
                    </p>
                    <p className="footer-credit">
                        Built with React, Vite &amp; Framer Motion
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
