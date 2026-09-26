import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="resume-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="resume-modal"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="resume-close" onClick={onClose} aria-label="Close resume">
                            ✕
                        </button>

                        <div className="resume-header">
                            <h2>My Resume</h2>
                            <a
                                href="public/Anshu.pdf"
                                download="Anshu_Prajapati_Resume.pdf"
                                className="resume-download-btn"
                            >
                                ⬇ Download PDF
                            </a>
                        </div>

                        <div className="resume-content">
                            <iframe
                                src="public/Anshu.pdf"
                                title="Resume"
                                className="resume-iframe"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
