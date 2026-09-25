import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FILES = {
    'bio.md': {
        icon: '📝',
        lang: 'markdown',
        content: `
# Anshu Prajapati
> AI Engineer & Full Stack Developer

I'm passionate about building intelligent systems that solve real-world problems using AI, machine learning, and modern web technologies.

I design and deploy production-ready AI applications, from RAG-based systems to computer vision pipelines, with expertise in full-stack development and cloud infrastructure.

*Building AI systems that make a real impact.*
`
    },
    'experience.json': {
        icon: '💼',
        lang: 'json',
        content: `{
  "current": "AI Engineer @ Maaze",
  "experience": [
    {
      "role": "AI Engineer",
      "company": "Maaze",
      "period": "Jan 2026 - Present",
      "focus": ["Voice AI", "LLMs", "RAG", "Agents"]
    },
    {
      "role": "Full Stack Developer",
      "company": "D-Mac",
      "period": "Jan 2025 - Jan 2026",
      "projects": ["VyapaarNiti", "GreenCart"]
    }
  ]
}`
    },
    'skills.js': {
        icon: '⚡',
        lang: 'javascript',
        content: `import { Developer } from 'anshu';

const profile = new Developer({
  specialization: ['AI Systems', 'LLMs', 'RAG', 'Computer Vision'],
  expertise: [
    'Full-Stack Development',
    'Machine Learning',
    'Voice AI',
    'Document Intelligence'
  ],
  tools: [
    'Python', 'React', 'Node.js', 'FastAPI',
    'LangChain', 'PyTorch', 'OpenCV'
  ]
});

export default profile;`
    },
    'focus.py': {
        icon: '🎯',
        lang: 'python',
        content: `class AnshusFocus:
    def current_projects(self):
        return [
            "AI Document Intelligence",
            "Voice Agent Systems",
            "Computer Vision Analytics",
            "Generative AI Applications"
        ]

    def mission(self):
        return "Building intelligent systems that solve real problems."

    def always_learning(self):
        return True
`
    }
};

const SyntaxHighlighter = ({ content, lang }) => {
    const lines = content.trim().split('\n');

    const renderTokenizedLine = (line, index) => {
        if (lang === 'json') {
            return (
                <div key={index} className="ide-line">
                    <span className="line-num">{index + 1}</span>
                    <span className="line-content" dangerouslySetInnerHTML={{
                        __html: line
                            .replace(/"([^"]+)"(?=:)/g, '<span class="token-key">"$1"</span>')
                            .replace(/:\s*"(.*?)"/g, ': <span class="token-string">"$1"</span>')
                    }} />
                </div>
            );
        }

        if (lang === 'javascript') {
            let parsed = line
                .replace(/(['"])(.*?)\1/g, "__STR__$2__STR__")
                .replace(/\b(import|from|const|new|export|default|let|var|if|else|return|class|function|async|await|try|catch|finally|throw|extends|super)\b/g, "__KW__$1__KW__")
                .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, "__CLS__$1__CLS__");

            parsed = parsed
                .replace(/__STR__(.*?)__STR__/g, '<span class="token-string">\'$1\'</span>')
                .replace(/__KW__(.*?)__KW__/g, '<span class="token-keyword">$1</span>')
                .replace(/__CLS__(.*?)__CLS__/g, '<span class="token-class">$1</span>');

            return (
                <div key={index} className="ide-line">
                    <span className="line-num">{index + 1}</span>
                    <span className="line-content" dangerouslySetInnerHTML={{ __html: parsed }} />
                </div>
            );
        }

        if (lang === 'python') {
            let parsed = line
                .replace(/(['"])(.*?)\1/g, "__STR__$2__STR__")
                .replace(/\b(class|def|return|if|else|elif|for|while|import|from|as|try|except|finally|with|lambda|yield|raise|pass|break|continue)\b/g, "__KW__$1__KW__")
                .replace(/\b([a-zA-Z_]\w*)(?=\()/g, "__METH__$1__METH__");

            parsed = parsed
                .replace(/__STR__(.*?)__STR__/g, '<span class="token-string">"$1"</span>')
                .replace(/__KW__(.*?)__KW__/g, '<span class="token-keyword">$1</span>')
                .replace(/__METH__(.*?)__METH__/g, '<span class="token-method">$1</span>');

            return (
                <div key={index} className="ide-line">
                    <span className="line-num">{index + 1}</span>
                    <span className="line-content" dangerouslySetInnerHTML={{ __html: parsed }} />
                </div>
            );
        }

        return (
            <div key={index} className="ide-line">
                <span className="line-num">{index + 1}</span>
                <span className="line-content" dangerouslySetInnerHTML={{
                    __html: line
                        .replace(/^#\s+(.*)/g, '<span class="token-md-h1"># $1</span>')
                        .replace(/^>\s+(.*)/g, '<span class="token-md-quote">> $1</span>')
                        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                }} />
            </div>
        );
    };

    return (
        <div className="ide-code">
            {lines.map((line, i) => renderTokenizedLine(line, i))}
        </div>
    );
};

const About = () => {
    const [activeTab, setActiveTab] = useState('bio.md');

    return (
        <section className="section" id="about">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="section-header reveal">
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line"></div>
                </div>

                <div className="ide-window reveal">
                    {/* Window Header */}
                    <div className="ide-header">
                        <div className="window-controls">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="window-title">anshu_portfolio — {activeTab}</div>
                    </div>

                    <div className="ide-body">
                        {/* Sidebar */}
                        <div className="ide-sidebar">
                            <div className="sidebar-title visible-desktop">EXPLORER</div>
                            <div className="folder visible-desktop">
                                <span className="folder-icon">📂</span> portfolio_src
                            </div>
                            <ul className="file-list mobile-scroll">
                                {Object.keys(FILES).map(fileName => (
                                    <li
                                        key={fileName}
                                        className={`file-item ${activeTab === fileName ? 'active' : ''}`}
                                        onClick={() => setActiveTab(fileName)}
                                    >
                                        <span className="file-icon">{FILES[fileName].icon}</span>
                                        <span className="file-name-text">{fileName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Editor Area */}
                        <div className="ide-editor">
                            {/* Editor Tabs */}
                            <div className="editor-tabs">
                                {Object.keys(FILES).map(fileName => (
                                    <div
                                        key={fileName}
                                        className={`editor-tab ${activeTab === fileName ? 'active' : ''}`}
                                        onClick={() => setActiveTab(fileName)}
                                    >
                                        <span className="tab-icon">{FILES[fileName].icon}</span>
                                        {fileName}
                                    </div>
                                ))}
                            </div>

                            {/* Code View */}
                            <div className="editor-content">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <SyntaxHighlighter
                                            content={FILES[activeTab].content}
                                            lang={FILES[activeTab].lang}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
