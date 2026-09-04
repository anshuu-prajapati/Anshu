import React from 'react';
import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';

const SERVICES = [
    'AI MVP Development',
    'Generative AI Applications',
    'RAG Systems',
    'Document Intelligence',
    'OCR Solutions',
    'Computer Vision',
    'AI Automation',
    'AI API Integration',
    'Cloud Deployment',
    'AI Proof of Concepts',
];

const Freelance = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };

    return (
        <section className="section freelance-section" id="freelance">
            <div className="container">
                <div className="freelance-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="freelance-title">Have an AI idea? Let's build it.</h2>
                        <p className="freelance-subtitle">
                            From AI prototypes to production-ready applications, I can help turn an idea into a working product.
                        </p>
                    </motion.div>
                </div>

                <div className="freelance-content">
                    <motion.div
                        className="services-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {SERVICES.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="service-item"
                                variants={itemVariants}
                            >
                                <MdCheckCircle size={20} className="service-check" />
                                <span className="service-name">{service}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="freelance-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            <span>Let's Discuss Your Project</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Freelance;
