import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
    {
        id: 'ai-ml',
        label: 'AI & Machine Learning',
        skills: [
            { name: 'Agentic AI', level: 90 },
            { name: 'RAG Architectures', level: 90 },
            { name: 'Generative AI / GPT Apps', level: 88 },
            { name: 'Vector DB & Knowledge Graphs', level: 85 },
            { name: 'Computer Vision (YOLOv8x, BoxMOT)', level: 85 },
            { name: 'Deep Learning', level: 82 },
            { name: 'NLP', level: 80 },
            { name: 'Model Optimization', level: 78 },
        ],
    },
    {
        id: 'programming',
        label: 'Programming & Tools',
        skills: [
            { name: 'Python (Pandas, NumPy, PyTorch)', level: 92 },
            { name: 'LangChain / LangGraph', level: 88 },
            { name: 'asyncio', level: 78 },
            { name: 'SQL', level: 75 },
            { name: 'C#', level: 55 },
        ],
    },
    {
        id: 'systems',
        label: 'Systems & Backend',
        skills: [
            { name: 'OpenAI API', level: 90 },
            { name: 'API Design & Integrations', level: 88 },
            { name: 'Pinecone', level: 85 },
            { name: 'HuggingFace', level: 78 },
            { name: 'Node.js', level: 75 },
            { name: 'Neo4j', level: 75 },
        ],
    },
    {
        id: 'data-cloud',
        label: 'Data Engineering & Cloud',
        skills: [
            { name: 'Docker', level: 82 },
            { name: 'AWS / AWS Bedrock', level: 80 },
            { name: 'PostgreSQL / MySQL', level: 78 },
            { name: 'Apache Airflow', level: 75 },
            { name: 'Azure / Azure Functions', level: 72 },
            { name: 'Spark / Databricks', level: 65 },
        ],
    },
    {
        id: 'scraping',
        label: 'Web Scraping & Automation',
        skills: [
            { name: 'BeautifulSoup', level: 82 },
            { name: 'Requests', level: 85 },
            { name: 'Selenium', level: 80 },
        ],
    },
];

const Skills = () => {
    const [activeCat, setActiveCat] = useState('ai-ml');
    const category = CATEGORIES.find(c => c.id === activeCat);

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">03</span>
                    <h2 className="section-title">Capabilities</h2>
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
                                className="spectrum-bars"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {category.skills.map((skill, i) => (
                                    <div className="bar-row" key={skill.name}>
                                        <span className="bar-label">{skill.name}</span>
                                        <div className="bar-track">
                                            <motion.div
                                                className="bar-fill"
                                                initial={{ width: '0%' }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
                                            />
                                        </div>
                                        <span className="bar-value">{skill.level}</span>
                                    </div>
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
