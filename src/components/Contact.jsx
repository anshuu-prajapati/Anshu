import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const LINKS = {
    email: 'anshuuprajapati01@gmail.com',
    github: 'https://github.com/anshuu-prajapati',
    linkedin: 'https://linkedin.com/in/anshuu-prajapati',
};

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard?.writeText(LINKS.email).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">Get in Touch</span>
                    <div>
                        <h2 className="section-title">Let's build something intelligent.</h2>
                        <p className="section-subtitle">
                            Whether you're hiring an AI engineer, exploring an AI product, or looking to automate a business workflow, I'd be happy to discuss the problem and explore a solution.
                        </p>
                    </div>
                </div>

                <motion.div
                    className="contact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.a
                        href={`mailto:${LINKS.email}`}
                        className="contact-card contact-link"
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                    >
                        <div className="contact-card-icon">
                            <HiOutlineMail size={32} />
                        </div>
                        <h3 className="contact-card-title">Email Me</h3>
                        <p className="contact-card-value">{LINKS.email}</p>
                    </motion.a>

                    <motion.a
                        href={LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card contact-link"
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                    >
                        <div className="contact-card-icon">
                            <FiGithub size={32} />
                        </div>
                        <h3 className="contact-card-title">GitHub</h3>
                        <p className="contact-card-value">View my projects</p>
                    </motion.a>

                    <motion.a
                        href={LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card contact-link"
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                    >
                        <div className="contact-card-icon">
                            <FiLinkedin size={32} />
                        </div>
                        <h3 className="contact-card-title">LinkedIn</h3>
                        <p className="contact-card-value">Connect on LinkedIn</p>
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="contact-card contact-link"
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                    >
                        <div className="contact-card-icon">
                            <HiOutlineGlobeAlt size={32} />
                        </div>
                        <h3 className="contact-card-title">Website</h3>
                        <p className="contact-card-value">Portfolio</p>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
