import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
    {
        id: 'whatsapp-support',
        name: 'Enterprise WhatsApp AI Support Assistant',
        shortDesc: 'Intelligent WhatsApp support system powered by LLMs and RAG architecture.',
        tag: 'RAG',
        priority: 1,
        points: [
            'Built an intelligent WhatsApp support system leveraging LLMs and a RAG architecture.',
            'Integrated the Meta WhatsApp Cloud API for production-grade messaging at scale.',
            'Implemented multi-tenant routing with context preservation and conversation history.',
            'Achieved 95% accuracy on customer intent classification and resolution.',
        ],
        stack: ['LLMs', 'RAG', 'Meta WhatsApp Cloud API', 'FastAPI', 'Python', 'Pinecone'],
        problem: 'Enterprises needed an AI support assistant capable of handling complex customer queries over WhatsApp with consistent, contextual responses.',
        solution: 'Designed a RAG-based conversational system that retrieves knowledge from documentation, enriches context with conversation history, and routes inquiries intelligently.',
        technologies: 'LLMs (OpenAI), RAG (Pinecone Vector DB), Meta WhatsApp Business API, FastAPI, Python',
        deployment: 'Deployed on Azure Container Instances with PostgreSQL for persistence.',
        github: 'https://github.com/anshuu-prajapati',
    },
    {
        id: 'person-reid',
        name: 'Person Re-Identification System',
        shortDesc: 'Deep learning system for cross-camera person tracking and real-time analytics.',
        tag: 'Computer Vision',
        priority: 2,
        points: [
            'Built a deep-learning person tracking system using YOLOv8 and PyTorch for cross-camera identity matching.',
            'Implemented optimized feature extraction and re-identification pipelines to power real-time passenger analytics.',
            'Achieved real-time processing on edge devices with 92% re-identification accuracy.',
            'Enabled actionable insights for occupancy monitoring and passenger flow analysis.',
        ],
        stack: ['YOLOv8', 'PyTorch', 'Computer Vision', 'OpenCV', 'Python'],
        problem: 'Transportation systems needed real-time passenger analytics across multiple camera feeds for occupancy monitoring and flow optimization.',
        solution: 'Built a computer vision pipeline that detects persons, extracts distinguishing features, and matches identities across cameras with minimal latency.',
        technologies: 'YOLOv8 (detection), PyTorch (deep learning), OpenCV (image processing), Python',
        deployment: 'Edge deployment on NVIDIA Jetson devices for real-time processing.',
        github: 'https://github.com/anshuu-prajapati',
    },
    {
        id: 'virtual-tryon',
        name: 'AI Virtual Try-On Platform',
        shortDesc: 'Computer vision solution for realistic garment overlay and personalization.',
        tag: 'Computer Vision',
        priority: 3,
        points: [
            'Built an AI-powered virtual try-on solution using computer vision models for precise garment overlay.',
            'Implemented automated image processing pipelines for personalized visualization that improves customer engagement.',
            'Integrated with e-commerce platform resulting in 40% increase in customer interaction time.',
        ],
        stack: ['Computer Vision', 'Image Processing', 'PyTorch', 'React', 'FastAPI'],
        problem: 'E-commerce retailers wanted to reduce return rates by allowing customers to visualize garments before purchase.',
        solution: 'Developed a computer vision system that detects body landmarks, applies transformations, and overlays garments with realistic fitting.',
        technologies: 'Computer Vision (body pose detection), OpenCV, PyTorch models, React frontend, FastAPI backend',
        deployment: 'AWS Lambda for image processing, React SPA on CloudFront CDN.',
        github: 'https://github.com/anshuu-prajapati',
    },
];

const ProjectModal = ({ project, isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="project-modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="modal-close" onClick={onClose} aria-label="Close modal">
                            ✕
                        </button>

                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title">{project.name}</h2>
                                <span className="modal-tag">{project.tag}</span>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Problem</h3>
                                <p className="modal-section-text">{project.problem}</p>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Solution</h3>
                                <p className="modal-section-text">{project.solution}</p>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Technologies</h3>
                                <p className="modal-section-text">{project.technologies}</p>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Key Achievements</h3>
                                <ul className="modal-points">
                                    {project.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Deployment</h3>
                                <p className="modal-section-text">{project.deployment}</p>
                            </div>

                            <div className="modal-footer">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <span>View on GitHub</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const featuredProjects = PROJECTS.filter(p => p.priority <= 3);

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">Featured</span>
                    <div>
                        <h2 className="section-title">Selected Projects</h2>
                        <p className="section-subtitle">AI systems, intelligent applications, and cloud-powered products I've designed and built.</p>
                    </div>
                </div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {featuredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                        >
                            <div className="project-card-header">
                                <span className="project-tag">{project.tag}</span>
                                <button
                                    className="project-expand"
                                    onClick={() => setSelectedProject(project)}
                                    aria-label="View project details"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.shortDesc}</p>

                            <div className="project-stack">
                                {project.stack.slice(0, 4).map(tech => (
                                    <span key={tech} className="tech-chip">{tech}</span>
                                ))}
                                {project.stack.length > 4 && (
                                    <span className="tech-chip-more">+{project.stack.length - 4}</span>
                                )}
                            </div>

                            <button
                                className="project-learn-more"
                                onClick={() => setSelectedProject(project)}
                            >
                                Learn more →
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="projects-footer">
                    <p>Interested in more projects?</p>
                    <a href="https://github.com/anshuu-prajapati" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        Explore GitHub
                    </a>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
