import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ABOUT_SECTIONS = [
    {
        title: 'Who I Am',
        content: "I'm an AI Engineer focused on building practical AI systems across Generative AI, Computer Vision, Machine Learning, document intelligence, and cloud platforms.",
    },
    {
        title: 'My Approach',
        content: 'I enjoy taking ideas from experimentation to deployed products — combining machine learning with modern software engineering to build applications that are useful, scalable, and reliable.',
    },
    {
        title: 'The Process',
        content: 'My approach is simple: understand the problem, design the right architecture, build the solution, deploy it, and continuously improve it based on real-world feedback.',
    },
];

const PROFILE_INFO = [
    { key: 'base', label: 'Location', value: 'Delhi, India' },
    { key: 'role', label: 'Current Role', value: 'AI Engineer @ Maaze' },
    { key: 'focus', label: 'Focus', value: 'Agentic AI · RAG · Production Systems' },
    { key: 'edu', label: 'Education', value: 'B.Sc. Computer Science, IGNOU · 2023–2026' },
];

const About = () => {
    const [activeSection, setActiveSection] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
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
        <section className="section" id="about">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">About</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {ABOUT_SECTIONS.map((section, idx) => (
                            <motion.div
                                key={idx}
                                className="about-card"
                                variants={itemVariants}
                                whileHover={{ y: -2 }}
                            >
                                <h3 className="about-section-title">{section.title}</h3>
                                <p className="about-text">{section.content}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="about-info"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-info-card">
                            <h3 className="about-info-title">Profile Information</h3>
                            <div className="about-info-grid">
                                {PROFILE_INFO.map(info => (
                                    <div key={info.key} className="about-info-row">
                                        <span className="about-info-label">{info.label}</span>
                                        <span className="about-info-value">{info.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
