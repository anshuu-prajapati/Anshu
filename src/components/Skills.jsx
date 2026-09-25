import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    const radarSkills = [
        // Top Right - Languages & Fundamentals
        { name: "Python", prof: 95, angle: 15, color: "#eab308" },
        { name: "JavaScript/TypeScript", prof: 85, angle: 35, color: "#f59e0b" },
        { name: "React", prof: 90, angle: 55, color: "#3b82f6" },
        { name: "Node.js", prof: 88, angle: 75, color: "#34d399" },

        // Top Left - AI/ML Tools
        { name: "LangChain/LLMs", prof: 92, angle: 105, color: "#a855f7" },
        { name: "RAG Architectures", prof: 90, angle: 125, color: "#ec4899" },
        { name: "YOLOv8 & Vision", prof: 85, angle: 145, color: "#14b8a6" },
        { name: "PyTorch", prof: 82, angle: 165, color: "#f472b6" },
        { name: "Agentic AI", prof: 88, angle: 180, color: "#c084fc" },

        // Bottom Left - Backend & APIs
        { name: "FastAPI", prof: 90, angle: 195, color: "#818cf8" },
        { name: "Express.js", prof: 87, angle: 212, color: "#22c55e" },
        { name: "PostgreSQL", prof: 85, angle: 229, color: "#3b82f6" },
        { name: "MongoDB", prof: 80, angle: 246, color: "#34d399" },
        { name: "Docker", prof: 86, angle: 263, color: "#2496ed" },

        // Bottom Right - Cloud & Tools
        { name: "AWS", prof: 82, angle: 285, color: "#ff9900" },
        { name: "Azure", prof: 78, angle: 298, color: "#0078d4" },
        { name: "Pinecone/Vector DB", prof: 87, angle: 310, color: "#d946ef" },
        { name: "Git/GitHub", prof: 92, angle: 335, color: "#a3e635" },
        { name: "Vite/Build Tools", prof: 88, angle: 355, color: "#0ea5e9" },
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
        if (angle >= 0 && angle < 90) return "Languages & Core";
        if (angle >= 90 && angle < 180) return "AI & Machine Learning";
        if (angle >= 180 && angle < 270) return "Backend & APIs";
        return "Cloud & Infrastructure";
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
