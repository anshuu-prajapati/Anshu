import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowDown } from 'react-icons/hi';

const STEPS = [
    {
        number: '01',
        title: 'DISCOVER',
        description: 'Understand the problem, define requirements, and explore the solution space.',
    },
    {
        number: '02',
        title: 'DESIGN',
        description: 'Define the architecture and AI approach, prototype solutions, and plan implementation.',
    },
    {
        number: '03',
        title: 'BUILD',
        description: 'Develop the model, APIs, and application, integrating all components into a cohesive system.',
    },
    {
        number: '04',
        title: 'DEPLOY',
        description: 'Deploy the system to cloud infrastructure, configure monitoring, and ensure scalability.',
    },
    {
        number: '05',
        title: 'IMPROVE',
        description: 'Monitor performance, optimize for speed and cost, and iterate based on feedback.',
    },
];

const Workflow = () => {
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="section" id="workflow">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">Process</span>
                    <h2 className="section-title">From Idea → Production</h2>
                </div>

                <motion.div
                    className="workflow-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="workflow-step"
                            variants={itemVariants}
                        >
                            <div className="workflow-number">{step.number}</div>
                            <div className="workflow-content">
                                <h3 className="workflow-title">{step.title}</h3>
                                <p className="workflow-description">{step.description}</p>
                            </div>
                            {idx < STEPS.length - 1 && (
                                <div className="workflow-connector">
                                    <HiOutlineArrowDown size={18} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Workflow;
