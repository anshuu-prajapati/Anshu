import React from 'react';
import { motion } from 'framer-motion';

const CERTS = [
    { name: 'Agentic AI', issuer: 'Google Developer Groups' },
    { name: 'Advanced Learning Algorithms', issuer: 'Course Certificate' },
    { name: 'Generative AI with Transformers', issuer: 'Course Certificate' },
    { name: 'Google Cloud Fundamentals', issuer: 'Google Cloud' },
];

const CheckSeal = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
);

const Credentials = () => {
    return (
        <section className="section" id="credentials">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">05</span>
                    <h2 className="section-title">Education &amp; Credentials</h2>
                </div>

                <motion.div
                    className="degree-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="degree-mark"><CheckSeal /></div>
                    <div>
                        <div className="degree-name">Bachelor of Science in Computer Science</div>
                        <div className="degree-school">Indira Gandhi National Open University</div>
                    </div>
                    <div className="degree-period">2023 &ndash; 2026</div>
                </motion.div>

                <div className="cred-grid">
                    {CERTS.map((cert, i) => (
                        <motion.div
                            className="cred-card"
                            key={cert.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="cred-card-top">
                                <span className="cred-seal"><CheckSeal /></span>
                                <span className="cred-id">CRD-0{i + 1}</span>
                            </div>
                            <div className="cred-name">{cert.name}</div>
                            <div className="cred-issuer">{cert.issuer}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credentials;
