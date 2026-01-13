import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Rocket, Globe, Users, Zap, Award, Server, Code, Lock, Layers, Target, RefreshCw, Briefcase, Database, Cpu, TrendingUp, CheckCircle, Smartphone } from 'lucide-react';
import heroImage from '../assets/why_thynktech_hero.png';
import cultureCollaboration from '../assets/culture_collaboration.png';
import cultureCoding from '../assets/culture_coding.png';
import cultureMeeting from '../assets/culture_meeting.png';
import cultureInnovation from '../assets/culture_innovation.png';

const WhyThynkTech = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const differentiators = [
        {
            title: "Product-Based Mindset",
            desc: "We don't just write code; we build products. We take ownership of the lifecycle, ensuring scalability and market fit.",
            icon: Rocket
        },
        {
            title: "Scalable Architecture",
            desc: "Our systems are designed to handle millions of users, ensuring high availability and seamless performance as you grow.",
            icon: Server
        },
        {
            title: "Security-First Approach",
            desc: "Enterprise-grade security is baked into every layer of our development process, protecting your data and assets.",
            icon: ShieldCheck
        },
        {
            title: "Client-Centric Execution",
            desc: "We align our goals with yours. Our agile processes ensure transparency, adaptability, and rapid time-to-market.",
            icon: Users
        }
    ];

    const stats = [
        { label: "Happy Employees", value: "700+" },
        { label: "Running Products", value: "29+" },
        { label: "Quality Awards", value: "50+" },
        { label: "Years of Excellence", value: "15+" }
    ];

    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Why ThynkTech Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00152e]/90 to-[#002B5C]/80" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <div className="inline-block px-4 py-1 mb-6 border border-blue-400/50 rounded-full bg-blue-500/10 backdrop-blur-sm">
                        <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">Our Promise</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Why ThynkTech India
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Your strategic partner for scalable innovation. We bridge the gap between complex enterprise needs and agile digital execution.
                    </p>
                </div>
            </section>

            {/* Purpose & Vision */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-8">Driven by Purpose, defined by Excellence</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            ThynkTech India exists to empower businesses with technology that lasts. In an era of rapid digital disruption, we provide the stability and foresight needed to navigate the future.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our vision is simple: to be the most trusted long-term technology partner for enterprises and startups alike. We believe in building relationships as robust as our code, grounded in integrity, innovation, and shared success.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">The ThynkTech Difference</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We bring a unique blend of consultation, engineering, and sustained support to every partnership.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#3498DB]">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#002B5C] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Stats */}
            <section className="py-24 bg-[#002B5C] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trust that speaks for itself</h2>
                            <p className="text-blue-100 text-lg leading-relaxed mb-8">
                                With over a decade of experience, we have transformed ideas into global solutions. Our track record reflects our commitment to quality, delivery, and the people who make it happen.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-blue-300">
                                    <Globe size={18} /> Global Presence
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-blue-300">
                                    <Award size={18} /> ISO Certified
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                                    <h4 className="text-4xl md:text-5xl font-bold text-[#3498DB] mb-2">{stat.value}</h4>
                                    <p className="text-sm font-medium text-white/80 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">Our Core Capabilities</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">End-to-end technology services tailored for modern enterprises.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {["Custom Software Development", "AI & Machine Learning Solutions", "Cloud & DevOps Engineering", "Enterprise Mobile Apps", "Data Analytics & BI", "Digital Transformation", "UI/UX & Product Design", "Legacy Modernization"].map((cap, idx) => (
                            <span key={idx} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-[#3498DB] hover:text-white hover:border-[#3498DB] transition-all duration-300 cursor-default">
                                {cap}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture & Innovation */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img
                                        src={cultureCollaboration}
                                        alt="Team Collaboration"
                                        className="h-48 w-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                                    />
                                    <img
                                        src={cultureCoding}
                                        alt="Engineering Excellence"
                                        className="h-64 w-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="space-y-4 pt-12">
                                    <img
                                        src={cultureMeeting}
                                        alt="Inclusive Culture"
                                        className="h-64 w-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                                    />
                                    <img
                                        src={cultureInnovation}
                                        alt="Innovation Hub"
                                        className="h-48 w-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="flex items-center gap-2 text-[#3498DB] font-bold mb-4 uppercase tracking-wider">
                                <Zap size={20} /> Innovation & Culture
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">Built on Curiosity. <br />Powered by People.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                At ThynkTech, we foster a culture of engineering excellence and ownership. Our teams are encouraged to explore new technologies, challenge the status quo, and drive innovation that matters.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Continuous R&D and Upskilling",
                                    "Open Collaboration & Knowledge Sharing",
                                    "Agile & Adaptive Workflows",
                                    "Focus on Deep Tech & Future Trends"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[#3498DB]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW EXTENDED SECTIONS */}

            {/* Delivery & Governance Model */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm">Process</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">Delivery & Governance</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Predictability is the hallmark of an enterprise partner. Our governance framework ensures agility without chaos, providing full visibility into every sprint and milestone.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Agile at Scale",
                                desc: "We utilize Scaled Agile principles to coordinate multiple teams, ensuring alignment with complex business goals while maintaining rapid iteration cycles.",
                                icon: RefreshCw
                            },
                            {
                                title: "Transparent Governance",
                                desc: "Real-time dashboards, bi-weekly steering committees, and clear escalation matrices ensure you are never in the dark about project health.",
                                icon: Layers
                            },
                            {
                                title: "Rigorous QA",
                                desc: "Shift-left testing strategies, automated regression suites, and dedicated QA environments guarantee that quality is engineered in, not tested out.",
                                icon: CheckCircle
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#3498DB]">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#002B5C] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Excellence */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm">Technology</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-6">Engineering Excellence at Scale</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We pride ourselves on writing clean, maintainable, and self-documenting code. Our engineering culture emphasizes craftsmanship, significantly reducing technical debt and long-term ownership costs.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Cloud-Native Architecture", desc: "Microservices-ready, containerized, and serverless solutions designed for infinite scalability." },
                                    { title: "DevOps & CI/CD", desc: "Automated pipelines ensuring one-click deployments and zero-downtime releases." },
                                    { title: "Performance First", desc: "Optimization is not an afterthought; we design for sub-second latency and high throughput from Day 0." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#3498DB]">
                                            <Code size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#002B5C]">{item.title}</h4>
                                            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                            {/* Visual Representation of Tech Stack */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <Database className="text-[#3498DB] mb-3" size={32} />
                                    <h4 className="font-bold text-gray-900">Data & Storage</h4>
                                    <p className="text-xs text-gray-400 mt-2">PostgreSQL, MongoDB, Redis, Snowflake</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">
                                    <Server className="text-[#E74C3C] mb-3" size={32} />
                                    <h4 className="font-bold text-gray-900">Backend</h4>
                                    <p className="text-xs text-gray-400 mt-2">Node.js, Python, Go, Java Spring Boot</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <Smartphone className="text-[#3498DB] mb-3" size={32} />
                                    <h4 className="font-bold text-gray-900">Frontend</h4>
                                    <p className="text-xs text-gray-400 mt-2">React, Next.js, Flutter, TypeScript</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">
                                    <Cpu className="text-indigo-500 mb-3" size={32} />
                                    <h4 className="font-bold text-gray-900">AI & Cloud</h4>
                                    <p className="text-xs text-gray-400 mt-2">AWS, Azure, TensorFlow, OpenAI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Reliability */}
            <section className="py-24 bg-[#0A192F] text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncompromised Security & Compliance</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                In a data-driven world, trust is non-negotiable. We adhere to the strictest security standards to protect your intellectual property and user data.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                {["ISO 27001", "GDPR Compliant", "SOC 2 Ready", "OWASP Standards"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <Lock className="text-[#3498DB] mb-4" size={28} />
                                    <h4 className="font-bold text-lg mb-2">Secure Development</h4>
                                    <p className="text-sm text-gray-400">Security baked into the SDLC with automated vulnerability scanning.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <ShieldCheck className="text-[#3498DB] mb-4" size={28} />
                                    <h4 className="font-bold text-lg mb-2">Data Privacy</h4>
                                    <p className="text-sm text-gray-400">End-to-end encryption and strict access controls for sensitive data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">Deep Domain Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We bring sector-specific knowledge ensuring our solutions solve real business problems, not just technical ones.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "FinTech & Banking", icon: TrendingUp },
                            { name: "Healthcare & Life Sciences", icon: Award },
                            { name: "Retail & E-Commerce", icon: Briefcase },
                            { name: "Real Estate & PropTech", icon: Globe },
                            { name: "Education & EdTech", icon: Rocket },
                            { name: "Logistics & Supply Chain", icon: Zap },
                            { name: "Media & Entertainment", icon: Users },
                            { name: "SaaS & Startups", icon: Code },
                        ].map((industry, n) => (
                            <div key={n} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 group cursor-pointer">
                                <industry.icon className="text-gray-400 group-hover:text-[#3498DB] mb-4 transition-colors" size={32} />
                                <span className="font-bold text-gray-700 group-hover:text-[#002B5C] text-center">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Roadmap */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 relative order-2 md:order-1">
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                            <div className="relative z-10 grid gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-l-4 border-[#3498DB]">
                                    <h4 className="font-bold text-lg text-[#002B5C] mb-1">Today</h4>
                                    <p className="text-sm text-gray-600">Modernizing legacy stacks & Cloud Migration</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-l-4 border-indigo-500 ml-8">
                                    <h4 className="font-bold text-lg text-[#002B5C] mb-1">Tomorrow</h4>
                                    <p className="text-sm text-gray-600">AI-Driven Analytics & Intelligent Automation</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-l-4 border-purple-500 ml-16">
                                    <h4 className="font-bold text-lg text-[#002B5C] mb-1">Future</h4>
                                    <p className="text-sm text-gray-600">Quantum-ready Security & Autonomous Systems</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm">R&D</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-6">Future-Ready Roadmap</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Technology evolves faster than ever. Our dedicated R&D labs constantly explore emerging trends—from Generative AI to Edge Computing—so you don't play catch-up, you lead.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We help you distinguish between hype and value, integrating innovations that drive tangible ROI for your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Long-Term Partnership (Client Success) */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="w-16 h-16 bg-[#002B5C] rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-900/20">
                            <Target size={30} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002B5C] mb-6">Client Success is Our North Star</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                            "We measure our success not by the code we ship, but by the business outcomes you achieve. Whether you are a startup scaling to your first million users or an enterprise restructuring for efficiency, we are with you for every step of the journey."
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 text-left">
                            <div className="bg-white px-8 py-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                                <h4 className="font-bold text-[#002B5C] mb-2 text-lg">Strategic Alignment</h4>
                                <p className="text-sm text-gray-500">We invest time to understand your market, competitors, and 5-year vision.</p>
                            </div>
                            <div className="bg-white px-8 py-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                                <h4 className="font-bold text-[#002B5C] mb-2 text-lg">Shared Risk</h4>
                                <p className="text-sm text-gray-500">We take ownership of delivery risks so you can focus on business growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer which includes GlobalCTA automatically */}
            <Footer />
        </div>
    );
};

export default WhyThynkTech;
