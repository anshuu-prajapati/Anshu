import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = {
    email: 'anshuu-prajapati01@gmail.com',
    github: 'https://github.com/anshuu-prajapati',
    linkedin: 'https://linkedin.com/in/anshuu-prajapati',
};

const HELP_TEXT = [
    'available commands:',
    '  whoami      short intro',
    '  email       open a draft email',
    '  github      open GitHub profile',
    '  linkedin    open LinkedIn profile',
    '  clear       clear this terminal',
];

const Contact = () => {
    const [log, setLog] = useState([
        { type: 'output', text: "type 'help' to see what I can do, or use the quick links below." },
    ]);
    const [input, setInput] = useState('');
    const [copied, setCopied] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [log]);

    const run = (raw) => {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;
        const nextLog = [...log, { type: 'input', text: cmd }];

        switch (cmd) {
            case 'help':
                nextLog.push(...HELP_TEXT.map(text => ({ type: 'output', text })));
                break;
            case 'whoami':
                nextLog.push({ type: 'output', text: 'Anshu Prajapati \u2014 AI Engineer building agentic AI, RAG and orchestration systems.' });
                break;
            case 'email':
                nextLog.push({ type: 'output', text: `opening mail client for ${LINKS.email}\u2026` });
                window.location.href = `mailto:${LINKS.email}`;
                break;
            case 'github':
                nextLog.push({ type: 'output', text: `opening ${LINKS.github}\u2026` });
                window.open(LINKS.github, '_blank', 'noreferrer');
                break;
            case 'linkedin':
                nextLog.push({ type: 'output', text: `opening ${LINKS.linkedin}\u2026` });
                window.open(LINKS.linkedin, '_blank', 'noreferrer');
                break;
            case 'clear':
                setLog([]);
                setInput('');
                return;
            default:
                nextLog.push({ type: 'output', text: `command not found: ${cmd} \u2014 try 'help'` });
        }
        setLog(nextLog);
        setInput('');
    };

    const copyEmail = () => {
        navigator.clipboard?.writeText(LINKS.email).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="section-head">
                    <span className="section-tag">06</span>
                    <h2 className="section-title">Connect</h2>
                </div>

                <div className="contact-layout">
                    <motion.div
                        className="terminal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5 }}
                        onClick={() => document.getElementById('contact-input')?.focus()}
                    >
                        <div className="console-bar">
                            <span className="console-bar-dots"><span /><span /><span /></span>
                            <span className="console-bar-title">anshu@contact: ~</span>
                        </div>
                        <div className="terminal-body" ref={scrollRef}>
                            {log.map((line, i) => (
                                <p key={i} className={line.type === 'input' ? 'terminal-input-line' : 'terminal-output-line'}>
                                    {line.type === 'input' ? <><span className="log-arrow">$</span> {line.text}</> : line.text}
                                </p>
                            ))}
                            <form
                                className="terminal-prompt"
                                onSubmit={(e) => { e.preventDefault(); run(input); }}
                            >
                                <span className="log-arrow">$</span>
                                <input
                                    id="contact-input"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    autoComplete="off"
                                    spellCheck="false"
                                    placeholder="try 'help'"
                                />
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-cards"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <button className="contact-card" onClick={copyEmail}>
                            <span className="contact-card-label">Email</span>
                            <span className="contact-card-value">{LINKS.email}</span>
                            <span className="contact-card-action">{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                        <a className="contact-card" href={LINKS.github} target="_blank" rel="noreferrer">
                            <span className="contact-card-label">GitHub</span>
                            <span className="contact-card-value">github.com/anshuu-prajapati</span>
                            <span className="contact-card-action">Open</span>
                        </a>
                        <a className="contact-card" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                            <span className="contact-card-label">LinkedIn</span>
                            <span className="contact-card-value">linkedin.com/in/anshuu-prajapati</span>
                            <span className="contact-card-action">Open</span>
                        </a>
                        <div className="contact-card contact-card-static">
                            <span className="contact-card-label">Location</span>
                            <span className="contact-card-value">Delhi, India</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
