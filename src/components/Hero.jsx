import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenResume }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="hero-workspace" id="hero">
            {/* Scattered desk objects - only show on desktop */}
            {!isMobile && (
            <div className="desk-objects">
                <motion.div
                    className="desk-obj sticky-1"
                    initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
                    animate={{ opacity: 1, scale: 1, rotate: -12, y: [0, -8, 0] }}
                    transition={{ duration: 0.8, delay: 0.3, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                    style={{
                        position: 'absolute',
                        width: 'clamp(80px, 15vw, 120px)',
                        height: 'clamp(80px, 15vw, 120px)',
                        background: 'linear-gradient(135deg, #a855f7, #c084fc)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 'clamp(11px, 2vw, 14px)',
                        boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                        textAlign: 'center',
                        padding: '12px'
                    }}
                >
                    AI Engineer
                </motion.div>

                <motion.div
                    className="desk-obj sticky-2"
                    initial={{ opacity: 0, scale: 0.5, rotate: 8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 8, y: [0, -6, 0] }}
                    transition={{ duration: 0.8, delay: 0.5, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                    style={{
                        position: 'absolute',
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        boxShadow: '0 8px 24px rgba(129, 140, 248, 0.3)',
                        textAlign: 'center',
                        padding: '12px'
                    }}
                >
                    LLMs & RAG
                </motion.div>

                <motion.div
                    className="desk-obj terminal-obj"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                    transition={{ duration: 0.8, delay: 0.7, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                    style={{
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, #f472b6, #ec4899)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        boxShadow: '0 8px 24px rgba(244, 114, 182, 0.3)',
                        textAlign: 'center',
                        padding: '10px'
                    }}
                >
                    CV & Vision
                </motion.div>

                <motion.div
                    className="desk-obj headphones-obj"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
                    transition={{ duration: 0.8, delay: 0.9, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
                    style={{
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, #34d399, #10b981)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        boxShadow: '0 8px 24px rgba(52, 211, 153, 0.3)',
                        textAlign: 'center',
                        padding: '10px'
                    }}
                >
                    Full-Stack
                </motion.div>

                <motion.div
                    className="desk-obj coffee-obj"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                    transition={{ duration: 0.8, delay: 1.1, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
                    style={{
                        position: 'absolute',
                        width: '90px',
                        height: '90px',
                        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)',
                        textAlign: 'center',
                        padding: '10px'
                    }}
                >
                    FastAPI
                </motion.div>
            </div>
            )}

            {/* Main hero content */}
            <div className="hero-center">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    WELCOME TO<br />
                    <span className="hero-title-accent">ANSHU'S</span> PORTFOLIO
                </motion.h1>

                <div className="hero-ctas">
                    <motion.a
                        href="#projects"
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="https://github.com/anshuu-prajapati"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-cta secondary-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        GitHub
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
