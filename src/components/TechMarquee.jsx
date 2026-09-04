import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TECHNOLOGIES = [
    'Python',
    'React',
    'FastAPI',
    'Azure',
    'AWS',
    'Docker',
    'Machine Learning',
    'GenAI',
    'Computer Vision',
    'RAG',
    'LLMs',
    'PostgreSQL',
    'Kubernetes',
    'GraphQL',
];

const TechMarquee = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="tech-marquee-section">
            <div className="container">
                <div 
                    className="tech-marquee"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="tech-marquee-content"
                        animate={{ x: isHovered ? 0 : ['0%', '-50%'] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                        }}
                    >
                        {/* First set */}
                        {TECHNOLOGIES.map((tech, idx) => (
                            <span key={`tech-1-${idx}`} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {TECHNOLOGIES.map((tech, idx) => (
                            <span key={`tech-2-${idx}`} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechMarquee;
