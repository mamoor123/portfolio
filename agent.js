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
      { name: 'HiveOps', cat: 'ai', desc: 'AI-Powered Company Operating System — automate business operations through intelligent agents. 9 GitHub stars.', link: 'https://github.com/mamoor123/hiveops', status: 'Open Source', featured: true },
      { name: 'ClawForge', cat: 'tools', desc: 'Multi-Agent Dev Team on OpenClaw — autonomous plan → build → review → test → deploy pipeline.', link: 'https://github.com/mamoor123/clawforge', status: 'Open Source' },
      { name: 'AgentDNA', cat: 'ai', desc: 'DNS for AI Agents — Discovery, Trust & Marketplace. The missing layer between A2A and your agents.', link: 'https://github.com/mamoor123/agentdna', status: 'Open Source' },
      { name: 'Planetary Pulse', cat: 'climate', desc: 'AI-Powered Earth Dashboard with real-time climate data visualization.', link: 'https://planetary-pulse.vercel.app', status: 'Live', featured: true },
      { name: 'Carbon Fingerprint', cat: 'climate', desc: 'Discover your climate identity powered by 144 years of NASA/NOAA data.', link: 'https://github.com/mamoor123/CARBON-FINGERPRINT', status: 'Open Source' },
      { name: 'GitCourt', cat: 'ai', desc: 'Three AI agents debate your Pull Request. The Judge delivers the verdict.', link: 'https://github.com/mamoor123/gitcourt', status: 'Open Source' },
      { name: 'DataWhisper', cat: 'ai', desc: 'Chat with your data — upload any file and ask questions in plain English.', link: 'https://github.com/mamoor123/datawhisper', status: 'Open Source' },
      { name: 'EasyForm', cat: 'saas', desc: 'Modern form builder SaaS — create, share, and analyze forms.', link: 'https://easyform-two.vercel.app', status: 'Live' },
      { name: 'AI SDR Agent', cat: 'ai', desc: 'Autonomous AI Sales Development Representative — prospects, qualifies, and books meetings.', link: 'https://github.com/mamoor123/ai-sdr-agent', status: 'Private' },
      { name: 'LinkedIn Recruiter Extension', cat: 'ai', desc: 'AI-powered Chrome extension for candidate sourcing and pipeline management.', link: 'https://github.com/mamoor123/LinkedIn-Recruiter-Extension', status: 'Private' },
      { name: 'ChartForge', cat: 'tools', desc: 'Publication-quality chart generator — upload data, customize, export PNG/SVG.', link: 'https://github.com/mamoor123/chartforge', status: 'Open Source' },
      { name: 'ForgeSquad', cat: 'tools', desc: 'Multi-agent dev team orchestrator — 5 agents, one pipeline.', link: 'https://github.com/mamoor123/forgesquad', status: 'Open Source' },
      { name: 'My Trade SaaS', cat: 'saas', desc: 'Full-stack trading platform with PostgreSQL and real-time data. 1.2MB+ codebase.', link: 'https://my-trade-saas.vercel.app', status: 'Live' },
      { name: 'ReviewReply', cat: 'saas', desc: 'AI-powered Google review reply tool for local businesses.', link: 'https://github.com/mamoor123/reviewreply', status: 'Private' },
      { name: 'SnapPost', cat: 'tools', desc: 'Screenshot to beautiful social media post generator.', link: 'https://github.com/mamoor123/snap-post', status: 'Open Source' },
      { name: 'ESG Shield', cat: 'climate', desc: 'One-Click ESG Reports for Shopify Stores.', link: 'https://github.com/mamoor123/esg-shield', status: 'Private' },
      { name: 'Green Profile', cat: 'climate', desc: 'One-click sustainability badge for Shopify stores.', link: 'https://github.com/mamoor123/green-profile', status: 'Private' },
      { name: 'BioLink AI', cat: 'saas', desc: 'AI-powered Bio Link & Portfolio Builder SaaS with analytics.', link: 'https://github.com/mamoor123/biolink-ai', status: 'Private' },
      { name: 'ScreenSync', cat: 'tools', desc: 'Chrome extension: highlight any name → instantly check OFAC, EU, UN sanctions lists.', link: 'https://github.com/mamoor123/screensync-v1', status: 'Private' },
      { name: 'Proposal Generator', cat: 'saas', desc: 'Freelancer Proposal Generator — Questions → PDF → Stripe Link.', link: 'https://github.com/mamoor123/proposal-generator', status: 'Private' },
      { name: 'HS Code Classifier', cat: 'saas', desc: 'Instant HS code classification API — 50+ countries, pay-per-call.', link: 'https://github.com/mamoor123/hs-code-classifier', status: 'Private' },
      { name: 'CBAM Bridge', cat: 'climate', desc: 'Global compliance tool for non-EU exporters. EU Carbon Border Adjustment Mechanism.', link: 'https://github.com/mamoor123/cbam-bridge', status: 'Private' },
      { name: 'Dead Serious', cat: 'other', desc: 'Enterprise-grade error messages for developers. 😂', link: 'https://github.com/mamoor123/dead-serious', status: 'Open Source' },
      { name: 'ReverseSearch Engine', cat: 'saas', desc: 'Users declare intent, creators fulfill. A marketplace where demand drives supply.', link: 'https://github.com/mamoor123/ReverseSearch-Engine', status: 'Private' },
      { name: 'AgentDNA Luxury Prototype', cat: 'ai', desc: 'Luxury Concierge Prototype for high-end brands.', link: 'https://github.com/mamoor123/agentdna_luxury_prototype', status: 'Private' },
      { name: 'AI Support Agent', cat: 'ai', desc: 'AI Customer Support Agent — Python backend, TypeScript frontend.', link: 'https://github.com/mamoor123/ai-support-agent', status: 'Private' },
      { name: 'ClawForge URL Shortener', cat: 'tools', desc: 'URL shortener with click analytics.', link: 'https://github.com/mamoor123/clawforge-url-shortener', status: 'Open Source' },
      { name: 'Firecrawl OpenClaw Tool', cat: 'tools', desc: 'Deep-level web scraping for OpenClaw.', link: 'https://github.com/mamoor123/firecrawl-openclaw-tool', status: 'Open Source' }
    ],

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
    }
  ];

  // ── Fallback ────────────────────────────────────────────────────
  function getFallback() {
    const fallbacks = [
      `I'm not sure I understood that. I can help with:\n\n• **Projects** — "What has he built?"\n• **Services** — "What can he build?"\n• **Pricing** — "How much does it cost?"\n• **Contact** — "How to reach him?"\n• **Tech stack** — "What technologies?"\n\nTry one of those! 👆`,
      `Hmm, I didn't catch that. Ask me about:\n\n🏗️ Projects & portfolio\n💼 Services & pricing\n🛠️ Tech stack\n📞 Contact info\n\nOr just say hi!`,
      `I'm best at answering about Mamoor's work. Try asking about projects, services, pricing, or how to get in touch.`
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
        return `**${p.name}** ${status}\n\n${p.desc}\n\n🔗 <a href="${p.link}" target="_blank" class="agent-link">View ${p.link.includes('vercel') ? 'Live Demo' : 'on GitHub'}</a>`;
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
    @media(max-width:480px){.agent-window{right:12px;left:12px;width:auto;bottom:88px}}
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
