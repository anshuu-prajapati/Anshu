import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMagic, FaEye, FaBrain, FaCloud, FaCogs } from 'react-icons/fa';

const CAPABILITIES = [
    {
        title: 'AI PRODUCTS',
        description: 'Production-oriented AI applications',
        icon: FaRobot,
    },
    {
        title: 'GENERATIVE AI',
        description: 'LLMs, RAG, embeddings, and AI agents',
        icon: FaMagic,
    },
    {
        title: 'COMPUTER VISION',
        description: 'OCR, image processing, visual intelligence',
        icon: FaEye,
    },
    {
        title: 'MACHINE LEARNING',
        description: 'Classification, detection, prediction',
        icon: FaBrain,
    },
    {
        title: 'CLOUD',
        description: 'Azure, AWS, Docker, deployment',
        icon: FaCloud,
    },
    {
        title: 'ENGINEERING',
        description: 'Python, FastAPI, React, APIs',
        icon: FaCogs,
    },
];

const Impact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="impact-section" id="capabilities">
            <div className="container">
                <motion.div
                    className="impact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {CAPABILITIES.map((cap, idx) => {
                        const IconComponent = cap.icon;
                        return (
                            <motion.div key={idx} className="impact-card" variants={itemVariants}>
                                <div className="impact-icon">
                                    <IconComponent size={32} />
                                </div>
                                <h3 className="impact-title">{cap.title}</h3>
                                <p className="impact-description">{cap.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
