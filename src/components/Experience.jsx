import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JOBS = [
    {
        id: 'maaze',
        company: 'Maaze',
        role: 'AI Engineer',
        period: 'Jan 2026 \u2014 Present',
        status: 'ACTIVE',
        points: [
            'Architected multi-channel agentic AI frameworks, including an autonomous voice-calling agent via Twilio and a multi-tenant WhatsApp chatbot on AWS Bedrock.',
            'Designed a dynamic routing orchestrator and intent parser to direct requests across rule-based engines, hybrid pipelines, and LLM agents.',
            'Implemented token optimization strategies inside the routing engine, cutting inference costs during large-scale payload processing.',
            'Advanced RAG architectures by coupling Pinecone vector databases with multi-tenant knowledge graphs for entity modeling and structured reasoning.',
            'Engineered an automated AI meeting assistant that joins enterprise calls across Teams, Meet, and Zoom for real-time audio processing.',
            'Developed a computer-vision collision-prediction pipeline integrating multimodal signals like g-force anomalies and delta-velocity to flag accidents.',
            'Built real-time passenger counting with YOLOv8x and BoxMOT for cross-frame tracking, gender detection, and unique person counting.',
        ],
    },
    {
        id: 'dmac',
        company: 'D-Mac',
        role: 'Full Stack Developer',
        period: 'Jan 2025 \u2014 Jan 2026',
        status: 'COMPLETE',
        points: [
            'Developed VyapaarNiti, a comprehensive business consulting platform for SMBs across India, built from ground up using React.js, Node.js, and Express.js with MongoDB backend.',
            'Built AI-powered lead search platform enabling businesses to discover and identify relevant prospects using natural language search criteria with intelligent matching.',
            'Developed GreenCart, a quick-commerce eCommerce platform inspired by Blinkit, featuring fast delivery, real-time order tracking, and logistics optimization for grocery and essentials.',
            'Engineered scalable full-stack solutions handling complex business workflows, multi-tenant operations, and high-volume transaction processing.',
            'Implemented responsive web applications with modern UI/UX patterns, API integrations, and automated internal workflows.',
        ],
    },
];

const Stage = ({ job, index, isOpen, onToggle }) => {
    return (
        <motion.div
            className={`pipe-stage ${isOpen ? 'is-open' : ''}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="pipe-rail">
                <span className={`pipe-node ${job.status === 'ACTIVE' ? 'is-active' : ''}`} />
                {index < JOBS.length - 1 && <span className="pipe-connector" />}
            </div>

            <div className="pipe-card">
                <button className="pipe-card-head" onClick={onToggle}>
                    <div>
                        <div className="pipe-role">{job.role}</div>
                        <div className="pipe-company">{job.company} <span className="pipe-period">&middot; {job.period}</span></div>
                    </div>
                    <div className="pipe-head-right">
                        <span className={`pipe-status pipe-status-${job.status.toLowerCase()}`}>
                            {job.status === 'ACTIVE' && <span className="pipe-status-dot" />}
                            {job.status}
                        </span>
                        <span className={`pipe-chevron ${isOpen ? 'is-open' : ''}`}>&#9662;</span>
                    </div>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            className="pipe-body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                            <ul className="pipe-points">
                                {job.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const [openId, setOpenId] = useState('maaze');

    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">02</span>
                    <h2 className="section-title">Experience</h2>
                </div>

                <div className="pipe-list">
                    {JOBS.map((job, i) => (
                        <Stage
                            key={job.id}
                            job={job}
                            index={i}
                            isOpen={openId === job.id}
                            onToggle={() => setOpenId(openId === job.id ? null : job.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
