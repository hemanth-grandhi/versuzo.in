export interface ProjectDetails {
  description: string;
  minor: string[];
  major: string[];
}

export interface TopicGroup {
  category: string;
  items: string[];
}

export interface TimelineMonth {
  title: string;
  subtitle: string;
  topics: TopicGroup[];
}

export interface CourseDetail {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  duration: string;
  fee: string;
  isProjectBased: boolean;
  highlights: {
    training: string;
    mentorship: string;
    projects: ProjectDetails;
    internship: string;
  };
  overview: string;
  durationDetails: {
    training: string;
    project: string;
    total: string;
  };
  deliveryMode: string[];
  mentorshipSupport: string[];
  timeline: {
    month1: TimelineMonth;
    month2: TimelineMonth;
    month3: TimelineMonth;
  };
  whatYouWillReceive: { title: string; desc: string }[];
  whyChoose: { title: string; desc: string }[];
  testimonials: { name: string; role: string; image: string; review: string; rating: number }[];
  faqs: { question: string; answer: string }[];
  feeStructure: {
    amount: string;
    paymentPlans: string;
    discounts: string;
    scholarship: string;
    included: string[];
  };
}

export const coursesData: Record<string, CourseDetail> = {
  "dsa-ai-ml": {
    slug: "dsa-ai-ml",
    title: "DSA + AI/ML Internship Program",
    badge: "🔥 Industry Training + Project-Based Internship Opportunity",
    tagline: "Master Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Generative AI, Prompt Engineering, and Real-World AI Applications.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month Intensive Training covering core structures, algorithms, AI foundations, and generative models through interactive live classes.",
      mentorship: "Continuous mentor support, weekly doubt clearing, direct Slack communication loops, and thorough developer code reviews.",
      projects: {
        description: "Work on minor and major portfolio projects designed by industry engineers to mirror commercial workloads.",
        minor: ["AI Resume Analyzer", "Smart Chatbot", "Student Performance Predictor"],
        major: ["AI-Powered Career Assistant", "Intelligent Recommendation System", "Generative AI Business Solution"],
      },
      internship: "Evaluation-based shortlists for corporate internships upon successfully passing code reviews, assessments, and final presentations.",
    },
    overview: "This internship program is designed for students who want to build strong problem-solving skills, master modern AI technologies, and gain real industry experience. First you learn, then you build, and finally you unlock internship placements based on evaluation.",
    durationDetails: {
      training: "1 Month Intensive Training",
      project: "2 Months Project Dev & Internship",
      total: "3 Months",
    },
    deliveryMode: ["Live Online Classes", "Recorded Sessions Access", "Industry Mentorship"],
    mentorshipSupport: ["Continuous Mentor Guidance", "Weekly Doubt-Clearing Sessions", "Code Reviews & Feedback"],
    timeline: {
      month1: {
        title: "Training Phase",
        subtitle: "Master core structures and build strong algorithmic foundations.",
        topics: [
          { category: "DSA & Coding Basics", items: ["DSA Fundamentals", "Problem Solving", "Live Coding Sessions"] },
          { category: "Emerging Tech & AI", items: ["AI & Machine Learning", "Generative AI & Prompt Engineering", "Mentor Guidance"] },
        ],
      },
      month2: {
        title: "Project Development Phase",
        subtitle: "Begin building core minor projects and establishing your developer workflow.",
        topics: [
          { category: "Development & Portfolio", items: ["Minor Projects Implementation", "Portfolio Building & Architecture"] },
          { category: "Mentor Reviews", items: ["Weekly Code Reviews", "Direct Mentor Feedback & Iterations"] },
        ],
      },
      month3: {
        title: "Advanced Projects & Evaluation",
        subtitle: "Build major systems, present outputs, and participate in internship selections.",
        topics: [
          { category: "Major Implementations", items: ["Major Project Development", "Final Project Presentation & Deployment"] },
          { category: "Assessments & Internships", items: ["Technical Evaluations", "Performance-Based Internship Selection Process"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Industry-Oriented Training", desc: "Verifiable curriculum covering core algorithms and advanced modern AI concepts." },
      { title: "Mentor Guidance & Doubt Clearing", desc: "Live doubt clearing sessions, Slack loops, and direct developer support." },
      { title: "Minor & Major Projects", desc: "Build six responsive projects (3 minor, 3 major) to establish portfolio authority." },
      { title: "Course Completion Certificate", desc: "Mastery credential awarded upon finishing Month 1 training syllabus." },
      { title: "Project Completion Certificate", desc: "Proof of developer experience verifying Month 2 & 3 project implementations." },
      { title: "Internship Opportunity", desc: "Access to shortlisted corporate internships based on project performance." },
      { title: "Resume Building Support", desc: "Direct code revisions and optimization formatting for modern ATS pipelines." },
      { title: "LinkedIn Profile Optimization", desc: "Social reviews to boost technical profiles for outbound recruitments." },
      { title: "Placement Assistance", desc: "Warm connections and direct referrals to engineering partners." },
      { title: "Interview Preparation", desc: "Mock testing, coding loops, and behavioral guidelines to excel." },
    ],
    whyChoose: [
      { title: "Industry-Relevant Curriculum", desc: "Syllabus constantly updated by engineering leaders to match tech demands." },
      { title: "Learn from Working Professionals", desc: "Sessions instructed by active developers and senior industry coaches." },
      { title: "Real Internship Experience", desc: "Build code, fix bugs, and review pull requests inside mock teams." },
      { title: "Affordable Pricing", desc: "Premium tech education and direct certification priced for accessibility." },
      { title: "Career-Focused Learning", desc: "Every single topic maps to common interview coding questions." },
      { title: "Hands-On Project Portfolio", desc: "Graduate with active live links and a GitHub catalog to show tech recruiters." },
    ],
    testimonials: [
      { name: "Aditya Verma", role: "CSE Student", image: "AV", review: "The transition from basic DSA to deploying AI models was incredibly smooth. The 1-month training followed by project development gave me real skills that helped me land a job!", rating: 5 },
      { name: "Sneha Reddy", role: "ECE Graduate", image: "SR", review: "Loved the live classes and mentor support. Building the AI Chatbot and AI-Powered Career Assistant during the project phase gave me a strong portfolio to show recruiters.", rating: 5 },
      { name: "Rahul Sharma", role: "IT Student", image: "RS", review: "Very affordable pricing for the amount of value provided. The double certification and internship opportunities based on evaluations were massive boosts for my career.", rating: 5 },
    ],
    faqs: [
      { question: "What is the eligibility for this program?", answer: "This program is open to all students, graduates, and professionals who want to build strong problem-solving skills in DSA and master modern AI/ML technologies. No prior advanced programming experience is required." },
      { question: "How do I qualify for the internship opportunities?", answer: "Shortlisting for internship opportunities takes place at the end of the project phase. Selections are based on: Project Quality, Technical Skills, Mentor Evaluation, Attendance & Participation, and your Final Assessment Performance." },
      { question: "Are the classes live or recorded?", answer: "The Month 1 training phase features live online classes with interactive QA sessions. Additionally, you will get lifetime access to recorded sessions of all classes for future reference." },
      { question: "What kind of projects will I work on during the program?", answer: "You will work on minor projects (AI Resume Analyzer, Smart Chatbot, Student Performance Predictor) and major projects (AI-Powered Career Assistant, Intelligent Recommendation System, Generative AI Business Solution) under expert guidance." },
      { question: "Is there placement assistance provided?", answer: "Yes! We provide dedicated career support, which includes resume building, GitHub portfolio review, LinkedIn profile optimization, interview preparation, and placement assistance through our corporate partners." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Early bird discount of 10% applied. Standard price is ₹15,000.",
      scholarship: "Up to 50% merit-based scholarship available for top 10% performers in initial assessments.",
      included: ["Complete 3-Month Training & Projects", "Weekly Live Doubt Sessions", "Verifiable Dual Certificates", "ATS Resume & Profile Reviews", "Lifetime Access to Recordings", "Placement Assistance Support"],
    },
  },
  "full-stack-development": {
    slug: "full-stack-development",
    title: "Full Stack Development Internship Program",
    badge: "🚀 Full Stack Web App Engineering + Production Deployments",
    tagline: "Master Frontend, Backend, Databases, API Design, System Architecture, and Build Production-Ready Applications.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month Intensive Training covering React, Next.js, Node.js, Express, databases (MongoDB/PostgreSQL), and RESTful APIs.",
      mentorship: "Live reviews by experienced software engineers, architecture feedback, git workflows, and backend optimization coaching.",
      projects: {
        description: "Develop, secure, and deploy three minor and three major modern web platforms.",
        minor: ["Task Management Kanban App", "Weather Dashboard with Live APIs", "Real-time Chat App with WebSockets"],
        major: ["E-Commerce Marketplace with Payments", "Collaborative Virtual Whiteboard", "Real-time Doc Editor with Auto-save"],
      },
      internship: "High-performing developers will be recommended for Frontend, Backend, or Full Stack Developer internship roles.",
    },
    overview: "Become a versatile software engineer. This program takes you from HTML/CSS basics to designing distributed web architectures, writing secure REST APIs, scaling relational and non-relational databases, and deploying on cloud platforms.",
    durationDetails: {
      training: "1 Month Development Core",
      project: "2 Months Project Dev & Deployment",
      total: "3 Months",
    },
    deliveryMode: ["Interactive Live Lectures", "Code Sandbox Live Sessions", "GitHub Pull Request Workflows"],
    mentorshipSupport: ["One-on-One Code Reviews", "Weekly Architecture Clinics", "Slack Group Helpdesk"],
    timeline: {
      month1: {
        title: "Frontend & Backend Core",
        subtitle: "Develop beautiful UIs and solid server foundations.",
        topics: [
          { category: "Modern Frontend UI", items: ["React & Next.js Frameworks", "Tailwind CSS & Animations", "State Management (Redux/Zustand)"] },
          { category: "Backend & Server Logic", items: ["Node.js & Express APIs", "REST & GraphQL Design", "Auth Systems & JWT"] },
        ],
      },
      month2: {
        title: "Databases & System Design",
        subtitle: "Integrate data layers and design scalable services.",
        topics: [
          { category: "Data Storage Layers", items: ["SQL vs NoSQL (Postgres & MongoDB)", "ORM/ODM (Prisma/Mongoose)", "Caching with Redis"] },
          { category: "Developer Practices", items: ["Git Workflows & Monorepos", "Unit & Integration Testing", "API Documentation (Swagger)"] },
        ],
      },
      month3: {
        title: "Deployment & Production Projects",
        subtitle: "Build major applications, optimize systems, and host them live.",
        topics: [
          { category: "Advanced Projects", items: ["WebSockets for Real-time Systems", "Payment Gateway Integrations (Stripe)", "CI/CD Pipeline & Cloud Hosting"] },
          { category: "Evaluation & Placements", items: ["System Design Interviews", "Final Capstone Deployments", "Internship Direct Handoffs"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Complete Web Stack Training", desc: "Comprehensive education covering modern frontend, backend, and database engines." },
      { title: "Direct Code Refactor Reviews", desc: "Code updates reviewed using GitHub pull requests, just like standard tech teams." },
      { title: "6 Production Projects", desc: "Build & deploy 3 minor and 3 major web apps hosted live with domain names." },
      { title: "Dual Stack Certification", desc: "Verifiable frontend and backend certificates recognizing stack completions." },
      { title: "Real git & Team Workflows", desc: "Work in mock sprints, manage issues, and learn standard team practices." },
      { title: "Direct Partner Internship", desc: "Get shortlisted for internships at partner software development companies." },
      { title: "ATS Developer Resume Kit", desc: "Portfolio layout optimizing for software engineering screening tools." },
      { title: "GitHub Catalog Optimization", desc: "Transform your repositories with readmes and structure to impress HR." },
      { title: "Mock Technical Prep", desc: "Practice coding algorithms, JS internals, and system design challenges." },
      { title: "System Design Frameworks", desc: "Understand horizontal scaling, load balancers, and network architectures." },
    ],
    whyChoose: [
      { title: "Centralized Stack Approach", desc: "Learn JavaScript/TypeScript end-to-end to quickly build unified full stack apps." },
      { title: "Learn from Team Leads", desc: "Instructed by active Tech Leads and Principal Engineers from tech companies." },
      { title: "Focus on Real Deployments", desc: "Every project is deployed live to public cloud services (Vercel, Render, AWS)." },
      { title: "Highly Affordable", desc: "Premium engineering education at a small fraction of boot camp prices." },
      { title: "Job-Ready Curriculum", desc: "Syllabus maps directly to current job descriptions for junior developers." },
      { title: "Active Community Support", desc: "Build connections and work in teams with other student developers." },
    ],
    testimonials: [
      { name: "Vikram Malhotra", role: "Frontend Intern", image: "VM", review: "The Next.js and backend modules were highly practical. Building the real-time editor and hosting it on AWS gave me a huge talking point in my interview!", rating: 5 },
      { name: "Pooja Hegde", role: "Software Developer", image: "PH", review: "Having our code reviewed on GitHub taught me how real teams coordinate. It made my onboarding at my first job incredibly smooth.", rating: 5 },
    ],
    faqs: [
      { question: "Is this course suitable for beginners?", answer: "Yes! While having basic knowledge of HTML/CSS/JS is helpful, we start with core frontend concepts before building up to complex database integration and system architecture." },
      { question: "What hosting platforms will we use?", answer: "We will deploy frontend projects on Vercel and Netlify, backend APIs on Render and Fly.io, databases on MongoDB Atlas and Supabase, and learn AWS fundamentals." },
      { question: "Do we learn SQL or NoSQL databases?", answer: "Both! We teach relational databases using PostgreSQL and document-based databases using MongoDB to ensure you are ready for any stack." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for college students with valid student IDs.",
      scholarship: "Perform well in week 1 coding challenges to unlock up to 30% tuition waivers.",
      included: ["All Live Lectures & Workshops", "Personal GitHub Code Reviews", "Production Deployment Server Credits", "Verifiable Certificates", "Resume & Profile Builders", "Placement Support Contacts"],
    },
  },
  "cybersecurity-risk-management": {
    slug: "cybersecurity-risk-management",
    title: "Cybersecurity & Risk Management Internship Program",
    badge: "🛡️ Cyber Defense + Ethical Hacking + Risk Assessment Labs",
    tagline: "Develop Expertise in Ethical Hacking, Network Security, Cloud Auditing, Governance, Compliance, and Threat Hunting.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Linux networking, offensive security tools (Kali, Metasploit, Wireshark), and compliance frameworks (ISO 27001, SOC 2).",
      mentorship: "Mentorship led by CISSP certified security practitioners, security audits, and real vulnerability remediation guides.",
      projects: {
        description: "Engage in offensive security labs, write audit reports, and secure vulnerable systems.",
        minor: ["Custom Port Scanner", "Password Manager with AES-256", "Wireshark Packet Analysis Report"],
        major: ["Web Application Penetration Test", "Secure Network Infrastructure Setup", "Zero-Trust Cloud Governance Audit"],
      },
      internship: "Get shortlisted for Security Analyst, Penetration Tester, or GRC Intern opportunities.",
    },
    overview: "Defend corporate assets. This program covers defensive and offensive security: from analyzing network packets, hunting vulnerabilities in web apps, to implementing compliance frameworks and conducting risk assessments.",
    durationDetails: {
      training: "1 Month Security Labs",
      project: "2 Months Threat Hunting & Audits",
      total: "3 Months",
    },
    deliveryMode: ["Live Threat-Simulation Labs", "Interactive Audits", "CTF (Capture The Flag) Challenges"],
    mentorshipSupport: ["Certified Security Coach Q&A", "Vulnerability Assessment Reviews", "24/7 Sandbox Support"],
    timeline: {
      month1: {
        title: "Hacking & Defensive Foundations",
        subtitle: "Understand networks, systems, and standard hacking methodologies.",
        topics: [
          { category: "Network & Linux Basics", items: ["Linux command line for security", "TCP/IP Suite & Protocol Analysis", "Wireshark & Packet Inspection"] },
          { category: "Offensive Tools", items: ["Information Gathering & Nmap", "Vulnerability Scanning", "Metasploit & Exploit Execution"] },
        ],
      },
      month2: {
        title: "Web Security & Cloud Audits",
        subtitle: "Audit web applications and cloud architectures for vulnerability points.",
        topics: [
          { category: "Web App Hacking", items: ["OWASP Top 10 Vulnerabilities", "SQL Injection & XSS Exploitations", "Burp Suite Interceptions"] },
          { category: "Cloud & Governance", items: ["AWS/Azure Cloud Controls", "ISO 27001 & SOC 2 Audits", "Risk Mitigation Frameworks"] },
        ],
      },
      month3: {
        title: "Penetration Testing & Defense",
        subtitle: "Write professional penetration test reports, set up defenses, and get evaluated.",
        topics: [
          { category: "Defensive Operations", items: ["Firewalls & SIEM Log Analysis", "Incident Response Strategies", "Cryptography & Secure Tunneling"] },
          { category: "Report & Referral", items: ["Penetration Test Report Drafting", "Final Defensive Simulation Test", "GRC / SecOps Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Offensive & Defensive Core", desc: "In-depth training spanning GRC, penetration testing, and network monitoring." },
      { title: "Kali Linux & Sec Lab Access", desc: "Guided setup of personal home security labs and virtual testing environments." },
      { title: "6 Security Projects", desc: "Build a portfolio featuring 3 tool code scripts and 3 compliance/audit reports." },
      { title: "Cyber Analyst Certificate", desc: "Credential proving competency in threat analysis and ethical hacking." },
      { title: "Capture the Flag Prep", desc: "Mock CTF practice questions and custom challenges to build problem-solving loops." },
      { title: "Security Analyst Placements", desc: "Direct outreach to corporate security teams looking for junior analysts." },
      { title: "GRC Report Templates", desc: "Access to professional compliance audit layouts used in auditing." },
      { title: "Interview Vulnerability Prep", desc: "Expert guidance for web app testing, networking, and security interview loops." },
      { title: "Defensive Playbook Design", desc: "Learn how to write incidence response logs and configure security rules." },
      { title: "Zero Trust Architecture Models", desc: "Implement microsegmentation, policy engines, and identity control loops." },
    ],
    whyChoose: [
      { title: "Double-Focus Approach", desc: "Combines high-demand offensive skills (Pentesting) with GRC compliance for broader jobs." },
      { title: "Instructed by Active Auditors", desc: "Sessions held by senior corporate auditors and security consultants." },
      { title: "Hands-on Lab Simulations", desc: "Forget plain theory; hack real virtual machines in sandbox environments." },
      { title: "Affordable Access", desc: "Get high-end cyber training without paying thousands for proprietary courses." },
      { title: "Current Toolset Mastery", desc: "Master industrial standards like Burp Suite, Metasploit, Nmap, and Wireshark." },
      { title: "Job Market Readiness", desc: "Prepares you for entry-level Security Analyst and Junior Auditor roles." },
    ],
    testimonials: [
      { name: "Kunal Deshmukh", role: "SecOps Intern", image: "KD", review: "The web app pentesting labs were intense. Building a full secure network infrastructure and explaining it helped me land my SOC analyst job.", rating: 5 },
      { name: "Arpita Sen", role: "GRC Consultant", image: "AS", review: "I appreciated the focus on ISO 27001 and risk management. It set me apart from other candidates who only knew offensive hacking tools.", rating: 5 },
    ],
    faqs: [
      { question: "Is programming required for this course?", answer: "Basic scripting knowledge (like Python or Bash) is helpful but not mandatory. We teach you how to write basic tools like port scanners from scratch." },
      { question: "Do we receive hands-on labs?", answer: "Yes! You will set up local virtual machines (Kali Linux and Metasploitable) to practice scanning, exploiting, and defending systems in a secure environment." },
      { question: "Does this prepare me for certifications?", answer: "Yes, our syllabus aligns with concepts tested in CompTIA Security+, CEH (Certified Ethical Hacker), and ISO 27001 Auditor exams." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "EMI plans starting at ₹5,000/month for 3 months with credit/debit cards.",
      discounts: "Early-bird discount of ₹1,000 off for the first 20 enrollments of the batch.",
      scholarship: "Perform in top brackets in our CTF challenges to earn up to 40% fee cashback.",
      included: ["Cyber Range Lab Access Guides", "Live Exploitation Classes", "Verifiable Certificates", "Corporate GRC Templates", "Security Interview Q&A Bank", "Placement Referral Network"],
    },
  },
  "cloud-computing-devops": {
    slug: "cloud-computing-devops",
    title: "Cloud Computing & DevOps Internship Program",
    badge: "☁️ AWS & Azure + Docker & Kubernetes + CI/CD Pipelines",
    tagline: "Master Cloud Infrastructure, Containerization, Infrastructure as Code, CI/CD pipelines, and System Reliability.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering AWS services, Docker containers, Kubernetes clusters, and Terraform automation script development.",
      mentorship: "Guidance from experienced DevOps Architects, code refactoring reviews, and cloud cost-optimization audits.",
      projects: {
        description: "Configure infrastructure, automate code delivery pipelines, and monitor scaleable systems.",
        minor: ["Dockerized App Build", "AWS Multi-AZ VPC Configuration", "Static Site Deployment with HTTPS & CDN"],
        major: ["Kubernetes Microservices Deployment", "End-to-End Automated CI/CD Pipeline", "Infrastructure as Code with Terraform"],
      },
      internship: "Top students get direct referrals for Cloud Engineer, DevOps Intern, or Site Reliability Associate positions.",
    },
    overview: "Automate the cloud. Learn how to configure robust cloud architectures, pack apps into Docker containers, scale them with Kubernetes, write Infrastructure as Code with Terraform, and automate delivery with GitHub Actions.",
    durationDetails: {
      training: "1 Month Cloud Foundations",
      project: "2 Months CI/CD & Deployments",
      total: "3 Months",
    },
    deliveryMode: ["Live Console Walkthroughs", "Hands-on Architecture Design", "GitHub Actions Automation Labs"],
    mentorshipSupport: ["AWS Certified Coach Q&A", "Terraform Code Reviews", "SysOps Incident Scenarios"],
    timeline: {
      month1: {
        title: "Cloud Services & Containers",
        subtitle: "Deploy apps to AWS and master container isolation.",
        topics: [
          { category: "AWS Cloud Core", items: ["EC2, S3, RDS & VPC Setup", "IAM Security Roles", "Route53 & CDN Distributions"] },
          { category: "Docker Containerization", items: ["Writing Dockerfiles", "Multi-stage Container Builds", "Docker Compose Orchestration"] },
        ],
      },
      month2: {
        title: "Kubernetes & IaC Automation",
        subtitle: "Scale services dynamically and automate infrastructure writing.",
        topics: [
          { category: "Kubernetes Scaling", items: ["Pods, Deployments & Services", "ConfigMaps & Secrets", "Ingress Controllers & Routing"] },
          { category: "Infrastructure as Code", items: ["Terraform Declarations", "State File Architectures", "AWS Provisioning Loops"] },
        ],
      },
      month3: {
        title: "Pipelines, Monitoring & Evaluation",
        subtitle: "Build continuous delivery systems, monitor health, and qualify for placement.",
        topics: [
          { category: "DevOps Integration", items: ["GitHub Actions / Jenkins pipelines", "Prometheus & Grafana Monitoring", "ELK Log Aggregation"] },
          { category: "Handoff & Review", items: ["Architecture Cost Audit", "System Failure Mock Drills", "Corporate Placement Loops"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "DevOps & Cloud Core", desc: "Detailed syllabus spanning major cloud services, container networks, and delivery pipelines." },
      { title: "AWS Sandbox Setup Guides", desc: "Assistance setting up AWS Free Tier accounts safely to avoid billing surprises." },
      { title: "6 Infrastructure Projects", desc: "Build a portfolio with 3 container scripts and 3 cloud configurations." },
      { title: "Cloud Systems Certificate", desc: "Verifiable credential validating Cloud Architecture & DevOps skills." },
      { title: "Terraform Module Banks", desc: "Get reusable IaC configuration blocks for rapid AWS setups." },
      { title: "Direct DevOps Referrals", desc: "Introductions to systems integration and tech startups hiring junior engineers." },
      { title: "ATS DevOps Resume Framework", desc: "Resume layout highlighting systems tools, configurations, and scripts." },
      { title: "GitHub Architecture Portfolios", desc: "Create repository structures that showcase clean IaC configurations." },
      { title: "Mock DevOps Interview Loops", desc: "Practice system design, container networking, and deployment failure loops." },
      { title: "Kubernetes Configuration Assets", desc: "Reusable YAML deployments, services, and ingress control assets." },
    ],
    whyChoose: [
      { title: "High Demand Skillsets", desc: "DevOps engineers are highly paid due to their critical role in systems operations." },
      { title: "Instructed by Cloud Architects", desc: "Sessions held by senior cloud engineers and certified AWS specialists." },
      { title: "Infrastructure-First Focus", desc: "Learn actual automation, cost management, and system monitoring loops." },
      { title: "Extremely Affordable", desc: "Top-tier systems engineering education at a tiny fraction of normal training fees." },
      { title: "Modern Industrial Tools", desc: "Master the exact tools tech companies use: Docker, Kubernetes, Terraform, Prometheus." },
      { title: "Hands-on Practice Labs", desc: "Direct hands-on experience provisioning live cloud components." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "DevOps Associate", image: "RK", review: "The Terraform and Kubernetes modules were incredible. Building the automated pipeline with GitHub Actions got me my first DevOps offer.", rating: 5 },
      { name: "Anjali Gupta", role: "Cloud Support Engineer", image: "AG", review: "I loved the focus on AWS Cost optimization. It's a real-world problem that most bootcamps completely skip.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need to be a developer to learn DevOps?", answer: "No, but basic scripting (like Python or JS) helps. DevOps focuses on infrastructure, automation, and operations rather than raw product coding." },
      { question: "Will I get billed by AWS during the course?", answer: "We show you how to leverage the AWS Free Tier and configure billing alerts to avoid unexpected costs while running lab services." },
      { question: "What certifications does this align with?", answer: "Our course content aligns with AWS Certified Cloud Practitioner, Solutions Architect Associate, and Certified Kubernetes Administrator (CKA)." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold active cloud certifications.",
      scholarship: "Top 3 students in monthly deployment reviews get 50% fee refunds.",
      included: ["Live Console Sessions", "Personal IaC Code Refactoring", "Reusable Infrastructure Assets", "Dual Certificates", "AWS Console Setup Lab Guides", "Placement Direct Referrals"],
    },
  },
  "digital-product-design": {
    slug: "digital-product-design",
    title: "Digital Product Design (UI/UX) Internship Program",
    badge: "🎨 Figma Systems + UX Research + Interactive Prototypes",
    tagline: "Master User Research, Wireframing, High-Fidelity Design, Advanced Auto-Layout, UI Components, and Interactive Prototyping.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month training covering user persona interviews, information architecture, Figma systems, auto-layout, and interaction animations.",
      mentorship: "Personal feedback from Senior Product Designers, portfolio case study refactoring, and UI feedback.",
      projects: {
        description: "Perform research, create wireframes, and design rich responsive visual products.",
        minor: ["SaaS Product Landing Page Redesign", "Mobile App Wireframe Blueprint", "Comprehensive UX Audit Report"],
        major: ["End-to-End E-Commerce Mobile App UI", "Interactive SaaS Analytics Dashboard", "Responsive Design System in Figma"],
      },
      internship: "Get shortlisted for UI/UX Design, Product Design, or Interaction Design internships.",
    },
    overview: "Design beautiful products. Learn user-centric methodology: from conducting user interviews, organizing information flow, creating wireframe layouts, constructing Figma design systems, to building interactive mockups.",
    durationDetails: {
      training: "1 Month UX/UI Foundations",
      project: "2 Months Figma Designs & Portfolio",
      total: "3 Months",
    },
    deliveryMode: ["Live Figma Design Workshops", "Interactive Critique Sessions", "User Interview Case Studies"],
    mentorshipSupport: ["Senior Designer Feedback", "UI Component Critiques", "Case Study Framework Help"],
    timeline: {
      month1: {
        title: "UX Research & Blueprints",
        subtitle: "Master user research, define flow, and draw basic structures.",
        topics: [
          { category: "UX Research Core", items: ["User Personas & Interviews", "Customer Journey Maps", "Information Architecture & User Flow"] },
          { category: "Wireframe Blueprints", items: ["Low-Fidelity Sketching", "Wireframing in Figma", "Heuristic UX Evaluation"] },
        ],
      },
      month2: {
        title: "UI Design & Figma Systems",
        subtitle: "Learn styling, grid structures, and create scalable component layouts.",
        topics: [
          { category: "Visual UI Design", items: ["Typography & Grid Systems", "Color Psychology & Contrast Rules", "Figma Components & Auto-Layout"] },
          { category: "Interactive Systems", items: ["Figma Variants & Variables", "Interactive Component Prototyping", "Micro-interaction Animations"] },
        ],
      },
      month3: {
        title: "Design Systems & Hand-off",
        subtitle: "Build complete design systems, write case studies, and prepare hand-offs.",
        topics: [
          { category: "Advanced Portfolio", items: ["Figma Design System Building", "Responsive UI Design Projects", "Developer Hand-off Protocols"] },
          { category: "Review & Referrals", items: ["UX Portfolio Case Study Writing", "Mock Portfolio Presentation Interviews", "Startups Design Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "UI/UX Core Syllabus", desc: "Detailed syllabus spanning user research, wireframing, Figma systems, and design reviews." },
      { title: "Figma Component Kits", desc: "Access to professional UI component kits to accelerate your layouts." },
      { title: "6 Portfolio Case Studies", desc: "Complete 3 wireframe audits and 3 high-fidelity interactive visual design case studies." },
      { title: "UI/UX Designer Certificate", desc: "Verifiable credential proving competency in product design and user research." },
      { title: "Case Study Templates", desc: "Access to standard design layouts that make your portfolio stand out to recruiters." },
      { title: "Direct Product Referrals", desc: "Introductions to agencies, SaaS startups, and product teams hiring design interns." },
      { title: "Design Portfolio Layouts", desc: "Advice on presenting designs on Behance, Dribbble, and personal site pages." },
      { title: "Figma Community Support", desc: "Collaborate on projects, share assets, and join design challenges." },
      { title: "Mock Portfolio Review Loops", desc: "Practice presenting designs, defending choices, and answering UI questions." },
      { title: "Design-to-Code Handoff Guides", desc: "Learn how to format files, organize groups, and export code assets." },
    ],
    whyChoose: [
      { title: "Figma Mastery Focus", desc: "Go deep into Figma's professional features like auto-layout, variables, and components." },
      { title: "Instructed by Lead Designers", desc: "Sessions held by senior designers building commercial digital apps." },
      { title: "Case-Study Portfolio Focus", desc: "Build a portfolio structured specifically to satisfy design recruiters." },
      { title: "Highly Affordable Fee", desc: "Get comprehensive UI/UX training without paying massive design bootcamp fees." },
      { title: "No Coding Required", desc: "Fully focused on design, research, and visual systems rather than writing code." },
      { title: "Highly Collaborative", desc: "Participate in live group design critiques to improve visual choices." },
    ],
    testimonials: [
      { name: "Meera Nair", role: "Product Designer", image: "MN", review: "The Figma auto-layout and component variable modules were so detailed. Building the SaaS Dashboard and presenting it got me a role.", rating: 5 },
      { name: "Rahul Kapoor", role: "UI Intern", image: "RK", review: "The case study layout guide was exactly what I needed. It helped me structure my Behance projects to get noticed by recruiters.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need to know how to draw to do UI/UX?", answer: "No! UI/UX is about user flow, layout systems, typography, and logic. Figma handles the shapes; you focus on layout and experience." },
      { question: "Do we learn coding in this course?", answer: "No, this course is completely code-free. However, we teach you how to prepare designs so developers can code them easily." },
      { question: "What tools do we learn?", answer: "We focus heavily on Figma, the industry standard tool. We also cover FigJam for user flows and research layouts." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "Installment options available at ₹5,000/month for 3 months.",
      discounts: "10% early registration discount applied for the first 15 signups of the month.",
      scholarship: "Submit outstanding visual design submissions in week 2 to earn up to 30% fee cashback.",
      included: ["Live Figma Design Workshops", "Personal Portfolio Reviews", "Premium UI Component Kits", "Verifiable Certificates", "Developer Hand-off Training", "Design Direct Referrals"],
    },
  },
  "embedded-systems-iot": {
    slug: "embedded-systems-iot",
    title: "Embedded Systems & IoT Internship Program",
    badge: "📡 Microcontrollers + IoT Sensors + Firmware & Communication Protocols",
    tagline: "Build Smart Connected Systems Using Microcontrollers, Sensors, Communication Protocols, and Cloud IoT Platforms.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Embedded C, microcontroller architectures (ESP32/Arduino), sensor interfaces, and IoT protocols (MQTT, HTTP).",
      mentorship: "Mentorship led by hardware engineers, firmware optimization code reviews, and system integration tips.",
      projects: {
        description: "Develop connected firmware systems, interface components, and log data to cloud dashboards.",
        minor: ["Smart Home Room Controller", "ESP32 WiFi Weather Logger", "IoT Web Server Alert System"],
        major: ["Smart Electrical Grid Monitor", "Industrial Asset Tracking System", "IoT-Enabled Health Assistant Node"],
      },
      internship: "High-performing students will get referred for Embedded Firmware, IoT Developer, or System Test Engineer internships.",
    },
    overview: "Connect hardware to the cloud. This program takes you from Embedded C fundamentals to programming microcontrollers, reading analog/digital sensors, configuring communication interfaces (UART, SPI, I2C), and linking devices to cloud databases.",
    durationDetails: {
      training: "1 Month Firmware & Hardware",
      project: "2 Months IoT Cloud Deployments",
      total: "3 Months",
    },
    deliveryMode: ["Live Hardware Simulations", "Console Output Debugging Workshops", "Cloud Dashboard Integrations"],
    mentorshipSupport: ["Hardware Engineer Office Hours", "Firmware Code Refactoring Reviews", "System Configuration Helpdesk"],
    timeline: {
      month1: {
        title: "Embedded C & Firmware Basics",
        subtitle: "Master microcontroller logic and interface basic sensors.",
        topics: [
          { category: "Embedded C Core", items: ["C Syntax for Hardware Control", "GPIO Configuration & Interventions", "Timers & PWM Generators"] },
          { category: "Sensors & Interfaces", items: ["UART Serial Interfaces", "Reading ADC/DAC Signals", "Sensor Integration (Temp, Humidity, Motion)"] },
        ],
      },
      month2: {
        title: "I2C, SPI & Wireless Networks",
        subtitle: "Interface advanced communication components and establish wireless links.",
        topics: [
          { category: "Device Networks", items: ["I2C Interface (OLED Screens)", "SPI Protocol (SD Card Storage)", "Intersystem Communication Loops"] },
          { category: "Wireless Links", items: ["ESP32 WiFi Client Operations", "Bluetooth BLE Configurations", "FreeRTOS Basics for Multi-Tasking"] },
        ],
      },
      month3: {
        title: "IoT Protocols & Cloud Dashboards",
        subtitle: "Stream sensor logs to public cloud platforms and pass final assessments.",
        topics: [
          { category: "IoT Cloud APIs", items: ["HTTP REST Client Configurations", "MQTT Publish/Subscribe Brokers", "ThingsSpeak / Adafruit IO Dashboards"] },
          { category: "Evaluation & Placements", items: ["Firmware Optimization Assessments", "Final IoT System Deployments", "Firmware Intern Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Embedded & IoT Core", desc: "Detailed syllabus spanning microcontroller architectures, interfaces, and IoT communication protocols." },
      { title: "Simulated Hardware IDEs", desc: "Setup guides for virtual hardware simulation IDEs (Wokwi, Tinkercad) to write code." },
      { title: "6 Firmware Projects", desc: "Create a portfolio featuring 3 local system scripts and 3 cloud-integrated hardware projects." },
      { title: "Embedded Developer Certificate", desc: "Verifiable credential validating microcontroller firmware and IoT skills." },
      { title: "Firmware Driver Libraries", desc: "Access to clean C/C++ driver templates for various common sensors." },
      { title: "Direct Electronics Referrals", desc: "Introductions to hardware startups, smart appliance firms, and IoT system designers." },
      { title: "ATS Firmware Resume Kit", desc: "Resume layout optimizing for microcontroller and firmware keywords." },
      { title: "GitHub Code Portfolios", desc: "Organize firmware files and documentation to showcase development quality." },
      { title: "Mock Firmware Interview Loops", desc: "Practice explaining memory constraints, pointers, interrupts, and protocols." },
      { title: "Cloud Integration Guides", desc: "Get scripts to secure hardware-to-cloud connections and format JSON logs." },
    ],
    whyChoose: [
      { title: "Hardware-to-Cloud Integration", desc: "Learn to build products that combine physical hardware components with web backends." },
      { title: "Instructed by Tech Leads", desc: "Sessions held by senior system engineers and active hardware designers." },
      { title: "Software Simulation Focus", desc: "Write actual firmware code run on high-fidelity simulation platforms." },
      { title: "Affordable Engineering Core", desc: "Top-tier systems engineering education at a tiny fraction of normal training fees." },
      { title: "Industry Standard Protocols", desc: "Master the exact protocols used globally: I2C, SPI, UART, MQTT." },
      { title: "Career-Relevant Projects", desc: "Build projects that directly relate to commercial smart systems." },
    ],
    testimonials: [
      { name: "Pranav Shah", role: "Embedded Intern", image: "PS", review: "The ESP32 WiFi and MQTT modules were excellent. Deploying the smart grid sensor and logging to Adafruit got me an internship offer.", rating: 5 },
      { name: "Divya Rao", role: "System Test Engineer", image: "DR", review: "I loved the FreeRTOS multitasking labs. It helped me clear my technical round with a smart home appliance maker.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need physical hardware kits to take this course?", answer: "No! We use advanced simulation platforms (like Wokwi) where you can wire virtual ESP32s and sensors online. We also guide you on buying kits if you want." },
      { question: "What language is used for coding?", answer: "We program microcontrollers using Embedded C and C++ within the Arduino IDE and VS Code platforms." },
      { question: "What hardware platforms are covered?", answer: "We focus on ESP32 due to its integrated WiFi/Bluetooth, and cover Arduino UNO fundamentals to establish basic principles." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold college degrees in ECE, EEE, or Instrumentation.",
      scholarship: "Top 3 students in monthly firmware evaluations get 50% fee refunds.",
      included: ["Live Console Sessions", "Firmware Code Refactoring", "Simulation Component Files", "Dual Certificates", "Hardware Shopping Guides", "Placement Direct Referrals"],
    },
  },
  "semiconductor-vlsi": {
    slug: "semiconductor-vlsi",
    title: "Semiconductor & VLSI Design Internship Program",
    badge: "🔬 Verilog RTL + SystemVerilog Verification + FPGA Workflows",
    tagline: "Learn Chip Design Fundamentals, RTL Design, SystemVerilog Verification, and Semiconductor Industry Workflows.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Combinational & Sequential Logic, Verilog RTL coding, SystemVerilog Verification testbenches, and EDA toolflows.",
      mentorship: "Guidance from senior VLSI Design Engineers, verification methodology code reviews, and digital design reviews.",
      projects: {
        description: "Write synthesizable Verilog modules and build verification testbenches.",
        minor: ["8-Bit ALU RTL Implementation", "FIFO Buffer Verification Model", "Traffic Light Controller FSM"],
        major: ["RISC-V 32I Processor Core Design", "SystemVerilog Testbench for Memory Controller", "FPGA-Synthesizable Encryption Accelerator"],
      },
      internship: "High-performing students get direct referalls for RTL Design, Design Verification, or Physical Design internships.",
    },
    overview: "Step into chip design. Learn hardware description languages: from writing combinational/sequential logic, mapping finite state machines (FSM), constructing verification testbenches in SystemVerilog, to understanding FPGA synthesis workflows.",
    durationDetails: {
      training: "1 Month RTL & Verilog Core",
      project: "2 Months Verification & FPGAs",
      total: "3 Months",
    },
    deliveryMode: ["Live Code Waveform Analyses", "EDA Tool Command Workshops", "Interactive Logic Design Labs"],
    mentorshipSupport: ["VLSI Engineer Office Hours", "Testbench Verification Reviews", "FSM Architecture Consultations"],
    timeline: {
      month1: {
        title: "Digital Logic & Verilog RTL",
        subtitle: "Master digital fundamentals and write synthesizable hardware modules.",
        topics: [
          { category: "Digital Design Basics", items: ["K-Maps & Logic Gates", "Sequential Circuits (Latches/FlipFlops)", "Setup & Hold Time Analysis"] },
          { category: "Verilog Hardware Language", items: ["Dataflow & Behavioral Modeling", "Finite State Machine (FSM) Design", "Synthesizable vs Non-Synthesizable Code"] },
        ],
      },
      month2: {
        title: "SystemVerilog Verification",
        subtitle: "Construct comprehensive verification environments to validate RTL designs.",
        topics: [
          { category: "SystemVerilog Core", items: ["OOP Concepts in Hardware Verification", "Interface & Program Blocks", "Randomization & Constraints"] },
          { category: "Verification Labs", items: ["Functional Coverage Analysis", "Writing Drivers & Monitors", "Building SystemVerilog Testbenches"] },
        ],
      },
      month3: {
        title: "FPGA & EDA Toolflows",
        subtitle: "Synthesize code, analyze wave outputs, and qualify for placement.",
        topics: [
          { category: "Synthesis & Waveforms", items: ["FPGA Architecture & Mapping", "Timing Constraints & Static Analysis", "Simulator Waveform Debugging"] },
          { category: "Evaluation & Placements", items: ["Verification Coverage Assessments", "Final VLSI Design Deployments", "Core VLSI Referral Loops"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "VLSI & RTL Core Syllabus", desc: "Detailed syllabus spanning Verilog RTL, SystemVerilog testbenches, and EDA tool command flows." },
      { title: "Online EDA IDE Accounts", desc: "Setup guides for cloud EDA simulators (EDA Playground, ModelSim) to write HDL code." },
      { title: "6 VLSI Design Projects", desc: "Create a portfolio featuring 3 RTL designs and 3 verification testbench projects." },
      { title: "VLSI Design Certificate", desc: "Verifiable credential validating hardware description and verification skills." },
      { title: "RTL Module Design Code", desc: "Access to clean, synthesizable Verilog code templates for common components." },
      { title: "Direct VLSI Referrals", desc: "Introductions to semiconductor suppliers, chip design houses, and hardware consultants." },
      { title: "ATS VLSI Resume Kit", desc: "Resume layout optimizing for hardware design, RTL, and verification keywords." },
      { title: "GitHub Waveform Portfolios", desc: "Organize RTL code and testbenches with simulation waveform images in readmes." },
      { title: "Mock VLSI Interview Loops", desc: "Practice explaining setup/hold times, FSM optimization, and SystemVerilog OOP." },
      { title: "Verification Plan Blueprints", desc: "Get templates to write test plans, coverage metrics, and bug logs." },
    ],
    whyChoose: [
      { title: "High Demand Domain", desc: "The semiconductor industry is growing rapidly with massive government backing and capital investments." },
      { title: "Instructed by VLSI Leads", desc: "Sessions held by senior design engineers who have taped-out commercial silicon." },
      { title: "Verification-Focused Labs", desc: "Emphasis on SystemVerilog verification, the primary entry point for junior VLSI jobs." },
      { title: "Affordable VLSI Entry", desc: "Get high-end chip design training without paying thousands for proprietary courses." },
      { title: "Industry Standard Methods", desc: "Learn object-oriented SystemVerilog concepts used by major chip design firms." },
      { title: "Logic-First Approach", desc: "Focuses deeply on timing paths, digital architecture, and logic optimization." },
    ],
    testimonials: [
      { name: "Siddharth Verma", role: "DV Intern", image: "SV", review: "The RISC-V RTL project was highly practical. Explaining my SystemVerilog testbench got me a verification internship.", rating: 5 },
      { name: "Kavya Menon", role: "RTL Associate", image: "KM", review: "I loved the setup & hold timing analysis modules. It helped me answer core technical questions in my interview.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need expensive hardware boards (FPGAs) for this course?", answer: "No! All design and verification are done on cloud EDA simulator software platforms. We teach HDL coding and verification, which run in simulators." },
      { question: "What language is used for chip design?", answer: "We use Verilog HDL for RTL design (writing the chip logic) and SystemVerilog for verification (writing testbenches)." },
      { question: "Does this course cover UVM (Universal Verification Methodology)?", answer: "We cover SystemVerilog OOP concepts and verification testbenches thoroughly, which are the prerequisites for learning UVM." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in ECE, EEE, or Telecom.",
      scholarship: "Top 3 students in monthly verification coverage reviews get 50% fee refunds.",
      included: ["Live Code Sessions", "Testbench Architecture Reviews", "Reusable RTL & Testbench Files", "Dual Certificates", "EDA Simulator Setup Lab Guides", "Placement Direct Referrals"],
    },
  },
  "ai-driven-electronics": {
    slug: "ai-driven-electronics",
    title: "AI-Driven Electronics Internship Program",
    badge: "🤖 Edge AI + TinyML + Advanced PCB Design & Hardware Systems",
    tagline: "Develop Intelligent Systems, Deploying Machine Learning at the Edge, Programming Smart Sensors, and Designing Custom PCBs.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering Microcontroller ML interfaces, Edge Impulse deployment, PCB design in KiCad, and sensor interfaces.",
      mentorship: "Guidance from hardware product architects, schematic audits, and edge-ML performance reviews.",
      projects: {
        description: "Train edge-ML models, design hardware circuit boards, and build smart systems.",
        minor: ["Voice-Controlled Relay Node", "Smart Motion Recognizer Firmware", "TinyML Gesture Estimator model"],
        major: ["Edge-AI Camera Object Detector", "Intelligent Robotic Arm Board Design", "Smart Battery Monitoring Board & PCB"],
      },
      internship: "Top students get referred for Hardware Engineer, Edge-AI Developer, or Junior PCB Designer roles.",
    },
    overview: "Build smart hardware. Learn how to interface high-speed sensors, train and optimize machine learning models to run within memory-constrained microcontrollers (TinyML), and design custom printed circuit boards (PCBs) to deploy the systems.",
    durationDetails: {
      training: "1 Month Edge ML & Schematics",
      project: "2 Months PCB Layouts & Edge Deploys",
      total: "3 Months",
    },
    deliveryMode: ["Live Schematic Design Walkthroughs", "Edge Impulse ML Training Labs", "PCB Routing Layout Demos"],
    mentorshipSupport: ["Hardware Architect Office Hours", "PCB Design Schematic Reviews", "TinyML Optimization Assistance"],
    timeline: {
      month1: {
        title: "Edge Sensors & TinyML Models",
        subtitle: "Collect sensor data and train machine learning models for hardware deployment.",
        topics: [
          { category: "Sensor Interfaces", items: ["High-speed ADC Signal Logging", "SPI Camera/Microphone interfaces", "Data Pre-processing in C/Python"] },
          { category: "TinyML Foundations", items: ["Edge Impulse Studio workflow", "Feature Extraction & Training", "Model Quantization & Footprints"] },
        ],
      },
      month2: {
        title: "Schematics & PCB Design",
        subtitle: "Design hardware schematics and route physical printed circuit boards.",
        topics: [
          { category: "Hardware Design Basics", items: ["KiCad Schematic Capture", "Component Footprint Mapping", "Power Regulation Loops"] },
          { category: "PCB Layout Routing", items: ["Multi-layer Routing Rules", "Ground Plane Optimization", "Design for Manufacturing (DFM) rules"] },
        ],
      },
      month3: {
        title: "Edge Deployments & Validation",
        subtitle: "Compile TinyML firmware, export manufacturing files, and pass final reviews.",
        topics: [
          { category: "System Integration", items: ["C++ Deployment on ESP32/ARM", "Edge inference loop optimization", "Gerber File generation for PCBs"] },
          { category: "Evaluation & Handoff", items: ["Hardware Design Audits", "Final System Performance tests", "Direct Hardware Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Edge AI & Hardware Core", desc: "Detailed syllabus spanning TinyML training, KiCad PCB routing, and firmware compilations." },
      { title: "PCB Design Template Files", desc: "Access to verified KiCad schematic templates for microcontrollers and power regulators." },
      { title: "6 Integrated Projects", desc: "Build a portfolio featuring 3 TinyML models and 3 custom PCB designs." },
      { title: "Smart Systems Certificate", desc: "Verifiable credential validating Edge-AI modeling and PCB design skills." },
      { title: "Edge ML C++ Libraries", desc: "Get pre-compiled inference libraries ready for direct execution on microcontrollers." },
      { title: "Direct Hardware Referrals", desc: "Introductions to electronics developers, IoT manufacturers, and product startups." },
      { title: "ATS Hardware Resume Kit", desc: "Resume layout optimizing for PCB design, TinyML, and firmware keywords." },
      { title: "GitHub PCB Portfolios", desc: "Create repository structures that showcase schematics, routing images, and gerber files." },
      { title: "Mock Hardware Interview Loops", desc: "Practice explaining PCB noise issues, signal integrity, and model memory footprints." },
      { title: "Manufacturing Gerber Checklists", desc: "Get professional checklist items to verify boards before fabrication." },
    ],
    whyChoose: [
      { title: "Next-Gen Hardware Skills", desc: "Combines classic PCB design with cutting-edge TinyML for highly differentiated skills." },
      { title: "Instructed by Hardware Architects", desc: "Sessions held by senior engineers building commercial hardware products." },
      { title: "Software Simulation & Tools", desc: "Use Edge Impulse and KiCad, the gold standards of modern product design." },
      { title: "Affordable Electronics Entry", desc: "Top-tier systems engineering education at a tiny fraction of normal training fees." },
      { title: "KiCad & ML Industry Tools", desc: "Master the exact tools tech startups use to prototype and manufacture." },
      { title: "Hands-on Practice Labs", desc: "Direct hands-on experience designing real physical circuit schematics." },
    ],
    testimonials: [
      { name: "Varun Malhotra", role: "Hardware Engineer Intern", image: "VM", review: "The PCB design modules in KiCad were so practical. Routing the ESP32 board and explaining it got me an internship offer.", rating: 5 },
      { name: "Pooja Hegde", role: "Embedded ML Developer", image: "PH", review: "I loved the Edge Impulse TinyML training. It helped me clear my technical round with an automation systems designer.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need to buy PCB parts for this course?", answer: "No! We design the boards digitally in KiCad. We show you how to generate manufacturing files (Gerbers) which is what engineers do." },
      { question: "What language is used for coding TinyML?", answer: "We train models using Python/Edge Impulse, and deploy them on microcontrollers using C/C++ libraries." },
      { question: "What EDA software is covered?", answer: "We focus on KiCad because it is open-source, widely used in industry, and has no licensing restrictions for students." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in ECE, EEE, or Robotics.",
      scholarship: "Top 3 students in monthly PCB design reviews get 50% fee refunds.",
      included: ["Live PCB Design Sessions", "Personal Schematic Audits", "Reusable KiCad Templates", "Dual Certificates", "KiCad Component Library Guides", "Placement Direct Referrals"],
    },
  },
  "ev-tech-battery": {
    slug: "ev-tech-battery",
    title: "Electric Vehicle Technology & Battery Systems Internship Program",
    badge: "⚡ EV Architecture + Battery Management Systems (BMS) + MATLAB Simulations",
    tagline: "Master EV Powertrains, Battery Pack Engineering, BMS Modeling, and MATLAB/Simulink System Simulations.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering EV architectures, Motor controllers, Cell Chemistry, Battery Management System (BMS) algorithms, and MATLAB simulations.",
      mentorship: "Guidance from experienced EV Powertrain Engineers, simulation model reviews, and battery pack design audits.",
      projects: {
        description: "Model EV components, simulate thermal behavior, and design BMS controllers.",
        minor: ["EV Range Estimation Model", "Solar Charger DC-DC Converter Design", "Battery Cell Thermal Simulator"],
        major: ["MATLAB Battery Management System (BMS)", "Complete EV Powertrain Simulation", "Smart Grid EV Charging Infrastructure Model"],
      },
      internship: "Top students get direct referrals for EV Systems Intern, BMS Firmware Associate, or Powertrain Simulation Engineer roles.",
    },
    overview: "Accelerate into electric mobility. Learn EV mechanics: from powertrain matching, motor speed controls, cell selection, battery pack assembly design, to programming BMS controllers for overvoltage, undervoltage, and thermal defenses using MATLAB/Simulink.",
    durationDetails: {
      training: "1 Month EV Components & Math",
      project: "2 Months BMS Modeling & Simulink",
      total: "3 Months",
    },
    deliveryMode: ["Live MATLAB Simulink Demos", "EV Powertrain Calculations", "Thermal Analysis Workshops"],
    mentorshipSupport: ["EV Design Lead Office Hours", "Simulink Model Code Reviews", "Powertrain Configuration Support"],
    timeline: {
      month1: {
        title: "EV Architecture & Motors",
        subtitle: "Calculate powertrain requirements and configure motor controller models.",
        topics: [
          { category: "EV System Math", items: ["Tractive Effort Calculations", "Motor Power & Torque Curves", "EV Transmission Matching"] },
          { category: "Motor Controllers", items: ["BLDC & PMSM Motors", "Regenerative Braking Principles", "MATLAB Motor Speed Control Loops"] },
        ],
      },
      month2: {
        title: "Battery Packs & BMS Design",
        subtitle: "Design battery packs, model cell chemistry, and establish BMS safety rules.",
        topics: [
          { category: "Battery Pack Engineering", items: ["Li-Ion Cell Chemistries", "Cell Configuration (S & P Pack Math)", "Thermal Runway & Mitigation"] },
          { category: "BMS Algorithms", items: ["State of Charge (SoC) Estimation", "Cell Balancing Circuits", "Overvoltage & Overcurrent Protections"] },
        ],
      },
      month3: {
        title: "Simulations & System Validation",
        subtitle: "Run complete EV model simulations, generate reports, and pass final assessments.",
        topics: [
          { category: "MATLAB System Models", items: ["MATLAB/Simulink EV Powertrain Model", "BMS State Machine Simulations", "Charging Protocols (CC-CV)"] },
          { category: "Evaluation & Placements", items: ["Simulation Design Assessments", "Final EV Project Presentations", "EV Industry Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "EV & BMS Core Syllabus", desc: "Detailed syllabus spanning EV motor matching, cell designs, BMS code, and MATLAB models." },
      { title: "MATLAB Simulation Templates", desc: "Access to pre-built Simulink blocks for EV powertrains and battery packs." },
      { title: "6 Simulation Projects", desc: "Build a portfolio featuring 3 math calculations and 3 MATLAB system models." },
      { title: "EV Systems Certificate", desc: "Verifiable credential validating EV Powertrain & BMS Simulation skills." },
      { title: "EV Component Datasheets", desc: "Get real motor and cell specifications used in commercial electric vehicles." },
      { title: "Direct EV Industry Referrals", desc: "Introductions to EV startups, battery pack assemblers, and automotive components firms." },
      { title: "ATS EV Engineer Resume Kit", desc: "Resume layout optimizing for EV, BMS, MATLAB, and powertrain keywords." },
      { title: "GitHub Simulation Portfolios", desc: "Create repository structures that showcase Simulink block diagrams and run data plots." },
      { title: "Mock EV Technical Interviews", desc: "Practice explaining battery thermal runaways, SoC math, and motor sizing calculations." },
      { title: "Cell Sizing Calculation Tools", desc: "Get Excel calculators to quickly determine cells, weight, and volume for packs." },
    ],
    whyChoose: [
      { title: "Fast-Growing Industry", desc: "Automotive engineering is shifting rapidly to electric systems with high demand for BMS engineers." },
      { title: "Instructed by EV Leads", desc: "Sessions held by senior powertrain engineers working on commercial vehicles." },
      { title: "Simulation-First Focus", desc: "Master MATLAB and Simulink, the primary simulation tools used in automotive design." },
      { title: "Affordable EV Education", desc: "Get high-end automotive training without paying high fees for specialized courses." },
      { title: "BMS Safety Emphasis", desc: "Go deep into battery management systems, a highly critical element for safety." },
      { title: "Practical Math Calculations", desc: "Learn actual physics equations used to select motors and pack capacities." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "EV Systems Intern", image: "RK", review: "The MATLAB Simulink BMS simulation was excellent. Explaining my cell balancing models got me an internship offer.", rating: 5 },
      { name: "Anjali Gupta", role: "Powertrain Associate", image: "AG", review: "I loved the tractive effort math calculations. It helped me clear my technical round with an EV manufacturer.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need physical batteries for this course?", answer: "No! All design, thermal behavior, and BMS algorithms are modeled and simulated digitally using MATLAB/Simulink platforms." },
      { question: "What software tools are covered?", answer: "We focus heavily on MATLAB and Simulink, which are the automotive industry standards for modeling dynamical systems." },
      { question: "What backgrounds is this suitable for?", answer: "This program is ideal for Mechanical, Electrical, Electronics, and Automobile engineering students." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in EE, EEE, or Mechanical.",
      scholarship: "Top 3 students in monthly simulation reviews get 50% fee refunds.",
      included: ["Live Simulation Sessions", "Personal Model Reviews", "Reusable Simulink Models", "Dual Certificates", "EV Calculation Spreadsheet Tools", "Placement Direct Referrals"],
    },
  },
  "industrial-automation": {
    slug: "industrial-automation",
    title: "Industrial Automation & Smart Manufacturing Internship Program",
    badge: "⚙️ PLC Programming + SCADA Systems + Industry 4.0 IoT Integration",
    tagline: "Master PLC Programming (Ladder Logic), SCADA Interface Systems, Industrial Networking, and Factory Automation.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Ladder Logic Programming, PLC instructions, SCADA configurations, Modbus networking, and Industry 4.0 concepts.",
      mentorship: "Guidance from experienced Automation Engineers, ladder logic code reviews, and SCADA dashboard design reviews.",
      projects: {
        description: "Program virtual PLCs, configure SCADA screens, and stream factory data to cloud dashboards.",
        minor: ["PLC Traffic Intersection Control", "Automatic Bottle Filling Simulation", "Water Temperature PID Control Loop"],
        major: ["SCADA Factory Production Monitor", "Industrial Robotic Material Sorter", "IoT Factory Line Data Dashboard"],
      },
      internship: "Top students get direct referrals for PLC Programmer, Automation Intern, or Control Systems Associate positions.",
    },
    overview: "Automate factory lines. Learn how to program PLC hardware, write Ladder Logic, configure SCADA software dashboards, interface industrial sensors, handle analog signals, and link physical shopfloors to cloud dashboards.",
    durationDetails: {
      training: "1 Month PLC Core & Math",
      project: "2 Months SCADA & Cloud IoT",
      total: "3 Months",
    },
    deliveryMode: ["Live PLC Simulator Walkthroughs", "SCADA Screen Configurations", "Modbus Protocol Debugging Demos"],
    mentorshipSupport: ["Automation Engineer Office Hours", "Ladder Logic Refactoring Reviews", "SCADA Dashboard Feedback"],
    timeline: {
      month1: {
        title: "PLC Programming Core",
        subtitle: "Master PLC hardware, write Ladder Logic, and simulate basic outputs.",
        topics: [
          { category: "PLC Basics", items: ["PLC Hardware Architecture", "NO/NC Contacts & Rung Logic", "Timers, Counters & Comparators"] },
          { category: "Ladder Logic Coding", items: ["Interlock Circuit Controls", "Analog Signal Scaling", "PLC Memory Bit Configurations"] },
        ],
      },
      month2: {
        title: "SCADA & Industrial Networks",
        subtitle: "Configure SCADA dashboards, log data, and establish Modbus networks.",
        topics: [
          { category: "SCADA Configurations", items: ["SCADA Tag Management", "Graphic HMI Interface Screen Design", "Alarms & Trend Configurations"] },
          { category: "Industrial Networks", items: ["Modbus TCP/RTU Communication", "RS485/Ethernet Interfaces", "PLC-to-SCADA Integrations"] },
        ],
      },
      month3: {
        title: "Industry 4.0 & Cloud IoT",
        subtitle: "Connect PLCs to cloud databases, build dashboards, and pass final assessments.",
        topics: [
          { category: "Smart Manufacturing", items: ["OPC-UA Server Configurations", "Node-RED Integration Loops", "Cloud IoT Dashboard Logs"] },
          { category: "Evaluation & Placements", items: ["Ladder Logic Design Assessments", "Final SCADA Project Presentations", "Automation Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Automation Core Syllabus", desc: "Detailed syllabus spanning PLC Ladder Logic, SCADA configurations, and industrial network protocols." },
      { title: "PLC Simulator IDEs", desc: "Setup guides for virtual PLC simulators (like LogixPro or OpenPLC) to run ladder logic." },
      { title: "6 Automation Projects", desc: "Create a portfolio featuring 3 PLC programs and 3 SCADA interface designs." },
      { title: "Automation Systems Certificate", desc: "Verifiable credential validating PLC programming and SCADA skills." },
      { title: "PLC Program Library", desc: "Access to clean ladder logic code templates for common operations." },
      { title: "Direct Automation Referrals", desc: "Introductions to systems integrators, factory managers, and automation consultancies." },
      { title: "ATS Automation Resume Kit", desc: "Resume layout optimizing for PLC, SCADA, Modbus, and automation keywords." },
      { title: "GitHub Program Portfolios", desc: "Create repository structures that showcase ladder logic diagrams and SCADA layout screenshots." },
      { title: "Mock Control Tech Interviews", desc: "Practice explaining analog scaling, PID control loops, and Modbus registers." },
      { title: "HMI Design Style Templates", desc: "Get layouts to quickly design industrial and readable HMI screens." },
    ],
    whyChoose: [
      { title: "High Demand Skills", desc: "Manufacturing lines are modernizing globally, creating high demand for PLC programmers." },
      { title: "Instructed by Control Leads", desc: "Sessions held by senior automation engineers designing commercial factory systems." },
      { title: "Software Simulation Focus", desc: "Write actual PLC ladder logic run on software simulation platforms." },
      { title: "Affordable Systems Entry", desc: "Get high-end engineering training without paying high fees for specialized courses." },
      { title: "Industry Standard Protocols", desc: "Master the exact protocols used globally: Modbus, OPC-UA, RS485." },
      { title: "Career-Relevant Projects", desc: "Build projects that directly relate to commercial smart factories." },
    ],
    testimonials: [
      { name: "Varun Malhotra", role: "Automation Intern", image: "VM", review: "The PLC and SCADA modules in OpenPLC were so practical. Building the SCADA factory system got me an internship.", rating: 5 },
      { name: "Pooja Hegde", role: "Control Systems Associate", image: "PH", review: "I loved the Modbus integration labs. It helped me clear my technical round with an automation consultancy.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need physical PLC hardware for this course?", answer: "No! All programming, Ladder Logic compiling, and SCADA dashboard interfaces are run digitally on software simulation platforms." },
      { question: "What programming languages are covered?", answer: "We focus on Ladder Logic (LD), the most widely used industrial PLC programming standard. We also cover SCADA scripting." },
      { question: "What PLC brands are represented?", answer: "We focus on open standards (like OpenPLC) and align concepts with Siemens Step 7 and Allen-Bradley RSLogix systems." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in EEE, ECE, or Mechanical.",
      scholarship: "Top 3 students in monthly ladder logic reviews get 50% fee refunds.",
      included: ["Live PLC Programming Sessions", "Personal Ladder Logic Reviews", "Reusable PLC Code Libraries", "Dual Certificates", "SCADA Design Resource Assets", "Placement Direct Referrals"],
    },
  },
  "renewable-energy": {
    slug: "renewable-energy",
    title: "Renewable Energy & Smart Grid Technologies Internship Program",
    badge: "☀️ Solar & Wind Integration + Smart Metering + Microgrid Controls",
    tagline: "Master Solar/Wind Energy Modeling, Power Electronics, Smart Metering, and Microgrid Control Simulations.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering Solar panel modeling, MPPT algorithms, Wind power capture, power converters, and Smart Grid technologies.",
      mentorship: "Guidance from renewable energy consultants, system model reviews, and simulation audits.",
      projects: {
        description: "Model energy systems, simulate converter behavior, and optimize microgrid controllers.",
        minor: ["Solar Panel Angle Model", "Wind Speed Power Predictor", "Smart Meter Interface Circuit"],
        major: ["Solar-Wind Hybrid Microgrid", "Smart Grid Demand Response Sim", "Energy Storage Optimization Model"],
      },
      internship: "Top students get direct referrals for Smart Grid Associate, Renewable Systems Analyst, or Power Simulation Intern positions.",
    },
    overview: "Power the future grid. Learn how to model solar photovoltaic systems, write Maximum Power Point Tracking (MPPT) algorithms, model wind turbines, design DC-DC/DC-AC converters, and simulate microgrids under smart metering policies.",
    durationDetails: {
      training: "1 Month Power Math",
      project: "2 Months Microgrid Simulations",
      total: "3 Months",
    },
    deliveryMode: ["Live Simulink Power Demos", "Power Flow Calculations", "Microgrid Model Walkthroughs"],
    mentorshipSupport: ["Power Consultant Office Hours", "Simulink Model Code Reviews", "Converter Design Support"],
    timeline: {
      month1: {
        title: "Solar & Wind Core Modeling",
        subtitle: "Model PV solar cells, calculate MPPT curves, and simulate wind turbine capture.",
        topics: [
          { category: "Solar PV Design", items: ["PV Cell Equivalent Circuit Math", "MPPT Algorithms (Perturb & Observe)", "Solar Panel Shading Math"] },
          { category: "Wind Energy Modeling", items: ["Wind Turbine Speed-Power Curves", "Generator Rectifier Circuit Models", "MATLAB Wind Speed Sim Loops"] },
        ],
      },
      month2: {
        title: "Power Electronics & Smart Grid",
        subtitle: "Design power converters, model smart metering, and analyze power flows.",
        topics: [
          { category: "Power Electronics", items: ["Boost/Buck Converters Design", "Inverter Pulse Width Modulations", "Grid Synchronization Logic"] },
          { category: "Smart Grid Systems", items: ["Smart Metering Interfaces", "Bi-directional Power Flow Models", "Net Metering Billing Logic"] },
        ],
      },
      month3: {
        title: "Microgrid Sim & Optimization",
        subtitle: "Model complete hybrid microgrids, optimize batteries, and pass final reviews.",
        topics: [
          { category: "Simulink Microgrids", items: ["Hybrid Solar-Wind Simulink Model", "Battery Energy Management Logic", "Demand Side Response Models"] },
          { category: "Evaluation & Placements", items: ["Simulation Design Assessments", "Final Microgrid Project Reviews", "Energy Industry Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Renewable Core Syllabus", desc: "Detailed syllabus spanning solar panel models, converter circuits, and grid control algorithms." },
      { title: "MATLAB Simulink Power Blocks", desc: "Access to pre-built Simulink blocks for PV panels, rectifiers, and microgrids." },
      { title: "6 Grid Project Models", desc: "Build a portfolio featuring 3 math spreadsheets and 3 Simulink grid model files." },
      { title: "Renewable Energy Certificate", desc: "Verifiable credential validating Power Simulation & Renewable Grid skills." },
      { title: "Solar Converter Designs", desc: "Get real schematic layouts for PV charger controller circuits." },
      { title: "Direct Energy Referrals", desc: "Introductions to green energy developers, microgrid designers, and grid consultants." },
      { title: "ATS Power Engineer Resume Kit", desc: "Resume layout optimizing for renewable energy, MATLAB, and converter keywords." },
      { title: "GitHub Simulation Portfolios", desc: "Create repository structures that showcase Simulink block diagrams and run data plots." },
      { title: "Mock Energy Tech Interviews", desc: "Practice explaining MPPT logic, inverter synchronization, and microgrid loads." },
      { title: "Energy Sizing Spreadsheet Tools", desc: "Get Excel sizing calculators to determine panel counts and battery sizes for microgrids." },
    ],
    whyChoose: [
      { title: "Global Green Transition", desc: "Energy grids are modernizing globally, creating high demand for smart grid and renewable analysts." },
      { title: "Instructed by Consultants", desc: "Sessions held by senior energy consultants and grid integration architects." },
      { title: "Simulation-First Focus", desc: "Master MATLAB and Simulink, the primary tools used in power system engineering." },
      { title: "Affordable Energy Training", desc: "Get high-end energy training without paying high fees for specialized courses." },
      { title: "Microgrid Controls Focus", desc: "Go deep into battery management and demand response, critical smart grid tools." },
      { title: "Practical Math Calculations", desc: "Learn actual physics equations used to calculate panel shading and wind torque." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "Smart Grid Intern", image: "RK", review: "The hybrid solar-wind Simulink model was excellent. Explaining my microgrid battery controllers got me an internship.", rating: 5 },
      { name: "Anjali Gupta", role: "Systems Analyst", image: "AG", review: "I loved the MPPT math calculations. It helped me clear my technical round with an energy consultant.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need physical solar panels for this course?", answer: "No! All design, MPPT tracking, and converter logic are modeled and simulated digitally using MATLAB/Simulink platforms." },
      { question: "What software tools are covered?", answer: "We focus heavily on MATLAB and Simulink, which are the power industry standards for modeling dynamic networks." },
      { question: "What backgrounds is this suitable for?", answer: "This program is ideal for Electrical, Electronics, Instrumentation, and Power engineering students." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in EE, EEE, or Energy Engineering.",
      scholarship: "Top 3 students in monthly grid simulation reviews get 50% fee refunds.",
      included: ["Live Simulation Sessions", "Personal Model Reviews", "Reusable Simulink Models", "Dual Certificates", "Energy Calculation Spreadsheet Tools", "Placement Direct Referrals"],
    },
  },
  "product-design-manufacturing": {
    slug: "product-design-manufacturing",
    title: "Product Design & Manufacturing Excellence Internship Program",
    badge: "⚙️ 3D CAD Modeling + FEA Stress Analysis + PLM & Manufacturing Principles",
    tagline: "Master Solid Modeling CAD, Finite Element Analysis Stress Simulations, and Industrial Product Lifecycle Workflows.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering 3D CAD modeling, Assembly design, FEA Stress/Thermal analyses, DFM/DFA rules, and PLM database concepts.",
      mentorship: "Guidance from experienced Product Designers, CAD model reviews, and simulation audits.",
      projects: {
        description: "Model components, simulate stress behaviors, and write design reports.",
        minor: ["Industrial Gearbox CAD Model", "Mounting Bracket FEA Stress Analysis", "Assembly Tolerance Stackup calculation"],
        major: ["Automotive Chassis CAD Design", "Mold Flow Design & Analysis", "CNC Machining Process Plan"],
      },
      internship: "Top students get direct referrals for CAD Designer, Mechanical Intern, or Design Analyst positions.",
    },
    overview: "Design physical products. Learn mechanical design logic: from drawing 3D component sketches, mapping assembly fits, running FEA structural stress analyses under load, applying Design for Manufacturing (DFM) rules, to understanding PLM workflows.",
    durationDetails: {
      training: "1 Month CAD & FEA Math",
      project: "2 Months Design & Simulation",
      total: "3 Months",
    },
    deliveryMode: ["Live CAD Modeling Walkthroughs", "FEA Meshing Workshops", "DFM Component Audits"],
    mentorshipSupport: ["Product Designer Office Hours", "CAD File Mesh Reviews", "DFM Design Critiques"],
    timeline: {
      month1: {
        title: "3D CAD Modeling Core",
        subtitle: "Create parametric parts, organize assemblies, and draw drafting sheets.",
        topics: [
          { category: "Parametric Parts", items: ["2D Sketch Constraints", "3D Extrusions & Revolves", "Shells, Sweeps & Threads"] },
          { category: "Assemblies & Drafts", items: ["Assembly Constraints & Fits", "BOM Creation & Exploded Views", "GD&T Tolerances in Drafts"] },
        ],
      },
      month2: {
        title: "FEA Structural Analysis",
        subtitle: "Apply boundary conditions, mesh models, and calculate stress/deflections.",
        topics: [
          { category: "FEA Configurations", items: ["Material Property Mapping", "Meshing Rules (Mesh Quality)", "Force & Support Constraints"] },
          { category: "FEA Computations", items: ["Von-Mises Stress Analyses", "Factor of Safety calculations", "Model Deformations & Reports"] },
        ],
      },
      month3: {
        title: "Manufacturing & PLM Systems",
        subtitle: "Apply DFM/DFA rules, simulate mold flows, and qualify for placement.",
        topics: [
          { category: "DFM & PLM Core", items: ["Design for Injection Molding / Casting", "Tolerance Stackup calculations", "PLM Database Check-in workflows"] },
          { category: "Evaluation & Placements", items: ["CAD Design Assessments", "Final FEA Simulation Presentations", "Mechanical Intern Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Design Core Syllabus", desc: "Detailed syllabus spanning 3D CAD modeling, FEA meshing, and industrial manufacturing rules." },
      { title: "EDA/CAD Software access", desc: "Setup guides for cloud CAD modeling platforms (Onshape, Fusion360) to design models." },
      { title: "6 Design Projects", desc: "Create a portfolio featuring 3 CAD models and 3 FEA structural analysis reports." },
      { title: "Product Design Certificate", desc: "Verifiable credential validating Mechanical CAD & FEA Simulation skills." },
      { title: "GD&T Symbol Cards", desc: "Get quick-reference cards explaining geometric dimensioning and tolerancing tags." },
      { title: "Direct Design Referrals", desc: "Introductions to manufacturing startups, automotive suppliers, and consumer design firms." },
      { title: "ATS Design Resume Kit", desc: "Resume layout optimizing for CAD, FEA, DFM, and mechanical keywords." },
      { title: "GitHub Design Portfolios", desc: "Create repository structures that showcase CAD renders, assembly drawings, and stress plots." },
      { title: "Mock Design Interview Loops", desc: "Practice explaining factor of safety choice, mesh convergence, and DFM rules." },
      { title: "DFM Optimization Checklists", desc: "Get professional checklists to verify plastic/metal components for manufacturing." },
    ],
    whyChoose: [
      { title: "Critical Industry Core", desc: "Physical product companies need skilled designers to prototype and analyze parts before manufacturing." },
      { title: "Instructed by Lead Designers", desc: "Sessions held by senior product engineers designing commercial appliances." },
      { title: "Cloud CAD Focus", desc: "Master modern cloud CAD tools that allow rapid collaboration on parts." },
      { title: "Affordable Design Entry", desc: "Get high-end design training without paying high fees for specialized courses." },
      { title: "FEA Mesh Emphasis", desc: "Go deep into mesh convergence and boundary conditions, critical simulation steps." },
      { title: "DFM-First Approach", desc: "Focuses deeply on manufacturing constraints to design actual production parts." },
    ],
    testimonials: [
      { name: "Varun Malhotra", role: "CAD Intern", image: "VM", review: "The CAD assembly and GD&T tolerance modules were so practical. Designing the chassis got me an internship offer.", rating: 5 },
      { name: "Pooja Hegde", role: "Design Analyst", image: "PH", review: "I loved the FEA mesh convergence labs. It helped me clear my technical round with an automotive design agency.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need powerful computers to run the CAD tools?", answer: "No! We focus on cloud-based CAD platforms (like Onshape) that run in normal browser tabs, avoiding expensive GPU needs." },
      { question: "What CAD tools are covered?", answer: "We align concepts with SolidWorks and Fusion360, utilizing cloud platforms for live session accessibility." },
      { question: "What engineering disciplines is this for?", answer: "This program is ideal for Mechanical, Production, Aerospace, and Automobile engineering students." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in Mechanical or Automobile.",
      scholarship: "Top 3 students in monthly CAD design reviews get 50% fee refunds.",
      included: ["Live CAD Design Sessions", "Personal CAD File Audits", "Reusable 3D Component Models", "Dual Certificates", "GD&T Design Checklist Tools", "Placement Direct Referrals"],
    },
  },
  "robotics-automation": {
    slug: "robotics-automation",
    title: "Robotics & Intelligent Automation Internship Program",
    badge: "🤖 Robotic Kinematics + Robot Operating System (ROS) + Autonomous Navigation",
    tagline: "Build Expertise in Robotic Kinematics, Control Algorithms, Robot Operating System (ROS), and Autonomous Navigation Simulation.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Forward/Inverse Kinematics, PID motor controller feedback, ROS node systems, URDF layouts, and Gazebo simulators.",
      mentorship: "Guidance from experienced robotics developers, ROS source code reviews, and simulation audits.",
      projects: {
        description: "Write control firmware, configure robot models, and deploy navigation algorithms.",
        minor: ["Obstacle Avoidance Rover", "Motor Speed PID Controller", "Robotic Arm Gripper Model"],
        major: ["Autonomous Navigation Robot", "Multi-Axis SCARA Manipulator Simulation", "ROS-Driven Warehouse Automation Agent"],
      },
      internship: "Top students get direct referrals for Robotics Software Intern, Control Systems Associate, or UAV Engineer positions.",
    },
    overview: "Program intelligent machines. Learn robotics kinematics: from writing math models for joints, configuring motor PID control loops, building URDF models, structuring ROS packages, to deploying mapping and navigation algorithms in Gazebo.",
    durationDetails: {
      training: "1 Month Kinematics & ROS",
      project: "2 Months Navigation & Gazebo",
      total: "3 Months",
    },
    deliveryMode: ["Live ROS Workspace Walkthroughs", "Gazebo Navigation Demos", "PID Tuning Interactive Labs"],
    mentorshipSupport: ["Robotics Engineer Office Hours", "ROS Code Review Sessions", "Kinematic Calculation Support"],
    timeline: {
      month1: {
        title: "Kinematics & Motors",
        subtitle: "Calculate joint translations and program PID feedback loops.",
        topics: [
          { category: "Joint Kinematics", items: ["DH Parameters Math", "Forward & Inverse Kinematics", "Robotic Arm Workspace plotting"] },
          { category: "Actuator Controls", items: ["Servo & DC Motor Controls", "Encoder feedback loops", "MATLAB PID Tuning Labs"] },
        ],
      },
      month2: {
        title: "ROS Workspace & URDFs",
        subtitle: "Configure ROS nodes, structure messages, and design 3D robot models.",
        topics: [
          { category: "ROS Framework", items: ["ROS Nodes, Topics & Services", "Custom Message Definitions", "C++ / Python ROS Client Libraries"] },
          { category: "Robot Modeling", items: ["URDF Robot Model writing", "Sensors Integration (Lidar, IMU)", "Joint State Publishers"] },
        ],
      },
      month3: {
        title: "Navigation & Gazebo Sim",
        subtitle: "Run SLAM mapping, navigate virtual robots, and pass final assessments.",
        topics: [
          { category: "Autonomous Navigation", items: ["Gazebo Physics Simulation", "SLAM Mapping (Gmapping/Cartographer)", "AMCL Localization & Navigation"] },
          { category: "Evaluation & Placements", items: ["Robotics Logic Assessments", "Final Gazebo System Presentations", "Robotics Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Robotics Core Syllabus", desc: "Detailed syllabus spanning kinematics math, ROS workspaces, Lidar sensors, and Gazebo simulations." },
      { title: "ROS Workspace Templates", desc: "Access to verified ROS configuration packages for micro-controllers and navigation." },
      { title: "6 Robotics Projects", desc: "Build a portfolio featuring 3 control firmware scripts and 3 Gazebo simulation files." },
      { title: "Robotics Engineer Certificate", desc: "Verifiable credential validating ROS Programming & Robotics Simulation skills." },
      { title: "Robotic Arm CAD Models", desc: "Get STL and STEP CAD files for 3D printing a custom 3-axis arm." },
      { title: "Direct Robotics Referrals", desc: "Introductions to robotics firms, drone startups, and automation consultancies." },
      { title: "ATS Robotics Resume Kit", desc: "Resume layout optimizing for ROS, C++, Python, and kinematic keywords." },
      { title: "GitHub Simulation Portfolios", desc: "Create repository structures that showcase Gazebo runs, joint math, and node graphs." },
      { title: "Mock Robotics Interviews", desc: "Practice explaining DH parameter tables, PID tuning rules, and AMCL navigation." },
      { title: "Sensor Driver Libraries", desc: "Get C++/Python templates to read Lidar, IMU, and encoder signals easily." },
    ],
    whyChoose: [
      { title: "State of the Art Domain", desc: "Robotics is expanding rapidly across warehousing, medical, and drone logistics industries." },
      { title: "Instructed by Developers", desc: "Sessions held by senior robotics engineers building commercial autonomous systems." },
      { title: "ROS Industry Standard", desc: "Master ROS, the universally accepted framework for programming commercial machines." },
      { title: "Affordable Robotics Entry", desc: "Get high-end robotics training without paying high fees for specialized courses." },
      { title: "Simulation-First Focus", desc: "Learn to build and test robots digitally in Gazebo before deploying to physical hardware." },
      { title: "Math & Coding Balance", desc: "Combines kinematic vector calculations with clean C++/Python coding patterns." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "Robotics software Intern", image: "RK", review: "The ROS and Gazebo navigation modules were excellent. Deploying the autonomous warehouse bot got me my internship.", rating: 5 },
      { name: "Anjali Gupta", role: "Control Associate", image: "AG", review: "I loved the PID motor tuning labs. It helped me clear my technical round with a drone startup.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need physical robots for this course?", answer: "No! All kinematics, ROS node communications, and navigation logic are simulated digitally in Gazebo and rviz." },
      { question: "What programming languages are used?", answer: "We write ROS nodes using Python and C++, the standard robotics development languages." },
      { question: "What OS is required for the simulations?", answer: "We use Ubuntu Linux for ROS. We show you how to configure a virtual machine or use WSL2 on Windows." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in EE, ECE, or Mechanical.",
      scholarship: "Top 3 students in monthly SLAM mapping evaluations get 50% fee refunds.",
      included: ["Live Workspace Sessions", "Personal Code Audits", "Reusable ROS Package Files", "Dual Certificates", "UVM Robot CAD STL Files", "Placement Direct Referrals"],
    },
  },
  "electric-mobility-automotive": {
    slug: "electric-mobility-automotive",
    title: "Electric Mobility & Advanced Automotive Engineering Internship Program",
    badge: "🚗 Powertrain Calibration + Chassis Dynamics + ADAS Software & CFD",
    tagline: "Master Electric Powertrain Sizing, Vehicle Chassis Dynamics, ADAS Control Algorithms, and CFD Aerodynamics.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering Powertrain calibrations, suspension geometries, CFD aerodynamics, and ADAS emergency braking logic.",
      mentorship: "Guidance from experienced Automotive System Leads, simulation audits, and model reviews.",
      projects: {
        description: "Model drivetrains, run aerodynamic tests, and simulate safety systems.",
        minor: ["Anti-lock Braking Model", "Vehicle Aerodynamic CFD simulation", "Suspension Kinematic design"],
        major: ["Electric Powertrain Calibrator", "ADAS Collision Avoidance System", "Automotive HIL (Hardware-in-the-Loop) model"],
      },
      internship: "Top students get direct referrals for Powertrain Analyst, Chassis Engineer, or ADAS Systems Intern positions.",
    },
    overview: "Engineer modern vehicles. Learn automotive calculations: from sizing electric drivetrains, modeling spring-damper suspension dynamics, running CFD aerodynamic analyses, to programming ADAS cruise controllers.",
    durationDetails: {
      training: "1 Month Powertrain & CFD Core",
      project: "2 Months Dynamics & ADAS",
      total: "3 Months",
    },
    deliveryMode: ["Live CFD Simulation Demos", "Suspension Geometries Demos", "ADAS Coding Workshops"],
    mentorshipSupport: ["Automotive Lead Office Hours", "Simulation File Code Reviews", "Dynamics Model Critiques"],
    timeline: {
      month1: {
        title: "Powertrain & CFD Core",
        subtitle: "Sizer drivetrains and model wind tunnel aerodynamic coefficients.",
        topics: [
          { category: "Electric Powertrain", items: ["Battery Pack Matching Math", "Gearbox Ratio selections", "Efficiency Mapping loops"] },
          { category: "Aerodynamics CFD", items: ["Wind Tunnel CFD setup", "Mesh Boundaries configurations", "Drag & Lift Coefficient analysis"] },
        ],
      },
      month2: {
        title: "Chassis & Dynamics",
        subtitle: "Design suspension linkages and simulate vehicle cornering stability.",
        topics: [
          { category: "Suspension Geometry", items: ["Double Wishbone kinematic models", "Roll Center calculations", "Camber & Toe Angle adjustment math"] },
          { category: "Vehicle Dynamics", items: ["Quarter Car suspension model", "Roll & Pitch dynamics math", "Shock absorber damping tuning"] },
        ],
      },
      month3: {
        title: "ADAS & System Validation",
        subtitle: "Program safety braking, run hardware loop tests, and pass final reviews.",
        topics: [
          { category: "ADAS & Testing", items: ["Radar sensor modeling", "Automatic Emergency Braking controller", "HIL Testbed configurations"] },
          { category: "Evaluation & Placements", items: ["Automotive Design Assessments", "Final Simulation Presentations", "Automotive Intern Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Automotive Core Syllabus", desc: "Detailed syllabus spanning powertrain math, CFD wind tunnels, suspension models, and ADAS algorithms." },
      { title: "Automotive Model Templates", desc: "Access to pre-built MATLAB and CFD simulation files for vehicle systems." },
      { title: "6 Mechanical Projects", desc: "Build a portfolio featuring 3 CAD/CFD files and 3 dynamic simulation reports." },
      { title: "Automotive Systems Certificate", desc: "Verifiable credential validating Powertrain Calibration & Automotive Simulation skills." },
      { title: "CFD Mesh Setting Guides", desc: "Get quick-reference lists explaining boundary layers and mesh setups for drag profiles." },
      { title: "Direct Automotive Referrals", desc: "Introductions to EV makers, Tier-1 suppliers, and racing technology firms." },
      { title: "ATS Automotive Resume Kit", desc: "Resume layout optimizing for powertrain, suspension, CFD, and ADAS keywords." },
      { title: "GitHub Simulation Portfolios", desc: "Create repository structures that showcase CFD plots, suspension runs, and ADAS logic." },
      { title: "Mock Automotive Interviews", desc: "Practice explaining drag factors, damper equations, and HIL test setups." },
      { title: "Powertrain Sizing Tools", desc: "Get Excel sizing calculators to determine battery, motor, and gear limits." },
    ],
    whyChoose: [
      { title: "Future Mobility Domain", desc: "Automotive design is merging with electronics and software, creating high demand for systems engineers." },
      { title: "Instructed by Lead Engineers", desc: "Sessions held by senior vehicle designers working on production cars." },
      { title: "Simulation-First Focus", desc: "Master CFD, dynamics, and control simulation, the primary tools in automotive design." },
      { title: "Affordable Auto Training", desc: "Get high-end vehicle training without paying high fees for specialized courses." },
      { title: "ADAS Software Emphasis", desc: "Go deep into driver assistance systems, a highly critical element for modern cars." },
      { title: "Practical CFD Physics", desc: "Learn actual Navier-Stokes boundary settings to simulate wind drag." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "ADAS Intern", image: "RK", review: "The ADAS braking model and simulation was excellent. Explaining my sensor logic got me an internship.", rating: 5 },
      { name: "Anjali Gupta", role: "Chassis Analyst", image: "AG", review: "I loved the suspension kinematic design modules. It helped me clear my technical round with an EV manufacturer.", rating: 5 },
    ],
    faqs: [
      { question: "Do we need physical cars or test rigs for this course?", answer: "No! All aerodynamics (CFD), suspension behavior, and ADAS control loops are simulated digitally using software platforms." },
      { question: "What software tools are covered?", answer: "We focus on open-source CFD codes, kinematic modeling spreadsheets, and MATLAB/Simulink for ADAS logic." },
      { question: "What engineering disciplines is this suitable for?", answer: "This program is ideal for Mechanical, Automobile, Mechatronics, and Systems engineering students." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold engineering degrees in Mechanical or Automobile.",
      scholarship: "Top 3 students in monthly automotive simulation reviews get 50% fee refunds.",
      included: ["Live Design Sessions", "Personal Model Reviews", "Reusable CFD & Simulation Files", "Dual Certificates", "Powertrain Sizing Spreadsheet Tools", "Placement Direct Referrals"],
    },
  },
  "digital-marketing-ai": {
    slug: "digital-marketing-ai",
    title: "Digital Marketing & AI Internship Program",
    badge: "📈 AI-Powered Campaigns + SEO Automation + Performance Analytics",
    tagline: "Master Performance Marketing, SEO Strategy, Analytics, Content Generation Pipelines, and AI-Powered Marketing Tools.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month core training covering SEO architectures, Google Analytics, social media ads, landing page optimizations, and generative AI content workflows.",
      mentorship: "Guidance from Senior Growth Managers, marketing campaign reviews, and analytics dashboard audits.",
      projects: {
        description: "Configure SEO structures, monitor performance ads, and execute AI content campaigns.",
        minor: ["SEO Competitor Analysis Audit", "Paid Ad Copy Optimization Report", "Social Media Campaign Calendar"],
        major: ["Automated Marketing Lead Funnel", "AI Content Engine Pipeline", "E-Commerce Digital Growth Campaign"],
      },
      internship: "Top students get direct referrals for Digital Marketer, Growth Intern, or SEO Analyst positions.",
    },
    overview: "Scale business growth. Learn marketing mechanics: from keyword optimization, conversion rate optimization, configuring Facebook/Google Ads, to deploying Generative AI models to automate copy, image generation, and email outreach.",
    durationDetails: {
      training: "1 Month SEO & Ad Basics",
      project: "2 Months AI Campaigns & Funnels",
      total: "3 Months",
    },
    deliveryMode: ["Live Ads Console Demos", "SEO Tools Walkthroughs", "AI Content Creation Demos"],
    mentorshipSupport: ["Growth Manager Office Hours", "Ad Campaign Audits", "Funnel Configuration Support"],
    timeline: {
      month1: {
        title: "SEO & Content Basics",
        subtitle: "Audit keyword rankings and plan structured social calendars.",
        topics: [
          { category: "SEO Optimization", items: ["On-Page & Technical SEO", "Keyword Research (SEMrush/Ahrefs)", "Google Search Console Logs"] },
          { category: "Social Marketing", items: ["Social Media Algorithms", "Organic Content Strategies", "Social Calendar Planning"] },
        ],
      },
      month2: {
        title: "Performance Ads & Analytics",
        subtitle: "Configure paid ad campaigns and track user actions in Google Analytics.",
        topics: [
          { category: "Paid Ads", items: ["Meta Ads Manager setup", "Google Ads bidding patterns", "A/B Testing Ad Creatives"] },
          { category: "Web Analytics", items: ["Google Analytics 4 configuration", "UTM Tracking links", "Conversion Funnel Optimization"] },
        ],
      },
      month3: {
        title: "AI Tools & Automated Funnels",
        subtitle: "Deploy generative AI for content, automate email flows, and pass final reviews.",
        topics: [
          { category: "AI Marketing", items: ["ChatGPT Prompting for Copy", "Midjourney Ad Image Generation", "Zapier Lead Automation Loops"] },
          { category: "Evaluation & Placements", items: ["Marketing Strategy Assessments", "Final Campaign Audits", "Growth Intern Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Marketing Core Syllabus", desc: "Detailed syllabus spanning SEO systems, paid ad bidding, Google Analytics, and Zapier flows." },
      { title: "Ad Spending Sandbox Guides", desc: "Setup guides to practice configuring campaigns safely without budget runaways." },
      { title: "6 Growth Projects", desc: "Build a portfolio featuring 3 analytical audits and 3 live-run campaigns." },
      { title: "Digital Marketing Certificate", desc: "Verifiable credential validating Performance Marketing & AI Tool skills." },
      { title: "Ad Template Files", desc: "Get high-converting ad layouts and copy templates for common niches." },
      { title: "Direct Growth Referrals", desc: "Introductions to marketing agencies, SaaS startups, and e-commerce companies." },
      { title: "ATS Marketing Resume Kit", desc: "Resume layout optimizing for SEO, Meta Ads, GA4, and automation keywords." },
      { title: "GitHub Campaign Portfolios", desc: "Create repository structures that showcase analytics dashboard screenshots and campaign reports." },
      { title: "Mock Marketing Interviews", desc: "Practice explaining CAC calculations, ROAS metrics, and SEO site maps." },
      { title: "Campaign ROI Calculator Tools", desc: "Get Excel calculators to quickly determine cost per lead, ROI, and customer lifetime value." },
    ],
    whyChoose: [
      { title: "High Demand Domain", desc: "Businesses are shifting budgets online, creating high demand for performance and SEO marketers." },
      { title: "Instructed by Growth leads", desc: "Sessions held by active marketing directors scaling online brands." },
      { title: "AI-Powered Focus", desc: "Master generative tools and automation to complete tasks 10x faster than traditional marketers." },
      { title: "Affordable Growth Entry", desc: "Get comprehensive growth training without paying high fees for specialized courses." },
      { title: "Analytics-First Approach", desc: "Go deep into GA4 and pixels, the primary tracking tools in online marketing." },
      { title: "Practical Case Campaigns", desc: "Design and audit actual marketing campaigns with realistic brand scopes." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "Growth Marketer Intern", image: "RK", review: "The Meta Ads and GA4 analytics modules were excellent. Explaining my A/B test setups got me my first internship offer.", rating: 5 },
      { name: "Anjali Gupta", role: "SEO Analyst", image: "AG", review: "I loved the technical SEO audit labs. It helped me clear my technical round with a digital marketing agency.", rating: 5 },
    ],
    faqs: [
      { question: "Do I need to spend money on live ads during the course?", answer: "No! We show you how to design campaigns, setup targeting, and write copy within sandboxes without needing active ad spends." },
      { question: "What AI tools are covered?", answer: "We focus on ChatGPT for copywriting, Midjourney for ad images, and Zapier for automate lead flows." },
      { question: "What background is suitable for this?", answer: "This program is ideal for Business, Marketing, Media, and any student wanting to build growth skills." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold business or marketing degrees.",
      scholarship: "Top 3 students in monthly campaign design reviews get 50% fee refunds.",
      included: ["Live Console Sessions", "Personal Campaign Audits", "Reusable Ad Copy Templates", "Dual Certificates", "ROI Sizing Spreadsheet Tools", "Placement Direct Referrals"],
    },
  },
  "business-development-sales": {
    slug: "business-development-sales",
    title: "Business Development & Sales Internship Program",
    badge: "🤝 B2B Sales + Cold Outreach Automation + Lead Sourcing Systems",
    tagline: "Learn Lead Sourcing, Cold Email Automation, Consultative Selling, Negotiation, and CRM Pipeline Management.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering ICP definitions, lead scrapers, email verification tools, script writing, negotiation frameworks, and HubSpot CRM.",
      mentorship: "Guidance from experienced Sales Directors, cold email script reviews, and pitch deck audits.",
      projects: {
        description: "Source sales targets, configure outreach pipelines, and draft strategic plans.",
        minor: ["Cold Email Outreach Script", "Competitor Comparison Deck", "B2B Sales Pitch Deck"],
        major: ["Automated Lead Prospecting Pipeline", "Sales CRM Pipeline Setup", "New Market Expansion Strategy Plan"],
      },
      internship: "Top students get direct referrals for Business Development Intern, Inside Sales Associate, or Account Rep positions.",
    },
    overview: "Master revenue growth. Learn sales mechanics: from finding client leads on LinkedIn, verifying contact emails, configuring automated email campaigns, handling pricing objections, to managing deals inside HubSpot CRM.",
    durationDetails: {
      training: "1 Month Outreach & Scripts",
      project: "2 Months CRM & Negotiation",
      total: "3 Months",
    },
    deliveryMode: ["Live Pitch Roleplays", "CRM Console Walkthroughs", "Lead Scrape Workshops"],
    mentorshipSupport: ["Sales Director Office Hours", "Outreach Script Reviews", "Negotiation Framework Demos"],
    timeline: {
      month1: {
        title: "Lead Sourcing & Outreach",
        subtitle: "Scrape email leads, verify contacts, and write high-converting outreach scripts.",
        topics: [
          { category: "Lead Sourcing", items: ["LinkedIn Sales Navigator", "Email scraping & verification tools", "ICP (Ideal Customer Profile) math"] },
          { category: "Cold outreach", items: ["Cold Email Script Writing", "Personalization triggers", "Outreach Sequence setup"] },
        ],
      },
      month2: {
        title: "Negotiation & Consultative Sales",
        subtitle: "Conduct sales discovery calls, handle pricing objections, and negotiate contracts.",
        topics: [
          { category: "Consultative Sales", items: ["Discovery Question frameworks", "Value-based selling concepts", "Handling Objection loops"] },
          { category: "Negotiation Core", items: ["BATNA & concession strategies", "Closing contract cycles", "Upselling & Referral loops"] },
        ],
      },
      month3: {
        title: "HubSpot CRM & Strategy",
        subtitle: "Manage pipeline deals, forecast revenues, and pass final assessments.",
        topics: [
          { category: "CRM Pipelines", items: ["HubSpot Tag & Deal creation", "Sales Pipeline Automation", "Revenue forecasting dashboards"] },
          { category: "Evaluation & Placements", items: ["Pitch Presentation Assessments", "Final Strategy Reviews", "BDR Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "B2B Sales Core Syllabus", desc: "Detailed syllabus spanning lead scraping, cold emailing, consultative selling, and CRM pipelines." },
      { title: "CRM Sandbox Setup Guides", desc: "Access to free developer accounts on HubSpot to configure sales pipelines." },
      { title: "6 Strategic Sales Projects", desc: "Build a portfolio featuring 3 email/deck assets and 3 automation/strategy reports." },
      { title: "Sales Developer Certificate", desc: "Verifiable credential validating Business Development & CRM Pipeline skills." },
      { title: "Cold Email Templates", desc: "Get high-converting B2B cold outreach script layouts for different tech services." },
      { title: "Direct BDR Referrals", desc: "Introductions to SaaS startups, consulting firms, and corporate sales departments." },
      { title: "ATS Sales Resume Kit", desc: "Resume layout optimizing for lead sourcing, CRM, HubSpot, and cold outreach keywords." },
      { title: "GitHub Sales Portfolios", desc: "Create repository structures that showcase outreach campaigns, scripts, and CRM layouts." },
      { title: "Mock Pitch Interviews", desc: "Practice handling objection rounds, discovery loops, and pricing calls." },
      { title: "Sales Commission Calculators", desc: "Get Excel calculators to model deal cycles, commissions, and revenue pipelines." },
    ],
    whyChoose: [
      { title: "High Demand Skill", desc: "Every product company needs sales to scale, making skilled BDRs highly sought after." },
      { title: "Instructed by Directors", desc: "Sessions held by senior sales directors scaling tech companies." },
      { title: "Automation-First Approach", desc: "Learn to build scrapers and email loops to source leads 10x faster." },
      { title: "Affordable Career Entry", desc: "Get comprehensive sales training without paying high fees for specialized courses." },
      { title: "HubSpot CRM Focus", desc: "Master HubSpot, the primary customer management tool used in tech sales." },
      { title: "Practical Roleplay Practice", desc: "Participate in live roleplays to practice discovery and objection handling." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "BD Intern", image: "RK", review: "The B2B lead scraping and CRM automation modules were excellent. Explaining my sales pipeline got me an internship.", rating: 5 },
      { name: "Anjali Gupta", role: "Inside Sales Associate", image: "AG", review: "I loved the discovery call roleplay workshops. It helped me clear my technical round with a SaaS startup.", rating: 5 },
    ],
    faqs: [
      { question: "Do we need to make cold phone calls during the course?", answer: "No! We focus heavily on digital lead generation: LinkedIn Sales Navigator, automated email campaigns, and CRM pipelines." },
      { question: "What CRM software is covered?", answer: "We focus on HubSpot CRM due to its widespread use in startups and comprehensive free developer dashboards." },
      { question: "What backgrounds is this suitable for?", answer: "This program is ideal for MBA, BBA, BCom, and any student wanting to build high-paying commercial careers." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold business or marketing degrees.",
      scholarship: "Top 3 students in monthly pitch evaluations get 50% fee refunds.",
      included: ["Live Pitch Workshops", "Personal Script Reviews", "HubSpot Pipeline Templates", "Dual Certificates", "Commission Calculator Tools", "Placement Direct Referrals"],
    },
  },
  "hr-talent-acquisition": {
    slug: "hr-talent-acquisition",
    title: "Strategic Talent Acquisition (HR) Internship Program",
    badge: "👥 Technical Recruitment + ATS Systems + Workforce Analytics",
    tagline: "Master Candidate Sourcing, Interview Frameworks, Applicant Tracking Systems (ATS), and HR Analytics.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Job Description mapping, LinkedIn sourcing, Boolean searches, ATS workflows, employee policies, and HR analytics.",
      mentorship: "Guidance from experienced HR Directors, sourcing plan reviews, and policy draft audits.",
      projects: {
        description: "Source candidates, configure recruitment pipelines, and draft company policies.",
        minor: ["ATS-Optimized Job Description", "Employee Onboarding Workflow Plan", "Engagement Survey Analysis Report"],
        major: ["Technical Sourcing Strategy Plan", "ATS Recruitment Pipeline Setup", "Corporate Employer Branding Campaign"],
      },
      internship: "Top students get direct referrals for Talent Acquisition Intern, HR Generalist Associate, or Recruiter positions.",
    },
    overview: "Scale company teams. Learn HR mechanics: from writing clear job descriptions, executing complex Boolean candidate searches, managing applicant flows inside ATS systems, to tracking retention metrics on dashboards.",
    durationDetails: {
      training: "1 Month Sourcing & Sprints",
      project: "2 Months ATS & Policy Designs",
      total: "3 Months",
    },
    deliveryMode: ["Live Sourcing Workshops", "ATS Console Walkthroughs", "Sourcing Boolean Demos"],
    mentorshipSupport: ["HR Director Office Hours", "JD Document Reviews", "Policy Layout Feedback"],
    timeline: {
      month1: {
        title: "Candidate Sourcing Core",
        subtitle: "Write sourcing Boolean strings, find talent on LinkedIn, and draft job profiles.",
        topics: [
          { category: "Talent Sourcing", items: ["Boolean Sourcing Strings", "LinkedIn Talent Finder", "Job Profile Drafting"] },
          { category: "Outreach & Sprints", items: ["Candidate outreach emails", "Cold recruiting scripts", "InMail optimization loops"] },
        ],
      },
      month2: {
        title: "ATS Pipelines & Interviews",
        subtitle: "Configure candidate pipeline steps and draft structured behavioral questions.",
        topics: [
          { category: "ATS Configurations", items: ["ATS Tag & Stage mappings", "Candidate Flow automation", "HubSpot Recruiting setups"] },
          { category: "Interview Methods", items: ["Behavioral Question frameworks", "Technical screening loops", "Candidate feedback records"] },
        ],
      },
      month3: {
        title: "HR Analytics & Policies",
        subtitle: "Log recruitment metrics on dashboards, draft policies, and pass assessments.",
        topics: [
          { category: "HR Dashboards", items: ["Cost-per-hire calculations", "Candidate pipeline analytics", "Time-to-fill metric dashboards"] },
          { category: "Evaluation & Placements", items: ["Recruitment Sourcing Assessments", "Final Policy Presentations", "HR Intern Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "HR & TA Core Syllabus", desc: "Detailed syllabus spanning Boolean searches, candidate screening, ATS configurations, and HR metrics." },
      { title: "ATS Sandbox Access Guides", desc: "Setup guides to practice configuring candidate funnels on free recruiting dashboards." },
      { title: "6 Strategic HR Projects", desc: "Build a portfolio featuring 3 recruitment documents and 3 automation/policy files." },
      { title: "HR Systems Certificate", desc: "Verifiable credential validating Talent Acquisition & HR Analytics skills." },
      { title: "Boolean Sourcing Guides", desc: "Get quick-reference lists explaining Boolean search syntax for various engineering roles." },
      { title: "Direct HR Referrals", desc: "Introductions to recruitment agencies, SaaS startups, and corporate HR teams." },
      { title: "ATS Recruiter Resume Kit", desc: "Resume layout optimizing for sourcing, recruitment, ATS, and HR analytics keywords." },
      { title: "GitHub HR Portfolios", desc: "Create repository structures that showcase sourcing strategies, job descriptions, and HR charts." },
      { title: "Mock Sourcing Interviews", desc: "Practice explaining recruitment metrics, candidate pipeline steps, and policy logic." },
      { title: "HR Metric Calculators", desc: "Get Excel calculators to model cost per hire, attrition rates, and sourcing funnels." },
    ],
    whyChoose: [
      { title: "Critical Business Role", desc: "Every growing company needs recruiters to find talent, making TA specialists highly important." },
      { title: "Instructed by HR Directors", desc: "Sessions held by senior HR managers scaling corporate teams." },
      { title: "Sourcing-First Approach", desc: "Learn to build Boolean strings to find candidates 10x faster." },
      { title: "Affordable Career Entry", desc: "Get comprehensive HR training without paying high fees for specialized courses." },
      { title: "Recruitment Automation", desc: "Master ATS configurations, the primary tools in modern talent acquisition." },
      { title: "Practical Case Audits", desc: "Design and audit actual company policy and sourcing plans." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "TA Intern", image: "RK", review: "The B2B sourcing Boolean and ATS automation modules were excellent. Sourcing candidate sheets got me my internship.", rating: 5 },
      { name: "Anjali Gupta", role: "HR Generalist", image: "AG", review: "I loved the workforce analytics dashboard labs. It helped me clear my technical round with a recruitment firm.", rating: 5 },
    ],
    faqs: [
      { question: "Do we need candidate databases for this course?", answer: "No! We show you how to leverage LinkedIn, Boolean strings, and free recruitment dashboard sandboxes to build talent pools." },
      { question: "What ATS software is covered?", answer: "We focus on open ATS dashboards and align concepts with Greenhouse and Lever workflow patterns." },
      { question: "What backgrounds is this suitable for?", answer: "This program is ideal for MBA, BBA, BCom, and any student wanting to build high-paying corporate careers." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold business or HR degrees.",
      scholarship: "Top 3 students in monthly sourcing reviews get 50% fee refunds.",
      included: ["Live Sourcing Workshops", "Personal Sourcing Reviews", "ATS Pipeline Templates", "Dual Certificates", "HR Metric Spreadsheet Tools", "Placement Direct Referrals"],
    },
  },
  "financial-analytics": {
    slug: "financial-analytics",
    title: "Financial Analytics & Investment Management Internship Program",
    badge: "📊 Financial Modeling + Corporate Valuation + Portfolio Analytics",
    tagline: "Learn Financial Modeling, DCF Corporate Valuation, Portfolio Management, and Fintech Data Analytics.",
    duration: "3 Months",
    fee: "₹15,000",
    isProjectBased: true,
    highlights: {
      training: "1 Month intensive training covering Excel financial formulas, 3-Statement model design, DCF valuation, portfolio returns math, and fintech analysis tools.",
      mentorship: "Guidance from experienced Investment Analysts, financial model code reviews, and pitch deck audits.",
      projects: {
        description: "Design spreadsheets, write valuation reports, and analyze asset portfolios.",
        minor: ["3-Statement Financial Model", "DCF Corporate Valuation Sheet", "Historical Stock Return Tracker"],
        major: ["Quantitative Portfolio Optimizer", "M&A Deal Model", "Fintech Risk Assessment Dashboard"],
      },
      internship: "Top students get direct referrals for Financial Analyst, Investment Intern, or Fintech Associate positions.",
    },
    overview: "Master finance metrics. Learn financial engineering: from linking income/balance/cash sheets, discounting cash flows (DCF) for valuations, mapping portfolio risk-return metrics, to building fintech analysis dashboards.",
    durationDetails: {
      training: "1 Month Modeling & Excel",
      project: "2 Months Valuations & Portfolios",
      total: "3 Months",
    },
    deliveryMode: ["Live Spreadsheet Modeling", "Corporate Valuation Demos", "Fintech Analysis Demos"],
    mentorshipSupport: ["Financial Analyst Office Hours", "Spreadsheet Cell Code Reviews", "Valuation Model Reviews"],
    timeline: {
      month1: {
        title: "Excel & Financial Models",
        subtitle: "Link company statements, write financial equations, and build models.",
        topics: [
          { category: "Financial Excel", items: ["VLOOKUP/INDEX-MATCH", "Amortization & Depreciations", "Scenario Manager tables"] },
          { category: "3-Statement Models", items: ["Income statement layouts", "Balance sheet integrations", "Cash flow reconciliations"] },
        ],
      },
      month2: {
        title: "Corporate Valuations",
        subtitle: "Discount cash flows, run market multiples, and calculate stock valuations.",
        topics: [
          { category: "DCF Valuations", items: ["Free Cash Flow (FCFF/FCFE)", "WACC (Cost of Capital) math", "Terminal Value equations"] },
          { category: "Comps Valuations", items: ["Trading Multiples (EV/EBITDA)", "Transaction Comps analysis", "Target Price estimations"] },
        ],
      },
      month3: {
        title: "Portfolios & Fintech Data",
        subtitle: "Optimize portfolio weights, track risk metrics, and pass assessments.",
        topics: [
          { category: "Portfolio Analytics", items: ["Asset Risk-Return variance", "Sharpe Ratio calculation", "Markowitz Efficient Frontier"] },
          { category: "Evaluation & Placements", items: ["Financial Modeling Assessments", "Final Portfolio Presentations", "Finance Intern Referrals"] },
        ],
      },
    },
    whatYouWillReceive: [
      { title: "Finance Core Syllabus", desc: "Detailed syllabus spanning linked spreadsheets, corporate valuations, and portfolio models." },
      { title: "Excel Model Templates", desc: "Access to clean linked Excel models for corporate valuation and portfolios." },
      { title: "6 Spreadsheet Projects", desc: "Build a portfolio featuring 3 linked models and 3 analytical reports." },
      { title: "Financial Analyst Certificate", desc: "Verifiable credential validating Financial Modeling & Valuation skills." },
      { title: "Financial Ratio Cheat Cards", desc: "Get quick-reference lists explaining calculations for common corporate ratios." },
      { title: "Direct Finance Referrals", desc: "Introductions to investment funds, corporate finance teams, and fintech firms." },
      { title: "ATS Finance Resume Kit", desc: "Resume layout optimizing for financial modeling, DCF, WACC, and valuation keywords." },
      { title: "GitHub Finance Portfolios", desc: "Create repository structures that showcase Excel formulas, model outputs, and reports." },
      { title: "Mock Finance Interview Loops", desc: "Practice explaining WACC, statement linking, and enterprise value math." },
      { title: "Corporate Pitch Deck Layouts", desc: "Get layouts to quickly design corporate investment proposals." },
    ],
    whyChoose: [
      { title: "High Demand Skill", desc: "Every corporate business and investment house needs analysts to model returns, making financial modelers highly valuable." },
      { title: "Instructed by Analysts", desc: "Sessions held by senior investment analysts and corporate finance directors." },
      { title: "Modeling-First Focus", desc: "Master Excel and financial formulas, the primary tools in corporate finance." },
      { title: "Affordable Finance Entry", desc: "Get high-end financial training without paying high fees for specialized courses." },
      { title: "DCF Valuation Emphasis", desc: "Go deep into cash flow discount math, a critical valuation tool." },
      { title: "Practical Case Models", desc: "Design and audit actual financial models with realistic corporate details." },
    ],
    testimonials: [
      { name: "Rohit Krishnan", role: "Finance Intern", image: "RK", review: "The 3-Statement modeling and DCF valuation modules were excellent. Designing corporate models got me an internship.", rating: 5 },
      { name: "Anjali Gupta", role: "Investment Associate", image: "AG", review: "I loved the portfolio risk management labs. It helped me clear my technical round with an investment analyst firm.", rating: 5 },
    ],
    faqs: [
      { question: "Do we need paid financial terminal access (Bloomberg) for this course?", answer: "No! All data and models are created using standard Excel and free online database sources." },
      { question: "What software tools are covered?", answer: "We focus on Microsoft Excel and Google Sheets, which are the corporate finance industry standards." },
      { question: "What backgrounds is this suitable for?", answer: "This program is ideal for MBA Finance, CFA, BCom, and any student wanting to build high-paying commercial careers." },
    ],
    feeStructure: {
      amount: "₹15,000",
      paymentPlans: "3-month interest free installment plan of ₹5,000/month.",
      discounts: "Flat 10% discount for students who hold business, economics, or math degrees.",
      scholarship: "Top 3 students in monthly model evaluations get 50% fee refunds.",
      included: ["Live Modeling Sessions", "Personal Model Cell Reviews", "Linked Excel Model Files", "Dual Certificates", "Corporate Valuation Presentation Layouts", "Placement Direct Referrals"],
    },
  },
};
