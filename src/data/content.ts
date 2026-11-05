import { ServiceItem, ProblemSolutionItem, ProcessStep, FaqItem } from '../types/index.ts';

export const PROBLEMS_SOLVED: ProblemSolutionItem[] = [
  {
    id: 'repetitive-admin',
    problemTitle: 'Too much time spent on repetitive administrative tasks',
    theBottleneck: 'Founders and key team members waste 15-20+ hours each week copy-pasting data between sheets, drafting repetitive updates, organizing files, and generating recurring reports.',
    theAiSolution: 'Custom AI autonomous agents run on schedules or triggers to aggregate data, summarize documents, auto-generate reports, and execute back-office routines without human error.',
    businessImpact: 'Recovers 60–80% of administrative time so your top talent focuses exclusively on high-leverage revenue activities.',
    metricBadge: 'Up to 20h saved/week',
    iconName: 'Clock',
  },
  {
    id: 'slow-response',
    problemTitle: 'Slow customer response times and lost buyer momentum',
    theBottleneck: 'Leads and customers wait hours (or overnight) for answers to common questions, causing hot buyers to leave for competitors who respond faster.',
    theAiSolution: 'Intelligent AI chatbots and voice/text assistants trained on your knowledge base, brand guidelines, and pricing to resolve questions instantly 24/7/365 with human-grade empathy.',
    businessImpact: 'Achieves sub-30-second inquiry response times and captures high-intent prospects when buying impulse is at its peak.',
    metricBadge: '< 30s response time',
    iconName: 'Zap',
  },
  {
    id: 'manual-leads',
    problemTitle: 'Manual lead management and dropped follow-ups',
    theBottleneck: 'Inbound inquiries sit in inbox queues, follow-up messages are sent inconsistently, and high-value deals slip through the cracks due to team bandwidth limits.',
    theAiSolution: 'Automated AI qualification pipelines that instantly score incoming leads, ask relevant discovery questions, route them to the right rep, and trigger tailored multi-touch follow-ups.',
    businessImpact: 'Zero dropped leads, 3x higher consultation booking rates, and completely automated pipeline discipline.',
    metricBadge: '3x booking conversion',
    iconName: 'UserCheck',
  },
  {
    id: 'inefficient-workflows',
    problemTitle: 'Inefficient business workflows and manual handoffs',
    theBottleneck: 'Complex multi-step processes (e.g. client onboarding, invoicing, approval chains) rely on manual email nudges and memory, leading to bottlenecks and delays.',
    theAiSolution: 'End-to-end automated orchestration engines (n8n/Make) that seamlessly trigger contracts, create client folders, send welcome packs, and update team Kanban boards the second a deal closes.',
    businessImpact: 'Transforms days of chaotic manual onboarding into a seamless 2-minute client experience.',
    metricBadge: '90% faster onboarding',
    iconName: 'Workflow',
  },
  {
    id: 'missed-sales',
    problemTitle: 'Missed sales opportunities and dormant leads',
    theBottleneck: 'Cold or past prospects remain untouched for months because sales reps are too busy prospecting from scratch instead of reviving existing pipeline gold.',
    theAiSolution: 'AI-driven reactivation campaigns that scan your database, analyze past interaction history, and generate personalized, contextual re-engagement emails that feel hand-crafted.',
    businessImpact: 'Unlocks thousands in recurring revenue from dormant lists without spending an extra dollar on advertising.',
    metricBadge: 'Dormant pipeline revived',
    iconName: 'TrendingUp',
  },
  {
    id: 'disconnected-systems',
    problemTitle: 'Disconnected tools, apps, and fragmented data silos',
    theBottleneck: 'Your CRM, email platform, project management software, accounting tools, and forms operate as isolated islands, forcing teams to perform double entry.',
    theAiSolution: 'Robust custom API and webhook bridges syncing GoHighLevel, HubSpot, Slack, Google Workspace, Stripe, and Airtable into a unified, synchronized operational ecosystem.',
    businessImpact: 'Single source of truth with zero manual data duplication and 100% operational visibility.',
    metricBadge: '100% data sync',
    iconName: 'Layers',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Virtual Assistants',
    category: 'Agents & Chatbots',
    tagline: '24/7 intelligent brand representatives that qualify, answer, and convert.',
    businessBenefit: 'Replace robotic, rigid rule-based menus with dynamic conversational AI trained on your exact brand voice, FAQs, and service catalog to drive appointments on autopilot.',
    technicalCapabilities: ['OpenAI / Claude fine-tuned context', 'Multi-channel deployment (Website, WhatsApp, Instagram)', 'Live appointment scheduling integration', 'Human agent escalation trigger'],
    idealFor: 'Service businesses, clinics, legal firms, real estate, and digital agencies.',
    timeSavings: '15+ hours/week',
    iconName: 'Bot',
  },
  {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation & Qualification',
    category: 'Lead Generation',
    tagline: 'Filter out tire-kickers and pass only high-intent buyers to your sales team.',
    businessBenefit: 'Stop paying your highest-earning closers to qualify cold prospects. Intelligent conversational flows evaluate budget, timeline, and need before calendar booking.',
    technicalCapabilities: ['Custom AI scoring logic', 'Automated enrichment via public company data', 'Dynamic questionnaire branching', 'Direct routing to calendar & CRM'],
    idealFor: 'B2B consultants, agencies, coaching programs, and SaaS businesses.',
    timeSavings: '12+ hours/week',
    iconName: 'Filter',
  },
  {
    id: 'automated-email',
    title: 'Automated Email & Follow-up Systems',
    category: 'Lead Generation',
    tagline: 'Hyper-personalized multi-channel nurture sequences that never let leads go cold.',
    businessBenefit: 'Automate relentless yet empathetic follow-up sequences across Email and SMS that adapt based on recipient responses, behavior, and link clicks.',
    technicalCapabilities: ['Dynamic AI message personalization', 'Smart sentiment analysis of prospect replies', 'Automated objection handling responses', 'Opt-out & compliance guardrails'],
    idealFor: 'Sales teams, marketing agencies, and high-ticket service providers.',
    timeSavings: '10+ hours/week',
    iconName: 'MailCheck',
  },
  {
    id: 'crm-pipeline-automation',
    title: 'CRM & Sales Pipeline Automation',
    category: 'Operations',
    tagline: 'Keep your deal stages, tasks, and client notes in perfect sync effortlessly.',
    businessBenefit: 'Eliminate forgotten pipeline stages. The moment a deal progresses, automated automations update stage status, assign tasks, generate invoices, and alert team members.',
    technicalCapabilities: ['GoHighLevel, HubSpot, & Pipedrive workflows', 'Automated contract generation & e-signature tracking', 'Real-time revenue forecasting updates', 'Lead status audit trails'],
    idealFor: 'Growing sales teams and agencies managing 30+ active opportunities.',
    timeSavings: '8+ hours/week',
    iconName: 'GitBranch',
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    category: 'Operations',
    tagline: 'Turn complicated multi-app business operations into self-driving systems.',
    businessBenefit: 'Connect contract signing, payment processing, client folder generation, internal Slack alerts, and task board creation into a flawless 60-second automated execution.',
    technicalCapabilities: ['Zero-touch client onboarding flows', 'Automated invoicing & receipt reconciliation', 'Recurring PDF summary generation', 'Database normalization'],
    idealFor: 'Operational managers, agency owners, and e-commerce companies.',
    timeSavings: '20+ hours/week',
    iconName: 'Cpu',
  },
  {
    id: 'ai-customer-support',
    title: 'AI-Powered Customer Support',
    category: 'Agents & Chatbots',
    tagline: 'Instant, accurate ticket resolution with zero waiting time for customers.',
    businessBenefit: 'Cut support overhead by resolving 70%+ of tier-1 and tier-2 tickets automatically using AI connected to your internal documentation, order history, and status APIs.',
    technicalCapabilities: ['Knowledge base vector search (RAG)', 'Order tracking and status verification', 'Ticket tagging and sentiment classification', 'Automated refund/cancellation workflows'],
    idealFor: 'E-commerce stores, subscription software, and high-volume services.',
    timeSavings: '25+ hours/week',
    iconName: 'Headphones',
  },
  {
    id: 'workflow-integration-api',
    title: 'Workflow Integration & API Automation',
    category: 'Integrations',
    tagline: 'Bespoke custom API connectors uniting all your software tools into one brain.',
    businessBenefit: 'Free your team from copying data across systems. We build robust, error-handled integrations via n8n, Make, webhooks, and REST APIs that run reliably without breaking.',
    technicalCapabilities: ['Custom Webhooks and REST API endpoints', 'n8n self-hosted or cloud scenarios', 'Make / Zapier complex logic branches', 'Automatic error recovery & fallback alerts'],
    idealFor: 'Companies using disparate platforms that lack native integrations.',
    timeSavings: '14+ hours/week',
    iconName: 'Network',
  },
  {
    id: 'ai-agents-intelligent-workflows',
    title: 'AI Agents & Intelligent Business Workflows',
    category: 'Agents & Chatbots',
    tagline: 'Autonomous AI digital coworkers that research, decide, and execute tasks.',
    businessBenefit: 'Go beyond basic if/then logic. Deploy reasoning agents that analyze market data, draft custom proposals, summarize competitor moves, and perform multi-step decision work.',
    technicalCapabilities: ['Multi-agent orchestration with specialized roles', 'Tool calling and web browsing capabilities', 'Custom structured JSON output validation', 'Human-in-the-loop review dashboards'],
    idealFor: 'Forward-thinking founders and executive teams looking for unfair leverage.',
    timeSavings: '30+ hours/week',
    iconName: 'Sparkles',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    summary: 'Deep-dive audit into your current operations, workflows, and repetitive bottlenecks.',
    focus: 'Operational Bottleneck Audit',
    deliverables: [
      'Comprehensive workflow friction mapping',
      'Identification of manual hours wasted weekly',
      'Software stack and API integration feasibility analysis',
      'High-impact automation opportunity roadmap',
    ],
    timeline: 'Days 1 – 3',
  },
  {
    stepNumber: '02',
    title: 'Strategize',
    summary: 'Design a bespoke AI automation architecture with clear ROI projections.',
    focus: 'Architecture & ROI Blueprint',
    deliverables: [
      'Visual process flow diagram (pre vs. post automation)',
      'Prompt engineering & AI agent persona design specifications',
      'Security, data privacy & fallback protocol definition',
      'Prioritized implementation schedule with measurable KPIs',
    ],
    timeline: 'Days 4 – 7',
  },
  {
    stepNumber: '03',
    title: 'Build',
    summary: 'Develop, integrate, rigorously test, and deploy customized automation systems.',
    focus: 'Development & Integration',
    deliverables: [
      'Production deployment in n8n / Make / OpenAI / CRM',
      'Integration with existing tools (Google Workspace, Slack, etc.)',
      'Edge-case stress testing and error-handling routines',
      'Staff onboarding, walk-through videos & system documentation',
    ],
    timeline: 'Weeks 2 – 3',
  },
  {
    stepNumber: '04',
    title: 'Optimize',
    summary: 'Continuous monitoring, metric tracking, and iterative enhancement for peak performance.',
    focus: 'Monitoring & Continuous Scaling',
    deliverables: [
      'Real-time execution dashboard & error alerting',
      'Fine-tuning AI prompts based on real customer conversations',
      'Monthly performance reports detailing hours and dollars saved',
      'Proactive system updates as your business scales',
    ],
    timeline: 'Ongoing Partnership',
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: 'Customized Automation Solutions',
    description: 'No generic copy-paste templates. Every workflow is tailored precisely to your specific tech stack, brand voice, and business logic.',
    icon: 'Sliders',
  },
  {
    title: 'Business-First Approach',
    description: 'We don’t automate just because it sounds fancy. We obsess over bottom-line outcomes: hours saved, deals closed, and overhead reduced.',
    icon: 'Target',
  },
  {
    title: 'Practical AI Implementation',
    description: 'No hype, no empty buzzwords, and no unreliable chatbots. We build resilient systems with deterministic fallbacks that real businesses rely on daily.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Seamless Integration With Existing Tools',
    description: 'Keep the software your team already knows. We seamlessly interconnect your CRM, email, calendars, and spreadsheets without forcing platform migration.',
    icon: 'PlugZap',
  },
  {
    title: 'Scalable Systems Built to Grow',
    description: 'Engineered with robust error handling, automated retry logic, and modular designs that handle 10x lead volume without breaking.',
    icon: 'TrendingUp',
  },
  {
    title: 'Ongoing Optimization & Dedicated Support',
    description: 'We don’t hand over code and disappear. You receive proactive monitoring, prompt refinements, and dedicated technical advisory.',
    icon: 'ShieldCheck',
  },
];

export const ILLUSTRATIVE_BENCHMARKS = [
  {
    metric: '70%+',
    label: 'Reduction in Repetitive Administrative Work',
    detail: 'Average routine back-office hours automated across routine data entry and reporting.',
  },
  {
    metric: '< 45s',
    label: 'Lead Inbound Response Speed',
    detail: 'From web form or message submission to personalized AI follow-up and CRM entry.',
  },
  {
    metric: '99.4%',
    label: 'Operational Execution Consistency',
    detail: 'Error-free automated handoffs between invoicing, onboarding, and project boards.',
  },
  {
    metric: '3.4x',
    label: 'Average Pipeline Velocity Boost',
    detail: 'Faster qualification and immediate calendar booking eliminate prospect drop-off.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to build and launch an automation system?',
    answer: 'Typical foundational automation projects (such as an AI customer support bot, automated lead qualification pipeline, or CRM integration) are deployed within 7 to 14 days. More complex custom multi-agent workflows usually take 2 to 3 weeks including rigorous testing and staff walkthroughs.',
    category: 'Strategy',
  },
  {
    id: 'faq-2',
    question: 'Do we need to abandon our current software tools?',
    answer: 'Not at all. In fact, our philosophy is to integrate directly into the tools your team already uses and loves—whether that is Google Workspace, Slack, GoHighLevel, HubSpot, Notion, Airtable, or Shopify. We build the connective bridges so your existing tools work in harmony.',
    category: 'Security & Tech',
  },
  {
    id: 'faq-3',
    question: 'How do you ensure AI chatbots don’t give inaccurate or embarrassing answers?',
    answer: 'We employ strict retrieval-augmented generation (RAG) and guardrailed system prompts. The AI is explicitly bounded to reference only your verified company knowledge base, documentation, and pricing tables. If a question falls outside its programmed scope, it gracefully escalates to your human team with context.',
    category: 'Security & Tech',
  },
  {
    id: 'faq-4',
    question: 'Is client and customer data protected and confidential?',
    answer: 'Yes, 100%. We operate in full compliance with applicable privacy standards, including the Philippine Data Privacy Act of 2012 (RA 10173). We configure enterprise-grade zero-data-retention APIs where available so your proprietary business information is never used to train public foundation models.',
    category: 'Security & Tech',
  },
  {
    id: 'faq-5',
    question: 'What is the return on investment (ROI) for these systems?',
    answer: 'Most clients recover their investment within 30 to 60 days purely from the hours saved on manual administrative labor. When combined with faster lead response times that rescue high-ticket sales, the effective ROI regularly exceeds 4x to 8x within the first quarter.',
    category: 'Pricing & ROI',
  },
  {
    id: 'faq-6',
    question: 'What happens after the system is launched? Do you offer support?',
    answer: 'Yes. We offer continuous monitoring, prompt maintenance, and optimization retainers. This ensures your automations stay synchronized whenever third-party APIs update, and allows us to iterate on new features as your business expands.',
    category: 'Strategy',
  },
  {
    id: 'faq-7',
    question: 'How do we get started?',
    answer: 'Click the "Book a Free Strategy Call" button. We will conduct a 25-minute discovery audit of your current processes, identify your highest-leverage automation opportunities, and provide a clear roadmap with expected timelines and investment.',
    category: 'Strategy',
  },
];

export const PRIVACY_POLICY_TEXT = `# PRIVACY POLICY
## AI AutoMission

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026

### 1. Introduction

Welcome to AI AutoMission.

At AI AutoMission, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, store, share, and protect your information when you visit our website, communicate with us, or use our AI automation services.

AI AutoMission provides AI-powered automation solutions designed to help businesses streamline operations, improve productivity, automate repetitive tasks, and scale efficiently.

By accessing our website or using our services, you acknowledge that you have read this Privacy Policy.

### 2. Information We Collect

We may collect the following categories of information:

**A. Personal Information**

When you contact us, request a consultation, or inquire about our services, we may collect:

- Full name
- Email address
- Phone number
- Business or company name
- Job title or professional role
- Information submitted through contact forms
- Information shared during consultations or business communications

**B. Business and Project Information**

To understand your business requirements and deliver customized automation solutions, we may collect:

- Business processes and operational details
- Workflow requirements
- Customer support requirements
- CRM information and integration requirements
- Automation project specifications
- Information necessary to configure and maintain automation systems

**C. Technical Information**

When you visit our website, certain technical information may be collected automatically, including:

- IP address
- Browser type and version
- Device information
- Website usage data
- Pages visited
- Referral sources
- Cookies and similar tracking technologies, where enabled

### 3. How We Use Your Information

AI AutoMission uses collected information for legitimate business purposes, including:

- Responding to inquiries and consultation requests.
- Providing AI automation services and solutions.
- Developing customized AI agents and automated workflows.
- Integrating business applications and software platforms.
- Managing client relationships and projects.
- Sending service-related updates and communications.
- Improving our website, services, and customer experience.
- Maintaining security and preventing unauthorized activities.
- Complying with applicable legal and regulatory obligations.

We only intend to collect and process information that is reasonably necessary for these purposes.

### 4. AI Tools and Third-Party Platforms

AI AutoMission uses various third-party platforms and technologies to develop, operate, and maintain AI-powered automation systems.

Depending on the project and services requested, these platforms may include:

- **OpenAI** – AI-powered assistants, language models, and intelligent automation.
- **Make** – Workflow automation and application integrations.
- **n8n** – Automated workflows and custom system integrations.
- **Zapier** – Business process automation and application connectivity.
- **GoHighLevel** – CRM, lead management, marketing, and customer communication automation.
- **Google Workspace** – Business communications, document management, and productivity tools.
- **HubSpot** – CRM, marketing, sales, and customer relationship management.
- **Other third-party platforms** – Additional tools required to deliver customized automation solutions.

Information may be processed through these platforms when necessary to perform requested services, execute automated workflows, generate AI responses, manage customer interactions, or connect business applications.

Third-party platforms operate under their respective privacy policies, security practices, and data processing terms.

AI AutoMission aims to use reputable providers and appropriate security configurations when handling client and customer information.

We do not intentionally use confidential client information for unrelated purposes. Where applicable, clients should review the data processing and AI model training settings of the platforms used in their automation systems.

### 5. Data Protection and Security

AI AutoMission takes reasonable organizational, technical, and administrative measures to protect personal information against:

- Unauthorized access.
- Accidental disclosure.
- Data loss or destruction.
- Unauthorized modification.
- Misuse of personal information.

Depending on the systems used, security measures may include:

- Restricted access to sensitive information.
- Secure authentication practices.
- Encryption where supported.
- Appropriate access permissions.
- Secure software integrations.
- Use of trusted hosting and technology providers.

Although we make reasonable efforts to protect information, no internet-based service, software platform, or electronic transmission method can guarantee absolute security.

### 6. Sharing of Information

AI AutoMission does not sell or rent personal information to third parties.

We may share information when reasonably necessary:

- With trusted technology providers that support our services.
- With AI platforms when required to perform requested automation functions.
- With CRM and communication platforms used for client projects.
- With hosting and infrastructure providers.
- With authorized business partners when necessary to fulfill agreed services.
- When required by applicable laws, regulations, or valid legal processes.
- When necessary to protect our rights, security, or legitimate business interests.

We aim to ensure that information shared with service providers is handled with appropriate privacy and security safeguards.

### 7. Cookies and Tracking Technologies

Our website may use cookies and similar technologies to improve user experience and website performance.

These technologies may be used to:

- Remember user preferences.
- Analyze website traffic.
- Understand visitor interactions.
- Improve website functionality.
- Measure marketing and advertising performance.

You may manage or disable cookies through your browser settings.

Where legally required, we will obtain consent before using non-essential cookies or tracking technologies.

### 8. Data Retention

AI AutoMission retains personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy.

Retention periods may depend on:

- The nature of the information collected.
- The duration of the client relationship.
- Contractual obligations.
- Legal and regulatory requirements.
- Legitimate business and recordkeeping purposes.

When information is no longer necessary, we will take reasonable steps to securely delete, destroy, or anonymize it, subject to applicable legal requirements and backup retention processes.

Information processed through third-party platforms may also be subject to those providers' retention and deletion policies.

### 9. Your Privacy Rights

Under applicable Philippine privacy laws, including the Data Privacy Act of 2012 (Republic Act No. 10173), you may have the following rights, subject to applicable legal conditions:

- **Right to Be Informed:** Know how and why your personal information is collected and processed.
- **Right to Access:** Request access to your personal information.
- **Right to Object:** Object to certain types of personal information processing.
- **Right to Erasure or Blocking:** Request deletion or blocking of personal information when legally justified.
- **Right to Rectification:** Request correction of inaccurate or incomplete information.
- **Right to Data Portability:** Request a copy of your personal information in a structured and commonly used format, where applicable.
- **Right to Damages:** Seek compensation for damages resulting from unlawful or unauthorized processing, where legally established.
- **Right to File a Complaint:** Submit a complaint to the National Privacy Commission when your privacy rights have been violated.

You may exercise applicable rights by contacting us through the email address provided below.

We may request reasonable identity verification before processing certain requests.

### 10. International Data Transfers

Some third-party AI platforms, automation providers, cloud services, and software applications used by AI AutoMission may process or store information outside the Philippines.

When international data transfers occur, we aim to implement appropriate safeguards and comply with applicable Philippine data protection requirements.

### 11. Third-Party Websites and Services

Our website or services may contain links to external websites, applications, or third-party platforms.

AI AutoMission does not control the privacy practices, security, or content of these external services.

We encourage users to review the privacy policies of third-party providers before submitting personal information through their platforms.

### 12. Children's Privacy

Our website and professional AI automation services are primarily intended for businesses, professionals, and adults.

We do not knowingly collect personal information from children without appropriate authorization or a lawful basis.

If we become aware that personal information has been collected from a child inappropriately, we will take reasonable steps to address the situation in accordance with applicable laws.

### 13. Changes to This Privacy Policy

AI AutoMission reserves the right to update or modify this Privacy Policy when necessary to reflect changes in:

- Our business operations.
- AI technologies and automation services.
- Third-party software and integrations.
- Privacy and data protection requirements.
- Applicable laws and regulations.

Any changes will be published on this page with an updated revision date.

We encourage visitors and clients to review this Privacy Policy periodically.

### 14. Contact Information

If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact us:

**Business Name:** AI AutoMission  
**Email Address:** janryantanmiraflor.va@gmail.com  
**Business Location:** Philippines  
**Website:** AI AutoMission Official Website  

For privacy-related inquiries, please use the email address provided above.

We will make reasonable efforts to respond to privacy-related requests within an appropriate timeframe.

### 15. Commitment to Philippine Data Privacy Laws

AI AutoMission aims to handle personal information in accordance with the applicable provisions of the Philippine Data Privacy Act of 2012 (Republic Act No. 10173), its Implementing Rules and Regulations, and relevant issuances of the National Privacy Commission.

We recognize and uphold the principles of:

- **Transparency** – Being clear about how personal information is collected and processed.
- **Legitimate Purpose** – Processing information for lawful and declared purposes.
- **Proportionality** – Collecting only information that is adequate, relevant, and necessary.

We are committed to maintaining responsible data handling practices while providing businesses with intelligent AI automation solutions.

---

**AI AutoMission**  
*Automate Smarter. Work Better. Grow Faster.*  
Your business deserves intelligent automation, and your privacy deserves responsible protection.`;
