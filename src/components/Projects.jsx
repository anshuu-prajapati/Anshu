import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
    {
        id: 'whatsapp-support',
        name: 'Enterprise WhatsApp AI Support Assistant',
        tag: 'RAG',
        points: [
            'Built an intelligent WhatsApp support system leveraging LLMs and a RAG architecture.',
            'Integrated the Meta WhatsApp Cloud API for production-grade messaging at scale.',
        ],
        stack: ['LLMs', 'RAG', 'Meta WhatsApp Cloud API'],
    },
    {
        id: 'person-reid',
        name: 'Person Re-Identification System',
        tag: 'Computer Vision',
        points: [
            'Built a deep-learning person tracking system using YOLOv8 and PyTorch for cross-camera identity matching.',
            'Implemented optimized feature extraction and re-identification pipelines to power real-time passenger analytics.',
        ],
        stack: ['YOLOv8', 'PyTorch', 'Computer Vision'],
    },
    {
        id: 'virtual-tryon',
        name: 'AI Virtual Try-On Platform',
        tag: 'Computer Vision',
        points: [
            'Built an AI-powered virtual try-on solution using computer vision models for precise garment overlay.',
            'Implemented automated image processing pipelines for personalized visualization that improves customer engagement.',
        ],
        stack: ['Computer Vision', 'Image Processing'],
    },
    {
        id: 'lead-intel',
        name: 'Lead Intelligence & Business Discovery Platform',
        tag: 'Data Platform',
        points: [
            'Developed an AI-driven lead generation platform leveraging Google Places APIs for automated business data collection.',
            'Automated data enrichment pipelines and built exportable intelligence dashboards for business analytics.',
        ],
        stack: ['Google Places API', 'Data Enrichment', 'Dashboards'],
    },
    {
        id: 'vehicle-analytics',
        name: 'Vehicle Analytics Chatbot',
        tag: 'Conversational AI',
        points: [
            'Built a conversational AI assistant with NLP pipelines for natural-language querying of GPS and telematics data.',
            'Enabled real-time vehicle tracking, idle detection, route analysis, and driving-behavior insights in a chat interface.',
        ],
        stack: ['NLP', 'GPS / Telematics', 'Conversational AI'],
    },
    {
        id: 'gov-data',
        name: 'Government Data Intelligence Platform',
        tag: 'Cloud Infra',
        points: [
            'Designed a resilient public-data platform utilizing government APIs backed by robust caching and backup mechanisms.',
            'Deployed highly available, scalable data infrastructure on AWS for uninterrupted public service delivery.',
        ],
        stack: ['Government APIs', 'AWS', 'Caching'],
    },
];

const LOG_STEPS = [
    'resolving dependencies\u2026',
    'pulling context window\u2026',
    'connecting to vector store\u2026',
    'warming up agent\u2026',
    'agent live',
];

const Projects = () => {
    const [activeId, setActiveId] = useState(PROJECTS[0].id);
    const [deploying, setDeploying] = useState(false);
    const [visibleLogs, setVisibleLogs] = useState(LOG_STEPS.length);
    const timeouts = useRef([]);

    const active = PROJECTS.find(p => p.id === activeId);

    const handleSelect = (id) => {
        if (id === activeId || deploying) return;
        timeouts.current.forEach(clearTimeout);
        timeouts.current = [];

        setDeploying(true);
        setVisibleLogs(0);
        setActiveId(id);

        LOG_STEPS.forEach((_, i) => {
            const t = setTimeout(() => setVisibleLogs(i + 1), 220 * (i + 1));
            timeouts.current.push(t);
        });

        const done = setTimeout(() => setDeploying(false), 220 * LOG_STEPS.length + 250);
        timeouts.current.push(done);
    };

    useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">04</span>
                    <h2 className="section-title">Deployments</h2>
                </div>

                <div className="deploy-layout">
                    <div className="deploy-list">
                        {PROJECTS.map(project => (
                            <button
                                key={project.id}
                                className={`deploy-item ${activeId === project.id ? 'is-active' : ''}`}
                                onClick={() => handleSelect(project.id)}
                            >
                                <span className={`deploy-item-dot ${activeId === project.id ? 'is-active' : ''}`} />
                                <span className="deploy-item-text">
                                    <span className="deploy-item-name">{project.name}</span>
                                    <span className="deploy-item-tag">{project.tag}</span>
                                </span>
                            </button>
                        ))}
                        <a
                            href="https://github.com/anshuu-prajapati"
                            target="_blank"
                            rel="noreferrer"
                            className="deploy-more-link"
                        >
                            Explore more on GitHub &rarr;
                        </a>
                    </div>

                    <div className="deploy-console">
                        <div className="console-bar">
                            <span className="console-bar-dots"><span /><span /><span /></span>
                            <span className="console-bar-title">deploy &mdash; {active.id}</span>
                        </div>

                        <div className="console-body">
                            {deploying ? (
                                <div className="console-log">
                                    {LOG_STEPS.slice(0, visibleLogs).map((line, i) => (
                                        <p key={i} className={i === LOG_STEPS.length - 1 ? 'log-success' : ''}>
                                            <span className="log-arrow">&gt;</span> {line}
                                        </p>
                                    ))}
                                    <p className="log-cursor-line"><span className="log-cursor">_</span></p>
                                </div>
                            ) : (
                                <motion.div
                                    className="console-detail"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <h3 className="console-detail-title">{active.name}</h3>
                                    <ul className="console-detail-points">
                                        {active.points.map((pt, i) => (
                                            <li key={i}>{pt}</li>
                                        ))}
                                    </ul>
                                    <div className="console-detail-stack">
                                        {active.stack.map(tech => (
                                            <span className="stack-chip" key={tech}>{tech}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
