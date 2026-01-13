import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceOverview = ({ serviceId }) => {
    // Content data for each service
    const overviewData = {
        'mobile-app-development': {
            heading: "IT App Development Services",
            description: "We specialize in developing cutting-edge IT applications that enhance efficiency, security, and digital transformation. Our expert team leverages the latest technologies to create scalable, high-performance solutions tailored to your business needs, ensuring seamless integration and adaptability in a rapidly evolving tech landscape.",
            points: [
                "Cross-platform Development",
                "Mobile App Design",
                "App Maintenance and Support",
                "App Optimization",
                "Third-party Integration",
                "Quality Assurance"
            ],
            image: "/images/services/app-dev.png"
        },
        'web-design-development': {
            heading: "Web Design & Development Services",
            description: "We craft visually stunning and highly functional websites that drive digital growth. Our full-stack development team utilizes modern frameworks to build secure, responsive, and SEO-optimized web solutions that align perfectly with your brand identity and business goals.",
            points: [
                "Custom Website Design",
                "E-Commerce Solutions",
                "CMS Development",
                "Web App Development",
                "API Integration",
                "Performance Optimization"
            ],
            image: "/images/what-we-do/design.png"
        },
        'devops-engineering': {
            heading: "DevOps Services",
            description: "Streamline your software delivery with enterprise-grade DevOps practices. Our experts automate your infrastructure, streamline deployment pipelines, and ensure high availability, security, and scalability for your critical business applications.",
            points: [
                "CI/CD Pipeline Automation",
                "Cloud Infrastructure Management",
                "Containerization & Orchestration",
                "Infrastructure as Code",
                "Monitoring & Logging",
                "DevSecOps Implementation"
            ],
            image: "/images/services/devops.png"
        },
        'software-services': {
            heading: "IT Professional Services",
            description: "We provide comprehensive technology consulting and strategies designed to transform your business operations. Our dedicated team applies industry best practices to deliver robust, scalable, and secure results that drive measurable value.",
            points: [
                "Strategic IT Consulting",
                "Custom Solution Architecture",
                "Enterprise System Integration",
                "Scalable Deployment",
                "Maintenance & Support",
                "Technical Audits"
            ],
            image: "/images/services/professional.png"
        },
        'financial-app-development': {
            heading: "Financial App Development",
            description: "Empowering the fintech revolution with secure, compliant, and high-performance financial applications. We build digital banking solutions, payment gateways, and investment platforms that deliver seamless user experiences while adhering to strict regulatory standards.",
            points: [
                "Digital Banking Solutions",
                "Secure Payment Gateways",
                "Investment & Trading Platforms",
                "Blockchain & Crypto Integration",
                "Regulatory Compliance (GDPR/PCI)",
                "Real-time Financial Analytics"
            ],
            image: "/images/services/finance.png"
        },
        'real-estate-app-development': {
            heading: "Real Estate App Development",
            description: "Transforming the property market with innovative real estate solutions. From property listings and virtual tours to property management systems, we build apps that connect buyers, sellers, and agents seamlessly.",
            points: [
                "Property Listing Portals",
                "Virtual Tours & AR/VR",
                "Property Management Systems",
                "Agent & Broker Dashboards",
                "Smart Home Integration",
                "Mortgage Calculators"
            ],
            image: "/images/services/real-estate.png"
        },
        'education-app-development': {
            heading: "Education App Development",
            description: "Revolutionizing learning with engaging educational technology. We develop e-learning platforms, LMS, and virtual classroom apps that make education accessible, interactive, and effective for students and institutions.",
            points: [
                "E-Learning Platforms",
                "Learning Management Systems (LMS)",
                "Virtual Classroom Solutions",
                "Student Assessment Tools",
                "Gamified Learning Apps",
                "Institutional Management ERP"
            ],
            image: "/images/services/education.png"
        },
        // Fallback for other services
        'default': {
            heading: "IT Professional Services",
            description: "We provide comprehensive technology solutions designed to transform your business operations. Our dedicated team applies industry best practices and cutting-edge innovations to deliver robust, scalable, and secure results that drive measurable value.",
            points: [
                "Strategic IT Consulting",
                "Custom Solution Architecture",
                "Enterprise System Integration",
                "Scalable Deployment",
                "Maintenance & Support",
                "Technical Audits"
            ],
            image: "/images/services/professional.png"
        }
    };

    // Get specific data or fallback to default if key doesn't exist (or merge logic)
    const data = overviewData[serviceId] || overviewData['default'];

    // Default to group image if specific image not found/defined
    const displayImage = data.image || "/images/group.jpeg";

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Professional Team Image */}
                        <div className="relative group" data-aos="fade-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <img
                                    src={displayImage}
                                    alt="ThynkTech Team Working"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Decorative dots pattern - matching the reference style */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 z-[-1] opacity-30">
                                <div className="grid grid-cols-6 gap-1">
                                    {[...Array(36)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-secondary rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex flex-col justify-center" data-aos="fade-left">
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                                {data.heading}
                            </h2>

                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                {data.description}
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {data.points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-4 group/point">
                                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 group-hover/point:scale-110 transition-transform" />
                                        <span className="text-lg font-medium text-gray-700 group-hover/point:text-primary transition-colors">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
