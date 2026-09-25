import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [isBooting, setIsBooting] = useState(false);

    const projectsData = [
        {
            title: "Doc.anshuu.me",
            featured: true,
            link: "https://doc.anshuu.me",
            linkIcon: "web",
            points: [
                "Built AI-powered document intelligence platform for intelligent analysis, search, and Q&A",
                "Implemented advanced NLP for document understanding, extraction, and semantic search",
                "Created intuitive UI for multi-document upload, analysis, and interactive querying",
                "Integrated with state-of-the-art LLM models for accurate document comprehension"
            ],
            tools: ["Python", "LLMs", "RAG", "Document Intelligence", "FastAPI", "React"]
        },
        {
            title: "MOD Pizza Analytics",
            featured: true,
            link: "https://github.com/anshuu-prajapati/MOD_PIZZA.git",
            linkIcon: "github",
            points: [
                "Developed AI-powered customer analytics system using computer vision",
                "Analyzed real-time footfall patterns, crowd density, and seating behavior",
                "Identified peak hours, customer preferences, and occupancy insights for optimization",
                "Enabled data-driven operational decisions for customer experience improvement"
            ],
            tools: ["Python", "Computer Vision", "YOLOv8", "Data Analytics", "OpenCV", "Pandas"]
        },
        {
            title: "GPS Voice Agent",
            featured: true,
            link: "https://github.com/anshuu-prajapati/gps-voice-agent",
            linkIcon: "github",
            points: [
                "Built AI voice-calling agent for automated customer conversations and support",
                "Implemented NLU for intent recognition and multi-turn conversational interactions",
                "Created intelligent workflow automation for query handling and resolution",
                "Deployed production-ready voice agent with high accuracy and natural responses"
            ],
            tools: ["Python", "Voice AI", "LLMs", "FastAPI", "NLP", "Twilio"]
        },
        {
            title: "AI Quotation Generator",
            featured: true,
            link: "https://ai-quotations.littlejalebis.com/quotation-maker",
            linkIcon: "web",
            points: [
                "Developed AI quotation generator converting requirements into professional quotes",
                "Implemented intelligent parsing of specifications and business requirements",
                "Created structured quotation formatting with automated calculations and templates",
                "Built intuitive UI for quick quotation generation and customization"
            ],
            tools: ["Python", "LLMs", "React", "FastAPI", "Automation", "Business Logic"]
        },
        {
            title: "VyapaarNiti",
            featured: true,
            link: "https://github.com/anshuu-prajapati",
            linkIcon: "github",
            points: [
                "Developed comprehensive business consulting platform for SMBs across India",
                "Built full-stack solution from ground up with modern web technologies",
                "Created features for business strategy, analytics, and consulting workflows",
                "Deployed scalable platform supporting multiple SMB verticals and use cases"
            ],
            tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Full-Stack"]
        },
        {
            title: "AI Lead Search Platform",
            featured: true,
            link: "https://github.com/anshuu-prajapati",
            linkIcon: "github",
            points: [
                "Built AI-powered lead discovery using natural language search criteria",
                "Implemented intelligent prospect identification based on business parameters",
                "Created advanced filtering and ranking algorithms for lead quality scoring",
                "Integrated with business databases for real-time prospect matching"
            ],
            tools: ["Python", "Machine Learning", "NLP", "FastAPI", "Data Processing"]
        },
        {
            title: "GreenCart",
            featured: true,
            link: "https://github.com/anshuu-prajapati",
            linkIcon: "github",
            points: [
                "Built quick-commerce eCommerce platform inspired by Blinkit model",
                "Implemented fast and convenient grocery delivery system with real-time tracking",
                "Created logistics optimization and order management systems",
                "Developed scalable backend for high-volume transaction handling"
            ],
            tools: ["React.js", "Node.js", "Express.js", "APIs", "Payment Integration"]
        }
    ];

    const floppyColors = [
        '#1f2937', '#1e3a8a', '#4c1d95', '#831843',
        '#14532d', '#7c2d12', '#0f4c5c', '#2d1b4e'
    ];

    const handleDiskClick = (index) => {
        if (activeProject === index || isBooting) return;
        setIsBooting(true);
        setActiveProject(index);
        setTimeout(() => setIsBooting(false), 1500);
    };

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <motion.div
                    className="section-header reveal"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="projects-desktop">
                    {/* LEFT: Floppy Disks Grid */}
                    <div className="floppy-desk-grid">
                        {projectsData.map((project, index) => {
                            const isInserted = activeProject === index;
                            return (
                                <motion.div
                                    key={index}
                                    className={`floppy-disk ${isInserted ? 'inserted' : ''}`}
                                    onClick={() => handleDiskClick(index)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    animate={isInserted ? {
                                        scale: 0.95,
                                        y: -5,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.8)"
                                    } : {
                                        scale: 1,
                                        y: 0,
                                        boxShadow: "0 10px 15px rgba(0,0,0,0.5)"
                                    }}
                                    whileHover={!isInserted ? {
                                        scale: 1.05, y: -10,
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.6)"
                                    } : {}}
                                    transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                                >
                                    <div className="floppy-plastic" style={{
                                        backgroundColor: floppyColors[index % floppyColors.length]
                                    }}>
                                        <div className="floppy-shutter">
                                            <div className="shutter-door"></div>
                                        </div>
                                        <div className="floppy-arrow"></div>
                                        <div className="floppy-label-area">
                                            <div className="floppy-label-paper">
                                                <div className="label-stripe" style={{
                                                    backgroundColor: floppyColors[(index + 1) % floppyColors.length]
                                                }}></div>
                                                <span className="label-text">
                                                    {project.title.split(' ').slice(0, 3).join(' ')}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="floppy-notch"></div>
                                        {isInserted && (
                                            <div className="active-disk-indicator">
                                                <div className="indicator-light"></div>
                                                <span>IN DRIVE</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT: CRT Terminal & Drive */}
                    <div className="crt-terminal-wrapper">
                        <div className="floppy-drive">
                            <div className="drive-slot"></div>
                            <div className={`drive-light ${isBooting ? 'reading' : 'idle'}`}></div>
                        </div>

                        <div className="crt-monitor">
                            <div className="crt-glass">
                                <div className="scanlines"></div>
                                <div className="crt-content">
                                    {isBooting ? (
                                        <div className="boot-sequence">
                                            <p className="boot-1">{`> MOUNTING DISK...`}</p>
                                            <p className="boot-2">{`> READING SECTORS... [OK]`}</p>
                                            <p className="boot-3">{`> DECRYPTING PROJECT DATA...`}</p>
                                            <p className="boot-4 blink">_</p>
                                        </div>
                                    ) : (
                                        <motion.div
                                            className="project-data"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <div className="terminal-header">
                                                <span>A:\&gt; RUN {projectsData[activeProject].title.toUpperCase().replace(/\s+/g, '_').substring(0, 10)}.EXE</span>
                                            </div>

                                            <h3 className="term-title">
                                                {projectsData[activeProject].title}
                                            </h3>

                                            <div className="term-points">
                                                {projectsData[activeProject].points.map((pt, i) => (
                                                    <p key={i}>{`* ${pt}`}</p>
                                                ))}
                                            </div>

                                            <div className="term-tools">
                                                <p>{`> SYSTEM DEPENDENCIES:`}</p>
                                                <ul>
                                                    {projectsData[activeProject].tools.map((t, i) => (
                                                        <li key={i}>{`- ${t}`}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="term-actions">
                                                <a href={projectsData[activeProject].link} target="_blank" rel="noreferrer" className="term-link">
                                                    {`> EXECUTE SOURCE_CODE (${projectsData[activeProject].linkIcon.toUpperCase()})`}
                                                </a>
                                            </div>
                                            <div className="term-cursor"><span className="blink">_</span></div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            <div className="monitor-base"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
