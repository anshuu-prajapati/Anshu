import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    const radarSkills = [
        // Programming Languages (Top Right)
        { name: "Python", prof: 95, angle: 10, color: "#eab308" },
        { name: "TypeScript", prof: 88, angle: 25, color: "#3b82f6" },
        { name: "JavaScript", prof: 90, angle: 40, color: "#f59e0b" },
        { name: "SQL", prof: 85, angle: 55, color: "#10b981" },
        { name: "MATLAB", prof: 75, angle: 70, color: "#8b5cf6" },

        // Generative AI & LLMs (Top Left)
        { name: "OpenAI API", prof: 92, angle: 90, color: "#a855f7" },
        { name: "RAG", prof: 90, angle: 105, color: "#ec4899" },
        { name: "LangGraph", prof: 88, angle: 120, color: "#f472b6" },
        { name: "Agentic AI", prof: 90, angle: 135, color: "#a855f7" },
        { name: "Embeddings", prof: 87, angle: 150, color: "#c084fc" },
        { name: "Prompt Engineering", prof: 88, angle: 165, color: "#e879f9" },
        { name: "Computer Vision", prof: 86, angle: 180, color: "#14b8a6" },

        // Machine Learning & Data Science (Bottom Left)
        { name: "PyTorch", prof: 88, angle: 195, color: "#f97316" },
        { name: "TensorFlow", prof: 82, angle: 210, color: "#f59e0b" },
        { name: "NLP", prof: 85, angle: 225, color: "#ec4899" },
        { name: "Pandas & NumPy", prof: 92, angle: 240, color: "#3b82f6" },
        { name: "Scikit-learn", prof: 87, angle: 255, color: "#6366f1" },
        { name: "Recommender Systems", prof: 80, angle: 270, color: "#a855f7" },

        // Backend, DevOps & APIs (Bottom Right)
        { name: "FastAPI", prof: 92, angle: 285, color: "#10b981" },
        { name: "Node.js & Express", prof: 85, angle: 298, color: "#22c55e" },
        { name: "Docker & Kubernetes", prof: 82, angle: 310, color: "#2496ed" },
        { name: "REST APIs", prof: 90, angle: 322, color: "#3b82f6" },
        { name: "Microservices", prof: 82, angle: 334, color: "#06b6d4" },
        { name: "Azure & AWS", prof: 85, angle: 346, color: "#0ea5e9" },
        { name: "PostgreSQL & MySQL", prof: 88, angle: 358, color: "#f43f5e" },
    ];

    const [hoveredSkill, setHoveredSkill] = useState(null);

    const getCoordinates = (angleDegrees, proficiency) => {
        const distance = ((100 - proficiency) / 100) * 42;
        const angleRadian = (angleDegrees * Math.PI) / 180;
        const x = 50 + distance * Math.cos(angleRadian);
        const y = 50 - distance * Math.sin(angleRadian);
        return { left: `${x}%`, top: `${y}%` };
    };

    const getCategory = (angle) => {
        if (angle >= 0 && angle < 90) return "Programming Languages";
        if (angle >= 90 && angle < 180) return "Generative AI & LLMs";
        if (angle >= 180 && angle < 270) return "ML & Data Science";
        return "Backend, DevOps & Cloud";
    };

    return (
        <section className="section radar-section" id="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Skills &amp; Tech Radar</h2>
                    <div className="section-line"></div>
                </motion.div>

                <motion.div
                    className="radar-layout"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* The Sonar Screen */}
                    <div className="radar-board">
                        <div className="radar-sweep"></div>

                        {/* Concentric rings denoting expertise */}
                        <div className="radar-ring r-1"></div>
                        <div className="radar-ring r-2"></div>
                        <div className="radar-ring r-3"></div>

                        {/* Axis lines */}
                        <div className="radar-crosshair vertical"></div>
                        <div className="radar-crosshair horizontal"></div>

                        {/* Blips */}
                        {radarSkills.map((skill, idx) => {
                            const coords = getCoordinates(skill.angle, skill.prof);
                            const isHovered = hoveredSkill === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`radar-blip ${isHovered ? 'hovered' : ''}`}
                                    style={{
                                        left: coords.left,
                                        top: coords.top,
                                        '--blip-color': skill.color,
                                        '--anim-delay': `${idx * 0.1}s`
                                    }}
                                    onMouseEnter={() => setHoveredSkill(idx)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <div className="blip-core"></div>
                                    <div className="blip-ping"></div>
                                    <div className="blip-label">{skill.name}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* HUD Info Panel */}
                    <div className="radar-hud">
                        <div className="hud-header">
                            <span className="hud-title">TARGET TELEMETRY</span>
                            <span className="hud-status blink">REC</span>
                        </div>
                        <div className="hud-content">
                            <AnimatePresence mode="wait">
                                {hoveredSkill !== null ? (
                                    <motion.div
                                        key="active"
                                        className="hud-active-target"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h3 className="target-name" style={{ color: radarSkills[hoveredSkill].color }}>
                                            {radarSkills[hoveredSkill].name}
                                        </h3>
                                        <div className="target-stat">
                                            <span className="stat-label">CATEGORY</span>
                                            <span className="stat-value">{getCategory(radarSkills[hoveredSkill].angle)}</span>
                                        </div>
                                        <div className="target-stat">
                                            <span className="stat-label">PROFICIENCY</span>
                                            <div className="prof-bar-wrapper">
                                                <div
                                                    className="prof-bar-fill"
                                                    style={{
                                                        width: `${radarSkills[hoveredSkill].prof}%`,
                                                        backgroundColor: radarSkills[hoveredSkill].color
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="stat-value">{radarSkills[hoveredSkill].prof}%</span>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="idle"
                                        className="hud-idle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <ScanIcon />
                                        <p className="scan-text">AWAITING TARGET LOCK</p>
                                        <p className="scan-sub">Hover over a radar blip to analyze skill capability.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </motion.div>

                {/* Skills Categories */}
                <motion.div
                    className="skills-categories"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="categories-title">Full Skill Stack</h3>
                    <div className="categories-grid">
                        <div className="category-card">
                            <h4>Programming</h4>
                            <p>Python, MATLAB, TypeScript, JavaScript, SQL</p>
                        </div>
                        <div className="category-card">
                            <h4>Generative AI</h4>
                            <p>OpenAI API, Azure OpenAI, RAG, Agentic AI, LangGraph, Vector DBs, Knowledge Graphs</p>
                        </div>
                        <div className="category-card">
                            <h4>ML & Data</h4>
                            <p>PyTorch, TensorFlow, NLP, CNNs, Recommender Systems, Pandas, NumPy, Scikit-learn</p>
                        </div>
                        <div className="category-card">
                            <h4>Backend & DevOps</h4>
                            <p>FastAPI, Node.js, REST APIs, Docker, Kubernetes, Microservices, CI/CD, MLOps</p>
                        </div>
                        <div className="category-card">
                            <h4>Cloud & Data</h4>
                            <p>PostgreSQL, MySQL, Redis, Azure, AWS, ETL Pipelines, Azure Fabric, AWS Bedrock</p>
                        </div>
                        <div className="category-card">
                            <h4>Methodologies</h4>
                            <p>Agile, Scrum, Test-Driven Development, API Design, CRM Systems</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ScanIcon = () => (
    <svg className="scan-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3a2 2 0 0 0-2 2" />
        <path d="M19 3a2 2 0 0 1 2 2" />
        <path d="M21 19a2 2 0 0 1-2 2" />
        <path d="M5 21a2 2 0 0 1-2-2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2" /><path d="M12 20v2" />
        <path d="M22 12h-2" /><path d="M4 12H2" />
    </svg>
);

export default Skills;
