import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NODES = [
    { id: 'ai', label: 'AI Systems', x: 50, y: 8 },
    { id: 'ml', label: 'Machine Learning', x: 78, y: 35 },
    { id: 'cv', label: 'Computer Vision', x: 78, y: 65 },
    { id: 'cloud', label: 'Cloud Deployment', x: 50, y: 92 },
    { id: 'genai', label: 'Generative AI', x: 22, y: 65 },
    { id: 'infra', label: 'Infrastructure', x: 22, y: 35 },
];

// Simulated data pulse animation for the network
const generatePulse = (timestamp) => {
    return Math.sin(timestamp * 0.003) * 0.5 + 0.5;
};

const Hero = () => {
    const [pulseIntensity, setPulseIntensity] = useState(0.5);

    useEffect(() => {
        let animationFrameId;
        const animate = (timestamp) => {
            setPulseIntensity(generatePulse(timestamp));
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="deck" id="hero">
            <div className="deck-inner">
                <motion.div
                    className="deck-copy"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="deck-status">
                        <span className="status-dot" />
                        OPEN TO AI / ML OPPORTUNITIES
                    </div>

                    <h1 className="deck-title">
                        ANSHU PRAJAPATI
                    </h1>

                    <h2 className="deck-subtitle">
                        AI Engineer building intelligent systems that solve real-world problems.
                    </h2>

                    <p className="deck-lede">
                        I design and deploy AI, Generative AI, Computer Vision, Machine Learning, and Cloud-powered applications — turning complex ideas into reliable, production-ready products.
                    </p>

                    <div className="deck-positioning">
                        AI Engineering · GenAI · Computer Vision · Machine Learning · Cloud
                    </div>

                    <div className="deck-actions">
                        <a href="#projects" className="btn btn-primary">
                            <span>View My Work</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                        <a href="https://github.com/anshuu-prajapati" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/anshuu-prajapati" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="deck-graph"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                >
                    <div className="graph-frame">
                        <span className="graph-frame-label">ai_system.execute()</span>
                        <svg className="graph-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                            {/* SVG edges connecting center to nodes */}
                            {NODES.map((node, i) => (
                                <motion.line
                                    key={`edge-${node.id}`}
                                    x1="50" y1="50" x2={node.x} y2={node.y}
                                    className="graph-edge"
                                    initial={{ strokeDashoffset: 0, opacity: 0 }}
                                    animate={{ strokeDashoffset: -20, opacity: 0.6 }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.4 + i * 0.08 },
                                        strokeDashoffset: { duration: 2, repeat: Infinity, ease: 'linear', delay: 0.5 + i * 0.08 }
                                    }}
                                />
                            ))}
                            
                            {/* Core node */}
                            <circle cx="50" cy="50" r="6" className="graph-core" />
                            <motion.circle 
                                cx="50" cy="50" r="6" 
                                className="graph-core-ping"
                                animate={{
                                    r: [6, 14],
                                    opacity: [0.8, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeOut'
                                }}
                            />
                        </svg>

                        {/* Peripheral nodes */}
                        {NODES.map((node, i) => (
                            <motion.div
                                key={`node-${node.id}`}
                                className="graph-node"
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                initial={{ opacity: 0, scale: 0.3 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                            >
                                <motion.span 
                                    className="graph-node-dot"
                                    animate={{
                                        boxShadow: [
                                            `0 0 6px rgba(6, 182, 212, 0.4)`,
                                            `0 0 12px rgba(6, 182, 212, 0.8)`,
                                            `0 0 6px rgba(6, 182, 212, 0.4)`
                                        ]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.15
                                    }}
                                />
                                <span className="graph-node-label">{node.label}</span>
                            </motion.div>
                        ))}

                        <motion.div 
                            className="graph-core-label"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            AI ENGINE
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
