
export const engineeringRoles = {
    // 1. FRONTEND
    "frontend-developers": {
        title: "Frontend Engineering",
        subtitle: "Building pixel-perfect, high-performance, and accessible user interfaces for enterprise-grade applications.",
        heroImage: "/images/frontend/team1.jpg",
        description: "Our frontend engineering team is dedicated to crafting immersive user experiences. We bridge the gap between design and technology, ensuring that every interaction is smooth, responsive, and intuitive. We specialize in building large-scale Single Page Applications (SPAs) and Progressive Web Apps (PWAs).",
        techStack: [
            { name: "React.js", icon: "⚛️", desc: "Component-based UI architecture" },
            { name: "Next.js", icon: "▲", desc: "SSR & Static Generation" },
            { name: "TypeScript", icon: "TS", desc: "Type-safe robust development" },
            { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first rapid styling" },
            { name: "Redux", icon: "🔄", desc: "Complex state management" },
            { name: "Figma", icon: "🎨", desc: "Design to Code workflow" }
        ],
        methodologies: [
            { title: "Component-Driven", desc: "Modular component libraries using Storybook." },
            { title: "Performance First", desc: "Focus on Core Web Vitals and load times." },
            { title: "Accessibility", desc: "WCAG 2.1 AA standard compliance." }
        ],
        projects: {
            title: "Enterprise Projects",
            desc: "Delivering solutions used by millions.",
            list: ["Fintech Analytics Dashboard", "SaaS CRM Portal", "E-Learning Platform UI"]
        },
        teamPath: "/images/frontend"
    },

    // 2. BACKEND
    "backend-developers": {
        title: "Backend Engineering",
        subtitle: "Architecting scalable, secure, and high-performance server-side systems for global enterprises.",
        heroImage: "/images/backend/team1.jpg",
        description: "Our backend team builds the robust foundation powering ThynkTech's solutions. We design distributed systems, microservices, and APIs handling high concurrency and massive data volumes. Security and reliability are our core tenets.",
        techStack: [
            { name: "Node.js", icon: "🟢", desc: "Event-driven I/O" },
            { name: "Python", icon: "🐍", desc: "Data processing & AI" },
            { name: "Java / Spring", icon: "☕", desc: "Enterprise microservices" },
            { name: "PostgreSQL", icon: "🐘", desc: "Relational data interface" },
            { name: "Redis", icon: "⚡", desc: "High-speed caching" },
            { name: "Kafka", icon: "📨", desc: "Event streaming pipelines" }
        ],
        methodologies: [
            { title: "Microservices", desc: "Decoupled, independently deployable services." },
            { title: "API-First", desc: "OpenAPI/Swagger specification driven." },
            { title: "Security", desc: "OWASP best practices & encryption." }
        ],
        projects: {
            title: "System Architecture",
            desc: "Processing millions of transactions with 99.99% uptime.",
            list: ["Real-time Payments", "IoT Pipelines", "Secure Healthcare API"]
        },
        teamPath: "/images/backend"
    },

    // 3. FULL STACK
    "fullstack-developers": {
        title: "Full-Stack Engineering",
        subtitle: "Delivering end-to-end digital solutions with mastery across the entire technology stack.",
        heroImage: "/images/fullstack/hero.jpg",
        description: "Our Full-Stack engineers are the versatile problem solvers of ThynkTech. Capable of navigating the entire development lifecycle, they bridge the gap between client-side interactions and server-side logic to deliver cohesive, feature-rich products.",
        techStack: [
            { name: "MERN Stack", icon: "🌐", desc: "MongoDB, Express, React, Node" },
            { name: "Next.js", icon: "▲", desc: "Full-stack React frameworks" },
            { name: "GraphQL", icon: "📡", desc: "Flexible data querying" },
            { name: "Serverless", icon: "☁️", desc: "AWS Lambda & Edge functions" },
            { name: "Prisma", icon: "💎", desc: "Next-gen ORM" },
            { name: "Docker", icon: "🐳", desc: "Containerized environments" }
        ],
        methodologies: [
            { title: "Agile Delivery", desc: "Rapid iteration and continuous deployment." },
            { title: "End-to-End Ownership", desc: "Responsible for feature lifecycle from UI to DB." },
            { title: "Scalable Architecture", desc: "Building aimed for growth and load." }
        ],
        projects: {
            title: "Integrated Solutions",
            desc: "Complex platforms with seamless front-to-back integration.",
            list: ["E-Commerce Marketplaces", "SaaS Management Suites", "Social Networking Apps"]
        },
        teamPath: "/images/fullstack"
    },

    // 4. MOBILE APP
    "app-developers": {
        title: "Mobile App Engineering",
        subtitle: "Creating native and cross-platform mobile experiences that users love on iOS and Android.",
        heroImage: "/images/mobile/hero.jpg",
        description: "We build mobile applications that define brands. Whether detailed native performance or rapid cross-platform deployment, our mobile engineering team delivers fluid, crash-free, and engaging mobile experiences.",
        techStack: [
            { name: "React Native", icon: "⚛️", desc: "Cross-platform efficiency" },
            { name: "Flutter", icon: "🐦", desc: "Beautiful native interfaces" },
            { name: "Swift / iOS", icon: "🍎", desc: "High-performance native iOS" },
            { name: "Kotlin / Android", icon: "🤖", desc: "Modern Android development" },
            { name: "Firebase", icon: "🔥", desc: "Real-time backend & analytics" },
            { name: "Redux Mobile", icon: "📱", desc: "App state management" }
        ],
        methodologies: [
            { title: "Offline First", desc: "Robust functionality without connection." },
            { title: "Native Modules", desc: "Bridging JavaScript/Dart to native APIs." },
            { title: "App Store Optimization", desc: "Ensuring compliance and discoverability." }
        ],
        projects: {
            title: "Mobile Success",
            desc: "Top-rated apps in Play Store & App Store.",
            list: ["On-Demand Delivery App", "Fintech Wallet", "Health & Fitness Tracker"]
        },
        teamPath: "/images/mobile"
    },

    // 5. DEVOPS
    "devops-engineers": {
        title: "DevOps & Cloud",
        subtitle: "Accelerating delivery with automated infrastructure, CI/CD pipelines, and cloud-native resilience.",
        heroImage: "/images/devops/hero.jpg",
        description: "Our DevOps engineers are the backbone of speed and stability. We automate the path from code commit to production deployment, ensuring that ThynkTech's software is delivered faster, safer, and more reliably.",
        techStack: [
            { name: "AWS / Azure", icon: "☁️", desc: "Cloud infrastructure providers" },
            { name: "Kubernetes", icon: "☸️", desc: "Container orchestration" },
            { name: "Terraform", icon: "🏗️", desc: "Infrastructure as Code" },
            { name: "Jenkins / Github Actions", icon: "⚙️", desc: "CI/CD Automation" },
            { name: "Prometheus", icon: "📈", desc: "Monitoring & Alerting" },
            { name: "Docker", icon: "🐳", desc: "Containerization" }
        ],
        methodologies: [
            { title: "GitOps", desc: "Infrastructure updates via pull requests." },
            { title: "Zero Downtime", desc: "Blue/Green and Canary deployments." },
            { title: "Security (DevSecOps)", desc: "Automated vulnerability scanning." }
        ],
        projects: {
            title: "Infrastructure Scale",
            desc: "Managing clusters supporting global traffic.",
            list: ["Banking Infrastructure Migration", "Global CDN Setup", "Automated Compliance Pipeline"]
        },
        teamPath: "/images/devops"
    },

    // 6. QA / TESTERS
    "qa-engineers": {
        title: "QA & Automation",
        subtitle: "Ensuring flawless quality through rigorous testing, automation, and performance analysis.",
        heroImage: "/images/qa/hero.jpg",
        description: "Quality is not an afterthought; it is our culture. Our QA engineers utilize advanced automation frameworks to catch bugs before they ever reach production, ensuring your user's trust is never compromised.",
        techStack: [
            { name: "Selenium", icon: "🤖", desc: "Web browser automation" },
            { name: "Cypress", icon: "🌲", desc: "Modern frontend testing" },
            { name: "JMeter", icon: "⏱️", desc: "Performance load testing" },
            { name: "Postman", icon: "🚀", desc: "API testing suites" },
            { name: "Appium", icon: "📱", desc: "Mobile app automation" },
            { name: "JIRA", icon: "🐞", desc: "Defect tracking & management" }
        ],
        methodologies: [
            { title: "Test Driven Dev (TDD)", desc: "Writing tests before code." },
            { title: "Shift Left", desc: "Testing early in the development cycle." },
            { title: "Continuous Testing", desc: "Automated tests in CI pipelines." }
        ],
        projects: {
            title: "Quality Assurance",
            desc: "Maintaining 99.8% bug-free release rates.",
            list: ["Enterprise ERP Validation", "Banking Security Audit", "High-Load E-commerce Test"]
        },
        teamPath: "/images/qa"
    },

    // 7. AI / ML
    "ai-developers": {
        title: "AI & Machine Learning",
        subtitle: "Transforming raw data into intelligent insights and automated decision-making systems.",
        heroImage: "/images/ai/hero.jpg",
        description: "Our AI/ML researchers and engineers build intelligent systems that learn and adapt. From Natural Language Processing to Computer Vision, we help businesses unlock the hidden value in their data.",
        techStack: [
            { name: "Python", icon: "🐍", desc: "Primary AI language" },
            { name: "TensorFlow / PyTorch", icon: "🧠", desc: "Deep Learning frameworks" },
            { name: "OpenAI API", icon: "🤖", desc: "Generative AI integration" },
            { name: "Pandas / NumPy", icon: "📊", desc: "Data manipulation" },
            { name: "Scikit-Learn", icon: "📉", desc: "Predictive modeling" },
            { name: "Apache Spark", icon: "🔥", desc: "Big data processing" }
        ],
        methodologies: [
            { title: "Model Ops", desc: "Lifecycle management for AI models." },
            { title: "Responsible AI", desc: "Fairness, transparency, and ethics." },
            { title: "Data Engineering", desc: "Clean pipelines for quality input." }
        ],
        projects: {
            title: "Intelligent Solutions",
            desc: "Automation replacing manual effort.",
            list: ["Customer Support Chatbot", "Predictive Maintenance System", "Document OCR & Extraction"]
        },
        teamPath: "/images/ai"
    },

    // 8. UI / UX
    "ui-ux-designers": {
        title: "UI / UX Design",
        subtitle: "Crafting intuitive, human-centered digital experiences that delight users and drive engagement.",
        heroImage: "/images/uiux/hero.jpg",
        description: "Design is how it works. Our UI/UX team combines empathy, research, and creativity to design products that solve real problems. We believe in aesthetics that serve function.",
        techStack: [
            { name: "Figma", icon: "🎨", desc: "Interface design & prototyping" },
            { name: "Adobe XD", icon: "📐", desc: "Experience design" },
            { name: "Sketch", icon: "💎", desc: "Vector graphics" },
            { name: "InVision", icon: "🎞️", desc: "Interactive prototypes" },
            { name: "Zeplin", icon: "📦", desc: "Handoff to engineering" },
            { name: "Miro", icon: "🧠", desc: "Brainstorming & flows" }
        ],
        methodologies: [
            { title: "User Research", desc: "Interviews, personas, and journeys." },
            { title: "Design Systems", desc: "Atomic design principles." },
            { title: "Usability Testing", desc: "Validating with real users." }
        ],
        projects: {
            title: "Design Impact",
            desc: "Award-winning interfaces.",
            list: ["Corporate Intranet Redesign", "Mobile Banking Experience", "Travel Booking Flow"]
        },
        teamPath: "/images/uiux"
    }
};
