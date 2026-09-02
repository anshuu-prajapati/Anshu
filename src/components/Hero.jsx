import React from 'react';
import { motion } from 'framer-motion';

const NODES = [
    { id: 'llm', label: 'LLM Agents', x: 50, y: 12 },
    { id: 'twilio', label: 'Twilio Voice', x: 86.1, y: 38.3 },
    { id: 'crm', label: 'CRM + Knowledge Graph', x: 72.3, y: 80.7 },
    { id: 'vector', label: 'Pinecone Vector DB', x: 27.7, y: 80.7 },
    { id: 'whatsapp', label: 'WhatsApp Business API', x: 13.9, y: 38.3 },
];

const Hero = () => {
    return (
        <section className="deck" id="hero">
            <div className="deck-inner">
                <motion.div
                    className="deck-copy"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="deck-status">
                        <span className="status-dot" />
                        AI Engineer at Maaze &middot; Delhi, India
                    </div>

                    <h1 className="deck-title">
                        Building AI systems that reason, retrieve, and act.
                    </h1>

                    <p className="deck-lede">
                        I design agentic AI frameworks and RAG architectures &mdash; from
                        routing orchestrators and voice agents to multi-tenant knowledge
                        graphs &mdash; and ship them as production systems with real
                        auditability and access control, not demos.
                    </p>

                    <div className="deck-actions">
                        <a href="#projects" className="btn btn-primary">View deployments</a>
                        <a href="#contact" className="btn btn-ghost">Connect</a>
                    </div>
                </motion.div>

                <motion.div
                    className="deck-graph"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    <div className="graph-frame">
                        <span className="graph-frame-label">orchestrator.route()</span>
                        <svg className="graph-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                            {NODES.map((node, i) => (
                                <motion.line
                                    key={node.id}
                                    x1="50" y1="50" x2={node.x} y2={node.y}
                                    className="graph-edge"
                                    initial={{ strokeDashoffset: 0, opacity: 0 }}
                                    animate={{ strokeDashoffset: -20, opacity: 1 }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
                                        strokeDashoffset: { duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.6 + i * 0.1 }
                                    }}
                                />
                            ))}
                            <circle cx="50" cy="50" r="5.4" className="graph-core" />
                            <circle cx="50" cy="50" r="5.4" className="graph-core-ping" />
                        </svg>

                        {NODES.map((node, i) => (
                            <motion.div
                                key={node.id}
                                className="graph-node"
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                initial={{ opacity: 0, scale: 0.4 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                            >
                                <span className="graph-node-dot" />
                                <span className="graph-node-label">{node.label}</span>
                            </motion.div>
                        ))}

                        <div className="graph-core-label">ROUTER</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
