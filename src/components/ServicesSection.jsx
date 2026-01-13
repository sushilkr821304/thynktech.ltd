import React from 'react';
import { Globe, Smartphone, Cloud, Code, Megaphone, Settings, ArrowRight, Brain, MessageSquare, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, delay, id }) => {
    return (
        <Link
            to={`/services/${id}`}
            className="group relative h-full min-h-[380px] bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100/50 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,43,92,0.1)] hover:-translate-y-2 block"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            {/* Top Accent Line / Glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent opacity-20 group-hover:opacity-100 transition-all duration-500 z-20 group-hover:shadow-[0_0_15px_rgba(231,76,60,0.4)]"></div>

            {/* 1. Background Overlay (Refined Animation) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0">
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl transform group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700"></div>
                <div className="absolute bottom-[-50px] left-[-30px] w-48 h-48 bg-white/10 rounded-full blur-3xl transform group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
            </div>

            {/* 2. Content Container */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">

                {/* Icon Wrapper - Tinted Gradient */}
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 text-secondary transition-all duration-500 group-hover:bg-white/15 group-hover:text-white group-hover:backdrop-blur-sm shadow-sm border border-primary/5 group-hover:border-white/10 group-hover:scale-110">
                    <Icon size={42} strokeWidth={1.5} />
                </div>

                {/* Title - Strong Primary */}
                <h3 className="text-2xl font-bold text-primary mb-4 transition-colors duration-500 group-hover:text-white tracking-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-500 group-hover:text-white/90">
                    {description}
                </p>

                {/* Button */}
                <span className="mt-auto inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-primary/5 text-primary font-bold text-sm transition-all duration-500 group-hover:bg-white group-hover:text-primary shadow-sm group-hover:shadow-lg transform active:scale-95 border border-primary/10 group-hover:border-transparent">
                    Learn more
                    <ArrowRight size={18} />
                </span>
            </div>
        </Link>
    );
};

const ServicesSection = () => {
    const services = [
        {
            id: 'web-design-development',
            icon: Globe,
            title: "Web Design & Development",
            description: "Develop websites making the best use of responsive design with bootstrap & special effects. The best Web design and development company in Pune!"
        },
        {
            id: 'mobile-app-development',
            icon: Smartphone,
            title: "Mobile App Development",
            description: "Design and develop high-performance native iOS and Android applications. We deliver secure, scalable, and user-centric mobile solutions tailored for enterprise growth."
        },
        {
            id: 'devops-engineering',
            icon: Cloud,
            title: "DevOps Engineering",
            description: "Streamline your software delivery with enterprise-grade DevOps. We implement robust CI/CD pipelines and automated cloud infrastructure for maximum efficiency and scalability."
        },
        {
            id: 'software-services',
            icon: Code,
            title: "Software Services",
            description: "Develop medium to large complexity end-to-end Web, Desktop, and Mobile applications. The most secure mobile app development company in India!"
        },
        {
            id: 'digital-marketing',
            icon: Megaphone,
            title: "Digital Marketing",
            description: "Best in class Digital Marketing service, to make your brands and business reach your target audience. Use of latest trends and strategies to keep your business on the top!"
        },
        {
            id: 'automation-testing',
            icon: Settings,
            title: "Automation Testing",
            description: "All products tested using automation tools. To aim ZERO errors and to keep your IT products lasting longer with easy upgrades to save your cost and efforts!"
        },
        {
            id: 'ai-ml-engineer',
            icon: Brain,
            title: "AI / ML Engineering",
            description: "Design and develop intelligent AI and Machine Learning solutions that automate processes, analyze large datasets, and deliver predictive insights. Expertise includes model development, training, deployment, and building scalable AI systems for real-world business applications."
        },
        {
            id: 'ai-chatbot-development',
            icon: MessageSquare,
            title: "AI Chatbot Development",
            description: "Build smart, secure, and scalable AI-powered chatbots for websites, mobile applications, and enterprise platforms. Enable automated customer support, lead generation, and real-time user engagement using NLP and conversational AI technologies."
        },
        {
            id: 'ui-ux-designer',
            icon: Palette,
            title: "UI / UX Design",
            description: "Create intuitive, user-centric, and visually engaging digital experiences. Focus on wireframing, prototyping, usability testing, and modern design systems to ensure seamless user journeys across web and mobile platforms."
        }
    ];

    return (
        <section id="services" className="pt-0 pb-24 bg-gradient-to-b from-[rgba(0,43,92,0.12)] to-[rgba(0,43,92,0.18)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative inline-block">
                        Services
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                        ThynkTech India: Empowering Businesses with Innovative Software Products, Scalable Solutions, and Digital Excellence   </p>
                </div>

                {/* Grid - Strictly enforcing equal height cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 auto-rows-fr">
                    {services.map((service, index) => (
                        <div key={index} className="h-full">
                            <ServiceCard
                                {...service}
                                delay={index * 100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
