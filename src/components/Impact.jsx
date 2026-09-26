import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
    const stats = [
        {
            number: "7+",
            label: "AI Projects Built",
            description: "Production-ready systems deployed",
            icon: "🚀",
            color: "#a855f7"
        },
        {
            number: "3",
            label: "Companies",
            description: "Full-time & internship roles",
            icon: "💼",
            color: "#818cf8"
        },
        {
            number: "6",
            label: "Certifications",
            description: "AWS, Google Cloud, Microsoft, IBM",
            icon: "🏆",
            color: "#34d399"
        },
        {
            number: "4",
            label: "Education",
            description: "Degrees & certificates earned",
            icon: "📚",
            color: "#f59e0b"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const Counter = ({ target }) => {
        const numMatch = target.match(/\d+/);
        const num = numMatch ? parseInt(numMatch[0]) : 0;
        const suffix = target.replace(/\d+/, '');

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {target}
                </motion.span>
            </motion.div>
        );
    };

    return (
        <section className="section impact-section" id="impact">
            <div className="container">
                <motion.div
                    className="impact-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="impact-title">By The Numbers</h2>
                    <p className="impact-subtitle">A snapshot of my journey in AI & full-stack development</p>
                </motion.div>

                <motion.div
                    className="impact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="impact-card"
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.05 }}
                        >
                            <div className="impact-icon" style={{ color: stat.color }}>
                                {stat.icon}
                            </div>

                            <div className="impact-number" style={{ color: stat.color }}>
                                <Counter target={stat.number} />
                            </div>

                            <h3 className="impact-label">{stat.label}</h3>
                            <p className="impact-desc">{stat.description}</p>

                            <motion.div
                                className="impact-accent"
                                style={{ backgroundColor: stat.color }}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
