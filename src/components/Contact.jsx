import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const POSITIONS = [
    { top: '10%', left: '8%', rotate: -12 },
    { top: '15%', left: '70%', rotate: 8 },
    { top: '50%', left: '5%', rotate: -5 },
    { top: '55%', left: '75%', rotate: 15 },
    { top: '30%', left: '40%', rotate: -8 },
    { top: '70%', left: '20%', rotate: 10 },
    { top: '20%', left: '55%', rotate: -15 },
    { top: '65%', left: '60%', rotate: 6 },
    { top: '40%', left: '15%', rotate: -3 },
    { top: '35%', left: '80%', rotate: 12 },
];

const MESSAGES = [
    "Let's chat!",
    "Say hello!",
    "Get in touch!",
    "I'm listening!",
    "Send a message!",
    "Connect with me!",
    "Let's collaborate!",
    "Reach out!",
];

const CONTACT_LINKS = [
    { label: 'Email', value: 'anshuuprajapati01@gmail.com', href: 'mailto:anshuuprajapati01@gmail.com', type: 'email' },
    { label: 'GitHub', value: 'github.com/anshuu-prajapati', href: 'https://github.com/anshuu-prajapati', type: 'github' },
    { label: 'LinkedIn', value: 'linkedin.com/in/anshuu-prajapati', href: 'https://linkedin.com/in/anshuu-prajapati', type: 'linkedin' },
];

const Contact = () => {
    const [noteIndex, setNoteIndex] = useState(0);
    const [caught, setCaught] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const containerRef = useRef(null);

    const handleNoteHover = useCallback((e) => {
        if (caught) return;
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= 5 && Math.random() < 0.4) {
            return;
        }

        if (e && e.preventDefault) {
            e.preventDefault();
        }

        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * POSITIONS.length);
        } while (newIndex === noteIndex);

        setNoteIndex(newIndex);
        setMessageIndex(Math.floor(Math.random() * MESSAGES.length));
    }, [attempts, noteIndex, caught]);

    const handleNoteClick = useCallback(() => {
        setCaught(true);
    }, []);

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-line"></div>
                </motion.div>

                {!caught && (
                    <div className="contact-intro reveal">
                        <p>Let's build something amazing together. Hover over the sticky note or click to reach out directly:</p>
                    </div>
                )}

                {caught ? (
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="contact-grid">
                            {CONTACT_LINKS.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    target={link.type !== 'email' ? '_blank' : undefined}
                                    rel={link.type !== 'email' ? 'noreferrer' : undefined}
                                    className="contact-link-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="contact-link-label">{link.label}</div>
                                    <div className="contact-link-value">{link.value}</div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <div
                        className="contact-notes-container"
                        ref={containerRef}
                        style={{ position: 'relative', minHeight: '400px' }}
                    >
                        <motion.div
                            className="sticky-note"
                            style={{
                                position: 'absolute',
                                ...POSITIONS[noteIndex]
                            }}
                            onHoverStart={handleNoteHover}
                            onClick={handleNoteClick}
                            animate={{
                                top: POSITIONS[noteIndex].top,
                                left: POSITIONS[noteIndex].left
                            }}
                            transition={{ type: 'spring', bounce: 0.6, duration: 0.4 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="sticky-note-content">
                                <p>{MESSAGES[messageIndex]}</p>
                            </div>
                        </motion.div>

                        <motion.p
                            className="contact-hint"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Try to catch the note! Or click it directly.
                        </motion.p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
