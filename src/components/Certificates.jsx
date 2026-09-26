import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
    const certsData = [
        { name: "AWS Certified Machine Learning Engineer – Associate", issuer: "Amazon Web Services", icon: "☁️", type: "CERTIFIED", color: "#FF9900" },
        { name: "Google Cloud Professional ML Engineer", issuer: "Google Cloud", icon: "🔍", type: "CERTIFIED", color: "#4285F4" },
        { name: "Microsoft Azure AI Fundamentals (AI-901)", issuer: "Microsoft", icon: "⚡", type: "CERTIFIED", color: "#0078D4" },
        { name: "Google Cloud ML/AI Skill Badges", issuer: "Google Cloud", icon: "🎓", type: "VERIFIED", color: "#EA4335" },
        { name: "IBM AI/ML Professional Certificates", issuer: "IBM", icon: "🤖", type: "CERTIFIED", color: "#0F62FE" },
        { name: "DeepLearning.AI Certificates", issuer: "DeepLearning.AI", icon: "🧠", type: "CERTIFIED", color: "#FF6B35" },
        { name: "Supervised Machine Learning: Regression", issuer: "IBM", icon: "📊", type: "CERTIFIED", color: "#3B82F6" },
        { name: "Exploratory Data Analysis for ML", issuer: "IBM", icon: "📈", type: "CERTIFIED", color: "#10B981" }
    ];

    const leadershipData = [
        "Building production-ready AI systems",
        "Leading technical innovation initiatives",
        "Mentor in AI/ML best practices",
        "Full-stack ML deployment expertise"
    ];

    return (
        <section className="section certificates-section" id="certificates">
            <div className="container">
                <motion.div
                    className="section-header reveal"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Credentials & Achievements</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="lanyard-grid">
                    {certsData.map((cert, index) => {
                        const duration = 4 + (index % 3);
                        const rotation = index % 2 === 0 ? [3, -3, 3] : [-2, 2, -2];
                        const delay = index * 0.15;

                        return (
                            <motion.div
                                className="lanyard-wrapper"
                                key={index}
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{ transformOrigin: "top center" }}
                                animate={{ rotate: rotation }}
                                transition={{
                                    opacity: { duration: 0.5, delay },
                                    y: { duration: 0.8, type: "spring", bounce: 0.4, delay },
                                    rotate: { repeat: Infinity, duration, ease: "easeInOut", delay }
                                }}
                                whileHover={{ rotate: 0, scale: 1.08, zIndex: 10 }}
                            >
                                {/* Lanyard Strap */}
                                <div className="lanyard-strap"></div>
                                <div className="lanyard-clip"></div>

                                {/* ID Badge */}
                                <div className="id-badge" style={{ '--badge-color': cert.color }}>
                                    <div className="badge-hole"></div>

                                    <div className="badge-header">
                                        <span className="badge-type">{cert.type}</span>
                                    </div>

                                    <div className="badge-content">
                                        <div className="cert-icon">{cert.icon}</div>
                                        <h4 className="cert-name">{cert.name}</h4>
                                        <p className="cert-issuer">{cert.issuer}</p>

                                        <div className="badge-footer">
                                            <div className="barcode">|| | ||| || ||| | ||</div>
                                            <span className="badge-id">ID: {String(index + 1).padStart(3, '0')}-ACE</span>
                                        </div>
                                    </div>

                                    <div className="badge-glare"></div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* VIP ALL-ACCESS PASS for Leadership */}
                    <motion.div
                        className="lanyard-wrapper vip-pass"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        style={{ transformOrigin: "top center" }}
                        animate={{ rotate: [-1, 1, -1] }}
                        transition={{
                            opacity: { duration: 0.5, delay: 0.8 },
                            y: { duration: 0.8, type: "spring", bounce: 0.4, delay: 0.8 },
                            rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                        }}
                        whileHover={{ rotate: 0, scale: 1.1, zIndex: 10 }}
                    >
                        <div className="lanyard-strap vip-strap"></div>
                        <div className="lanyard-clip vip-clip"></div>

                        <div className="id-badge vip-badge">
                            <div className="badge-hole"></div>

                            <div className="badge-header vip-header">
                                <span className="badge-type">VIP ALL-ACCESS PASS</span>
                            </div>

                            <div className="badge-content vip-content">
                                <h4 className="cert-name">🚀 Leadership & Initiative</h4>
                                <ul className="vip-roles">
                                    {leadershipData.map((role, rIdx) => (
                                        <li key={rIdx}>✓ {role}</li>
                                    ))}
                                </ul>

                                <div className="badge-footer vip-footer">
                                    <div className="barcode">||| || | |||| || ||| | ||</div>
                                    <span className="badge-id">AUTH: ADMIN</span>
                                </div>
                            </div>

                            <div className="badge-glare"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
