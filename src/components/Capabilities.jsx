import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaEye, FaCloud, FaBolt, FaCogs } from 'react-icons/fa';

const CAPABILITIES = [
    {
        title: 'AI & Machine Learning',
        description: 'Machine learning systems for prediction, classification, anomaly detection, document intelligence, and automation.',
        icon: FaBrain,
    },
    {
        title: 'Generative AI',
        description: 'LLM-powered applications, RAG pipelines, embeddings, vector search, intelligent workflows, and AI assistants.',
        icon: FaRobot,
    },
    {
        title: 'Computer Vision',
        description: 'OCR, image processing, document analysis, object detection, and visual intelligence.',
        icon: FaEye,
    },
    {
        title: 'Cloud AI',
        description: 'Deploying AI applications using cloud infrastructure, APIs, containers, and production environments.',
        icon: FaCloud,
    },
    {
        title: 'AI Automation',
        description: 'Turning repetitive business processes into intelligent automated workflows.',
        icon: FaBolt,
    },
    {
        title: 'Full-Stack AI Applications',
        description: 'Building complete products from frontend interfaces and backend APIs to AI inference and cloud deployment.',
        icon: FaCogs,
    },
];

const Capabilities = () => {
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
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="section" id="capabilities">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">What I Build</span>
                    <h2 className="section-title">AI Engineering Capabilities</h2>
                </div>

                <motion.div
                    className="capabilities-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {CAPABILITIES.map((cap, idx) => {
                        const IconComponent = cap.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="capability-card"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                <div className="capability-icon">
                                    <IconComponent size={40} />
                                </div>
                                <h3 className="capability-title">{cap.title}</h3>
                                <p className="capability-description">{cap.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Capabilities;
