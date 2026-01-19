import { Globe, Smartphone, Cloud, Code, Megaphone, Settings, Brain, MessageSquare, Palette } from 'lucide-react';

export const servicesData = [
    {
        id: 'web-design-development',
        title: "Web Design & Development",
        icon: Globe,
        shortIntro: "Empower Your Digital Presence with High-Performance Web Solutions",
        subtitle: "Crafting Visually Stunning Websites That Engage and Convert",
        description: "In the digital-first era, your website is the primary gateway to your brand. At ThynkTech India, we specialize in building fast, secure, and highly responsive websites that don't just look great but also drive business results.",
        heroImage: "/images/what-we-do/design.png",
        aboutSection: {
            heading: "Design That Clicks. Code That Converts.",
            textLeft: "Your customer judges your business in seconds and most of that judgment happens on your website. In today’s mobile-first world, a slow, outdated, or cluttered site can instantly push people away. That’s why your web design needs more than visuals—it needs intent, intelligence, and impact.",
            textRight: "At ThynkTech India, we combine creativity with performance to design websites that not only look clean and professional, but feel effortless to use. Every project begins with understanding your brand, your users, and your business goals. Then, we bring it all together into a user interface that’s responsive, accessible, and built to grow.\n\nWhat sets us apart is our obsession with usability. We don’t just follow UI trends—we think from the user’s perspective. How fast does the site load? Does the layout make sense for a first-time visitor? Is the call-to-action in the right spot? These are the questions we ask before writing a single line of code.\n\nThe end result? A site that works like your best salesperson. One that loads fast, guides visitors smoothly, and encourages action. Whether it’s filling out a form, making a purchase, or simply staying longer, we build experiences that matter."
        },
        serviceFeatures: [
            { title: "Custom Website Design", description: "Bespoke design tailored to your brand tone, industry, and user goals, crafted from scratch with purpose and polish." },
            { title: "Responsive & Mobile-First Design", description: "Ensure pixel-perfect display and usability across all screen sizes and devices, from desktop to smartphone." },
            { title: "Landing Page & Microsite Design", description: "High-impact pages optimized for campaigns, events, or product launches that focus on driving leads and conversions." },
            { title: "UI/UX-Driven Design", description: "We apply design thinking and usability principles to ensure every click and scroll creates value for the user." },
            { title: "E-Commerce Store Design", description: "Create sleek, intuitive online store designs that simplify shopping, build trust, and increase sales." },
            { title: "Design Systems & Branding Assets", description: "Develop reusable UI components, style guides, and visual branding elements to ensure consistency across your ecosystem." }
        ],
        features: ["Responsive web design", "UI/UX focused layouts", "Performance-optimized", "Scalable solutions", "SEO Friendly"],
        videoPath: "/images/web.mp4",
        teamImagePath: "/images/web-dev-team.jpg",
        mainContent: {
            heading: "Creativity and user-friendliness innovations",
            text: "ThynkTech India is a leading Web design and development company, offering a wide range of services including enterprise web apps, WordPress solutions, and headless CMS integrations. We design experiences that hook and convert!"
        }
    },
    {
        id: 'mobile-app-development',
        title: "Mobile App Development",
        icon: Smartphone,
        shortIntro: "Unified Native Mobile Solutions for the Global Market",
        subtitle: "Building High-Performance iOS and Android Apps for Seamless Digital Growth",
        description: "In today’s mobile-first world, your business needs a presence that is robust, scalable, and intuitive across all platforms. At ThynkTech India, we build high-performance native iOS and Android applications that deliver secure, seamless, and user-centric experiences.",
        heroImage: "/images/what-we-do/engineering.png",
        videoPath: "/images/app.mp4",
        teamImagePath: "/images/app.jpg",
        aboutSection: {
            heading: "One Vision. Two Platforms. Infinite Impact.",
            textLeft: "Mobile architecture isn't just about presence; it's about performance and reliability. We bridge the gap between platform diversity to deliver unified mobile excellence that drives business success.",
            textRight: "Our mobile development team specializes in delivering high-impact solutions for both Apple and Android ecosystems. By combining the precision of native iOS development with the versatility of the Android platform, we ensure your brand delivers a consistent, premium experience to billions of users globally.\n\nWe focus on building robust, scalable architectures that leverage the full potential of each OS. From implementing complex biometric security and real-time data sync to designing intuitive gesture-based interfaces, we ensure your app is both powerful and effortless to use.\n\nThe result is a mobile solution that empowers your users and accelerates your business. Whether you are a startup aiming for hyper-growth or an enterprise needing a complex operational tool, we provide the technical mastery to make your mobile vision a reality."
        },
        serviceFeatures: [
            { title: "Native iOS Development", description: "Utilizing Swift and Apple's Human Interface Guidelines to build premium, high-performance applications for the Apple ecosystem." },
            { title: "Native Android Development", description: "Building robust, scalable applications using Kotlin and Material Design, optimized for thousands of Android device configurations." },
            { title: "Secure Data Architecture", description: "Implementing multi-layered encryption and secure local storage to protect sensitive user information across both platforms." },
            { title: "API & Cloud Integration", description: "Seamlessly connecting your mobile applications with enterprise backends, cloud services, and third-party ecosystems." },
            { title: "Comprehensive Quality Assurance", description: "Rigorous testing across real devices and emulators to ensure zero crashes, low memory usage, and instant responsiveness." },
            { title: "App Store & Play Store Success", description: "Expert guidance through the submission and optimization process to ensure your app launches successfully and reaches its audience." }
        ],
        features: ["Native iOS & Android", "Enterprise Security", "Performance Driven", "User-Centric Design", "Scalable Architectures"]
    },
    {
        id: 'devops-engineering',
        title: "DevOps Engineering",
        icon: Cloud,
        shortIntro: "Accelerate Delivery with Enterprise-Grade DevOps Excellence",
        subtitle: "Automating Infrastructure and Streamlining Deployment for Maximum Efficiency",
        description: "Quality software requires a foundation of reliability and speed. At ThynkTech India, we provide end-to-end DevOps services that integrate automated CI/CD pipelines, cloud infrastructure, and proactive monitoring to ensure your software is always production-ready.",
        heroImage: "/images/what-we-do/engineering.png",
        videoPath: "/images/DevOps.mp4",
        teamImagePath: "/images/devops.jpg",
        aboutSection: {
            heading: "Automate. Scalability. Confidence.",
            textLeft: "Modern software delivery demands speed without compromising on stability. Our DevOps engineers provide the technical backbone that allows your development team to release faster and more frequently.",
            textRight: "We believe that DevOps is more than just tools—it's a culture of continuous improvement. By automating your infrastructure and deployment workflows, we eliminate manual bottlenecks and significantly reduce the risk of human error during production releases.\n\nFrom architecting cloud-native solutions on AWS, Azure, or Google Cloud to implementing robust containerization with Docker and Kubernetes, we ensure your systems are built for massive scale. We focus on 'Infrastructure as Code' (IaC), making your environments predictable, repeatable, and easy to manage.\n\nOur commitment to security (DevSecOps) means your pipelines are audited and secure from the first line of code. We provide 24/7 monitoring and automated alerting, ensuring your high-availability systems remain performant and secure around the clock."
        },
        serviceFeatures: [
            { title: "Automated CI/CD Pipelines", description: "Designing robust continuous integration and delivery flows that automate testing and deployment for faster release cycles." },
            { title: "Infrastructure as Code (IaC)", description: "Managing your cloud resources using code (Terraform, CloudFormation) to ensure environment consistency and rapid scaling." },
            { title: "Cloud Managed Services", description: "Optimizing your infrastructure on AWS, Azure, or GCP for performance, security, and cost-efficiency." },
            { title: "Containerization & Orchestration", description: "Implementing Docker and Kubernetes to ensure your applications are portable, scalable, and easy to manage." },
            { title: "Proactive Monitoring & Alerting", description: "Setting up real-time analytics and automated alerts to identify and resolve performance issues before they impact users." },
            { title: "DevSecOps Integration", description: "Embedding security audits and compliance checks directly into your delivery pipeline to ensure safe and secure releases." }
        ],
        features: ["Automated Pipelines", "Cloud-Native Scalability", "Infrastructure as Code", "Proactive Monitoring", "DevSecOps Ready"]
    },
    {
        id: 'software-services',
        title: "Software Services",
        icon: Code,
        shortIntro: "Custom Software Architectures for Complex Business Challenges",
        subtitle: "Transforming Core Operations with Enterprise-Grade Software",
        description: "Generic software often falls short of meeting unique business needs. ThynkTech India develops bespoke software solutions—from ERPs to SaaS products—that align with your specific workflows.",
        heroImage: "/images/what-we-do/engineering.png",
        videoPath: "/images/sdlc.mp4",
        teamImagePath: "/images/web-dev-team.jpg",
        aboutSection: {
            heading: "Tailored Architecture. Enterprise Scale.",
            textLeft: "Modern business requires more than just tools—it requires an integrated digital ecosystem. We build the software that acts as the backbone of your organizational efficiency.",
            textRight: "At ThynkTech India, our software development process is built on a foundation of clean code and scalable architecture. We don't believe in one-size-fits-all; we take the time to map your business processes before writing a single line of logic.\n\nFrom cloud-native SaaS platforms to complex internal management systems, we use modern stacks like React, Node.js, Python, and more to deliver robust solutions. We focus on interoperability, ensuring your new software communicates perfectly with your existing tools.\n\nOur commitment to security and performance means your software is ready for today's demands and tomorrow's growth. We provide full-lifecycle support, from initial consulting and design to deployment, hosting, and ongoing maintenance."
        },
        serviceFeatures: [
            { title: "Custom ERP & CRM", description: "Building centralized systems to manage your resources, customers, and operations with maximum efficiency." },
            { title: "SaaS Product Engineering", description: "Architecting cloud-based platforms designed for multi-tenancy, scalability, and high availability." },
            { title: "Legacy Modernization", description: "Upgrading your outdated systems to modern technologies without losing critical data or disrupting business." },
            { title: "API Development & Integration", description: "Creating secure, high-performance APIs to connect your software with the world and internal systems." },
            { title: "Cloud-Native Solutions", description: "Leveraging AWS, Azure, or Google Cloud to build software that is born for the cloud and cost-effective." },
            { title: "Business Process Automation", description: "Identifying and automating repetitive tasks to free up your team for higher-value activities." }
        ],
        features: ["Bespoke Architectures", "Modern Tech Stacks", "Cloud-Native Design", "Scalable & Secure", "System Integration"]
    },
    {
        id: 'digital-marketing',
        title: "Digital Marketing",
        icon: Megaphone,
        shortIntro: "Drive Growth with Data-Driven Marketing Strategies",
        subtitle: "Strategic Marketing That Put Your Brand in the Spotlight",
        description: "Visibility is the currency of the digital age. We combine creative storytelling with rigorous data analysis to ensure your brand reaches the right audience at the right time.",
        heroImage: "/images/what-we-do/marketing.png",
        videoPath: "/images/Digital.Marketing.mp4",
        teamImagePath: "/images/group.jpeg",
        aboutSection: {
            heading: "Strategic Growth. Measureable Results.",
            textLeft: "Digital marketing isn't just about 'being online'—it's about creating a presence that resonates and converts. We help you navigate the noisy digital landscape with precision.",
            textRight: "ThynkTech India offers a holistic approach to digital growth. We don't just look at vanity metrics; we focus on lead generation, customer acquisition costs, and long-term brand equity. Our team stays ahead of algorithm changes to keep your business on top.\n\nFrom high-intent SEO strategies to hyper-targeted social media campaigns, we tailor our tactics to your specific industry. We believe in transparency, providing detailed reporting that shows exactly how your marketing spend is impacting your bottom line.\n\nWhether you're looking to launch a new product or revitalize an existing brand, we provide the creative spark and analytical rigor to make it happen. We turn visitors into customers and customers into brand advocates."
        },
        serviceFeatures: [
            { title: "SEO (Search Engine Optimization)", description: "Ranking your website for the keywords that matter to your business and drive organic traffic." },
            { title: "Performance Marketing (PPC)", description: "Managing data-driven paid campaigns on Google, Meta, and LinkedIn to maximize ROI and lead flow." },
            { title: "Content Strategy", description: "Crafting narratives that establish your brand as an authority and build trust with your audience." },
            { title: "Social Media Management", description: "Building and engaging communities around your brand across all major social platforms." },
            { title: "Conversion Rate Optimization", description: "Analyzing user behavior on your site to identify and fix friction points that prevent sales." },
            { title: "Email Marketing & Automation", description: "Designing nurture sequences that keep your brand top-of-mind and drive repeat business." }
        ],
        features: ["SEO & SEM", "Data-Driven PPC", "Social Media Growth", "Content Authority", "ROI Focus"]
    },
    {
        id: 'automation-testing',
        title: "Automation Testing",
        icon: Settings,
        shortIntro: "Zero Defects. Maximum Reliability.",
        subtitle: "Accelerating Software Delivery with Precision Testing",
        description: "Software quality is the foundation of user trust. We implement advanced automation testing frameworks to ensure your products are bug-free, secure, and ready for high-load environments.",
        heroImage: "/images/what-we-do/analytics.png",
        videoPath: "/images/testing.mp4",
        teamImagePath: "/images/tester12.jpeg",
        aboutSection: {
            heading: "Confidence in Every Code Release.",
            textLeft: "Manual testing can't keep up with the speed of modern development. Automation is the only way to ensure quality without sacrificing speed. We provide that bridge.",
            textRight: "At ThynkTech India, we believe that testing should be an integral part of the development lifecycle, not an afterthought. Our QA engineers design custom automation frameworks that integrate seamlessly into your CI/CD pipeline.\n\nBy automating repetitive regression tests, we allow your team to focus on new features while maintaining total confidence that existing logic remains intact. We test for performance, security, and usability across a wide range of browser and device combinations.\n\nOur goal is to help you achieve 'continuous quality'. With our automation solutions, you can release faster and more frequently, knowing that every line of code has been rigorously validated against your business requirements and performance benchmarks."
        },
        serviceFeatures: [
            { title: "Regression Test Automation", description: "Ensuring that new updates never break existing functionality with comprehensive automated test suites." },
            { title: "API Testing & Validation", description: "Automating the testing of your application's data layer to ensure reliability and security of all endpoints." },
            { title: "Performance & Load Testing", description: "Simulating real-world traffic to identify bottlenecks and ensure your systems can handle growth." },
            { title: "Cross-Browser Automation", description: "Verifying a consistent experience for users across Chrome, Safari, Firefox, Edge, and mobile browsers." },
            { title: "Mobile UI Testing", description: "Automated validation of mobile interfaces on real devices and emulators for perfect touch interaction." },
            { title: "CI/CD Pipeline Integration", description: "Embedding automated tests directly into your deployment flow for true DevOps-driven quality." }
        ],
        features: ["CI/CD Integration", "Performance Testing", "Regression Suites", "Security Validation", "Cross-Platform QA"]
    },
    {
        id: 'ai-ml-engineer',
        title: "AI / ML Engineering",
        icon: Brain,
        shortIntro: "Transform Data into Competitive Advantage",
        subtitle: "Expert AI Solutions Built for Real-World Business Impact",
        description: "Artificial Intelligence is no longer for the future—it's for now. We bridge the gap between academic research and industrial application, building AI systems that solve actual business problems.",
        heroImage: "/images/what-we-do/engineering.png",
        videoPath: "/images/ai.ml.mp4",
        teamImagePath: "/images/AL_ML.jpeg",
        aboutSection: {
            heading: "Intelligent Data. Predictive Power.",
            textLeft: "Data is only as valuable as the insights you can extract from it. Our AI engineers help you turn your historical data into a predictive engine for growth.",
            textRight: "ThynkTech India specializes in custom machine learning model development. We don't just use out-of-the-box solutions; we build and train models that are specifically tuned to your data and your business objectives.\n\nFrom computer vision systems that automate visual inspection to predictive maintenance models that save millions in downtime, we provide end-to-end expertise. We handle everything from data cleaning and feature engineering to model deployment and monitoring.\n\nWe prioritize ethical AI and explainability, ensuring that your models are not 'black boxes' but understandable tools for decision-making. We help you stay ahead of the curve by identifying opportunities for AI integration across your entire value chain."
        },
        serviceFeatures: [
            { title: "Custom ML Model Training", description: "Developing bespoke algorithms that learn from your unique data to solve specific business challenges." },
            { title: "Computer Vision Solutions", description: "Building systems that can see, identify, and process visual information for automation and security." },
            { title: "Predictive Analytics", description: "Utilizing historical patterns to forecast future trends, demand, and potential risks with high accuracy." },
            { title: "Natural Language Processing", description: "Enabling machines to understand, interpret, and generate human language for better communication." },
            { title: "Recommendation Engines", description: "Driving sales and engagement with personalized content and product suggestions tailored to each user." },
            { title: "AI/ML Ops & Deployment", description: "Ensuring your models are efficiently deployed into production and consistently monitored for performance." }
        ],
        features: ["Predictive Models", "Computer Vision", "NLP Expertise", "Neural Networks", "Explainable AI"]
    },
    {
        id: 'ai-chatbot-development',
        title: "AI Chatbot Development",
        icon: MessageSquare,
        shortIntro: "24/7 Intelligent Engagement for Your Customers",
        subtitle: "Conversational AI That Truly Understands Your Users",
        description: "Standard chatbots frustrate users. Our AI-powered conversational agents provide human-like interactions, resolving issues and generating leads around the clock with zero downtime.",
        heroImage: "/images/what-we-do/engineering.png",
        videoPath: "/images/ai.chat.bot.mp4",
        teamImagePath: "/images/thynk_chat.jpg",
        aboutSection: {
            heading: "Conversations That Scale. Results That Matter.",
            textLeft: "Customer support shouldn't be a bottleneck for your growth. We build intelligent agents that handle the routine so your team can focus on the critical.",
            textRight: "ThynkTech India leverages the latest LLMs and NLP technologies to build chatbots that understand context, sentiment, and intent. Our bots don't just follow a script; they engage in meaningful dialogues that solve problems.\n\nWe integrate our chatbots across all your touchpoints—from your website and mobile app to WhatsApp and Facebook Messenger. This creates a unified, seamless support experience for your customers, no matter where they are.\n\nBut it's not just about support. Our AI agents are powerful lead-generation tools, qualifying prospects and booking meetings automatically. We provide deep analytics on every conversation, helping you understand your customers' needs better than ever before."
        },
        serviceFeatures: [
            { title: "Intelligent NLP Agents", description: "Chatbots that understand human intent and context, moving beyond simple keyword-based responses." },
            { title: "Multi-Channel Integration", description: "Deploying your bot across Web, iOS, Android, WhatsApp, and social media with a unified backend." },
            { title: "Automated Lead Qualification", description: "Bots that engage visitors 24/7, ask the right questions, and pipe qualified leads into your CRM." },
            { title: "Sentiment Analysis", description: "Recognizing user emotions to provide empathetic responses or escalate to a human agent when needed." },
            { title: "Self-Learning Capabilities", description: "Implementing feedback loops that allow your AI agent to become smarter and more accurate with every chat." },
            { title: "Enterprise System Sync", description: "Connecting your bot with your internal databases and APIs to provide real-time, user-specific data." }
        ],
        features: ["Conversational AI", "CRM Integration", "Lead Generation", "Multi-Language", "24/7 Automation"]
    },
    {
        id: 'ui-ux-designer',
        title: "UI / UX Design",
        icon: Palette,
        shortIntro: "Human-Centric Design for Digital Excellence",
        subtitle: "Beautiful Interfaces Built on Intuitive Experiences",
        description: "Great design is invisible—the user just knows what to do. At ThynkTech India, we blend aesthetics with psychology to create products that users don't just use, but love.",
        heroImage: "/images/what-we-do/design.png",
        videoPath: "/images/ui.ux.mp4",
        teamImagePath: "/images/UI_UX.jpg",
        aboutSection: {
            heading: "Aesthetics with Purpose. Design with Impact.",
            textLeft: "Users don't just judge your product; they feel it. We ensure every interaction is a delightful step toward their goals. We design for humans, not just screens.",
            textRight: "Our UI/UX design philosophy is centered on deep user research. We start by understanding who your users are, what they struggle with, and what they need to succeed. Only then do we start sketching.\n\nWe move from wireframes to high-fidelity prototypes, testing every assumption along the way. Our designers focus on accessibility, ensuring your product is usable by everyone, regardless of their device or ability. We build modern design systems that ensure consistency across your entire product line.\n\nThe result is a digital experience that feels premium, professional, and perfectly aligned with your brand identity. We help you reduce bounce rates, increase session durations, and turn complex workflows into simple, elegant journeys."
        },
        serviceFeatures: [
            { title: "User Research & Audits", description: "Deep diving into user behavior and existing products to identify opportunities for experience improvement." },
            { title: "Interactive Prototyping", description: "Building clickable models that look and feel like the final product to validate ideas before development." },
            { title: "Scalable Design Systems", description: "Creating a library of reusable UI components and guidelines to maintain consistency and speed up production." },
            { title: "Accessibility (a11y) Design", description: "Ensuring your digital products are inclusive and meet global standards for accessibility and usability." },
            { title: "Mobile & Web UI Design", description: "Crafting visually stunning, high-fidelity interfaces that reflect your brand's unique personality and tone." },
            { title: "Usability Testing", description: "Gathering real user feedback on prototypes to refine the experience and eliminate friction points." }
        ],
        features: ["Human-Centric Design", "Rapid Prototyping", "Design Systems", "Usability Audits", "Accessibility Focus"]
    }
];
