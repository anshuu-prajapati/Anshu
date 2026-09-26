import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { label: 'GitHub', href: 'https://github.com/anshuu-prajapati', icon: '🐙' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anshuu-prajapati', icon: '💼' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/anshuu-prajapati/', icon: '💻' },
        { label: 'Kaggle', href: 'https://www.kaggle.com/anshuuprajapati', icon: '📊' },
        { label: 'X (Twitter)', href: 'https://x.com/anshuuprajapati', icon: '𝕏' },
        { label: 'Hugging Face', href: 'https://huggingface.co/anshuu-prajapati', icon: '🤗' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

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
                </motion.div>

                <motion.div
                    className="footer-socials"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            variants={itemVariants}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            title={link.label}
                        >
                            <span className="social-icon">{link.icon}</span>
                            <span className="social-label">{link.label}</span>
                        </motion.a>
                    ))}
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
