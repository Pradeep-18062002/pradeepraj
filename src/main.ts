import './style.css'

/* ─── Types ─── */
type Experience = {
  role:     string
  company:  string
  period:   string
  location: string
  bullets:  string[]
}

type ProjectLink = {
  label:    string
  url:      string
  download?: boolean
}

type Project = {
  name:      string
  timeframe: string
  summary:   string
  stack:     string[]
  links:     ProjectLink[]
}

type SkillCategory = {
  icon:  string
  title: string
  items: string[]
}

type ContactLink = {
  label: string
  value: string
  icon:  string
  url?:  string
}

type OpenSource = {
  project: string
  org:     string
  summary: string
  details: string[]
  link:    string
}

type Course = {
  title: string
  code:  string
}

type Volunteer = {
  org:    string
  role:   string
  period: string
  focus:  string
  bullets: string[]
}

/* ─── SVG Icons ─── */
const linkedinSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`

const githubSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`

const emailSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`

/* ─── Data ─── */
const experiences: Experience[] = [
  {
    role:     'AI/ML Developer Intern',
    company:  'Sportthon Inc.',
    period:   'Jun 2025 – Dec 2025',
    location: 'Chicago, IL',
    bullets: [
      'In the summer, I interned as an AI Engineer specializing in agentic systems, RAG pipelines, and LLM fine-tuning, improving decision automation by 80% and enhancing recommendation performance by 85% through LangGraph agents, OCR-powered document intelligence, and optimized LLaMA 3 models.',
    ],
  },
  {
    role:     'Software Engineer Intern',
    company:  'KaaShiv InfoTech',
    period:   'Feb 2022 – Mar 2022',
    location: 'Chennai, India',
    bullets: [
      'I interned as a Software Engineer, where I built 12+ RESTful APIs using Node.js and Express.js to power a nutrition tracking application, reducing manual data handling by 40%. I implemented JWT-based authentication and role-based access control for 100+ users, engineered a hybrid MongoDB and SQL architecture that improved query performance by 30% while processing 500+ real-time food records, and collaborated in Agile sprints through code reviews and GitHub pull requests to improve code quality and reduce bug resolution time.',
    ],
  },
]

const education = [
  {
    school:   'University of Illinois at Chicago',
    location: 'Chicago, IL',
    degree:   'M.S. Computer Science',
    period:   'Aug 2024 – May 2026',
    gpa:      '3.71 / 4.0',
  },
  {
    school:   'Sri Venkateswara College of Engineering',
    location: 'Chennai, India',
    degree:   'B.E. Computer Science',
    period:   'Aug 2020 – Jul 2024',
    gpa:      '3.36 / 4.0',
  },
]

const projects: Project[] = [
  {
    name:      'DocSage – Knowledge Graph-Powered Full Stack AI RAG',
    timeframe: 'Jan 2026 – Feb 2026',
    summary:   'Knowledge graph-powered RAG system with Neo4j and Gemini API for user-scoped PDF question answering, achieving 40% more accurate responses than vector-only RAG. Deployed to GCP Cloud Run via multi-stage Docker builds.',
    stack:     ['Neo4j', 'Gemini API', 'FastAPI', 'Next.js', 'Docker', 'GCP Cloud Run'],
    links:     [
      { label: 'GitHub',   url: 'https://github.com/Pradeep-18062002/DocSage-Knowledge-Graph-Powered-RAG-Application' },
      { label: 'Live App', url: 'https://graphrag-frontend-334343577313.us-central1.run.app/' },
    ],
  },
  {
    name:      'Autonomous AI Code Generator with Multi-Agent Architecture',
    timeframe: 'Oct 2025 – Nov 2025',
    summary:   'LangGraph system that converts natural language prompts into production-ready web applications. Reduced web app development time by 70% via specialized Planner, Architect, and Coder agents.',
    stack:     ['LangGraph', 'LangChain', 'Open-Source LLMs', 'Pydantic', 'TypeScript'],
    links:     [{ label: 'GitHub', url: 'https://github.com/Pradeep-18062002/AI-Agent-Coder' }],
  },
  {
    name:      'Full Stack PDF RAG Application',
    timeframe: 'Mar 2025 – May 2025',
    summary:   'Next.js + OpenAI chat interface over PDFs with Astra DB vector search and serverless APIs on Vercel. Achieved 3× faster information retrieval with optimized parsing and chunking.',
    stack:     ['Next.js', 'LangChain', 'Astra DB', 'OpenAI', 'Vercel'],
    links: [
      { label: 'GitHub',    url: 'https://github.com/Pradeep-18062002/Sport-Rag-LLM' },
      { label: 'Live App',  url: 'https://sport-rag-llm.vercel.app' },
    ],
  },
  {
    name:      'Fine-Tuning LLaMA 3.2 for Cricket Match Strategy Prediction',
    timeframe: 'Jan 2025 – Feb 2025',
    summary:   'QLoRA + PEFT pipeline on IPL match data for venue-aware toss and score predictions. Hit 90% improvement over the base model using LoRA adapters and bitsandbytes 4-bit quantization.',
    stack:     ['LLaMA 3.2', 'QLoRA', 'PEFT', 'Hugging Face', 'bitsandbytes'],
    links:     [{ label: 'GitHub', url: 'https://github.com/Pradeep-18062002/IPL-Match-Strategy-and-Score-Prediction-with-LLaMA-3.2' }],
  },
  {
    name:      'Bias-Free Music Recommendation System',
    timeframe: 'Aug 2024 – Nov 2024',
    summary:   'Hybrid CNN + Word2Vec + Node2Vec engine that equalizes exposure for emerging artists. Cut popularity bias by 50% and reduced cold-start miss rate by 40% using content + metadata embeddings.',
    stack:     ['Python', 'PyTorch', 'Word2Vec', 'Node2Vec', 'MongoDB'],
    links:     [{ label: 'GitHub', url: 'https://github.com/Pradeep-18062002/Melodify-Bias-Free-Music-Recommendation-System' }],
  },
  {
    name:      'DeepSeek Lite Quantization Study',
    timeframe: 'Jan 2025 – May 2025',
    summary:   'Optimized DeepSeek-R1 7B & 1.5B with vLLM using post-training quantization for constrained hardware. Benchmarked W4A16, W8A8, SmoothQuant, and GPTQ against MMLU/GSM8K.',
    stack:     ['DeepSeek-R1', 'vLLM', 'SmoothQuant', 'GPTQ', 'PyTorch'],
    links:     [{ label: 'Download Report', url: '/DeepSeek-Lite-Report.pdf', download: true }],
  },
  {
    name:      'Automated Weather Data ETL Pipeline',
    timeframe: 'Feb 2025 – Mar 2025',
    summary:   'Apache Airflow DAGs on EC2 that pull, transform, and land Chicago weather snapshots into S3 daily. Cut manual effort by 100% with fully automated ETL and IAM-secured uploads.',
    stack:     ['Apache Airflow', 'AWS EC2', 'AWS S3', 'Python', 'Pandas'],
    links:     [{ label: 'GitHub', url: 'https://github.com/Pradeep-18062002/Apache-airflow' }],
  },
]

const skills: SkillCategory[] = [
  {
    icon:  '💻',
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C / C++', 'SQL'],
  },
  {
    icon:  '🌐',
    title: 'Backend & Web Dev',
    items: ['Node.js', 'FastAPI', 'Express.js', 'Next.js', 'React', 'Angular', 'REST APIs', 'Webhooks', 'Postman', 'HTML', 'CSS'],
  },
  {
    icon:  '🗄️',
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Astra DB', 'ChromaDB', 'Pinecone'],
  },
  {
    icon:  '☁️',
    title: 'Cloud & DevOps',
    items: ['AWS S3 & EC2', 'GCP Cloud Run', 'GCP Cloud Build', 'Docker', 'Apache Airflow', 'Git & GitHub', 'Artifact Registry', 'Secret Manager', 'IAM'],
  },
  {
    icon:  '🤖',
    title: 'AI & Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'CNN & RNN', 'Generative Models', 'Scikit-learn', 'OpenAI API', 'Gemini API', 'Whisper'],
  },
  {
    icon:  '🧠',
    title: 'LLM Fine-tuning',
    items: ['LoRA / QLoRA', 'PEFT', 'Axolotl', 'BitsAndBytes', 'LLMCompressor'],
  },
  {
    icon:  '🔗',
    title: 'Agentic Frameworks',
    items: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Letta', 'Botpress', 'MS Semantic Kernel'],
  },
  {
    icon:  '📊',
    title: 'Data & Automation',
    items: ['Pandas', 'PySpark', 'Power BI', 'n8n', 'Selenium', 'BeautifulSoup', 'Matplotlib', 'Seaborn', 'MS Excel', 'RAG Pipelines', 'ETL Pipelines'],
  },
  {
    icon:  '🛠️',
    title: 'Developer Tools',
    items: ['VS Code', 'Claude Code', 'GitHub Copilot'],
  },
]

const openSource: OpenSource[] = [
  {
    project: 'TensorRT-LLM',
    org:     'NVIDIA',
    summary: 'Fixed Bloom example dependency path to keep community builds unblocked.',
    details: [
      'Patched broken constraints reference in contrib Bloom requirements, restoring pip install reliability.',
      'Collaborated with NVIDIA reviewers and passed DCO + CI gates with successive fixes.',
      'Merged Mar 2025 (PR #3003) after multi-stage reuse-pipeline validation.',
    ],
    link: 'https://github.com/NVIDIA/TensorRT-LLM/pull/3003',
  },
]

const courses: Course[] = [
  { title: 'Advanced Machine Learning',      code: 'CS 512' },
  { title: 'Applied AI',                     code: 'CS 514' },
  { title: 'Big Data Mining',                code: 'CS 483' },
  { title: 'Computer Algorithms I',          code: 'CS 401' },
  { title: 'Computer Vision',                code: 'CS 415' },
  { title: 'Energy-Efficient Deep Learning', code: 'CS 594' },
  { title: 'Natural Language Processing',    code: 'CS 421' },
  { title: 'Neural Networks',                code: 'CS 559' },
  { title: 'Socially Responsible AI',        code: 'CS 517' },
]

const volunteering: Volunteer[] = [
  {
    org:    'Youth Red Cross • SVCE Unit',
    role:   'Student Member',
    period: 'Oct 2020 – May 2024',
    focus:  'Social services, wellness advocacy, and community logistics management.',
    bullets: [
      'Led 10+ environmental programs, boosting recycling participation by 30%.',
      'Organized traffic safety campaigns that reached 500+ residents and cut violations by 15%.',
      'Ran yoga awareness sessions for 200+ attendees, fueling a 25% lift in enrollments.',
      'Coordinated logistics for 3 large community drives with 95% participant satisfaction.',
      'Mentored 50+ volunteers, raising social initiative participation by 40%.',
    ],
  },
]

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'pradeepraj18062002@gmail.com',
    icon:  `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    url:   'https://mail.google.com/mail/?view=cm&fs=1&to=pradeepraj18062002@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/pradeepraj-p',
    icon:  `<svg viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    url:   'https://www.linkedin.com/in/pradeepraj-p/',
  },
  {
    label: 'GitHub',
    value: 'github.com/Pradeep-18062002',
    icon:  `<svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
    url:   'https://github.com/Pradeep-18062002',
  },
  {
    label: 'Phone',
    value: '+1 312 998-3116',
    icon:  `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  },
]

/* ─── HTML Builders ─── */
const expCards = experiences.map((e) => `
  <article class="exp-card reveal">
    <div class="exp-top">
      <h3 class="exp-role">${e.role}</h3>
      <span class="exp-period">${e.period}</span>
    </div>
    <p class="exp-co">${e.company}</p>
    <p class="exp-meta">${e.location}</p>
    <ul class="exp-bullets">
      ${e.bullets.map((b) => `<li>${b}</li>`).join('')}
    </ul>
  </article>
`).join('')

const projCards = projects.map((p) => `
  <article class="proj-card reveal">
    <p class="proj-time">${p.timeframe}</p>
    <h3 class="proj-name">${p.name}</h3>
    <p class="proj-desc">${p.summary}</p>
    <div class="proj-stack">
      ${p.stack.map((t) => `<span class="p-badge">${t}</span>`).join('')}
    </div>
    <div class="proj-links">
      ${p.links.map((l) => {
        const attrs = l.download ? 'download' : 'target="_blank" rel="noreferrer"'
        return `<a href="${l.url}" class="p-link" ${attrs}>↗ ${l.label}</a>`
      }).join('')}
    </div>
  </article>
`).join('')

const skillCards = skills.map((s) => `
  <article class="sk-card reveal">
    <div class="sk-icon">${s.icon}</div>
    <p class="sk-name">${s.title}</p>
    <div class="sk-tags">
      ${s.items.map((i) => `<span class="sk-tag">${i}</span>`).join('')}
    </div>
  </article>
`).join('')

const ossCards = openSource.map((o) => `
  <article class="oss-card reveal">
    <div class="oss-head">
      <div>
        <p class="oss-org">${o.org}</p>
        <h3 class="oss-proj">${o.project}</h3>
      </div>
      <a href="${o.link}" class="oss-badge" target="_blank" rel="noreferrer">View PR →</a>
    </div>
    <p class="oss-sum">${o.summary}</p>
    <ul class="oss-details">
      ${o.details.map((d) => `<li>${d}</li>`).join('')}
    </ul>
  </article>
`).join('')

const eduCards = education.map((ed) => `
  <article class="edu-card reveal">
    <div class="edu-icon">🎓</div>
    <div class="edu-body">
      <p class="edu-deg">${ed.degree}</p>
      <h3 class="edu-school">${ed.school}</h3>
      <p class="edu-meta">
        <span>📍 ${ed.location}</span>
        <span class="edu-dot">·</span>
        <span>🗓 ${ed.period}</span>
      </p>
      <span class="edu-gpa">GPA ${ed.gpa}</span>
    </div>
  </article>
`).join('')

const courseCards = courses.map((c) => `
  <article class="course-card reveal">
    <p class="c-title">${c.title}</p>
    <p class="c-code">${c.code}</p>
  </article>
`).join('')

const volCards = volunteering.map((v) => `
  <article class="vol-card reveal">
    <div class="vol-top">
      <div>
        <p class="vol-org">${v.org}</p>
        <h3 class="vol-role">${v.role}</h3>
      </div>
      <span class="vol-period">${v.period}</span>
    </div>
    <p class="vol-focus">${v.focus}</p>
    <ul class="vol-bullets">
      ${v.bullets.map((b) => `<li>${b}</li>`).join('')}
    </ul>
  </article>
`).join('')

const contactCards = contactLinks.map((c) => {
  if (c.url) {
    return `
      <a class="c-card" href="${c.url}" target="_blank" rel="noreferrer">
        <span class="c-ico">${c.icon}</span>
        <p class="c-lbl">${c.label}</p>
        <p class="c-val">${c.value}</p>
      </a>`
  }
  return `
    <div class="c-card">
      <span class="c-ico">${c.icon}</span>
      <p class="c-lbl">${c.label}</p>
      <p class="c-val">${c.value}</p>
    </div>`
}).join('')

/* ─── DOM ─── */
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

  <!-- ── Navbar ── -->
  <nav class="navbar" id="navbar">
    <a href="#home" class="logo-wrap">
      <span class="logo-circle">PR</span>
    </a>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="https://github.com/Pradeep-18062002" target="_blank" rel="noreferrer" class="nav-github">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      GitHub
    </a>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- ── Mobile Menu ── -->
  <div class="mobile-menu" id="mobile-menu">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <!-- ── Hero ── -->
  <section id="home" class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <p class="hero-greeting">Hello,</p>
        <h1 class="hero-name">I'm Pradeep<span class="dot">.</span></h1>
        <p class="hero-role">AI Engineer &nbsp;·&nbsp; MS CS Grad @ UIC</p>
        <p class="hero-loc">📍 Chicago, Illinois</p>
        <div class="hero-btns">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pradeepraj18062002@gmail.com"
             class="btn-hire" target="_blank" rel="noreferrer">Let's Connect</a>
          <a href="/Pradeep%20Raj%20Resume.pdf" download class="btn-cv">Download CV</a>
        </div>
      </div>
      <div class="hero-right">
        <div class="photo-card">
          <img src="/profile.png" alt="Pradeep Raj" />
        </div>
        <div class="social-bar">
          <a href="https://www.linkedin.com/in/pradeepraj-p/"
             class="s-icon" target="_blank" rel="noreferrer" title="LinkedIn">
            ${linkedinSVG}
          </a>
          <a href="https://github.com/Pradeep-18062002"
             class="s-icon" target="_blank" rel="noreferrer" title="GitHub">
            ${githubSVG}
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pradeepraj18062002@gmail.com"
             class="s-icon" target="_blank" rel="noreferrer" title="Email">
            ${emailSVG}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ── About ── -->
  <section id="about" class="about-sec">
    <div class="sec-inner">
      <span class="sec-label">About me</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Building Scalable <span class="hl">AI</span> Systems.</h2>
      <div class="about-grid reveal">
        <div>
          <p class="about-bio">I'm a Master's student in Computer Science at the University of Illinois
          at Chicago (GPA 3.71/4.0), specializing in AI/ML engineering, LLM systems, and multi-agent
          architectures. My work sits at the intersection of cutting-edge research and production
          engineering.</p>
          <p class="about-bio">Currently I build LangGraph agents, RAG systems, and fine-tuned LLMs at
          Sportthon Inc. I'm passionate about translating the latest AI advances into tools that actually
          ship and deliver measurable impact. Open to internships, research collaborations, and full-time
          AI/ML engineering roles.</p>
        </div>
        <div class="about-stats">
          <div class="stat-box reveal">
            <span class="stat-num">3.71</span>
            <p class="stat-lbl">UIC GPA (M.S.)</p>
          </div>
          <div class="stat-box reveal">
            <span class="stat-num">7+</span>
            <p class="stat-lbl">Major Projects</p>
          </div>
          <div class="stat-box reveal">
            <span class="stat-num">2</span>
            <p class="stat-lbl">Internships</p>
          </div>
          <div class="stat-box reveal">
            <span class="stat-num">9</span>
            <p class="stat-lbl">Skill Categories</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Education ── -->
  <section id="education" class="edu-sec">
    <div class="sec-inner">
      <span class="sec-label">My background</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Education</h2>
      <div class="edu-grid">${eduCards}</div>
    </div>
  </section>

  <!-- ── Skills ── -->
  <section id="skills" class="skills-sec">
    <div class="sec-inner">
      <span class="sec-label">What I know</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Tech <span class="hl">Stack</span></h2>
      <p class="sec-sub">A broad toolkit spanning AI research, production engineering, and data infrastructure.</p>
      <div class="skills-grid">${skillCards}</div>
    </div>
  </section>

  <!-- ── Experience ── -->
  <section id="experience" class="exp-sec">
    <div class="sec-inner">
      <span class="sec-label">Where I've worked</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Work <span class="hl">Experience</span></h2>
      <div class="exp-list">${expCards}</div>
    </div>
  </section>

  <!-- ── Projects ── -->
  <section id="projects" class="proj-sec">
    <div class="sec-inner">
      <span class="sec-label">What I've built</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Featured <span class="hl">Projects</span></h2>
      <p class="sec-sub">AI systems, LLM applications, and data engineering tools — all shipped.</p>
      <div class="proj-grid">${projCards}</div>
    </div>
  </section>

  <!-- ── Open Source ── -->
  <section class="oss-sec">
    <div class="sec-inner">
      <span class="sec-label">Community</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Open <span class="hl">Source</span></h2>
      <p class="sec-sub">Contributions to high-impact AI infrastructure projects.</p>
      ${ossCards}
    </div>
  </section>

  <!-- ── Courses ── -->
  <section class="courses-sec">
    <div class="sec-inner">
      <span class="sec-label">UIC Coursework</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Graduate <span class="hl">Courses</span></h2>
      <div class="courses-grid">${courseCards}</div>
    </div>
  </section>

  <!-- ── Volunteering ── -->
  <section class="vol-sec">
    <div class="sec-inner">
      <span class="sec-label">Giving back</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Community <span class="hl">Service</span></h2>
      ${volCards}
    </div>
  </section>

  <!-- ── Contact ── -->
  <section id="contact" class="contact-sec">
    <div class="sec-inner">
      <span class="sec-label">Get in touch</span>
      <div class="sec-bar"></div>
      <h2 class="sec-title">Let's Build Together</h2>
      <p class="sec-sub">Available for internships, research collaborations, and full-time AI/ML engineering roles.</p>
      <div class="contact-grid">${contactCards}</div>
    </div>
  </section>

  <!-- ── Footer ── -->
  <footer class="footer">
    <p>© ${new Date().getFullYear()} Pradeep Raj Prabhu Raj &nbsp;·&nbsp; Built with Vite + TypeScript
    &nbsp;·&nbsp; <a href="/Pradeep%20Raj%20Resume.pdf" download>Download Resume</a></p>
  </footer>
`

/* ─── Interactions ─── */
function initInteractions(): void {
  // Scroll-reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  document
    .querySelectorAll<HTMLElement>('.reveal')
    .forEach((el) => observer.observe(el))

  // Smooth scroll anchors
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const id = anchor.getAttribute('href')!
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
      // close mobile menu
      document.getElementById('mobile-menu')?.classList.remove('open')
      document.getElementById('hamburger')?.classList.remove('open')
    })
  })

  // Hamburger menu
  const hamburger = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobile-menu')
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu?.classList.toggle('open')
  })

  // Back to top
  const btt = document.createElement('button')
  btt.className = 'btt'
  btt.innerHTML = '↑'
  btt.setAttribute('aria-label', 'Back to top')
  document.body.appendChild(btt)

  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > window.innerHeight * 0.5)
  })

  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  // ── Animated stat counters ──
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const numEl = entry.target.querySelector<HTMLElement>('.stat-num')
        if (!numEl || numEl.dataset['animated']) return
        numEl.dataset['animated'] = 'true'

        const raw    = numEl.textContent ?? '0'
        const target = parseFloat(raw)
        const isDec  = raw.includes('.')
        const suffix = raw.replace(/[\d.]/g, '')
        let current  = 0
        const steps  = 45
        const inc    = target / steps

        const timer = setInterval(() => {
          current += inc
          if (current >= target) {
            numEl.textContent = (isDec ? target.toFixed(2) : String(Math.ceil(target))) + suffix
            clearInterval(timer)
          } else {
            numEl.textContent = (isDec ? current.toFixed(2) : String(Math.floor(current))) + suffix
          }
        }, 1400 / steps)

        statObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.75 },
  )

  document
    .querySelectorAll<HTMLElement>('.stat-box')
    .forEach((box) => statObserver.observe(box))
}

initInteractions()

