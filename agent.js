/**
 * Mamoor's Portfolio AI Agent
 * A smart chatbot that answers questions about projects, services, pricing, and contact info.
 */
(function() {
  'use strict';

  // ── Knowledge Base ──────────────────────────────────────────────
  const KB = {
    owner: 'Mamoor Ahmad',
    role: 'AI & Full-Stack Developer',
    location: 'Pakistan',
    experience: '2+ years',
    projectsShipped: '28+',

    services: [
      { name: 'AI Agent Systems', price: '$2,000', techs: 'Python, A2A, MCP, OpenAI', desc: 'Custom autonomous agents for customer support, sales outreach, data analysis, multi-agent orchestration.' },
      { name: 'SaaS MVP Development', price: '$3,000', techs: 'TypeScript, Next.js, PostgreSQL, Stripe', desc: 'From idea to production-ready SaaS with auth, payments, dashboard, and deployment.' },
      { name: 'Chrome Extensions', price: '$1,500', techs: 'JavaScript, Chrome APIs, REST, WebSockets', desc: 'Browser extensions, API integrations, and automation tools.' },
      { name: 'Data & Visualization', price: '$1,500', techs: 'Python, D3.js, Charts, APIs', desc: 'Custom dashboards, chart generators, and data analysis tools.' },
      { name: 'Climate & ESG Solutions', price: '$2,000', techs: 'NASA Data, Shopify, Blockchain, ESG', desc: 'Carbon tracking, sustainability badges, ESG reporting tools.' },
      { name: 'Custom Development', price: 'Let\'s discuss', techs: 'TypeScript, Python, React, Node.js', desc: 'Anything from landing pages to complex full-stack applications.' }
    ],

    projects: [
      { name: 'HiveOps', cat: 'ai', desc: 'AI-Powered Company Operating System — automate business operations through intelligent agents. 9 GitHub stars.', link: 'https://github.com/mamoor123/hiveops', status: 'Open Source', featured: true,
        detail: 'HiveOps is Mamoor\'s flagship project — a full company operating system powered by AI agents. It automates HR, finance, project management, and team coordination through a multi-agent architecture. Built with JavaScript, it uses a central orchestrator agent that delegates tasks to specialized sub-agents. The biggest challenge was designing reliable agent-to-agent communication without losing context. 9 GitHub stars make it the most popular project in his portfolio.' },
      { name: 'ClawForge', cat: 'tools', desc: 'Multi-Agent Dev Team on OpenClaw — autonomous plan → build → review → test → deploy pipeline.', link: 'https://github.com/mamoor123/clawforge', status: 'Open Source',
        detail: 'ClawForge automates the entire software development lifecycle. Five specialized agents — Planner, Builder, Reviewer, Tester, and Deployer — work in sequence. Each agent passes structured context to the next. Built in TypeScript on the OpenClaw platform, it handles git branching, PR creation, CI/CD triggers, and rollback automatically. The key challenge was maintaining context coherence across a 5-step agent pipeline.' },
      { name: 'AgentDNA', cat: 'ai', desc: 'DNS for AI Agents — Discovery, Trust & Marketplace. The missing layer between A2A and your agents.', link: 'https://github.com/mamoor123/agentdna', status: 'Open Source',
        detail: 'AgentDNA solves the discovery problem for AI agents. Just like DNS maps domain names to servers, AgentDNA maps agent capabilities to trust scores and metadata. Built with Python, it implements the A2A (Agent-to-Agent) and MCP (Model Context Protocol) standards. Agents register their capabilities, and consumers can discover and evaluate them through a trust marketplace. The hardest part was designing a trust scoring system that can\'t be gamed.' },
      { name: 'Planetary Pulse', cat: 'climate', desc: 'AI-Powered Earth Dashboard with real-time climate data visualization.', link: 'https://planetary-pulse.vercel.app', status: 'Live', featured: true,
        detail: 'Planetary Pulse is a real-time climate dashboard that visualizes Earth data from NASA, NOAA, and other sources. It features Gemini AI for natural language queries about climate data, Snowflake for data warehousing, Auth0 for authentication, and Solana blockchain for carbon credit tracking. Built with JavaScript and deployed on Vercel. The biggest challenge was processing and rendering millions of data points without killing browser performance.' },
      { name: 'Carbon Fingerprint', cat: 'climate', desc: 'Discover your climate identity powered by 144 years of NASA/NOAA data.', link: 'https://github.com/mamoor123/CARBON-FINGERPRINT', status: 'Open Source',
        detail: 'Carbon Fingerprint lets users calculate their personal carbon footprint using 144 years of historical NASA and NOAA climate data. It integrates Solana blockchain for transparent carbon offset tracking. Built with HTML/CSS/JS, it processes massive CSV datasets client-side using Web Workers. The challenge was making 144 years of data interactive and understandable for non-scientists.' },
      { name: 'GitCourt', cat: 'ai', desc: 'Three AI agents debate your Pull Request. The Judge delivers the verdict.', link: 'https://github.com/mamoor123/gitcourt', status: 'Open Source',
        detail: 'GitCourt reimagines code review with AI. Three agents — the Prosecutor (finds bugs), the Defender (argues the code is fine), and the Judge (delivers a verdict) — debate your PR in real-time. Built with Python using OpenAI, it integrates with GitHub webhooks. Each agent has a distinct personality and evaluation criteria. The fun challenge was making the Judge fair — it needed to weigh both sides without bias toward either agent.' },
      { name: 'DataWhisper', cat: 'ai', desc: 'Chat with your data — upload any file and ask questions in plain English.', link: 'https://github.com/mamoor123/datawhisper', status: 'Open Source',
        detail: 'DataWhisper lets users upload CSV, JSON, Excel, or PDF files and ask questions in natural language. It uses NLP to parse questions, generate SQL-like queries against the uploaded data, and return formatted answers with charts. Built with Python, it handles file parsing, data type inference, and query generation automatically. The key challenge was handling messy real-world data with missing values, inconsistent formats, and ambiguous column names.' },
      { name: 'EasyForm', cat: 'saas', desc: 'Modern form builder SaaS — create, share, and analyze forms.', link: 'https://easyform-two.vercel.app', status: 'Live',
        detail: 'EasyForm is a full-stack SaaS form builder — think Typeform meets Google Forms. Users create forms with drag-and-drop, share via link, and analyze responses in real-time. Built with TypeScript, Next.js, PostgreSQL, and Stripe for payments. Features include conditional logic, file uploads, response analytics, and webhook integrations. The hardest part was building a form renderer that handles 20+ field types with validation and conditional logic.' },
      { name: 'AI SDR Agent', cat: 'ai', desc: 'Autonomous AI Sales Development Representative — prospects, qualifies, and books meetings.', link: 'https://github.com/mamoor123/ai-sdr-agent', status: 'Private',
        detail: 'The AI SDR Agent automates the entire sales outreach pipeline. It scrapes prospect data, scores leads based on ICP (Ideal Customer Profile), writes personalized outreach messages, handles objections, and books meetings on autopilot. Built with TypeScript, it integrates with CRM APIs, email services, and calendar tools. The challenge was making outreach feel human, not robotic — the agent uses conversation context to personalize every message.' },
      { name: 'LinkedIn Recruiter Extension', cat: 'ai', desc: 'AI-powered Chrome extension for candidate sourcing and pipeline management.', link: 'https://github.com/mamoor123/LinkedIn-Recruiter-Extension', status: 'Private',
        detail: 'An AI-powered Chrome extension that helps recruiters source candidates directly from LinkedIn. It auto-saves profile data, analyzes candidate fit against job requirements, drafts personalized outreach messages, and manages the recruitment pipeline — all without leaving LinkedIn. Built with JavaScript and Chrome APIs. Used by 500+ recruiters daily. The challenge was working within LinkedIn\'s DOM structure which changes frequently.' },
      { name: 'ChartForge', cat: 'tools', desc: 'Publication-quality chart generator — upload data, customize, export PNG/SVG.', link: 'https://github.com/mamoor123/chartforge', status: 'Open Source',
        detail: 'ChartForge generates publication-ready charts from raw data. Users upload CSV/JSON, choose from 12+ chart types (line, bar, scatter, heatmap, etc.), customize colors/fonts/labels, and export as PNG or SVG. Built with Python and D3.js-inspired rendering. The challenge was making charts that look good in academic papers and business reports — proper typography, color theory, and export at 300+ DPI.' },
      { name: 'ForgeSquad', cat: 'tools', desc: 'Multi-agent dev team orchestrator — 5 agents, one pipeline.', link: 'https://github.com/mamoor123/forgesquad', status: 'Open Source',
        detail: 'ForgeSquad orchestrates 5 specialized AI agents into a single development pipeline: Architect, Coder, Reviewer, Tester, and DevOps. Each agent has isolated context but shares a structured state object. Built with TypeScript, it includes retry logic, error recovery, and human-in-the-loop checkpoints. The main challenge was preventing agent "hallucination cascades" where one bad output poisons the entire pipeline.' },
      { name: 'My Trade SaaS', cat: 'saas', desc: 'Full-stack trading platform with PostgreSQL and real-time data. 1.2MB+ codebase.', link: 'https://my-trade-saas.vercel.app', status: 'Live',
        detail: 'My Trade SaaS is the largest codebase in Mamoor\'s portfolio at 1.2MB+. It\'s a full trading platform with real-time market data, portfolio management, trade execution, and P&L tracking. Built with TypeScript, Next.js, and PostgreSQL. Features WebSocket connections for live price feeds, complex order types, and a responsive dashboard. The challenge was handling real-time data at scale without overwhelming the browser.' },
      { name: 'ReviewReply', cat: 'saas', desc: 'AI-powered Google review reply tool for local businesses.', link: 'https://github.com/mamoor123/reviewreply', status: 'Private',
        detail: 'ReviewReply auto-generates professional responses to Google reviews for local businesses. It analyzes review sentiment, extracts key points, and crafts personalized replies that match the business\'s tone. Built with JavaScript and Google My Business API. The challenge was generating replies that feel authentic — not template-based — while maintaining a consistent brand voice across hundreds of reviews.' },
      { name: 'SnapPost', cat: 'tools', desc: 'Screenshot to beautiful social media post generator.', link: 'https://github.com/mamoor123/snap-post', status: 'Open Source',
        detail: 'SnapPost transforms boring screenshots into beautiful social media cards. Users upload a screenshot, choose a template, add backgrounds, shadows, and branding, then export a share-ready image. Built with pure CSS, HTML, and JavaScript — no frameworks. The challenge was making the canvas rendering pixel-perfect across different screen sizes and browsers while keeping the tool lightweight.' },
      { name: 'ESG Shield', cat: 'climate', desc: 'One-Click ESG Reports for Shopify Stores.', link: 'https://github.com/mamoor123/esg-shield', status: 'Private',
        detail: 'ESG Shield generates Environmental, Social, and Governance (ESG) compliance reports for Shopify stores with one click. It pulls store data, calculates carbon footprint, assesses supply chain impact, and generates a formatted report that meets EU ESG standards. Built with JavaScript and Shopify API. The challenge was mapping Shopify store data to ESG metrics — product shipping distances, packaging materials, energy usage — all from limited API data.' },
      { name: 'Green Profile', cat: 'climate', desc: 'One-click sustainability badge for Shopify stores.', link: 'https://github.com/mamoor123/green-profile', status: 'Private',
        detail: 'Green Profile lets Shopify stores display a verified sustainability badge on their storefront. It calculates environmental impact based on product materials, shipping methods, and packaging, then generates a badge with a trust score. Built with TypeScript and Shopify API. The challenge was creating a scoring algorithm that\'s fair, transparent, and hard to fake — stores can\'t just buy a better score.' },
      { name: 'BioLink AI', cat: 'saas', desc: 'AI-powered Bio Link & Portfolio Builder SaaS with analytics.', link: 'https://github.com/mamoor123/biolink-ai', status: 'Private',
        detail: 'BioLink AI is a Linktree-style SaaS with AI superpowers. Users create a bio link page, and the AI suggests layout improvements, generates bio text, and optimizes link ordering based on click analytics. Built with TypeScript and Next.js. Features include custom domains, theme templates, click heatmaps, and A/B testing for links. The challenge was building an AI suggestion engine that gives genuinely useful advice, not generic tips.' },
      { name: 'ScreenSync', cat: 'tools', desc: 'Chrome extension: highlight any name → instantly check OFAC, EU, UN sanctions lists.', link: 'https://github.com/mamoor123/screensync-v1', status: 'Private',
        detail: 'ScreenSync is a compliance tool for finance and legal teams. Highlight any person or company name on any webpage, and ScreenSync instantly checks against OFAC (US), EU, and UN sanctions lists. Results appear in a popup with match confidence scores. Built with JavaScript and Chrome APIs. The challenge was making fuzzy name matching fast and accurate — "Mohammed" vs "Muhammad" vs "Mohamed" all need to match correctly.' },
      { name: 'Proposal Generator', cat: 'saas', desc: 'Freelancer Proposal Generator — Questions → PDF → Stripe Link.', link: 'https://github.com/mamoor123/proposal-generator', status: 'Private',
        detail: 'The Proposal Generator automates freelancer proposals. Answer a few questions about the project scope, timeline, and budget, and it generates a professional PDF proposal with your branding and a Stripe payment link. Built with TypeScript, it includes template customization, auto-pricing suggestions based on project complexity, and proposal tracking. The challenge was making proposals that look like they took hours to write, not seconds.' },
      { name: 'HS Code Classifier', cat: 'saas', desc: 'Instant HS code classification API — 50+ countries, pay-per-call.', link: 'https://github.com/mamoor123/hs-code-classifier', status: 'Private',
        detail: 'The HS Code Classifier is an API that classifies products into Harmonized System (HS) codes for international trade. It supports 50+ countries and handles batch processing. Built with JavaScript, it uses NLP to parse product descriptions and match them to the correct 6-10 digit HS code. The challenge was accuracy — a wrong HS code means wrong tariffs, delays, or legal issues. The classifier achieves 94%+ accuracy on first attempt.' },
      { name: 'CBAM Bridge', cat: 'climate', desc: 'Global compliance tool for non-EU exporters. EU Carbon Border Adjustment Mechanism.', link: 'https://github.com/mamoor123/cbam-bridge', status: 'Private',
        detail: 'CBAM Bridge helps non-EU exporters comply with the EU Carbon Border Adjustment Mechanism. It calculates embedded carbon in products, generates CBAM reports, and handles HS code mapping across 50+ countries. Built with Python, it processes complex supply chain data and maps it to EU CBAM categories. The challenge was translating non-EU manufacturing processes into EU-compatible carbon calculations.' },
      { name: 'Dead Serious', cat: 'other', desc: 'Enterprise-grade error messages for developers. 😂', link: 'https://github.com/mamoor123/dead-serious', status: 'Open Source',
        detail: 'Dead Serious is a humor project that replaces boring error messages with dramatic, enterprise-grade ones. Instead of "File not found", you get "CRITICAL: The file you seek has departed this mortal plane." Built with JavaScript, it\'s a lightweight npm package. Got 1 GitHub star and made people laugh. The challenge was making error messages that are funny but still actually helpful for debugging.' },
      { name: 'ReverseSearch Engine', cat: 'saas', desc: 'Users declare intent, creators fulfill. A marketplace where demand drives supply.', link: 'https://github.com/mamoor123/ReverseSearch-Engine', status: 'Private',
        detail: 'ReverseSearch flips the marketplace model — instead of sellers listing and buyers searching, buyers post what they need and sellers compete to fulfill. Built with TypeScript and PostgreSQL, it includes intent parsing, matching algorithms, and a bidding system. The challenge was designing a matching algorithm that connects the right sellers to the right buyers without overwhelming either side with noise.' },
      { name: 'AgentDNA Luxury Prototype', cat: 'ai', desc: 'Luxury Concierge Prototype for high-end brands.', link: 'https://github.com/mamoor123/agentdna_luxury_prototype', status: 'Private',
        detail: 'A prototype AI concierge for luxury brands. The agent handles VIP customer requests — restaurant reservations, travel planning, product recommendations — with the sophistication expected by high-end clientele. Built with Python and OpenAI, it maintains conversation context across sessions and learns customer preferences over time. The challenge was tuning the AI\'s tone to match luxury brand standards — formal but warm, knowledgeable but not pushy.' },
      { name: 'AI Support Agent', cat: 'ai', desc: 'AI Customer Support Agent — Python backend, TypeScript frontend.', link: 'https://github.com/mamoor123/ai-support-agent', status: 'Private',
        detail: 'A full-stack AI customer support agent with a Python backend and TypeScript frontend. It handles multi-turn conversations, escalates to humans when needed, and learns from past tickets. Features include sentiment analysis, auto-tagging, and response time tracking. The challenge was building escalation logic that knows when to hand off to a human — too early wastes agent capacity, too late frustrates customers.' },
      { name: 'ClawForge URL Shortener', cat: 'tools', desc: 'URL shortener with click analytics.', link: 'https://github.com/mamoor123/clawforge-url-shortener', status: 'Open Source',
        detail: 'A URL shortener with built-in click analytics — track clicks by location, device, referrer, and time. Built with TypeScript as a ClawForge deployment demo. Features include custom short codes, QR code generation, and click heatmaps. The challenge was handling viral traffic spikes without losing analytics data or slowing down redirects.' },
      { name: 'Firecrawl OpenClaw Tool', cat: 'tools', desc: 'Deep-level web scraping for OpenClaw.', link: 'https://github.com/mamoor123/firecrawl-openclaw-tool', status: 'Open Source',
        detail: 'A web scraping tool built for the OpenClaw platform, powered by Firecrawl. It handles JavaScript-rendered pages, extracts structured data, follows pagination, and respects robots.txt. Built with JavaScript, it outputs clean markdown or JSON. The challenge was handling the diversity of the modern web — SPAs, infinite scroll, lazy loading, anti-bot measures — while staying fast and respectful.' }
    ],

    // ── FAQ / Policies ──────────────────────────────────────────
    faq: {
      revisions: 'Mamoor offers **unlimited revisions** during the first 7 days after delivery. After that, revisions are handled as a separate task at a fair hourly rate. He wants you to be 100% happy with the result.',
      payment: 'Payment is split into **two parts**: 50% upfront to start, 50% on delivery. For larger projects (over $5,000), he offers milestone-based payments. He accepts bank transfer, Wise, and crypto.',
      nda: 'Yes, Mamoor is happy to sign an **NDA** before discussing your project. Many of his clients are private — that\'s why 14 of his 28 projects are private repos. Your idea stays safe.',
      communication: 'Mamoor communicates via **WhatsApp** (preferred — fastest response, usually within 1 hour), **email**, or **video calls** for kickoffs and demos. He provides daily progress updates during active projects.',
      timezone: 'Mamoor is in **Pakistan (GMT+5)** but works with clients worldwide — US, EU, Middle East, Australia. He\'s flexible with meeting times and ensures overlap with your working hours.',
      guarantee: 'If you\'re not happy with the work, Mamoor will **revise until you are** or offer a **partial refund** for undelivered milestones. He has a 100% client satisfaction rate across 30+ reviews.',
      whyHire: 'Mamoor has shipped **28+ projects in 2+ years** — that\'s one project every 4 weeks. He builds fast, communicates clearly, and focuses on solving your problem, not showing off code. His clients stay because he treats their projects like his own.',
      difference: 'What sets Mamoor apart: **speed** (ships in weeks, not months), **communication** (daily updates, no black boxes), **versatility** (AI agents to Shopify apps), and **ownership** (he doesn\'t just code — he understands your business problem first).',
      whatToExpect: 'Here\'s what working with Mamoor looks like:\n\n1. **Discovery call** (30 min) — you explain the problem\n2. **Proposal** (within 24h) — scope, timeline, price\n3. **Kickoff** — architecture review, first milestone plan\n4. **Build** — daily updates, regular demos\n5. **Delivery** — tested, documented, deployed\n6. **Support** — 7 days free revisions, then ongoing support available'
    }

    techStack: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AI/LLMs', 'Docker', 'Vercel', 'REST APIs', 'Chrome Extensions', 'Stripe', 'Git/CI-CD', 'Data Visualization'],

    contact: {
      email: 'mamoor.ahmed86@gmail.com',
      whatsapp: '+92 327 9858009',
      waLink: 'https://wa.me/923279858009',
      github: 'https://github.com/mamoor123',
      linkedin: 'https://www.linkedin.com/in/mamoor-ahmad-4090a726a'
    },

    reviews: {
      platforms: ['WhatsApp', 'Fiverr (5.0)', 'Upwork (Top Rated Plus)', 'LinkedIn (5.0)', 'Google (4.9)', 'Trustpilot (Excellent)'],
      satisfaction: '100%',
      totalReviews: '30+',
      avgRating: '5.0'
    }
  };

  // ── Intent Matching ─────────────────────────────────────────────
  const intents = [
    {
      patterns: [/^(hi|hello|hey|sup|yo|hola|salam|assalam)/i],
      replies: [
        `Hey! 👋 I'm Mamoor's portfolio assistant. I can tell you about his projects, services, pricing, or tech stack. What interests you?`,
        `Hello! Welcome to Mamoor's portfolio. Ask me anything — projects, services, pricing, or how to get in touch. What would you like to know?`,
        `Hi there! 🚀 I can help you explore Mamoor's work. Want to see projects, learn about services, or discuss pricing?`
      ]
    },
    {
      patterns: [/who.*(mamoor|he|you|this)/i, /about.*(mamoor|him|developer)/i, /tell.*about/i, /who.*are.*you/i],
      replies: [`Mamoor Ahmad is a full-stack developer from Pakistan 🇵🇰 with 2+ years of experience. He's shipped 28+ projects — from autonomous AI agent systems to SaaS platforms, climate tech, and Chrome extensions. His approach: understand the problem, build the simplest solution, ship fast. Want to see his <a href="#projects" class="agent-link">projects</a> or <a href="#services" class="agent-link">services</a>?`]
    },
    {
      patterns: [/service|offer|build|what.*can.*he.*do|what.*do.*you.*do|what.*you.*offer/i],
      replies: [`Mamoor offers 6 services:\n\n🧠 **AI Agent Systems** — from $2,000\n🚀 **SaaS MVP Development** — from $3,000\n🔗 **Chrome Extensions** — from $1,500\n📊 **Data & Visualization** — from $1,500\n🌍 **Climate & ESG Solutions** — from $2,000\n🛠️ **Custom Development** — let's discuss\n\nWhich one interests you? I can go deeper on any of them.`]
    },
    {
      patterns: [/price|pricing|cost|how.*much|rate|budget|charge|fee/i],
      replies: [`Here's Mamoor's pricing:\n\n• **AI Agent Systems** — from $2,000\n• **SaaS MVP Development** — from $3,000\n• **Chrome Extensions** — from $1,500\n• **Data & Visualization** — from $1,500\n• **Climate & ESG** — from $2,000\n• **Custom** — let's discuss\n\nEvery project is custom-built. Want to discuss your project? <a href="https://wa.me/923279858009?text=Hi%20Mamoor%2C%20I%20want%20to%20discuss%20pricing." target="_blank" class="agent-link">💬 WhatsApp</a>`]
    },
    {
      patterns: [/project|portfolio|work|built|show.*me|what.*has.*he.*built/i],
      replies: [`Mamoor has shipped 28+ projects! Here are some highlights:\n\n🐝 **HiveOps** — AI Company OS (⭐ 9 stars)\n🧬 **AgentDNA** — DNS for AI Agents\n🌍 **Planetary Pulse** — Earth Dashboard\n⚖️ **GitCourt** — AI Code Review\n💬 **DataWhisper** — Chat with your data\n📝 **EasyForm** — Form Builder SaaS\n\nWant to see them all? Check the <a href="#projects" class="agent-link">full project list</a>.`]
    },
    {
      patterns: [/ai.*agent|agent.*system|multi.*agent|autonomous/i],
      replies: [`AI agents are Mamoor's specialty! Key projects:\n\n🐝 **HiveOps** — AI Company OS that automates entire business operations (9 ⭐)\n🧬 **AgentDNA** — Discovery & trust layer for AI agents\n⚖️ **GitCourt** — 3 AI agents debate your PR\n🤖 **AI SDR Agent** — Autonomous sales rep\n\nHe builds with Python, A2A, MCP, and OpenAI. Starting from **$2,000**. Want to discuss an AI agent project?`]
    },
    {
      patterns: [/saas|mvp|product|platform/i],
      replies: [`Mamoor has built several SaaS products:\n\n📝 **EasyForm** — Form builder (Live)\n📈 **My Trade SaaS** — Trading platform (Live)\n🔗 **BioLink AI** — Portfolio builder\n📄 **Proposal Generator** — Questions → PDF → Stripe\n\nSaaS MVPs start from **$3,000** — auth, payments, dashboard, deployment. Ship in weeks, not months. Want to talk about your SaaS idea?`]
    },
    {
      patterns: [/chrome.*ext|extension|browser/i],
      replies: [`Mamoor builds Chrome extensions:\n\n🎯 **LinkedIn Recruiter** — AI candidate sourcing\n🔎 **ScreenSync** — Sanctions list checker\n🕷️ **Firecrawl Tool** — Web scraping for OpenClaw\n\nExtensions start from **$1,500**. What extension do you need?`]
    },
    {
      patterns: [/climate|esg|carbon|green|sustainability|environment/i],
      replies: [`Climate tech is a passion for Mamoor:\n\n🌍 **Planetary Pulse** — AI Earth Dashboard\n🌱 **Carbon Fingerprint** — 144 years of NASA data\n🛡️ **ESG Shield** — One-click Shopify reports\n🌿 **Green Profile** — Sustainability badge\n🌉 **CBAM Bridge** — EU compliance tool\n\nClimate solutions start from **$2,000**.`]
    },
    {
      patterns: [/tech.*stack|technology|tools|language|framework|stack/i],
      replies: [`Mamoor's tech stack:\n\n**Expert:** JavaScript, TypeScript, Python, React, Tailwind CSS, REST APIs, Git\n**Advanced:** Next.js, Node.js, PostgreSQL, AI/LLMs, Chrome Extensions, Stripe, Data Viz\n**Intermediate:** Docker\n\nHe picks the right tool for the job, not just his favorite. What's your project about?`]
    },
    {
      patterns: [/contact|reach|hire|email|whatsapp|phone|get.*in.*touch|connect/i],
      replies: [`Let's connect! Here are all the ways to reach Mamoor:\n\n✉️ **Email:** <a href="mailto:mamoor.ahmed86@gmail.com" class="agent-link">mamoor.ahmed86@gmail.com</a>\n💬 **WhatsApp:** <a href="https://wa.me/923279858009" target="_blank" class="agent-link">+92 327 9858009</a>\n💻 **GitHub:** <a href="https://github.com/mamoor123" target="_blank" class="agent-link">@mamoor123</a>\n💼 **LinkedIn:** <a href="https://www.linkedin.com/in/mamoor-ahmad-4090a726a" target="_blank" class="agent-link">Mamoor Ahmad</a>\n\nHe usually replies within 1 hour! 🚀`]
    },
    {
      patterns: [/review|testimonial|rating|feedback|trust|client/i],
      replies: [`Mamoor has stellar reviews across 6 platforms:\n\n⭐ **Fiverr** — 5.0 Rating\n⭐ **Upwork** — Top Rated Plus\n⭐ **LinkedIn** — 5.0 Recommendations\n⭐ **Google** — 4.9 Rating\n⭐ **Trustpilot** — Excellent\n💬 **WhatsApp** — Instant replies\n\n**100% client satisfaction** with 30+ five-star reviews. Check the <a href="#testimonials" class="agent-link">testimonials section</a>.`]
    },
    {
      patterns: [/process|how.*work|workflow|step|approach/i],
      replies: [`Mamoor's process is simple and proven:\n\n**01 — Discovery** → Understanding your goals and requirements\n**02 — Architecture** → Designing tech stack and data models\n**03 — Build & Iterate** → Rapid dev with regular check-ins\n**04 — Ship & Scale** → Deployment, monitoring, optimization\n\nNo black boxes, clear communication, fast iteration. Ready to start?`]
    },
    {
      patterns: [/time|timeline|how.*long|delivery|deadline|fast|quick/i],
      replies: [`Timeline depends on the project:\n\n• **Chrome Extension** — 1-2 weeks\n• **AI Agent System** — 2-3 weeks\n• **SaaS MVP** — 3-5 weeks\n• **Custom project** — let's discuss\n\nMamoor ships fast — 28+ projects in 2+ years. What's your timeline?`]
    },
    {
      patterns: [/open.*source|github|star|repo/i],
      replies: [`Many of Mamoor's projects are open source on GitHub:\n\n🐝 <a href="https://github.com/mamoor123/hiveops" target="_blank" class="agent-link">HiveOps</a> (⭐ 9)\n⚒️ <a href="https://github.com/mamoor123/clawforge" target="_blank" class="agent-link">ClawForge</a>\n🧬 <a href="https://github.com/mamoor123/agentdna" target="_blank" class="agent-link">AgentDNA</a>\n⚖️ <a href="https://github.com/mamoor123/gitcourt" target="_blank" class="agent-link">GitCourt</a>\n💬 <a href="https://github.com/mamoor123/datawhisper" target="_blank" class="agent-link">DataWhisper</a>\n📊 <a href="https://github.com/mamoor123/chartforge" target="_blank" class="agent-link">ChartForge</a>\n\nCheck out all repos at <a href="https://github.com/mamoor123" target="_blank" class="agent-link">github.com/mamoor123</a>`]
    },
    {
      patterns: [/experience|year|background|career/i],
      replies: [`Mamoor has been building for 2+ years (since 2023). In that time he's shipped 28+ projects across AI agents, SaaS, climate tech, and Chrome extensions. He's self-taught, ships fast, and believes in code that serves users — not code that impresses other developers.`]
    },
    {
      patterns: [/location|where|pakistan|country|timezone/i],
      replies: [`Mamoor is based in Pakistan 🇵🇰. He works with clients globally and is responsive across timezones. He usually replies within 1 hour on WhatsApp or email.`]
    },
    {
      patterns: [/available|hire.*now|freelance|ready|start/i],
      replies: [`Yes! Mamoor is **available for new projects** right now. 🟢\n\nThe best way to start is to <a href="https://wa.me/923279858009?text=Hi%20Mamoor%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" class="agent-link">WhatsApp him</a> with a brief description of what you need. He'll get back to you within 1 hour.`]
    },
    // ── FAQ Intents ──────────────────────────────────────────────
    {
      patterns: [/revision|revisi|change|fix.*after|edit.*after|redo/i],
      replies: [KB.faq.revisions]
    },
    {
      patterns: [/payment|pay|deposit|milestone|half.*upfront|how.*pay/i],
      replies: [KB.faq.payment]
    },
    {
      patterns: [/nda|confidential|non.*disclosure|secret|privacy|private/i],
      replies: [KB.faq.nda]
    },
    {
      patterns: [/communicate|communicat|update|report|how.*talk|how.*reach.*during|progress.*update/i],
      replies: [KB.faq.communication]
    },
    {
      patterns: [/timezone|time.*zone|gmt|utc|when.*available|working.*hour/i],
      replies: [KB.faq.timezone]
    },
    {
      patterns: [/guarantee|refund|money.*back|not.*happy|satisfaction|what.*if.*not.*work/i],
      replies: [KB.faq.guarantee]
    },
    {
      patterns: [/why.*hire|why.*choose|why.*mamoor|why.*him|reason.*to.*hire|what.*makes.*good/i],
      replies: [KB.faq.whyHire]
    },
    {
      patterns: [/different|differ|stand.*out|unique|special|better.*than|what.*sets.*apart|competitive/i],
      replies: [KB.faq.difference]
    },
    {
      patterns: [/what.*to.*expect|how.*does.*it.*work|what.*happen|start.*to.*finish|project.*flow|engagement.*process/i],
      replies: [KB.faq.whatToExpect]
    },
    // ── New Intents ─────────────────────────────────────────────
    {
      patterns: [/portfolio|showcase|best.*work|top.*project|highlight/i],
      replies: [`Here are Mamoor's top projects:\n\n🐝 **HiveOps** — AI Company OS (⭐ 9 stars, most starred)\n🌍 **Planetary Pulse** — Live Earth Dashboard\n📝 **EasyForm** — Live Form Builder SaaS\n🧬 **AgentDNA** — AI Agent Discovery Layer\n⚖️ **GitCourt** — AI Code Review (fun project!)\n💬 **DataWhisper** — Chat with any data\n\nAll 28+ projects are in the <a href="#projects" class="agent-link">projects section</a>. Want details on any specific one?`]
    },
    {
      patterns: [/best|top|strongest|impressive|coolest/i],
      replies: [`Mamoor's strongest projects:\n\n⭐ **HiveOps** — Most starred (9 ⭐), full AI company OS\n🌍 **Planetary Pulse** — Most complex (Gemini AI + Snowflake + Solana)\n📈 **My Trade SaaS** — Largest codebase (1.2MB+)\n🎯 **LinkedIn Recruiter** — Most impactful (500+ daily users)\n⚖️ **GitCourt** — Most creative (AI agents debating PRs)\n\nWhich one interests you most?`]
    },
    {
      patterns: [/help|assist|support|question|ask/i],
      replies: [`I can help you with:\n\n🏗️ **Projects** — "What has he built?"\n💼 **Services** — "What can he build?"\n💰 **Pricing** — "How much does it cost?"\n🛠️ **Tech Stack** — "What technologies?"\n📞 **Contact** — "How to reach him?"\n📋 **Process** — "How does he work?"\n⭐ **Reviews** — "What do clients say?"\n📜 **FAQ** — "Payment, revisions, NDA?"\n\nJust ask! 😊`]
    },
    {
      patterns: [/thank|thanks|thx|cheers|appreciate/i],
      replies: [`You're welcome! 😊 If you have more questions or want to start a project, <a href="https://wa.me/923279858009" target="_blank" class="agent-link">WhatsApp Mamoor</a> — he usually replies within 1 hour. 🚀`]
    },
    {
      patterns: [/bye|goodbye|see.*you|later|cya/i],
      replies: [`Goodbye! 👋 Thanks for checking out Mamoor's portfolio. If you need anything, <a href="https://wa.me/923279858009" target="_blank" class="agent-link">WhatsApp him</a> anytime. Have a great day! 🚀`]
    },
    {
      patterns: [/joke|funny|laugh|humor/i],
      replies: [`Here's one: Mamoor once shipped a project, and the client asked "can you also add AI?" — for a calculator app. 😂\n\nHe did it anyway. The calculator now has a "surprise me" button powered by GPT. <a href="https://github.com/mamoor123/dead-serious" target="_blank" class="agent-link">Dead Serious</a> is his humor project if you want more laughs.`]
    }
  ];

  // ── Fallback ────────────────────────────────────────────────────
  function getFallback() {
    const fallbacks = [
      `I'm not sure I understood that. I can help with:\n\n• **Projects** — "What has he built?"\n• **Services** — "What can he build?"\n• **Pricing** — "How much does it cost?"\n• **Contact** — "How to reach him?"\n• **Tech stack** — "What technologies?"\n• **FAQ** — "Payment, revisions, NDA?"\n\nTry one of those! 👆`,
      `Hmm, I didn't catch that. Ask me about:\n\n🏗️ Projects & portfolio\n💼 Services & pricing\n🛠️ Tech stack\n📞 Contact info\n📋 Process & FAQ\n\nOr just say hi!`,
      `I'm best at answering about Mamoor's work. Try asking about projects, services, pricing, process, or how to get in touch.`
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  // ── Match Intent ────────────────────────────────────────────────
  function matchIntent(text) {
    const lower = text.toLowerCase().trim();
    for (const intent of intents) {
      for (const pattern of intent.patterns) {
        if (pattern.test(lower)) {
          return intent.replies[Math.floor(Math.random() * intent.replies.length)];
        }
      }
    }
    // Check for project names
    for (const p of KB.projects) {
      if (lower.includes(p.name.toLowerCase())) {
        const status = p.status === 'Live' ? '🟢 Live' : p.status === 'Open Source' ? '📂 Open Source' : '🔒 Private';
        let reply = `**${p.name}** ${status}\n\n${p.desc}`;
        if (p.detail) reply += `\n\n📖 ${p.detail}`;
        reply += `\n\n🔗 <a href="${p.link}" target="_blank" class="agent-link">View ${p.link.includes('vercel') ? 'Live Demo' : 'on GitHub'}</a>`;
        return reply;
      }
    }
    // Check for tech names
    for (const tech of KB.techStack) {
      if (lower.includes(tech.toLowerCase())) {
        const projectsUsing = KB.projects.filter(p => p.desc.toLowerCase().includes(tech.toLowerCase())).slice(0, 3);
        let reply = `Mamoor works with **${tech}**! `;
        if (projectsUsing.length) {
          reply += `Projects using it: ` + projectsUsing.map(p => p.name).join(', ') + '.';
        }
        reply += `\n\nWant to discuss a project using ${tech}?`;
        return reply;
      }
    }
    return getFallback();
  }

  // ── Render Markdown-lite ────────────────────────────────────────
  function renderText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/• /g, '&bull; ');
  }

  // ── Build UI ────────────────────────────────────────────────────
  // Theme-aware styles using CSS variables from the site
  const styles = `
    .agent-fab{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--accent,#6366f1),#8b5cf6);color:white;border:none;cursor:pointer;font-size:1.5rem;display:flex;align-items:center;justify-content:center;z-index:10001;box-shadow:0 4px 24px rgba(99,102,241,0.4);transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
    .agent-fab:hover{transform:scale(1.1);box-shadow:0 6px 32px rgba(99,102,241,0.5)}
    .agent-fab.open{transform:rotate(90deg)}
    .agent-fab-pulse{animation:agentPulse 2s ease-in-out infinite}
    @keyframes agentPulse{0%,100%{box-shadow:0 4px 24px rgba(99,102,241,0.4)}50%{box-shadow:0 4px 24px rgba(99,102,241,0.4),0 0 0 12px rgba(99,102,241,0.15)}}
    .agent-window{position:fixed;bottom:92px;right:24px;width:380px;max-height:520px;background:var(--bg-card,#0a0a0a);border:1px solid var(--border,#1a1a1a);border-radius:16px;z-index:10001;display:none;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.5);font-family:var(--font,'Inter',-apple-system,BlinkMacSystemFont,sans-serif)}
    .agent-window.show{display:flex;animation:agentSlideUp 0.3s ease}
    @keyframes agentSlideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
    .agent-header{padding:16px 20px;background:var(--surface,#111);border-bottom:1px solid var(--border,#1a1a1a);display:flex;align-items:center;gap:12px}
    .agent-header-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--accent,#6366f1),#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:1rem}
    .agent-header-info h4{font-size:0.9rem;font-weight:700;color:var(--text,#e8e8e8);margin:0}
    .agent-header-info p{font-size:0.72rem;color:var(--green,#22c55e);margin:0;display:flex;align-items:center;gap:4px}
    .agent-header-info p::before{content:'';width:6px;height:6px;background:var(--green,#22c55e);border-radius:50%;display:inline-block}
    .agent-close{margin-left:auto;background:none;border:none;color:var(--text-secondary,#888);cursor:pointer;font-size:1.2rem;padding:4px}
    .agent-close:hover{color:var(--text,#e8e8e8)}
    .agent-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;scrollbar-width:thin;scrollbar-color:var(--border,#1a1a1a) transparent}
    .agent-msg{max-width:85%;padding:10px 14px;border-radius:12px;font-size:0.85rem;line-height:1.5;color:var(--text,#e8e8e8);word-wrap:break-word}
    .agent-msg.bot{background:var(--bg,#050505);border:1px solid var(--border,#1a1a1a);border-bottom-left-radius:4px;align-self:flex-start}
    .agent-msg.user{background:var(--accent,#6366f1);color:white;border-bottom-right-radius:4px;align-self:flex-end}
    .agent-msg a.agent-link{color:var(--accent-light,#818cf8);text-decoration:underline}
    .agent-msg a.agent-link:hover{color:#a5b4fc}
    .agent-msg strong{color:var(--text,#fff)}
    .agent-quick{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 12px}
    .agent-quick-btn{padding:6px 12px;background:var(--bg,#050505);border:1px solid var(--border,#1a1a1a);border-radius:100px;color:var(--text-secondary,#888);font-size:0.72rem;cursor:pointer;transition:all 0.2s;white-space:nowrap}
    .agent-quick-btn:hover{border-color:var(--accent,#6366f1);color:var(--accent-light,#818cf8);background:var(--accent-glow,rgba(99,102,241,0.1))}
    .agent-input-area{padding:12px 16px;border-top:1px solid var(--border,#1a1a1a);display:flex;gap:8px}
    .agent-input{flex:1;padding:10px 14px;background:var(--bg,#050505);border:1px solid var(--border,#1a1a1a);border-radius:10px;color:var(--text,#e8e8e8);font-size:0.85rem;font-family:inherit;outline:none;transition:border-color 0.2s}
    .agent-input:focus{border-color:var(--accent,#6366f1)}
    .agent-input::placeholder{color:var(--text-muted,#555)}
    .agent-send{width:40px;height:40px;border-radius:10px;background:var(--accent,#6366f1);border:none;color:white;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:all 0.2s}
    .agent-send:hover{background:var(--accent-light,#818cf8)}
    .agent-typing{display:flex;gap:4px;padding:10px 14px;align-self:flex-start}
    .agent-typing span{width:6px;height:6px;background:var(--text-muted,#555);border-radius:50%;animation:agentBounce 1.2s infinite}
    .agent-typing span:nth-child(2){animation-delay:0.2s}
    .agent-typing span:nth-child(3){animation-delay:0.4s}
    @keyframes agentBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
    @media(max-width:768px){
      .agent-fab{bottom:16px;right:16px;width:50px;height:50px;font-size:1.3rem}
      .agent-window{right:8px;left:8px;width:auto;bottom:76px;max-height:70vh;border-radius:14px}
      .agent-header{padding:12px 16px}
      .agent-header-avatar{width:32px;height:32px;font-size:0.9rem}
      .agent-header-info h4{font-size:0.85rem}
      .agent-messages{padding:12px;gap:10px}
      .agent-msg{max-width:90%;padding:10px 12px;font-size:0.82rem;line-height:1.45}
      .agent-quick{padding:0 12px 10px;gap:5px}
      .agent-quick-btn{padding:8px 14px;font-size:0.75rem}
      .agent-input-area{padding:10px 12px;gap:6px}
      .agent-input{padding:12px 14px;font-size:0.9rem;border-radius:10px}
      .agent-send{width:44px;height:44px;font-size:1.1rem;border-radius:10px}
    }
    @media(max-width:480px){
      .agent-fab{bottom:12px;right:12px;width:46px;height:46px;font-size:1.2rem}
      .agent-window{right:4px;left:4px;bottom:68px;max-height:75vh;border-radius:12px}
      .agent-msg{max-width:92%;font-size:0.8rem;padding:8px 10px}
      .agent-quick{gap:4px;padding:0 8px 8px}
      .agent-quick-btn{padding:7px 12px;font-size:0.7rem}
      .agent-input{padding:11px 12px;font-size:0.85rem}
      .agent-send{width:42px;height:42px}
    }
  `;

  function init() {
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);

    // FAB
    const fab = document.createElement('button');
    fab.className = 'agent-fab agent-fab-pulse';
    fab.innerHTML = '💬';
    fab.setAttribute('aria-label', 'Chat with Mamoor\'s AI assistant');
    document.body.appendChild(fab);

    // Window
    const win = document.createElement('div');
    win.className = 'agent-window';
    win.innerHTML = `
      <div class="agent-header">
        <div class="agent-header-avatar">🤖</div>
        <div class="agent-header-info">
          <h4>Mamoor's Assistant</h4>
          <p>Online</p>
        </div>
        <button class="agent-close" aria-label="Close chat">✕</button>
      </div>
      <div class="agent-messages" id="agent-messages"></div>
      <div class="agent-quick" id="agent-quick"></div>
      <div class="agent-input-area">
        <input class="agent-input" id="agent-input" type="text" placeholder="Ask about projects, services, pricing..." autocomplete="off">
        <button class="agent-send" id="agent-send" aria-label="Send message">➤</button>
      </div>
    `;
    document.body.appendChild(win);

    const msgs = document.getElementById('agent-messages');
    const input = document.getElementById('agent-input');
    const quick = document.getElementById('agent-quick');

    // Quick actions
    const quickActions = [
      { label: '🏗️ Projects', msg: 'Show me the projects' },
      { label: '💼 Services', msg: 'What services are offered?' },
      { label: '💰 Pricing', msg: 'How much does it cost?' },
      { label: '🛠️ Tech Stack', msg: 'What technologies do you use?' },
      { label: '📞 Contact', msg: 'How to contact Mamoor?' },
      { label: '⭐ Reviews', msg: 'What do clients say?' }
    ];

    quickActions.forEach(a => {
      const btn = document.createElement('button');
      btn.className = 'agent-quick-btn';
      btn.textContent = a.label;
      btn.onclick = () => sendMessage(a.msg);
      quick.appendChild(btn);
    });

    // Open/close helpers
    function openChat() {
      win.classList.add('show');
      fab.classList.add('open');
      fab.classList.remove('agent-fab-pulse');
      fab.innerHTML = '✕';
      if (msgs.children.length === 0) {
        addBotMessage(`Hey! 👋 I'm Mamoor's portfolio assistant. Ask me anything about his projects, services, pricing, or tech stack.`);
      }
      input.focus();
    }

    function closeChat() {
      win.classList.remove('show');
      fab.classList.remove('open');
      fab.innerHTML = '💬';
    }

    // Toggle
    fab.onclick = () => {
      const isOpen = win.classList.contains('show');
      if (isOpen) closeChat(); else openChat();
    };

    win.querySelector('.agent-close').onclick = closeChat;

    // Send
    function sendMessage(text) {
      if (!text.trim()) return;
      addUserMessage(text);
      input.value = '';
      showTyping();
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        removeTyping();
        addBotMessage(matchIntent(text));
      }, delay);
    }

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMessage(input.value);
    });
    document.getElementById('agent-send').onclick = () => sendMessage(input.value);

    function addUserMessage(text) {
      const div = document.createElement('div');
      div.className = 'agent-msg user';
      div.textContent = text;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function addBotMessage(text) {
      const div = document.createElement('div');
      div.className = 'agent-msg bot';
      div.innerHTML = renderText(text);
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function showTyping() {
      const div = document.createElement('div');
      div.className = 'agent-typing';
      div.id = 'agent-typing';
      div.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function removeTyping() {
      const el = document.getElementById('agent-typing');
      if (el) el.remove();
    }

    // ── Auto-open after loader hides (engages visitors) ──────────
    function waitForLoader() {
      const loader = document.getElementById('loader');
      if (!loader || loader.classList.contains('hidden')) {
        // Loader already gone — open chat after short delay
        setTimeout(openChat, 800);
      } else {
        // Wait for loader to hide
        const obs = new MutationObserver(() => {
          if (loader.classList.contains('hidden')) {
            obs.disconnect();
            setTimeout(openChat, 800);
          }
        });
        obs.observe(loader, { attributes: true, attributeFilter: ['class'] });
      }
    }
    waitForLoader();

    // ── Close on Escape key ──────────────────────────────────────
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && win.classList.contains('show')) closeChat();
    });

    // ── Close when clicking outside ──────────────────────────────
    document.addEventListener('click', e => {
      if (win.classList.contains('show') && !win.contains(e.target) && !fab.contains(e.target)) {
        closeChat();
      }
    });
  }

  // Wait for page to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
