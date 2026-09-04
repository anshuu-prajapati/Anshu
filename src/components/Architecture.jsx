import React from 'react';
import { motion } from 'framer-motion';

const LAYERS = [
    { label: 'User Interface', description: 'React Frontend' },
    { label: 'API Gateway', description: 'REST / FastAPI' },
    { label: 'Processing Layer', description: 'Core Logic' },
    { label: 'AI / ML Engine', description: 'Models & Inference' },
    { label: 'Data Layer', description: 'Storage & Retrieval' },
];

const Architecture = () => {
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
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const pulseVariants = {
        initial: { opacity: 0, scale: 1 },
        animate: {
            opacity: [0, 1, 0],
            scale: [1, 1.1, 1],
        },
    };

    return (
        <section className="section architecture-section" id="architecture">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">Architecture</span>
                    <h2 className="section-title">System Design</h2>
                </div>

                <motion.div
                    className="architecture-diagram"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {LAYERS.map((layer, idx) => (
                        <motion.div
                            key={idx}
                            className="arch-layer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 8 }}
                        >
                            <div className="arch-layer-content">
                                <div className="arch-layer-label">{layer.label}</div>
                                <div className="arch-layer-desc">{layer.description}</div>
                            </div>

                            {idx < LAYERS.length - 1 && (
                                <motion.div
                                    className="arch-connector"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="connector-pulse"
                                        variants={pulseVariants}
                                        animate="animate"
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: idx * 0.2,
                                        }}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="architecture-info"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="info-card">
                        <h3 className="info-title">Production-Ready Architecture</h3>
                        <p className="info-text">
                            Systems designed for scalability, reliability, and real-world deployment. Each layer is optimized for performance with proper error handling, monitoring, and automatic scaling capabilities.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Architecture;
