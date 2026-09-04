import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
    {
        id: 'ai-ml',
        label: 'AI & Machine Learning',
        skills: [
            'Agentic AI',
            'RAG Architectures',
            'Generative AI / GPT Apps',
            'Vector DB & Knowledge Graphs',
            'Computer Vision (YOLOv8x)',
            'Deep Learning',
            'NLP',
            'Model Optimization',
        ],
    },
    {
        id: 'programming',
        label: 'Programming & Tools',
        skills: [
            'Python',
            'LangChain / LangGraph',
            'asyncio',
            'SQL',
            'C#',
        ],
    },
    {
        id: 'systems',
        label: 'Systems & Backend',
        skills: [
            'OpenAI API',
            'API Design & Integrations',
            'Pinecone',
            'HuggingFace',
            'Node.js',
            'Neo4j',
        ],
    },
    {
        id: 'data-cloud',
        label: 'Data Engineering & Cloud',
        skills: [
            'Docker',
            'AWS / AWS Bedrock',
            'PostgreSQL / MySQL',
            'Apache Airflow',
            'Azure / Azure Functions',
            'Spark / Databricks',
        ],
    },
    {
        id: 'scraping',
        label: 'Web Scraping & Automation',
        skills: [
            'BeautifulSoup',
            'Requests',
            'Selenium',
        ],
    },
];

const Skills = () => {
    const [activeCat, setActiveCat] = useState('ai-ml');
    const category = CATEGORIES.find(c => c.id === activeCat);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">Skills</span>
                    <h2 className="section-title">Technical Expertise</h2>
                </div>

                <div className="spectrum">
                    <div className="spectrum-tabs">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                className={`spectrum-tab ${activeCat === cat.id ? 'is-active' : ''}`}
                                onClick={() => setActiveCat(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="spectrum-board">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCat}
                                className="skills-grid"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.25 }}
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        className="skill-badge"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
