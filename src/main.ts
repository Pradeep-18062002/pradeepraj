import './style.css'

type Experience = {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
  impact: string
}

type ProjectLink = {
  label: string
  url: string
  download?: boolean
}

type ContactLink = {
  label: string
  value: string
  url?: string
}

type Project = {
  name: string
  links: ProjectLink[]
  timeframe: string
  summary: string
  impact: string
  stack: string[]
}

type OpenSource = {
  project: string
  org: string
  summary: string
  details: string[]
  link: string
}

type Course = {
  title: string
  code: string
}

type Volunteer = {
  org: string
  role: string
  period: string
  focus: string
  bullets: string[]
}

const heroHighlights = [
  { label: 'M.S. Computer Science', detail: 'UIC • 3.88 GPA' },
  { label: 'AI/ML Engineer', detail: 'LLM & Multi-agent systems' },
]

const experiences: Experience[] = [
  {
    role: 'AI/ML Developer Intern',
    company: 'Sportthon Inc.',
    period: 'Jun 2025 – Present',
    location: 'Chicago, IL',
    impact: 'Built AI agents + APIs that powered athlete-readiness insights in real time.',
    bullets: [
      'Improved player selection speed by 80% via LangGraph agents that fused wellness + weather inputs into confidence scores.',
      'Shipped production LLM apps with open-source models, boosting engagement by 30%.',
      'Fine-tuned domain LLMs to lift contextual understanding of fitness queries by 15%.',
      'Launched OpenAI & Hugging Face backed APIs to streamline AI feature delivery.',
      'Cut experimentation cycles by 50% by benchmarking SOTA architectures on latency + quality.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KaaShiv InfoTech',
    period: 'Feb 2022 – Mar 2022',
    location: 'Chennai, India',
    impact: 'Delivered full-stack nutrition tracker infrastructure for secure health data.',
    bullets: [
      'Designed 12+ REST APIs in Node.js/Express to trim manual data handling by 40%.',
      'Implemented JWT auth covering 100+ testers to harden sensitive health information.',
      'Unified SQL + MongoDB pipelines, upping query performance by 30% for 500+ entries.',
    ],
  },
]

const education = [
  {
    school: 'University of Illinois at Chicago',
    location: 'Chicago, IL',
    degree: 'M.S. Computer Science • GPA 3.88/4.0',
    period: 'Expected May 2026',
  },
  {
    school: 'Sri Venkateswara College of Engineering',
    location: 'Chennai, India',
    degree: 'B.E. Computer Science • GPA 3.36/4.0',
    period: 'Aug 2020 – Jul 2024',
  },
]

const projects: Project[] = [
  {
    name: 'AI Code Generator with Multi-Agent Architecture',
    timeframe: 'Oct 2025 – Nov 2025',
    summary:
      'Autonomous LangGraph system that converts natural language prompts into production-ready web apps.',
    impact: '70% faster time-to-deployment via planner, architect, coder agent loop.',
    stack: ['LangGraph', 'LangChain', 'Open-Source LLMs', 'Pydantic', 'TypeScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/Pradeep-18062002/AI-Agent-Coder' }],
  },
  {
    name: 'Full Stack PDF RAG Application',
    timeframe: 'Mar 2025 – May 2025',
    summary:
      'Next.js + OpenAI chat over PDFs with Astra DB vector search and serverless APIs on Vercel.',
    impact: '3× faster information retrieval with optimized parsing + chunking.',
    stack: ['Next.js', 'LangChain', 'Astra DB', 'OpenAI', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Pradeep-18062002/Sport-Rag-LLM' },
      { label: 'Live App', url: 'https://sport-rag-llm.vercel.app' },
    ],
  },
  {
    name: 'Fine-Tuning LLaMA 3.2 for IPL Strategy',
    timeframe: 'Jan 2025 – Feb 2025',
    summary:
      'QLoRA + PEFT pipeline to deliver venue-aware toss and score predictions with 4-bit efficiency.',
    impact: 'Hit 90% improvement over base model with LoRA adapters + bitsandbytes.',
    stack: ['LLaMA 3.2', 'QLoRA', 'PEFT', 'Hugging Face', 'bitsandbytes'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Pradeep-18062002/IPL-Match-Strategy-and-Score-Prediction-with-LLaMA-3.2',
      },
    ],
  },
  {
    name: 'Bias-Free Music Recommendation System',
    timeframe: 'Aug 2024 – Nov 2024',
    summary:
      'Hybrid CNN + Word2Vec + Node2Vec engine that equalizes exposure for emerging artists.',
    impact: 'Cut popularity bias by 50% while reducing cold-start miss rate by 40%.',
    stack: ['Python', 'PyTorch', 'Word2Vec', 'Node2Vec', 'MongoDB'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Pradeep-18062002/Melodify-Bias-Free-Music-Recommendation-System',
      },
    ],
  },
  {
    name: 'DeepSeek Lite Quantization Study',
    timeframe: 'Jan 2025 – May 2025',
    summary:
      'Optimized DeepSeek-R1 7B & 1.5B with vLLM using post-training quantization for constrained hardware.',
    impact: 'Benchmarked W4A16, W8A8, SmoothQuant, and GPTQ to balance latency, memory, and accuracy on MMLU/GSM8K.',
    stack: ['DeepSeek-R1', 'vLLM', 'SmoothQuant', 'GPTQ', 'PyTorch', 'MMLU', 'GSM8K'],
    links: [
      { label: 'Download Report', url: '/DeepSeek-Lite-Report.pdf', download: true },
    ],
  },
  {
    name: 'Automated Weather Data ETL Pipeline',
    timeframe: 'Feb 2025 – Mar 2025',
    summary:
      'Apache Airflow DAGs on EC2 that pull, transform, and land Chicago weather snapshots into S3 every day.',
    impact:
      'Cut manual effort by 100% with automated ETL plus hardened Airflow infrastructure on Ubuntu, IAM-securing uploads.',
    stack: ['Apache Airflow', 'AWS EC2', 'AWS S3', 'Python', 'Pandas', 'OpenWeatherMap'],
    links: [{ label: 'GitHub', url: 'https://github.com/Pradeep-18062002/Apache-airflow' }],
  },
]

const openSource: OpenSource[] = [
  {
    project: 'TensorRT-LLM',
    org: 'NVIDIA',
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
  { title: 'Advanced Machine Learning', code: 'CS 512' },
  { title: 'Big Data Mining', code: 'CS 483' },
  { title: 'Computer Algorithms I', code: 'CS 401' },
  { title: 'Energy-Efficient Deep Learning', code: 'CS 594' },
  { title: 'Natural Language Processing', code: 'CS 421' },
  { title: 'Neural Networks', code: 'CS 559' },
  { title: 'Socially Responsible AI', code: 'CS 517' },
]

const volunteering: Volunteer[] = [
  {
    org: 'Youth Red Cross • SVCE Unit',
    role: 'Student Member',
    period: 'Oct 2020 – May 2024',
    focus: 'Social services, wellness advocacy, and logistics management.',
    bullets: [
      'Led 10+ environmental programs, boosting recycling participation by 30%.',
      'Organized traffic safety campaigns that reached 500+ residents and cut violations by 15%.',
      'Ran yoga awareness sessions for 200+ attendees, fueling a 25% lift in enrollments.',
      'Coordinated logistics for 3 large community drives with 95% participant satisfaction.',
      'Mentored 50+ volunteers, raising social initiative participation by 40%.',
    ],
  },
]

const skills = [
  {
    title: 'AI / ML',
    items: [
      'PyTorch',
      'Transformers',
      'TensorFlow',
      'CNN & RNN',
      'Generative Models',
      'OpenAI & Whisper',
    ],
  },
  {
    title: 'LLM Systems',
    items: ['Axolotl', 'LoRA / QLoRA', 'BitsAndBytes', 'PEFT', 'LangChain', 'LangGraph', 'CrewAI'],
  },
  {
    title: 'Product Engineering',
    items: ['Node.js', 'Express', 'React', 'Angular', 'AWS', 'Airflow', 'Vercel'],
  },
  {
    title: 'Data & Infra',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Astra DB',
      'ChromaDB',
      'Pinecone',
      'Power BI',
    ],
  },
]

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'pradeepraj18062002@gmail.com',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=pradeepraj18062002@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/pradeepraj-p',
    url: 'https://www.linkedin.com/in/pradeepraj-p/',
  },
  {
    label: 'GitHub',
    value: 'github.com/Pradeep-18062002',
    url: 'https://github.com/Pradeep-18062002',
  },
  { label: 'Phone', value: '+1 312 998-3116' },
]

const heroBadges = heroHighlights
  .map(
    (item) => `
    <div class="hero-badge">
      <p class="eyebrow">${item.label}</p>
      <p>${item.detail}</p>
    </div>
  `,
  )
  .join('')

const experienceBlocks = experiences
  .map(
    (exp) => `
    <article class="experience-card">
      <div class="experience-heading">
        <div>
          <h3>${exp.role}</h3>
          <p class="company">${exp.company} • ${exp.location}</p>
        </div>
        <p class="period">${exp.period}</p>
      </div>
      <p class="impact">${exp.impact}</p>
      <ul>
        ${exp.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
      </ul>
    </article>
  `,
  )
  .join('')

const projectCards = projects
  .map(
    (project) => `
    <article class="project-card">
      <div class="project-header">
        <h3>${project.name}</h3>
        <span>${project.timeframe}</span>
      </div>
      <p class="summary">${project.summary}</p>
      <p class="impact">${project.impact}</p>
      <div class="badge-row">
        ${project.stack.map((tech) => `<span>${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.links
          .map(
            (link) => {
              const attrs = link.download ? 'download' : 'target="_blank" rel="noreferrer"'
              return `<a href="${link.url}" ${attrs}>${link.label}</a>`
            },
          )
          .join('')}
      </div>
    </article>
  `,
  )
  .join('')

const educationCards = education
  .map(
    (ed) => `
    <article class="education-card">
      <div>
        <h3>${ed.school}</h3>
        <p class="location">${ed.location}</p>
      </div>
      <div>
        <p class="degree">${ed.degree}</p>
        <p class="period">${ed.period}</p>
      </div>
    </article>
  `,
  )
  .join('')

const skillColumns = skills
  .map(
    (category) => `
    <article class="skill-card">
      <h3>${category.title}</h3>
      <ul>
        ${category.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `,
  )
  .join('')

const contactCards = contactLinks
  .map(
    (link) => {
      if (link.url) {
        return `
        <a class="contact-card" href="${link.url}" target="_blank" rel="noreferrer">
          <p class="eyebrow">${link.label}</p>
          <p>${link.value}</p>
        </a>
      `
      }

      return `
        <div class="contact-card">
          <p class="eyebrow">${link.label}</p>
          <p>${link.value}</p>
        </div>
      `
    },
  )
  .join('')

const openSourceCards = openSource
  .map(
    (item) => `
    <article class="open-source-card">
      <div class="open-source-header">
        <div>
          <p class="eyebrow">${item.org}</p>
          <h3>${item.project}</h3>
        </div>
        <a href="${item.link}" target="_blank" rel="noreferrer">View PR</a>
      </div>
      <p class="summary">${item.summary}</p>
      <ul>
        ${item.details.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </article>
  `,
  )
  .join('')

const courseCards = courses
  .map(
    (course) => `
    <article class="course-card">
      <h3>${course.title}</h3>
      <p class="code">${course.code}</p>
    </article>
  `,
  )
  .join('')

const volunteeringCards = volunteering
  .map(
    (item) => `
    <article class="volunteer-card">
      <div class="volunteer-header">
        <div>
          <p class="eyebrow">${item.org}</p>
          <h3>${item.role}</h3>
        </div>
        <p class="period">${item.period}</p>
      </div>
      <p class="summary">${item.focus}</p>
      <ul>
        ${item.bullets.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </article>
  `,
  )
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page-shell">
    <header class="hero" id="top">
      <nav class="nav">
        <span class="logo-mark">PR</span>
        <div class="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          class="primary-btn"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=pradeepraj18062002@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Let’s talk
        </a>
      </nav>
      <div class="hero-layout">
        <div class="hero-content">
          <p class="eyebrow">AI Engineer • Chicago, IL</p>
          <h1 class="hero-name">Pradeep Raj Prabhu Raj</h1>
          <p class="lead">
            AI/ML developer building resilient agentic systems, LLM-powered products,
            and intelligent data platforms that move business metrics in production.
          </p>
          <div class="hero-cta">
            <a class="primary-btn" href="#projects">View work</a>
            <a
              class="ghost-btn"
              href="/Pradeep-Raj-Prabhu-Raj-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
          <div class="hero-grid">
            ${heroBadges}
          </div>
        </div>
        <div class="hero-photo">
          <img src="/profile.png" alt="Portrait of Pradeep Raj Prabhu Raj" />
        </div>
    </div>
    </header>

    <main>
      <section class="section about" id="about">
        <div class="section-heading">
          <p class="eyebrow">About</p>
          <h2>Let’s build something great.</h2>
          <p>
            I am a Master’s student in Computer Science at the University of Illinois Chicago with
            a solid foundation in software development, machine learning, and AI. My academic
            journey and professional experiences revolve around solving real-world problems through
            innovative technology.
          </p>
          <div class="about-connect">
            <p class="eyebrow">Let’s connect</p>
            <p>
              Whether you want to chat about cutting-edge AI or collaborate on a new build, feel free
              to reach out.
            </p>
            <a href="mailto:pradeepraj18062002@gmail.com">pradeepraj18062002@gmail.com</a>
          </div>
        </div>
      </section>

      <section class="section experience" id="experience">
        <div class="section-heading">
          <p class="eyebrow">Experience</p>
          <h2>Transforming AI research into live products</h2>
        </div>
        <div class="timeline">
          ${experienceBlocks}
        </div>
      </section>

      <section class="section projects" id="projects">
        <div class="section-heading">
          <p class="eyebrow">Projects</p>
          <h2>Projects I’ve shipped</h2>
        </div>
        <div class="project-grid">
          ${projectCards}
        </div>
      </section>

      <section class="section skills" id="skills">
        <div class="section-heading">
          <p class="eyebrow">Skills</p>
          <h2>Full-stack AI delivery</h2>
        </div>
        <div class="skill-grid">
          ${skillColumns}
        </div>
      </section>

      <section class="section open-source" id="open-source">
        <div class="section-heading">
          <p class="eyebrow">Open Source</p>
          <h2>Open-source contributions</h2>
          <p>Shipped fixes and reviews that kept high-impact AI infrastructure projects stable.</p>
        </div>
        <div class="open-source-grid">
          ${openSourceCards}
        </div>
      </section>

      <section class="section education" id="education">
        <div class="section-heading">
          <p class="eyebrow">Education</p>
          <h2>Academic foundation</h2>
        </div>
        <div class="education-grid">
          ${educationCards}
        </div>
      </section>

      <section class="section courses" id="courses">
        <div class="section-heading">
          <p class="eyebrow">Coursework</p>
          <h2>Coursework at UIC</h2>
          <p>Selected technical depth areas from my Master’s program.</p>
        </div>
        <div class="course-grid">
          ${courseCards}
        </div>
      </section>

      <section class="section volunteering" id="volunteering">
        <div class="section-heading">
          <p class="eyebrow">Volunteering</p>
          <h2>Community leadership</h2>
          <p>Driving social impact initiatives alongside academic and professional work.</p>
        </div>
        <div class="volunteer-grid">
          ${volunteeringCards}
        </div>
      </section>

      <section class="section contact" id="contact">
        <div class="section-heading">
          <p class="eyebrow">Contact</p>
          <h2>Let’s build together</h2>
          <p>Available for internships, research collaborations, full-time AI engineering, and SDE roles.</p>
        </div>
        <div class="contact-grid">
          ${contactCards}
        </div>
      </section>
    </main>

    <footer>
      <p>© ${new Date().getFullYear()} Pradeep Raj Prabhu Raj • Built with Vite + TypeScript</p>
    </footer>
  </div>
`
