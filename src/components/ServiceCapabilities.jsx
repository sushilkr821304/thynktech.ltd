import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceCapabilities = ({ serviceId }) => {
    // Define capabilities data for each service
    const capabilitiesData = {
        'mobile-app-development': {
            heading: "Diverse Mobile App Development Services for Every Need",
            subheading: "Whether you are a startup or an established IT enterprise, our expertise in app development ensures that your business stays ahead in the ever-evolving tech landscape. We offer custom solutions that align with your business goals, enhance operational efficiency, and drive digital innovation.",
            technologies: [
                { name: "Xamarin", icon: "/images/tech/xamarin.png" },
                { name: "Titanium", icon: "/images/tech/titanium.png" },
                { name: "Swift", icon: "/images/tech/swift.png" },
                { name: "NativeScript", icon: "/images/tech/nativescript.png" },
                { name: "Kotlin", icon: "/images/tech/kotlin.png" },
                { name: "React Native", icon: "/images/tech/react-native.png" },
                { name: "Flutter", icon: "/images/tech/flutter.png" }
            ],
            services: [
                {
                    title: "ERP Systems",
                    description: "Streamline business processes with integrated solutions for finance, HR, supply chain, and operations management.",
                    theme: "light"
                },
                {
                    title: "CRM Software",
                    description: "Enhance customer interactions and sales tracking with powerful CRM solutions tailored to your business needs.",
                    theme: "dark"
                },
                {
                    title: "Cloud-Based Applications",
                    description: "Leverage the power of the cloud with scalable and secure applications for seamless remote access and collaboration.",
                    theme: "light"
                },
                {
                    title: "Cybersecurity Solutions",
                    description: "Protect your business from cyber threats with advanced security measures, including encryption, threat detection, and access management.",
                    theme: "dark"
                },
                {
                    title: "Data Analytics & BI Tools",
                    description: "Transform raw data into actionable insights with AI-powered analytics and BI solutions for better decision-making.",
                    theme: "light"
                },
                {
                    title: "AI & Machine Learning",
                    description: "Automate processes, enhance decision-making, and improve operational efficiency with AI-driven software solutions.",
                    theme: "dark"
                },
                {
                    title: "ITSM Solutions",
                    description: "Streamline IT operations with tools for asset management, service automation, and technical support.",
                    theme: "light"
                },
                {
                    title: "Mobile & Web Applications",
                    description: "We build high-performance, cross-platform apps for businesses, startups, and enterprises across all industries.",
                    theme: "dark"
                },
                {
                    title: "Blockchain & Fintech",
                    description: "Develop secure, transparent, and efficient financial and blockchain-based solutions for various industries.",
                    theme: "light"
                }
            ]
        },
        'web-design-development': {
            heading: "Comprehensive Web Development Technologies",
            subheading: "From modern frontend frameworks to robust backend systems, we leverage cutting-edge technologies to build scalable, secure, and high-performance web applications tailored to your business needs.",
            technologies: [
                { name: "React", icon: "/images/tech/react.png" },
                { name: "Vue.js", icon: "/images/tech/vue.png" },
                { name: "Angular", icon: "/images/tech/angular.png" },
                { name: "Node.js", icon: "/images/tech/nodejs.png" },
                { name: "Next.js", icon: "/images/tech/nextjs.png" },
                { name: "TypeScript", icon: "/images/tech/typescript.png" },
                { name: "WordPress", icon: "/images/tech/wordpress.png" }
            ],
            services: [
                {
                    title: "Custom Website Design",
                    description: "Bespoke, pixel-perfect designs that reflect your brand identity and engage your target audience effectively.",
                    theme: "light"
                },
                {
                    title: "E-Commerce Solutions",
                    description: "Build powerful online stores with seamless checkout experiences, inventory management, and payment integration.",
                    theme: "dark"
                },
                {
                    title: "Progressive Web Apps",
                    description: "Fast, reliable, and engaging web applications that work offline and provide native app-like experiences.",
                    theme: "light"
                },
                {
                    title: "CMS Development",
                    description: "Flexible content management systems that empower your team to update and manage website content effortlessly.",
                    theme: "dark"
                },
                {
                    title: "API Development",
                    description: "Robust RESTful and GraphQL APIs that enable seamless integration with third-party services and applications.",
                    theme: "light"
                },
                {
                    title: "Performance Optimization",
                    description: "Speed optimization, caching strategies, and CDN integration for lightning-fast page load times.",
                    theme: "dark"
                },
                {
                    title: "SEO & Analytics",
                    description: "Search engine optimization and analytics integration to maximize visibility and track user behavior.",
                    theme: "light"
                },
                {
                    title: "Responsive Design",
                    description: "Mobile-first, responsive layouts that provide optimal viewing experiences across all devices and screen sizes.",
                    theme: "dark"
                },
                {
                    title: "Web Security",
                    description: "Implement SSL, data encryption, and security best practices to protect your website and user data.",
                    theme: "light"
                }
            ]
        },
        'devops-engineering': {
            heading: "DevOps & Cloud Infrastructure Excellence",
            subheading: "Accelerate your software delivery with enterprise-grade DevOps practices, cloud-native architectures, and automated CI/CD pipelines that ensure reliability, scalability, and security.",
            technologies: [
                { name: "Docker", icon: "/images/tech/docker.png" },
                { name: "Kubernetes", icon: "/images/tech/kubernetes.png" },
                { name: "AWS", icon: "/images/tech/aws.png" },
                { name: "Azure", icon: "/images/tech/azure.png" },
                { name: "Jenkins", icon: "/images/tech/jenkins.png" },
                { name: "Terraform", icon: "/images/tech/terraform.png" },
                { name: "GitLab", icon: "/images/tech/gitlab.png" }
            ],
            services: [
                {
                    title: "CI/CD Pipeline Automation",
                    description: "Automated build, test, and deployment workflows that accelerate release cycles and reduce human error.",
                    theme: "light"
                },
                {
                    title: "Cloud Migration",
                    description: "Seamless migration of legacy systems to AWS, Azure, or Google Cloud with minimal downtime and risk.",
                    theme: "dark"
                },
                {
                    title: "Infrastructure as Code",
                    description: "Manage cloud resources using Terraform and CloudFormation for consistent, repeatable environments.",
                    theme: "light"
                },
                {
                    title: "Container Orchestration",
                    description: "Deploy and manage containerized applications at scale using Kubernetes and Docker Swarm.",
                    theme: "dark"
                },
                {
                    title: "Monitoring & Logging",
                    description: "Real-time system monitoring, log aggregation, and alerting with Prometheus, Grafana, and ELK stack.",
                    theme: "light"
                },
                {
                    title: "DevSecOps",
                    description: "Integrate security scanning and compliance checks directly into your CI/CD pipeline.",
                    theme: "dark"
                },
                {
                    title: "Disaster Recovery",
                    description: "Implement backup strategies and disaster recovery plans to ensure business continuity.",
                    theme: "light"
                },
                {
                    title: "Cost Optimization",
                    description: "Analyze and optimize cloud spending with right-sizing, reserved instances, and auto-scaling.",
                    theme: "dark"
                },
                {
                    title: "Multi-Cloud Strategy",
                    description: "Design and implement multi-cloud architectures for vendor independence and maximum resilience.",
                    theme: "light"
                }
            ]
        },
        'software-services': {
            heading: "Enterprise Software Solutions Across Industries",
            subheading: "Custom software development that transforms business operations, streamlines workflows, and drives digital transformation with scalable, secure, and future-ready solutions.",
            technologies: [
                { name: "Java", icon: "/images/tech/java.png" },
                { name: "Python", icon: "/images/tech/python.png" },
                { name: ".NET", icon: "/images/tech/dotnet.png" },
                { name: "PostgreSQL", icon: "/images/tech/postgresql.png" },
                { name: "MongoDB", icon: "/images/tech/mongodb.png" },
                { name: "Redis", icon: "/images/tech/redis.png" },
                { name: "GraphQL", icon: "/images/tech/graphql.png" }
            ],
            services: [
                {
                    title: "Custom ERP Development",
                    description: "Integrated enterprise resource planning systems for finance, HR, inventory, and operations management.",
                    theme: "light"
                },
                {
                    title: "SaaS Platform Engineering",
                    description: "Build multi-tenant cloud platforms with subscription management, analytics, and scalable architecture.",
                    theme: "dark"
                },
                {
                    title: "Legacy System Modernization",
                    description: "Upgrade outdated systems to modern tech stacks without data loss or business disruption.",
                    theme: "light"
                },
                {
                    title: "Business Intelligence",
                    description: "Data warehousing, ETL pipelines, and visualization dashboards for data-driven decision making.",
                    theme: "dark"
                },
                {
                    title: "Workflow Automation",
                    description: "Automate repetitive business processes to increase efficiency and reduce operational costs.",
                    theme: "light"
                },
                {
                    title: "Integration Services",
                    description: "Connect disparate systems with robust API integrations and middleware solutions.",
                    theme: "dark"
                },
                {
                    title: "Document Management",
                    description: "Secure document storage, version control, and collaboration platforms for enterprise teams.",
                    theme: "light"
                },
                {
                    title: "Supply Chain Software",
                    description: "End-to-end supply chain management solutions for inventory, logistics, and vendor management.",
                    theme: "dark"
                },
                {
                    title: "Healthcare IT Solutions",
                    description: "HIPAA-compliant software for patient management, telemedicine, and healthcare analytics.",
                    theme: "light"
                }
            ]
        },
        'digital-marketing': {
            heading: "Full-Spectrum Digital Marketing Services",
            subheading: "Data-driven marketing strategies that amplify your brand presence, drive qualified traffic, and convert prospects into loyal customers across all digital channels.",
            technologies: [
                { name: "Google Ads", icon: "/images/tech/google-ads.png" },
                { name: "Meta Ads", icon: "/images/tech/meta.png" },
                { name: "HubSpot", icon: "/images/tech/hubspot.png" },
                { name: "SEMrush", icon: "/images/tech/semrush.png" },
                { name: "Mailchimp", icon: "/images/tech/mailchimp.png" },
                { name: "Analytics", icon: "/images/tech/analytics.png" },
                { name: "Salesforce", icon: "/images/tech/salesforce.png" }
            ],
            services: [
                {
                    title: "Search Engine Optimization",
                    description: "Organic ranking strategies, technical SEO, and content optimization for sustainable traffic growth.",
                    theme: "light"
                },
                {
                    title: "Pay-Per-Click Advertising",
                    description: "Targeted Google Ads and social media campaigns optimized for maximum ROI and conversion rates.",
                    theme: "dark"
                },
                {
                    title: "Social Media Marketing",
                    description: "Build engaged communities and drive brand awareness across Facebook, Instagram, LinkedIn, and Twitter.",
                    theme: "light"
                },
                {
                    title: "Content Marketing",
                    description: "Strategic content creation that establishes thought leadership and drives organic engagement.",
                    theme: "dark"
                },
                {
                    title: "Email Marketing",
                    description: "Automated email campaigns, drip sequences, and newsletters that nurture leads and drive sales.",
                    theme: "light"
                },
                {
                    title: "Conversion Optimization",
                    description: "A/B testing, heat mapping, and user behavior analysis to maximize website conversion rates.",
                    theme: "dark"
                },
                {
                    title: "Marketing Analytics",
                    description: "Comprehensive reporting and attribution modeling to measure campaign performance and ROI.",
                    theme: "light"
                },
                {
                    title: "Influencer Marketing",
                    description: "Partner with industry influencers to amplify your brand message and reach new audiences.",
                    theme: "dark"
                },
                {
                    title: "Video Marketing",
                    description: "Engaging video content for YouTube, social media, and website that drives engagement and conversions.",
                    theme: "light"
                }
            ]
        },
        'automation-testing': {
            heading: "Comprehensive Quality Assurance & Testing Services",
            subheading: "Ensure flawless software delivery with automated testing frameworks, performance validation, and security audits that guarantee reliability and user satisfaction.",
            technologies: [
                { name: "Selenium", icon: "/images/tech/selenium.png" },
                { name: "Cypress", icon: "/images/tech/cypress.png" },
                { name: "JMeter", icon: "/images/tech/jmeter.png" },
                { name: "Postman", icon: "/images/tech/postman.png" },
                { name: "Jest", icon: "/images/tech/jest.png" },
                { name: "Appium", icon: "/images/tech/appium.png" },
                { name: "TestRail", icon: "/images/tech/testrail.png" }
            ],
            services: [
                {
                    title: "Test Automation Framework",
                    description: "Custom automation frameworks integrated with CI/CD for continuous quality validation.",
                    theme: "light"
                },
                {
                    title: "API Testing",
                    description: "Comprehensive validation of REST and GraphQL APIs for functionality, security, and performance.",
                    theme: "dark"
                },
                {
                    title: "Performance Testing",
                    description: "Load, stress, and scalability testing to ensure your application handles peak traffic seamlessly.",
                    theme: "light"
                },
                {
                    title: "Security Testing",
                    description: "Penetration testing, vulnerability scanning, and security audits to protect against cyber threats.",
                    theme: "dark"
                },
                {
                    title: "Mobile App Testing",
                    description: "Automated testing across real devices and emulators for iOS and Android applications.",
                    theme: "light"
                },
                {
                    title: "Cross-Browser Testing",
                    description: "Ensure consistent user experience across Chrome, Safari, Firefox, Edge, and mobile browsers.",
                    theme: "dark"
                },
                {
                    title: "Regression Testing",
                    description: "Automated regression suites that validate existing functionality with every new release.",
                    theme: "light"
                },
                {
                    title: "Accessibility Testing",
                    description: "WCAG compliance testing to ensure your application is accessible to all users.",
                    theme: "dark"
                },
                {
                    title: "Test Management",
                    description: "Comprehensive test planning, execution tracking, and defect management with detailed reporting.",
                    theme: "light"
                }
            ]
        },
        'ai-ml-engineer': {
            heading: "Advanced AI & Machine Learning Solutions",
            subheading: "Transform your business with intelligent systems that learn, predict, and automate—leveraging cutting-edge AI technologies to unlock new opportunities and competitive advantages.",
            technologies: [
                { name: "TensorFlow", icon: "/images/tech/tensorflow.png" },
                { name: "PyTorch", icon: "/images/tech/pytorch.png" },
                { name: "Scikit-learn", icon: "/images/tech/sklearn.png" },
                { name: "OpenCV", icon: "/images/tech/opencv.png" },
                { name: "Keras", icon: "/images/tech/keras.png" },
                { name: "Pandas", icon: "/images/tech/pandas.png" },
                { name: "Jupyter", icon: "/images/tech/jupyter.png" }
            ],
            services: [
                {
                    title: "Custom ML Models",
                    description: "Develop and train bespoke machine learning models tailored to your specific business challenges and data.",
                    theme: "light"
                },
                {
                    title: "Computer Vision",
                    description: "Image recognition, object detection, and visual inspection systems for automation and security.",
                    theme: "dark"
                },
                {
                    title: "Natural Language Processing",
                    description: "Text analysis, sentiment detection, and language understanding for intelligent content processing.",
                    theme: "light"
                },
                {
                    title: "Predictive Analytics",
                    description: "Forecast trends, demand, and risks using historical data patterns and advanced statistical models.",
                    theme: "dark"
                },
                {
                    title: "Recommendation Systems",
                    description: "Personalized product and content recommendations that increase engagement and sales.",
                    theme: "light"
                },
                {
                    title: "Anomaly Detection",
                    description: "Identify unusual patterns and potential fraud with real-time anomaly detection algorithms.",
                    theme: "dark"
                },
                {
                    title: "Deep Learning",
                    description: "Neural network architectures for complex pattern recognition and decision-making tasks.",
                    theme: "light"
                },
                {
                    title: "MLOps & Deployment",
                    description: "Production-ready ML pipelines with automated retraining, monitoring, and version control.",
                    theme: "dark"
                },
                {
                    title: "AI Strategy Consulting",
                    description: "Identify AI opportunities across your value chain and develop roadmaps for implementation.",
                    theme: "light"
                }
            ]
        },
        'ai-chatbot-development': {
            heading: "Intelligent Conversational AI Solutions",
            subheading: "Deploy AI-powered chatbots that provide human-like interactions, automate customer support, qualify leads, and deliver 24/7 engagement across all digital channels.",
            technologies: [
                { name: "Dialogflow", icon: "/images/tech/dialogflow.png" },
                { name: "Rasa", icon: "/images/tech/rasa.png" },
                { name: "OpenAI", icon: "/images/tech/openai.png" },
                { name: "Botpress", icon: "/images/tech/botpress.png" },
                { name: "WhatsApp", icon: "/images/tech/whatsapp.png" },
                { name: "Messenger", icon: "/images/tech/messenger.png" },
                { name: "Slack", icon: "/images/tech/slack.png" }
            ],
            services: [
                {
                    title: "Custom Chatbot Development",
                    description: "Tailored conversational agents designed specifically for your business processes and customer needs.",
                    theme: "light"
                },
                {
                    title: "Multi-Channel Deployment",
                    description: "Deploy bots across website, mobile apps, WhatsApp, Facebook Messenger, and Slack with unified backend.",
                    theme: "dark"
                },
                {
                    title: "Lead Generation Bots",
                    description: "Automated qualification and nurturing of prospects with intelligent conversation flows.",
                    theme: "light"
                },
                {
                    title: "Customer Support Automation",
                    description: "Handle FAQs, troubleshooting, and ticket creation with AI-powered support agents.",
                    theme: "dark"
                },
                {
                    title: "Voice Assistants",
                    description: "Develop voice-enabled AI assistants for hands-free interaction and accessibility.",
                    theme: "light"
                },
                {
                    title: "Sentiment Analysis",
                    description: "Detect customer emotions and escalate to human agents when empathy is needed.",
                    theme: "dark"
                },
                {
                    title: "CRM Integration",
                    description: "Seamlessly connect chatbots with Salesforce, HubSpot, and other CRM systems for data sync.",
                    theme: "light"
                },
                {
                    title: "Analytics & Insights",
                    description: "Track conversation metrics, user satisfaction, and identify improvement opportunities.",
                    theme: "dark"
                },
                {
                    title: "Multilingual Support",
                    description: "Build chatbots that understand and respond in multiple languages for global reach.",
                    theme: "light"
                }
            ]
        },
        'ui-ux-designer': {
            heading: "Human-Centered Design Excellence",
            subheading: "Create delightful digital experiences through user research, intuitive interfaces, and beautiful aesthetics that drive engagement, satisfaction, and business results.",
            technologies: [
                { name: "Figma", icon: "/images/tech/figma.png" },
                { name: "Adobe XD", icon: "/images/tech/xd.png" },
                { name: "Sketch", icon: "/images/tech/sketch.png" },
                { name: "InVision", icon: "/images/tech/invision.png" },
                { name: "Framer", icon: "/images/tech/framer.png" },
                { name: "Miro", icon: "/images/tech/miro.png" },
                { name: "Zeplin", icon: "/images/tech/zeplin.png" }
            ],
            services: [
                {
                    title: "User Research & Testing",
                    description: "In-depth user interviews, surveys, and usability testing to understand real user needs and behaviors.",
                    theme: "light"
                },
                {
                    title: "Information Architecture",
                    description: "Structure content and navigation for optimal findability and intuitive user journeys.",
                    theme: "dark"
                },
                {
                    title: "Wireframing & Prototyping",
                    description: "Create interactive prototypes to validate concepts and gather feedback before development.",
                    theme: "light"
                },
                {
                    title: "Visual Design",
                    description: "Craft beautiful, on-brand interfaces with modern aesthetics and attention to detail.",
                    theme: "dark"
                },
                {
                    title: "Design Systems",
                    description: "Build scalable component libraries and style guides for consistent cross-platform experiences.",
                    theme: "light"
                },
                {
                    title: "Mobile App Design",
                    description: "Native iOS and Android design following platform-specific guidelines and best practices.",
                    theme: "dark"
                },
                {
                    title: "Accessibility Design",
                    description: "Ensure WCAG compliance and inclusive design for users of all abilities.",
                    theme: "light"
                },
                {
                    title: "Motion Design",
                    description: "Micro-interactions and animations that enhance usability and delight users.",
                    theme: "dark"
                },
                {
                    title: "Design Audits",
                    description: "Comprehensive evaluation of existing products to identify UX issues and improvement opportunities.",
                    theme: "light"
                }
            ]
        }
    };

    const data = capabilitiesData[serviceId];

    if (!data) return null;

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                            {data.heading}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {data.subheading}
                        </p>
                    </div>

                    {/* Technology Icons */}
                    {data.technologies && (
                        <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                                {data.technologies.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center gap-3 group cursor-pointer"
                                        data-aos="zoom-in"
                                        data-aos-delay={idx * 50}
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                                            <span className="text-3xl md:text-4xl font-bold text-secondary">
                                                {tech.name.charAt(0)}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-secondary transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.services.map((service, idx) => (
                            <div
                                key={idx}
                                className={`
                                    group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2
                                    ${service.theme === 'dark'
                                        ? 'bg-gradient-to-br from-primary to-primary/90 text-white hover:shadow-2xl hover:shadow-primary/20'
                                        : 'bg-white text-gray-800 border border-gray-200 hover:border-secondary/30 hover:shadow-xl'
                                    }
                                `}
                                data-aos="fade-up"
                                data-aos-delay={idx * 50}
                            >
                                <div className="mb-4">
                                    <CheckCircle2
                                        className={`w-8 h-8 ${service.theme === 'dark' ? 'text-secondary' : 'text-secondary'}`}
                                    />
                                </div>
                                <h3 className={`text-xl font-bold mb-4 ${service.theme === 'dark' ? 'text-white' : 'text-primary'}`}>
                                    {service.title}
                                </h3>
                                <p className={`text-base leading-relaxed ${service.theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceCapabilities;
