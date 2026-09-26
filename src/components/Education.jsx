import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Education = () => {
    const [expandedId, setExpandedId] = useState(null);

    const education = [
        {
            id: 'bsc',
            degree: "Bachelor of Science",
            institution: "IGNOU",
            period: "2023 - 2026",
            status: "In Progress",
            icon: "🎓",
            color: "#a855f7",
            details: "Pursuing Computer Science degree through India's premier open university"
        },
        {
            id: 'dtu',
            degree: "Computer Science Certificate",
            institution: "Delhi Technological University (DTU)",
            period: "July 2022 - December 2022",
            status: "Completed",
            icon: "📜",
            color: "#818cf8",
            details: "Professional development certificate in computer science fundamentals"
        },
        {
            id: '12th',
            degree: "12th Grade (Intermediate)",
            institution: "Uttar Pradesh Board",
            period: "2022 - 2023",
            status: "Completed",
            icon: "✓",
            color: "#34d399",
            details: "Higher secondary education from UP Board of Education"
        },
        {
            id: '10th',
            degree: "10th Grade (High School)",
            institution: "Uttar Pradesh Board",
            period: "2020 - 2021",
            status: "Completed",
            icon: "✓",
            color: "#f59e0b",
            details: "Secondary education completing core academic foundation"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="section education-section" id="education">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                    <div className="section-line"></div>
                </motion.div>

                <motion.div
                    className="education-files"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {education.map((edu, idx) => (
                        <motion.div
                            key={edu.id}
                            className={`education-file ${expandedId === edu.id ? 'expanded' : ''}`}
                            variants={itemVariants}
                            onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
                        >
                            <div className="file-header" style={{ borderLeftColor: edu.color }}>
                                <div className="file-icon" style={{ color: edu.color }}>
                                    {edu.icon}
                                </div>

                                <div className="file-info">
                                    <h3 className="file-title">{edu.degree}</h3>
                                    <p className="file-meta">{edu.institution}</p>
                                </div>

                                <div className="file-status" style={{
                                    background: `${edu.color}20`,
                                    color: edu.color,
                                    borderColor: edu.color
                                }}>
                                    {edu.status === 'In Progress' ? '◉' : '✓'} {edu.status}
                                </div>

                                <motion.div
                                    className="file-toggle"
                                    animate={{ rotate: expandedId === edu.id ? 180 : 0 }}
                                >
                                    ▼
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {expandedId === edu.id && (
                                    <motion.div
                                        className="file-details"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="detail-content">
                                            <p className="detail-text">{edu.details}</p>
                                            <p className="detail-period">📅 {edu.period}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
