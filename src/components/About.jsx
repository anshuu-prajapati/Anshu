import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PROFILE_TEXT = "AI Engineer specializing in LLM-based systems, RAG architectures, and agent-driven workflows. I design and deploy scalable AI applications with multi-tenant architectures, orchestration layers, and enterprise-grade reliability \u2014 RBAC, auditability, traceability. My focus is production-ready systems that integrate retrieval, reasoning, and automation to solve real business problems, not proof-of-concepts.";

const SPEC_ROWS = [
    { key: 'base', label: 'Base', value: 'Delhi, India' },
    { key: 'role', label: 'Current role', value: 'AI Engineer @ Maaze' },
    { key: 'focus', label: 'Focus', value: 'Agentic AI \u00b7 RAG \u00b7 Orchestration' },
    { key: 'edu', label: 'Education', value: 'B.Sc. Computer Science, IGNOU \u00b7 2023\u20132026' },
];

const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return [ref, inView];
};

const About = () => {
    const [panelRef, inView] = useInView();
    const [typed, setTyped] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!inView) return;
        let i = 0;
        const id = setInterval(() => {
            i += 3;
            setTyped(PROFILE_TEXT.slice(0, i));
            if (i >= PROFILE_TEXT.length) {
                setTyped(PROFILE_TEXT);
                setDone(true);
                clearInterval(id);
            }
        }, 16);
        return () => clearInterval(id);
    }, [inView]);

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">01</span>
                    <h2 className="section-title">Profile</h2>
                </div>

                <div className="status-panel" ref={panelRef}>
                    <div className="status-panel-header">
                        <div className="status-panel-dots">
                            <span /><span /><span />
                        </div>
                        <span className="status-panel-title">profile.status</span>
                        <span className={`status-panel-flag ${done ? 'is-ready' : ''}`}>
                            {done ? 'READY' : 'READING\u2026'}
                        </span>
                    </div>

                    <div className="status-panel-body">
                        <div className="status-log">
                            <p>
                                <span className="log-prompt">$</span> {typed}
                                {!done && <span className="log-cursor">_</span>}
                            </p>
                        </div>

                        <motion.div
                            className="spec-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: done ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {SPEC_ROWS.map(row => (
                                <div className="spec-row" key={row.key}>
                                    <span className="spec-label">{row.label}</span>
                                    <span className="spec-value">{row.value}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
