import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../data/teamData';
import {
    Cpu, Code, Layout, Server, Layers, Smartphone, PenTool,
    ChevronRight, Terminal, Globe, Settings, CheckCircle
} from 'lucide-react';

const EngineersSection = () => {
    // Categories to display
    const categories = [
        { id: 'frontend', label: 'Frontend Developers', icon: Layout, desc: 'Interactive UI' },
        { id: 'backend', label: 'Backend Developers', icon: Server, desc: 'Scalable Infrastructure' },
        { id: 'fullstack', label: 'Full-stack Developers', icon: Layers, desc: 'End-to-End Solutions' },
        { id: 'mobile', label: 'Mobile App Developers', icon: Smartphone, desc: 'iOS & Android' },
        { id: 'devops', label: 'DevOps Engineers', icon: Settings, desc: 'CI/CD & Cloud' },
        { id: 'qa', label: 'QA / Testers', icon: CheckCircle, desc: 'Quality Assurance' },
        { id: 'ai', label: 'AI / ML Engineers', icon: Cpu, desc: 'Intelligence & Automation' },
        { id: 'uiux', label: 'UI / UX Designers', icon: PenTool, desc: 'User Experience' },
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0].id);

    // Get current data from the new teamData file
    const currentTeam = teamData[activeCategory] || [];

    // Intro text map (since we removed hireData dependency for simplicity and speed)
    const categoryDetails = {
        frontend: {
            name: "Frontend Developers",
            intro: "Hire top-tier frontend developers to translate complex designs into interactive, pixel-perfect user experiences.",
            expertise: { "Tech Stack": "React, Vue, Angular", "Styling": "Tailwind, SCSS", "Performance": "Core Web Vitals", "Testing": "Jest, Cypress" }
        },
        backend: {
            name: "Backend Developers",
            intro: "Architect solid, secure, and scalable server-side systems that power your digital infrastructure.",
            expertise: { "Languages": "Node.js, Python, Java", "Database": "PostgreSQL, Mongo", "API": "REST, GraphQL", "Cloud": "AWS, Azure" }
        },
        fullstack: {
            name: "Full Stack Developers",
            intro: "Versatile experts capable of handling both client-side and server-side challenges for end-to-end solutions.",
            expertise: { "Frontend": "React, Next.js", "Backend": "Node, Express", "DB": "SQL/NoSQL", "DevOps": "Docker, CI/CD" }
        },
        mobile: {
            name: "Mobile App Developers",
            intro: "Build high-performance native and cross-platform mobile applications for iOS and Android.",
            expertise: { "Cross-Platform": "React Native, Flutter", "Native": "Swift, Kotlin", "State": "Redux, MobX", "Store": "App Store Deploy" }
        },
        devops: {
            name: "DevOps Engineers",
            intro: "Streamline your development lifecycle with automated CI/CD pipelines and robust cloud infrastructure.",
            expertise: { "Cloud": "AWS, GCP, Azure", "IaC": "Terraform", "Containers": "Docker, K8s", "CI/CD": "Jenkins, Actions" }
        },
        qa: {
            name: "QA Engineers",
            intro: "Ensure pixel-perfect quality and reliability with comprehensive manual and automated testing strategies.",
            expertise: { "Automation": "Selenium, Cypress", "Manual": "Black Box testing", "API": "Postman", "Load": "JMeter" }
        },
        ai: {
            name: "AI / ML Developers",
            intro: "Leverage the power of Artificial Intelligence to build smart, predictive, and analytical solutions.",
            expertise: { "ML": "TensorFlow, PyTorch", "Data": "Pandas, NumPy", "NLP": "OpenAI, Spacy", "Vision": "OpenCV" }
        },
        uiux: {
            name: "UI / UX Designers",
            intro: "Craft intuitive and engaging user journeys with empathy-driven design principles.",
            expertise: { "Design": "Figma, XD", "Prototyping": "InVision", "Research": "User Testing", "System": "Atomic Design" }
        }
    };

    const currentDetails = categoryDetails[activeCategory] || categoryDetails.frontend;

    // Animation Keyframes Injection
    const styleSheet = `
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
    `;

    // Duplicate network data for seamless infinite loop (make it at least 2x or 3x depending on length)
    // If list is small, duplicate more to ensure smooth scroll
    const carouselItems = currentTeam.length > 0
        ? [...currentTeam, ...currentTeam, ...currentTeam, ...currentTeam]
        : [];

    return (
        <section id="engineers" className="py-20 bg-white relative overflow-hidden">
            {/* Inject detailed styles for animation */}
            <style>{styleSheet}</style>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* 1. Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#002B5C] mb-4 tracking-tight">
                        Our Software Engineering Team
                    </h2>
                    <div className="w-24 h-1.5 bg-[#3498DB] mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed">
                        Dedicated developers building tomorrow's solutions today with cutting-edge technologies and innovation.
                        Our diverse team of experts delivers enterprise-grade software tailored to your business goals.
                    </p>
                </div>

                {/* 2. Role Categories Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                                    flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 group
                                    ${isActive
                                        ? 'bg-[#002B5C] border-[#002B5C] text-white shadow-xl scale-105'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-[#3498DB]/50 hover:shadow-lg hover:-translate-y-1'
                                    }
                                `}
                            >
                                <div className={`
                                    p-3 rounded-full mb-3 transition-colors duration-300
                                    ${isActive ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-[#3498DB]/10 group-hover:text-[#3498DB]'}
                                `}>
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className={`text-sm font-bold text-center leading-tight mb-1 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                                    {cat.label}
                                </span>
                                <span className={`text-[10px] font-medium text-center uppercase tracking-wider ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                                    {cat.desc}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* 3. Dynamic Content Area */}
                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left: Info & Expertise */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="animate-slide-in">
                                <h3 className="text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3">
                                    {currentDetails.name}
                                    <span className="text-sm font-semibold text-[#3498DB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                        Expert Team
                                    </span>
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {currentDetails.intro}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Terminal size={14} />
                                    Core Competencies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(currentDetails.expertise || {}).map(([key, value], idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:border-[#3498DB] hover:text-[#3498DB] transition-colors cursor-default"
                                            title={value}
                                        >
                                            {key}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link
                                    // Mapping simplified keys back to URL params if necessary
                                    to={`/engineering/${activeCategory === 'mobile' ? 'app-developers' :
                                        activeCategory === 'qa' ? 'qa-engineers' :
                                            activeCategory === 'ai' ? 'ai-developers' :
                                                activeCategory === 'uiux' ? 'ui-ux-designers' :
                                                    activeCategory + '-developers'
                                        }`}
                                    className="group inline-flex items-center gap-2 text-[#002B5C] font-bold text-lg hover:text-[#3498DB] transition-colors"
                                >
                                    View Detailed Tech Stack
                                    <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: Team Grid / Carousel */}
                        <div className="lg:col-span-8 overflow-hidden">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Globe size={14} />
                                Meet the Experts
                            </h4>

                            {currentTeam.length > 0 ? (
                                <div className="relative w-full overflow-hidden mask-gradient-sides">
                                    {/* Gradient Masks for fading effect */}
                                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                                    {/* Scroll Track */}
                                    <div
                                        key={activeCategory} // Force re-render on reset to restart animation
                                        className="flex animate-scroll w-max gap-6"
                                    >
                                        {carouselItems.map((member, index) => (
                                            <div
                                                key={`${index}-${member.id}`}
                                                className="group/card w-44 md:w-48 flex-shrink-0 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                                            >
                                                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-gray-100">

                                                    {/* UPDATED IMAGE LOGIC */}
                                                    <img
                                                        src={`/images/team/${activeCategory}/${member.image}`}
                                                        alt={member.name}
                                                        onError={(e) => { e.target.src = "/images/team/default.png"; }}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                        <span className="text-white text-xs font-semibold">View Profile</span>
                                                    </div>
                                                </div>
                                                <div className="text-center px-1">
                                                    <h5 className="font-bold text-gray-900 text-sm mb-1 group-hover/card:text-[#3498DB] transition-colors line-clamp-1">
                                                        {member.name}
                                                    </h5>
                                                    <p className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold line-clamp-1">
                                                        {member.designation}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-400 italic bg-white rounded-2xl border border-dashed border-gray-200">
                                    No team members openly listed for this category. Contact us for private profiles.
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngineersSection;
